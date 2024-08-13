import { getUser } from "@/lib/getuser";
import { sendMail } from "@/lib/sendMail";
import { db } from "@/prisma";
import { NextRequest } from "next/server";
import { z } from "zod";

export const POST = async (req: NextRequest) => {
  try {
    const user = await getUser();

    if (!user) {
      return Response.json({ message: "User not logged in" }, { status: 401 });
    }

    const body = await req.json();

    const { message, queryId } = z
      .object({
        message: z.string(),
        queryId: z.string(),
      })
      .parse(body);
    const requestedQuery = await db.query.findFirstOrThrow({
      where: { id: queryId },
    });
    if (!requestedQuery) {
      return Response.json({ message: "Query not found" }, { status: 404 });
    }
    const response = await sendMail({
      body: `<p>${message}</p>`,
      to: requestedQuery.email,
    });
    console.log({ response });

    await db.query.update({
      where: { id: queryId },
      data: {
        status: "replied",
        updatedAt: new Date(),
      },
    });

    await db.sentEmail.create({
      data: {
        to: requestedQuery.email,
        message: message,
        queryId: requestedQuery.id,
      },
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

    const requestedQuery = await db.query.findFirstOrThrow({
      where: { id: queryId },
      include: {
        replies: {},
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
