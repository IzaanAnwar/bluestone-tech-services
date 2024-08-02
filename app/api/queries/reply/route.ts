import { db } from "@/db";
import { queries, sentEmails } from "@/db/schema";
import { sendMail } from "@/lib/sendMail";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";
import { z } from "zod";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const { message, queryId } = z
      .object({
        message: z.string(),
        queryId: z.string(),
      })
      .parse(body);
    const requestedQuery = await db.query.queries.findFirst({
      where: eq(queries.id, queryId),
    });
    if (!requestedQuery) {
      return Response.json({ message: "Query not found" }, { status: 404 });
    }
    const response = await sendMail({
      body: `<p>Hi ${message}</p>`,
      proffName: "This is American Express",
      to: requestedQuery.email,
    });
    console.log({ response });

    await db
      .update(queries)
      .set({
        status: "replied",
        updatedAt: new Date(),
      })
      .where(eq(queries.id, queryId));

    await db.insert(sentEmails).values({
      to: requestedQuery.email,
      message: message,
    });
    return Response.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error({ error });
    return Response.json(
      { message: error?.message ?? "Something went wrong" },
      {
        status: 500,
      },
    );
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const queryId = z
      .string()
      .uuid()
      .parse(req.nextUrl.searchParams.get("queryId"));

    console.log({ queryId });

    const requestedQuery = await db.query.queries.findFirst({
      where: eq(queries.id, queryId),
      with: {
        replies: true,
      },
    });

    console.log({ requestedQuery });

    if (!requestedQuery) {
      return Response.json({ message: "Query not found" }, { status: 404 });
    }
    return Response.json(requestedQuery, { status: 200 });
  } catch (error) {
    console.error({ error });
    return Response.json(
      { message: error?.message ?? "Something went wrong" },
      {
        status: 500,
      },
    );
  }
};
