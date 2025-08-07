import { AlertTriangle } from "lucide-react";
import AlertWithPopup from "./AlertWithPopu";

export default function TamperAlertCard() {
  return (
    <div className="bg-[#0F172A] border border-gray-800 rounded-md p-4 text-white w-full flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-4 mb-13">
      {/* Left icon */}
      <div className="text-yellow-400 flex items-center gap-4 border-b md:border-b-0 md:border-r border-gray-700 pb-4 md:pb-0 md:pr-6 ">
        <AlertTriangle size={44} />
        <div className="font-semibold text-white text-lg">Tamper Alert</div>
      </div>

      {/* Info section */}
      <div className="flex flex-row gap-9 items-center 2xl:gap-60 md:col-span-2">
        <div>
          <div>
            <span className="text-white font-medium">Name:</span> Mira Al-Sayari
          </div>
          <div>
            <span className="text-white font-medium">Issue:</span> Strap
            tampering detected
          </div>
        </div>

        <div>
          <div>
            <span className="text-white font-medium">Location:</span> Amman,
            Jordan
          </div>
          <div>
            <span className="text-white font-medium">Time of Detection:</span>{" "}
            14 minutes ago
          </div>
        </div>
      </div>

      {/* Right side buttons */}
      <div className="flex justify-start md:justify-end items-center">
        <button className="bg-[#1E293B] text-white px-4 py-[5px] rounded-md text-md hover:bg-[#334155]">
          Auto-Escalate
        </button>
        <div className=" flex items-center justify-center">
          <span className="text-white text-xl">
            <AlertWithPopup />
          </span>
        </div>
      </div>
    </div>
  );
}
