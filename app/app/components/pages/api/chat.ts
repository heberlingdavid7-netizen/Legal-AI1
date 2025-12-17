import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message required" });

  // Simple AI simulation (replace with OpenAI API later)
  const reply = `You asked: "${message}".\n\nAI Legal Info: This is general info, not legal advice.`;

  res.status(200).json({ reply });
}
