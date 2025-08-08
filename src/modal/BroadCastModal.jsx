import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { users } from "../data/Data";

export default function BroadcastModal({ onClose }) {
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("all");

  const handleSend = () => {
    if (!message) {
      alert("Please enter a message before sending.");
      return;
    }

    setTimeout(() => {
      alert("Broadcast sent to " + selectedOption + " successfully.");
      onClose();
    }, 1000);
    setMessage("");
  };

  return (
    <div className="fixed inset-0 flex items-start pt-48 justify-center pl-70 bg-black/50 z-50 animate-backdrop">
      <div className="bg-[#161a25] p-6 rounded-lg w-[400px] shadow-lg animate-modal border border-gray-700">
        <h2 className="text-xl font-semibold text-[#FFFFFFCC] mb-4 text-center">
          Send Broadcast
        </h2>

        {/* Select audience */}
        <div>
          <label className="text-gray-300 text-sm mb-2 block">Send To:</label>
          <div className="relative">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-full p-2 mb-4 rounded bg-[#1e293b] text-[#FFFFFFCC] border border-gray-600 appearance-none cursor-pointer"
            >
              {users.map((user) => (
                <option
                  className="text-[#FFFFFFCC]"
                  key={user.id}
                  value={user.name}
                >
                  {user.name}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Message textarea */}
        <label className="text-gray-300 text-sm mb-2 block">Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your broadcast message..."
          className="w-full p-2 h-28 rounded bg-[#1e293b] text-white border border-gray-600 resize-none"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#f2000036] hover:bg-[#f200005c] text-white rounded  transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-[#00bc001f] hover:bg-[#00bc0058] text-white rounded disabled:opacity-50 transition-colors duration-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
