import { db } from "@/db";
import { jobListings } from "@/db/schema";
import { getUser } from "@/lib/getuser";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";
import { z } from "zod";

const jobSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(3),
  jobType: z.string().optional(),
  contact: z.string().min(3),
});
export const POST = async (request: NextRequest) => {
  try {
    const user = await getUser();

    if (!user) {
      return Response.json({ message: "User not logged in" }, { status: 401 });
    }

    const body = await request.json();
    console.log({ body });

    const { title, description, jobType, contact } = jobSchema.parse(body);
    await db.insert(jobListings).values({
      title,
      description,
      contact,
      ...(jobType && { jobType }),
    });
    return Response.json(
      { message: "Job added successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
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

export const GET = async (request: NextRequest) => {
  try {
    const jobId = request.nextUrl.searchParams.get("jobId");
    if (jobId) {
      const [job] = await db
        .select()
        .from(jobListings)
        .where(eq(jobListings.id, jobId));
      return Response.json(job, { status: 200 });
    }
    const jobs = await db.select().from(jobListings);
    return Response.json(jobs, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: error?.message ?? "Something went wrong" },
      {
        status: 500,
      },
    );
  }
};

const updateJobSchema = z.object({
  title: z.string().min(3).optional(),
  description: z.string().min(3).optional(),
  jobType: z.string().min(3).optional(),
  contact: z.string().min(3).optional(),
  id: z.string().uuid(),
});

export const PUT = async (request: NextRequest) => {
  try {
    const user = await getUser();

    if (!user) {
      return Response.json({ message: "User not logged in" }, { status: 401 });
    }

    const { id, title, description, jobType, contact } = updateJobSchema.parse(
      await request.json(),
    );
    await db
      .update(jobListings)
      .set({
        ...(title && { title }),
        ...(description && { description }),
        ...(contact && { contact }),
        ...(jobType && { jobType }),
      })
      .where(eq(jobListings.id, id));
    return Response.json(
      { message: "Job updated successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
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

export const DELETE = async (request: NextRequest) => {
  try {
    const user = await getUser();

    if (!user) {
      return Response.json({ message: "User not logged in" }, { status: 401 });
    }

    const jobId = z
      .string()
      .uuid()
      .parse(request.nextUrl.searchParams.get("jobId"));
    if (jobId) {
      await db.delete(jobListings).where(eq(jobListings.id, jobId));
      return Response.json(
        { message: "Job deleted successfully" },
        { status: 200 },
      );
    }
    return Response.json({ message: "No job id provided" }, { status: 400 });
  } catch (error) {
    console.log(error);
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
