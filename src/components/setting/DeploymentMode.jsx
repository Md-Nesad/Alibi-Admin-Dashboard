import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const DeploymentMode = () => {
  const [retention, setRetention] = useState("30");

  const handleToggle = (value) => {
    setRetention(value);
  };

  return (
    <div className="bg-[#0f172a] py-4 rounded-lg w-full text-[#FFFFFFCC] font-sans border border-gray-800">
      {/* Title */}
      <h2 className="text-lg font-semibold pl-4 mb-4 border-b border-gray-700 pb-3">
        Deployment Mode
      </h2>

      {/* Dropdown */}
      <div className="px-3">
        <div className="relative">
          <select
            className="w-full bg-transparent border border-gray-700 rounded-md pl-3 py-2 text-[#FFFFFFCC] text-sm focus:outline-none focus:border-gray-500 appearance-none"
            defaultValue="Cloud"
          >
            <option className="bg-[#0f172a]">Cloud</option>
            <option className="bg-[#0f172a]">On-Premise</option>
          </select>
          <FiChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Data Retention */}
      <h3 className=" text-[#FFFFFFCC] text-sm text-center my-2.5">
        Data Retention
      </h3>

      <div className="space-y-3">
        {[
          { label: "30 Days", value: "30" },
          { label: "90 Days", value: "90" },
          { label: "1 Years", value: "365" },
        ].map((item) => (
          <div
            key={item.value}
            className="flex items-center justify-between px-3 text-[#FFFFFF99] text-sm"
          >
            <span>{item.label}</span>
            <button
              onClick={() => handleToggle(item.value)}
              className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors duration-300 ${
                retention === item.value ? "bg-green-500" : "bg-gray-700"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full transform transition-transform duration-300 ${
                  retention === item.value ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeploymentMode;
