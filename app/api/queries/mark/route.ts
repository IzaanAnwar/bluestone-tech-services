import { db } from "@/db/";
import { queries } from "@/db/schema";
import { getUser } from "@/lib/getuser";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";
import { z } from "zod";

export const POST = async (req: NextRequest) => {
  try {
    const user = await getUser();

    if (!user) {
      return Response.json({ message: "User not logged in" }, { status: 401 });
    }

    const body = await req.json();
    if (!body?.id) {
      return Response.json({ message: "No id provided" }, { status: 400 });
    }
    const { id } = z.object({ id: z.string().uuid() }).parse(body);
    // @ts-ignore
    await db.update(queries).set({ status: "seen" }).where(eq(queries.id, id));
    revalidatePath("/admin/dashboard");
    return Response.json(
      { message: "Query marked as read successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
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
