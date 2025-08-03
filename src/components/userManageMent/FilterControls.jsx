import { useState } from "react";

const FilterControls = () => {
  const [violation, setViolation] = useState("Unauthorized Access");
  const [region, setRegion] = useState("East Amman");
  const [risk, setRisk] = useState(50);

  return (
    <div className="bg-[#0F172A] p-6 rounded-xl text-white w-full mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Violation Type */}
        <div>
          <label className="block text-sm mb-1 text-gray-400">
            Violation Type
          </label>
          <select
            value={violation}
            onChange={(e) => setViolation(e.target.value)}
            className="w-full bg-[#1E293B] border border-[#334155] rounded-lg p-2 text-sm text-white focus:outline-none"
          >
            <option>Unauthorized Access</option>
            <option>Unauthorized Login</option>
            <option>Location Mismatch</option>
            <option>Device Breach</option>
          </select>
        </div>

        {/* Region */}
        <div>
          <label className="block text-sm mb-1 text-gray-400">Region</label>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full bg-[#1E293B] border border-[#334155] rounded-lg p-2 text-sm text-white focus:outline-none"
          >
            <option>East Amman</option>
            <option>West Amman</option>
          </select>
        </div>

        {/* Risk Slider */}
        <div>
          <label className="block text-sm mb-1 text-gray-400">
            Risk Slider
          </label>
          <div className="flex items-center gap-2 w-full bg-[#1E293B] border border-[#334155] rounded-lg py-[10px] px-2 text-sm text-white focus:outline-none">
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
