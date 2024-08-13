import { getUser } from "@/lib/getuser";
import { db } from "@/prisma";

export const GET = async (req: Request) => {
  const user = await getUser();

  if (!user) {
    return Response.json({ message: "User not logged in" }, { status: 401 });
  }

  const userIsAdmin = await db.user.findFirst({
    where: { id: user.userId },
  });
  if (!userIsAdmin) {
    return Response.json({ message: "User not found" }, { status: 404 });
  }
  return Response.json(user);
};
