import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});
export async function sendMail({
  body,
  proffName,
  to,
}: {
  to: string | string[];
  proffName?: string;
  body: string;
}) {
  const info = await transporter.sendMail({
    from: `"${proffName ? proffName : "Support"} Bluestone Tech Services Private Limited" mdizaan67@gmail.comn`,
    to,
    subject: "Answer to your query",
    html: body,
  });
  return info;
}
