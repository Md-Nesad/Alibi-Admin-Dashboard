import { X } from "lucide-react";
import React, { useState } from "react";

export default function RecentAlertChatModal({ user, onClose }) {
  const [messageText, setMessageText] = useState("");

  const handleSend = () => {
    if (!messageText.trim()) {
      alert("Please enter a message before sending.");
      return;
    }

    if (messageText.trim()) {
      setTimeout(() => {
        alert(
          `Thank you for chatting with ${user.name}. Message send to ${user.name}`
        );
      }, 1000);
      setMessageText("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-57 z-1005 animate-backdrop">
      <div className="bg-[#10141D] rounded-lg w-96 p-6 relative animate-modal border-2 border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#17202C] text-gray-300 hover:text-gray-500 transition rounded-md p-[1px] border border-gray-600"
        >
          <X size={20} />
        </button>
        <h3 className="text-[#FFFFFFB2] text-lg font-semibold mb-2">
          Chat with {user.name}
        </h3>
        <div className="text-sm text-gray-300 mb-4">
          Start a conversation with {user.name}.
        </div>
        <textarea
          rows={4}
          className="w-full p-2 rounded bg-[#0F131C] text-[#FFFFFFB2] resize-none border border-gray-600"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="mt-3 w-full py-2 bg-[#F2B100] hover:bg-yellow-600 text-white font-semibold rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
