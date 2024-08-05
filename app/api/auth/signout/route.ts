import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  console.log("Logging out");

  const serverCookies = await cookies();
  serverCookies.delete("access_token");
  return Response.json({ message: "Logged out successfully" }, { status: 200 });
};
