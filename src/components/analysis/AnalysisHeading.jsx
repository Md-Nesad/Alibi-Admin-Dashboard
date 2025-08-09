import { FiChevronDown } from "react-icons/fi";

export default function AnalysisHeading() {
  return (
    <div>
      <div className="flex justify-between items-center bg-[#0F131C] rounded-lg border border-gray-800 py-3 px-5 w-full mt-5">
        <h2 className="font-medium text-[#FFFFFFCC]">Analysis and Report</h2>

        <div className="relative">
          <select className="bg-black border border-[#334155] rounded-md py-2 pl-3 pr-10 text-sm text-[#FFFFFFCC] appearance-none cursor-pointer focus:outline-none">
            <option value="">Export Type</option>
            <option value="pdf">PDF</option>
            <option value="csv">CSV</option>
            <option value="excel">Excel (XLSX)</option>
            <option value="json">JSON</option>
            <option value="xml">XML</option>
            <option value="png">Image (PNG)</option>
          </select>
          <FiChevronDown className="absolute right-2 top-3 text-gray-400 pointer-events-none" />
        </div>
      </div>
      {/* second row */}
      <div className="flex justify-between items-center rounded-xl py-5 w-full gap-4">
        <div className="relative flex-1">
          <select className="bg-black border border-[#334155] rounded-md py-2 pl-3 pr-10 text-sm text-[#FFFFFFCC] appearance-none cursor-pointer focus:outline-none w-full">
            <option value="">Start Date</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="last7">Last 7 Days</option>
            <option value="last30">Last 30 Days</option>
            <option value="thisMonth">This Month</option>
            <option value="lastMonth">Last Month</option>
            <option value="custom">Custom Date</option>
          </select>
          <FiChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative flex-1">
          <select className="bg-black border border-[#334155] rounded-md py-2 pl-3 pr-10 text-sm text-[#FFFFFFCC] appearance-none cursor-pointer focus:outline-none w-full">
            <option value="">End Date</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="last7">Last 7 Days</option>
            <option value="last30">Last 30 Days</option>
            <option value="thisMonth">This Month</option>
            <option value="lastMonth">Last Month</option>
            <option value="custom">Custom Date</option>
          </select>
          <FiChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative flex-1">
          <select className="bg-black border border-[#334155] rounded-md py-2 pl-3 pr-10 text-sm text-[#FFFFFFCC] appearance-none cursor-pointer focus:outline-none w-full">
            <option value="">Selct User</option>
            <option value="allUser">All Users</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="staff">Staff</option>
            <option value="guest">Guest</option>
          </select>
          <FiChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
