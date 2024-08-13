"use server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export type User = {
  userId: string;
  name: string;
  email: string;
};

export async function getUser() {
  try {
    const token = cookies().get("access_token");
    if (!token) {
      return null;
    }
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET) as User;
    return decoded;
  } catch (error) {
    console.log(error);
    return null;
  }
}
