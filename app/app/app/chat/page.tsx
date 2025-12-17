import ChatBox from "@/components/ChatBox";
import Disclaimer from "@/components/Disclaimer";

export default function ChatPage() {
  return (
    <main style={{ padding: 40 }}>
      <h2>Legal AI Chat</h2>
      <ChatBox />
      <Disclaimer />
    </main>
  );
}
