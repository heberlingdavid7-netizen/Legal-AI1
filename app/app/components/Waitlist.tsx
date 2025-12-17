"use client";
import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitEmail = async () => {
    await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return <p style={{ color: "green", marginTop: 8 }}>You're on the waitlist 🚀</p>;
  }

  return (
    <div style={{ marginTop: 16, maxWidth: 400 }}>
      <input
        type="email"
        placeholder="Enter your email for Pro access"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: 8, borderRadius: 4 }}
      />
      <button
        onClick={submitEmail}
        style={{ marginTop: 8, padding: 8, width: "100%" }}
      >
        Join Pro Waitlist
      </button>
    </div>
  );
}
