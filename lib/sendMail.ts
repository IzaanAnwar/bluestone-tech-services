import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});
export async function sendMail({
  body,
  proffName,
  to,
  subject = "Your Bluestone Tech Services Support Request",
}: {
  to: string | string[];
  proffName?: string;
  subject?: string;
  body: string;
}) {
  const info = await transporter.sendMail({
    from: `"${proffName ? proffName : "Support"} Bluestone Tech Services Private Limited" contactus@blustonetech.com`,
    to,
    subject: subject,
    html: body,
  });
  return info;
}
