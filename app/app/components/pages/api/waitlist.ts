import type { NextApiRequest, NextApiResponse } from "next";

// Temporary in-memory store
let waitlist: string[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email required" });
  }

  waitlist.push(email);
  console.log("New waitlist signup:", email);

  res.status(200).json({ success: true });
}
