import { db } from "@/db";
import { users } from "@/db/schema";
import { getUser } from "@/lib/getuser";
import { eq } from "drizzle-orm";

export const GET = async (req: Request) => {
  const user = await getUser();

  if (!user) {
    return Response.json({ message: "User not logged in" }, { status: 401 });
  }

  const userIsAdmin = await db.query.users.findFirst({
    where: eq(users.id, user.userId),
  });
  if (!userIsAdmin) {
    return Response.json({ message: "User not found" }, { status: 404 });
  }
  return Response.json(user);
};
