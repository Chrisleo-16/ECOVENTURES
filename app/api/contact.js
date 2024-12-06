import { error } from "console";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (!email || !name || !message) {
      return res.status(400).json({ error: "All fields are required???" });
    }

    const transporter = nodemailer.createTransport({
      host: "chrisleo9897@gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "your-email@example.com",
        pass: "your-email-password",
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: "your-email@example.com",
        subject: " New Contact Form Submission",
        text: `Email: ${email}\nName: ${name}\nMessage: ${message}`,
      });

      return res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to send message." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
