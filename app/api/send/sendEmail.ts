"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(email: string, message: string) {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["farrasfajri@gmail.com"], // Email penerima (email kamu)
      subject: `Pesan Baru dari ${email}`,
      text: message,
      html: `<p>${message}</p><p>From: ${email}</p>`,
    });

    // Resend mengembalikan object error di dalam datanya jika gagal (misal API key salah)
    if (data.error) {
      return { success: false, error: data.error };
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
