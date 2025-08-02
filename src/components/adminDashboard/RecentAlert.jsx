import { CheckCircle, Folder, MessageCircle } from "lucide-react";
import { Approve, File, Message } from "../../assets/icons/RecentAlerts";
import { alerts } from "../../data/Data";
import toast, { Toaster } from "react-hot-toast";

export default function RecentAlerts() {
  const notify = () =>
    setTimeout(() => toast.success("Download Completed"), 1000);

  const notify2 = () => setTimeout(() => toast.success("Message Sent"), 500);

  const notify3 = () => setTimeout(() => toast.success("Approved"), 500);
  return (
    <div className="bg-[#0F131C] text-white rounded-xl w-full shadow-md border border-gray-800">
      <h2 className="text-xl font-semibold py-4 pl-6 border-b border-[#334155]">
        Recent Alerts
      </h2>

      <div className="overflow-x-auto p-5">
        <div className="rounded-lg border border-gray-800 overflow-hidden">
          <table className="min-w-full table-auto text-sm bg-[#0F131C]">
            <thead className="bg-[#0F131C] text-gray-300">
              <tr>
                <th className="text-left px-4 py-2 border-r border-gray-800">
                  Name
                </th>
                <th className="text-left px-4 py-2 border-r border-gray-800">
                  Description
                </th>
                <th className="text-left px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#1e293b]/60 transition border-t border-gray-800"
                >
                  <td className="px-3 py-3 border-r border-gray-800">
                    <div className="flex items-center gap-2">
                      <img
                        src={alert.avatar}
                        alt={alert.name}
                        className="w-8 h-8 rounded-full object-fill"
                      />
                      <span>{alert.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 border-r border-gray-800 text-gray-400">
                    {alert.description}
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex gap-2">
                      <button
                        title="Approve"
                        className="hover:scale-105 transition-transform duration-150 cursor-pointer focus:outline-none"
                        onClick={notify3}
                      >
                        <Approve className="text-green-500 w-5 h-5" />
                      </button>
                      <button
                        title="Download"
                        className="hover:scale-105 transition-transform duration-150 cursor-pointer focus:outline-none"
                        onClick={notify}
                      >
                        <File className="text-purple-500 w-5 h-5" />
                      </button>
                      <button
                        title="Message"
                        className="hover:scale-105 transition-transform duration-150 cursor-pointer focus:outline-none"
                        onClick={notify2}
                      >
                        <Message className="text-yellow-400 w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
