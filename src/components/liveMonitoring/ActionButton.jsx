import { Megaphone, PhoneCall, ArrowUpRight } from "lucide-react";
import Drone from "../../assets/icons/Drone";
import { useNavigate } from "react-router-dom";

const ActionCard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between mb-5">
      <div
        onClick={() => navigate("/dashboard/drone_deployee")}
        className="flex items-center justify-between gap-2 bg-[#1E293B] text-white/70 px-4 py-3 rounded-md w-80 h-18 cursor-pointer transition-all duration-200 hover:bg-[#334155] hover:text-white"
      >
        <div className="flex items-center gap-2">
          <span className="text-white bg-gray-600 p-2 rounded">
            <Drone size={18} />
          </span>
          <span className="text-md ml-2 font-medium">Deploy Drone</span>
        </div>
        <span className="text-[#FFFFFFB2] p-[1px] mr-3 border border-gray-600 rounded">
          <ArrowUpRight />
        </span>
      </div>

      <div className="flex items-center justify-between gap-2 bg-[#1E293B] text-white/70 px-4 py-3 rounded-md w-80 h-18 cursor-pointer transition-all duration-200 hover:bg-[#334155] hover:text-white">
        <div className="flex items-center gap-2">
          <span className="text-white bg-gray-600 p-2 rounded">
            {<Megaphone size={24} />}
          </span>
          <span className="text-md ml-2 font-medium">Send Broadcast</span>
        </div>
        <span className="text-[#FFFFFFB2] p-[1px] mr-3 border border-gray-600 rounded">
          <ArrowUpRight />
        </span>
      </div>

      <div className="flex items-center justify-between gap-2 bg-[#1E293B] text-white/70 px-4 py-3 rounded-md w-80 h-18 cursor-pointer transition-all duration-200 hover:bg-[#334155] hover:text-white">
        <div className="flex items-center gap-2">
          <span className="text-white bg-gray-600 p-2 rounded">
            {<PhoneCall size={24} />}
          </span>
          <span className="text-md ml-2 font-medium">Emergency Call</span>
        </div>
        <span className="text-[#FFFFFFB2] p-[1px] mr-3 border border-gray-600 rounded">
          <ArrowUpRight />
        </span>
      </div>
    </div>
  );
};

export default ActionCard;
