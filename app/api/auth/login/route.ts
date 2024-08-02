import { compare, genSalt, hash } from "bcryptjs";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { db } from "@/db";
import { and, eq } from "drizzle-orm";
import { users } from "@/db/schema";
import { cookies } from "next/headers";

const signinSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const POST = async (req: Request) => {
  try {
    const { email, password } = signinSchema.parse(await req.json());

    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      return Response.json({ message: "Invalid Credentials" }, { status: 401 });
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("Secret not found");
    }
    const token = jwt.sign(
      {
        userId: user.id,
        name: user.name,
        email: user.email,
      },
      secret,
      { expiresIn: "24h" },
    );
    cookies().set("access_token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      secure: true,
    });
    return Response.json(
      { message: "Logged in successfully" },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const flattenedError = error.flatten();
      return Response.json(flattenedError, { status: 400 });
    }
    return Response.json(
      { message: error?.message ?? "Something went wrong" },
      { status: 500 },
    );
  }
};

async function hashPassword(password: string) {
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
}
