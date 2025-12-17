"use client";
import { useState } from "react";
import Waitlist from "./Waitlist";

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [count, setCount] = useState(0);

  const LIMIT = 5;

  const sendMessage = async () => {
    if (count >= LIMIT) return;

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setResponse(data.reply);
    setCount(count + 1);
  };

  return (
    <div style={{ maxWidth: 600 }}>
      {count < LIMIT ? (
        <>
          <textarea
            style={{ width: "100%", padding: 8 }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask a legal question..."
          />
          <button onClick={sendMessage} style={{ marginTop: 8, padding: 8 }}>
            Ask
          </button>
          <p>{LIMIT - count} free questions remaining</p>
        </>
      ) : (
        <>
          <p style={{ color: "red" }}>Free limit reached</p>
          <Waitlist />
        </>
      )}
      {response && (
        <div style={{ marginTop: 16, padding: 8, border: "1px solid #ccc" }}>
          {response}
        </div>
      )}
    </div>
  );
}
