import nodemailer from "nodemailer";
import { env } from "../config/env";

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!env.smtp.host || !env.smtp.user || !env.smtp.pass) {
    return null;
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.smtp.host,
      port: env.smtp.port,
      secure: env.smtp.secure,
      auth: {
        user: env.smtp.user,
        pass: env.smtp.pass
      }
    });
  }

  return transporter;
}

export async function sendSignupOtp({ email, code }: { email: string, code: string }) {
  const mailer = getTransporter();
  const to = email;

  if (!mailer) {
    if (env.nodeEnv !== "production") {
      console.info(`Signup OTP for ${email}: ${code}`);
      return;
    }
    throw new Error("SMTP is not configured.");
  }

  await mailer.sendMail({
    from: env.smtp.from,
    to,
    subject: "Your SMARRTIF AI signup OTP",
    text: `Your SMARRTIF AI verification code is ${code}. It expires in 10 minutes.`,
    html: `<p>Your SMARRTIF AI verification code is <strong>${code}</strong>.</p><p>This code expires in 10 minutes.</p>`
  });
}
