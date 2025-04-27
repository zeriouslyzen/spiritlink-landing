import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.RESEND_TO_EMAIL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { codename, contact, intent, honeypot } = req.body;

  // Honeypot spam protection
  if (honeypot) {
    return res.status(200).json({ ok: true });
  }

  if (!codename || !contact || !intent) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: "SYN7H[λ] Access <noreply@syn7h.com>",
      to: TO_EMAIL,
      subject: `SYN7H[λ] Access Request: ${codename}`,
      text: `Codename: ${codename}\nContact: ${contact}\nIntent: ${intent}`,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send email" });
  }
} 