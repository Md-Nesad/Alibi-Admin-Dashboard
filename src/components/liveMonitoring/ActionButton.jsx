import { Megaphone, PhoneCall, ArrowUpRight } from "lucide-react";
import Drone from "../../assets/icons/Drone";

const ActionCard = ({ title, icon, selected }) => {
  return (
    <div
      className={`flex items-center justify-between gap-2 bg-[#1E293B] text-white/70 px-4 py-3 rounded-md w-80 h-18 cursor-pointer transition-all duration-200 hover:bg-[#334155] ${
        selected ? "ring-2 ring-blue-500" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="text-white bg-gray-600 p-2 rounded">{icon}</span>
        <span className="text-md ml-2 font-medium">{title}</span>
      </div>
      <span className="text-[#FFFFFFB2] p-[1px] mr-3 border border-gray-600 rounded">
        <ArrowUpRight />
      </span>
    </div>
  );
};

export default function ActionCardRow() {
  return (
    <div className="flex justify-between gap-4 mb-4 rounded-md w-full">
      <ActionCard title="Deploy Drone" icon={<Drone size={18} />} />
      <ActionCard title="Send Broadcast" icon={<Megaphone size={24} />} />
      <ActionCard title="Emergency Call" icon={<PhoneCall size={24} />} />
    </div>
  );
}
