import { db } from "@/db";
import { queries } from "@/db/schema";
import { getUser } from "@/lib/getuser";
import { sendMail } from "@/lib/sendMail";
import { desc, eq } from "drizzle-orm";
import { NextRequest } from "next/server";
import { z } from "zod";

const sendQuerySchema = z.object({
  email: z.string().email(),
  message: z.string(),
  name: z.string(),
});
export const POST = async (req: NextRequest) => {
  try {
    const { email, message, name } = sendQuerySchema.parse(await req.json());

    await sendMail({
      to: email,
      body: `<p style="font-size: 16px; font-family: Arial, Helvetica, sans-serif; color: #000000; line-height: 24px;">
      Hello <strong>${name},</strong><br>
      <br>
      <p style="font-size: 16px; font-family: Arial, Helvetica, sans-serif; color: #000000; line-height: 24px;">
    Thanks for contacting us. We will get back to you as soon as possible.
      </p>
      </p>`,
    });

    await db.insert(queries).values({
      query: message,
      email,
      username: name,
    });
    return Response.json(
      { message: "Query sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const flattenedError = error.flatten();
      return Response.json(flattenedError, { status: 400 });
    }
    return Response.json(
      { message: error?.message ?? "Something went wrong" },
      {
        status: 500,
      },
    );
  }
};

/**
 *
 *
 * @param req NextRequest @req.parmas queryId: string | tabs: string
 * @returns all the queries | a specific query depending on the queryId | all the queries with a specific status
 */
export const GET = async (req: NextRequest) => {
  try {
    const params = (await req.nextUrl.searchParams.get("tabs")) as
      | "seen"
      | "unseen"
      | "replied"
      | "all";
    const queryId = await req.nextUrl.searchParams.get("queryId");

    if (queryId) {
      const data = await db.query.queries.findFirst({
        where: eq(queries.id, queryId),
      });
      return Response.json(data, { status: 200 });
    }
    if (params === "all") {
      const data = await db.select().from(queries);
      return Response.json(data, { status: 200 });
    }
    const data = await db
      .select()
      .from(queries)
      .where(eq(queries.status, params))
      .orderBy(desc(queries.updatedAt));
    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: error?.message ?? "Something went wrong" },
      {
        status: 500,
      },
    );
  }
};
