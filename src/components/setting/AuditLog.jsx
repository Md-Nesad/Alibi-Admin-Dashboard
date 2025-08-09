import { logs } from "../../data/Setting";

const AuditLog = () => {
  return (
    <div className="bg-[#0F131C] pt-4 pb-2 rounded-md w-full border border-gray-800">
      <h2 className="text-[#FFFFFFCC] text-lg border-b px-6 border-gray-700 pb-3 font-semibold">
        Audit Log
      </h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-[#FFFFFFCC] py-2 px-6 font-medium text-md">
              Timestamp
            </th>
            <th className="text-[#FFFFFFCC] py-2 px-6 font-medium text-md">
              User
            </th>
            <th className="text-[#FFFFFFCC] 2xl:pl-20 py-2 px-6 font-medium text-md">
              Action
            </th>
            <th className="text-[#FFFFFFCC] py-2 px-6 2xl:text-right 2xl:pr-9 font-medium text-md">
              IP Address
            </th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr
              key={index}
              className="border-b border-gray-800 last:border-b-0"
            >
              <td className="py-2 px-6 text-[#FFFFFF99] text-sm">
                {log.timestamp}
              </td>
              <td className="py-2 px-6 text-[#FFFFFF99] text-sm">{log.user}</td>
              <td className="py-2 px-6 2xl:pl-20 text-[#FFFFFF99] text-sm">
                {log.action}
              </td>
              <td className="py-2 px-6 2xl:text-right 2xl:pr-8 text-[#FFFFFF99] text-sm">
                {log.ip}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLog;
