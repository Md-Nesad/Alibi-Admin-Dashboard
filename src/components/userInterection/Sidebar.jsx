import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Sidebar() {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const handleCallRequest = () => {
    if (!name) {
      alert("Please select a name.");
      return;
    }
    // Handle video call request
    setTimeout(() => {
      alert(`Video call request sent to ${name || "all users. Please wait."}`);
    }, 700);
  };

  const handleBroadCartRequest = () => {
    if (!note) {
      alert("Please enter a note.");
      return;
    }
    // Handle broadcast cart request
    setTimeout(() => {
      alert(
        `Broadcast cart request sent to ${name || "all users. Please wait."}`
      );
      setNote("");
    }, 700);
  };
  return (
    <div className="bg-[#0F131C] text-white py-4 border border-gray-800 w-full sm:w-64 space-y-3 rounded-lg">
      {/* Video Call Section */}
      <div className="space-y-3">
        <h2 className="text-md text-center text-[#FFFFFFCC] border-b border-gray-800 pb-2 font-semibold">
          Video Call
        </h2>
        {/* name */}
        <div className="px-3 mt-[-7px]">
          <label className="text-[#FFFFFFB2] text-sm" htmlFor="name">
            Name
          </label>
          <div className="relative">
            <select
              className="w-full bg-[#17202C] text-[#FFFFFF66] rounded-md px-2 py-1 text-sm outline-none border border-[#30363D] appearance-none cursor-pointer"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Mira Al-Sayfani">Mira Al-Sayfani</option>
              <option value="Salma Dahrani">Salma Dahrani</option>
              <option value="Yousef Barqani">Yousef Barqani</option>
              <option value="Noor Khandari">Noor Khandari</option>
            </select>
            <FiChevronDown className="absolute right-3 top-2 text-gray-400 pointer-events-none " />
          </div>
        </div>

        {/* video call */}
        <div className="bg-[#0F131C] rounded-lg flex flex-col items-center justify-center pb-15 pt-5 border border-[#30363D] mx-3 relative">
          <svg
            width="38"
            height="32"
            viewBox="0 0 38 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="38" height="32" rx="6" fill="#2A2E37" />
            <path
              d="M24.7663 16.0228C24.7663 17.8748 24.763 19.7236 24.7663 21.5756C24.7729 23.6316 23.0163 25.2106 20.98 24.9771C20.8616 24.9639 20.7399 24.9606 20.6214 24.9606C16.9601 24.9606 13.2988 24.9606 9.63422 24.9573C9.10788 24.9573 8.5651 24.9935 8.05851 24.8784C6.40055 24.5001 5.31499 22.9013 5.51237 21.2105C5.52881 21.0822 5.52881 20.9506 5.52881 20.8223C5.52881 17.6709 5.52881 14.5195 5.52881 11.368C5.52881 10.7825 5.47618 10.1772 5.60118 9.61141C5.97291 7.9074 7.56178 6.82842 9.29539 7.0225C9.40395 7.03566 9.51579 7.03566 9.62435 7.03566C13.2955 7.03566 16.97 7.03566 20.6412 7.03566C21.1478 7.03566 21.6708 6.99619 22.1577 7.10474C23.7334 7.45015 24.7762 8.8252 24.7696 10.4371C24.763 12.299 24.7696 14.1576 24.7696 16.0195L24.7663 16.0228Z"
              fill="white"
              fillOpacity="0.7"
            />
            <path
              d="M32.5066 16.0096C32.5066 18.4374 32.5066 20.8651 32.5066 23.2928C32.5066 24.0494 32.1448 24.5658 31.477 24.6415C31.1677 24.6777 30.7664 24.6086 30.5263 24.4277C29.2894 23.4902 28.0854 22.5066 26.888 21.5197C26.7597 21.4144 26.6775 21.1809 26.6775 21.0098C26.6643 17.6676 26.6643 14.3254 26.6807 10.9864C26.6807 10.7891 26.8321 10.5391 26.99 10.4075C28.0953 9.49297 29.2236 8.60478 30.3388 7.70014C30.7796 7.34158 31.2533 7.19355 31.7862 7.45013C32.3191 7.70343 32.5099 8.15411 32.5099 8.72649C32.5033 11.1542 32.5099 13.5819 32.5099 16.0096H32.5066Z"
              fill="white"
              fillOpacity="0.7"
            />
          </svg>

          <span className="text-xs text-[#FFFFFFB2] mt-1">Video Call</span>

          <button
            onClick={handleCallRequest}
            className="w-full absolute bottom-0 left-0 bg-[#17202C] text-[#FFFFFFB2] rounded-b px-3 py-2 text-sm hover:bg-[#1E242E] transition"
          >
            Request Call
          </button>
        </div>
      </div>

      {/* Broadcast Alert Section */}
      <div className="space-y-2">
        <h2 className="text-lg text-center border-t border-b border-gray-800 text-[#FFFFFFCC] py-1">
          Broadcast Alert
        </h2>
        <div className="px-3">
          <label className="text-[#FFFFFFB2] text-sm" htmlFor="region">
            Region
          </label>
          <div className="relative">
            <select className="w-full bg-[#17202C] text-[#FFFFFF66] rounded-md px-2 py-1 text-sm outline-none border border-[#30363D] appearance-none cursor-pointer">
              <option value="">Select</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="East">East</option>
              <option value="West">West</option>
            </select>
            <FiChevronDown className="absolute right-3 top-2 text-gray-400 pointer-events-none " />
          </div>
        </div>

        <div className="px-3">
          <label className="text-[#FFFFFFB2] text-sm" htmlFor="type">
            User Type
          </label>
          <div className="relative">
            <select className="w-full bg-[#17202C] text-[#FFFFFF66] rounded-md px-2 py-1 text-sm outline-none border border-[#30363D] appearance-none cursor-pointer">
              <option value="">Select</option>
              <option value="Admin">Admin</option>
              <option value="Moderator">Moderator</option>
              <option value="Member">Member</option>
              <option value="Guest">Guest</option>
            </select>
            <FiChevronDown className="absolute right-3 top-2 text-gray-400 pointer-events-none " />
          </div>
        </div>

        <div className="px-3">
          <label className="text-[#FFFFFFB2] text-sm" htmlFor="name">
            Note
          </label>
          <textarea
            className="w-full text-[#FFFFFF66] rounded-md px-2 py-1 text-sm outline-none border border-[#30363D] h-16 resize-none"
            placeholder="Type here..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>

        <button
          onClick={handleBroadCartRequest}
          className="w-[88%] ml-4 bg-[#17202C] text-[#FFFFFFCC] rounded px-3 py-2 text-sm hover:bg-[#1E242E] transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
