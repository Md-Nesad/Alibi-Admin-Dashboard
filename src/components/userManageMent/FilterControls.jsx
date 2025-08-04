import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FilterControls = () => {
  const [violation, setViolation] = useState("Unauthorized Access");
  const [region, setRegion] = useState("East Amman");
  const [risk, setRisk] = useState(50);

  return (
    <div className="bg-[#0F172A] p-4 rounded-md text-white w-full mb-6 mt-8 border border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {/* Violation Type */}
        <div className="">
          <label className="block text-sm mb-2 text-[#FFFFFFCC] font-medium">
            Violation Type
          </label>
          <div className="relative">
            <select
              value={violation}
              onChange={(e) => setViolation(e.target.value)}
              className="w-full bg-[#090c12] border border-[#334155] rounded-md py-2 pl-4 text-sm text-[#FFFFFFCC] focus:outline-none appearance-none"
            >
              <option>Unauthorized Access</option>
              <option>Unauthorized Login</option>
              <option>Location Mismatch</option>
              <option>Device Breach</option>
            </select>
            <FiChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Region */}
        <div>
          <label className="block text-sm mb-2 text-[#FFFFFFCC] font-medium">
            Region
          </label>
          <div className="relative">
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full bg-[#090c12] border border-[#334155] rounded-lg py-2 pl-4 text-sm text-[#FFFFFFCC] focus:outline-none appearance-none"
            >
              <option>East Amman</option>
              <option>West Amman</option>
            </select>
            <FiChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Risk Slider */}
        <div>
          <label className="block text-sm mb-2 text-[#FFFFFFCC] font-medium ">
            Risk Slider
          </label>
          <div className="flex items-center gap-2 w-full bg-[#090c12] border border-[#334155] rounded-lg py-[10px] px-4 text-sm text-white focus:outline-none">
            <span className="text-xs text-gray-400">0</span>
            <input
              type="range"
              min="0"
              max="100"
              value={risk}
              onChange={(e) => setRisk(e.target.value)}
              className="w-full accent-yellow-400 bg-[#1E293B]"
            />
            <span className="text-xs text-gray-400">100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
