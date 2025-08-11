import { useState } from "react";
import { FaPlay, FaDownload } from "react-icons/fa";
import { logs } from "../../data/Logs";

export default function DroneMissionLogs() {
  const [showPlayer, setShowPlayer] = useState(false);
  const [selectedMission, setSelectedMission] = useState(null);

  const outcomeColors = {
    Success: "text-green-400",
    Failed: "text-red-500",
    Locked: "text-yellow-400",
    Aborted: "text-purple-400",
  };

  const handleDownload = (log) => {
    const blob = new Blob(
      [
        `Fake mission data for ${log.missionId}\nDrone Name: ${log.droneName}\nOperator: ${log.operator}\nLocation: ${log.location}\nStart Time: ${log.startTime}\nEnd Time: ${log.endTime}\nDuration: ${log.duration}\nOutcome: ${log.outcome}\nRemark: ${log.remark}`,
      ],
      {
        type: "text/plain",
      }
    );
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${log.missionId}.txt`;
    a.click();
  };

  const handlePlay = (log) => {
    setSelectedMission(log);
    setShowPlayer(true);
  };

  return (
    <div className="bg-[#0F131C] text-[#FFFFFFCC] rounded-lg w-full mx-auto border border-gray-800 ">
      <h2 className="text-lg font-semibold pl-4 py-3 min-[1920px]:py-7 border-b border-gray-800">
        Drone Mission Logs
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm max-2xl:text-[12.3px] min-[1920px]:h-120">
          <thead>
            <tr>
              <th className="px-4 py-3 min-[1920px]:py-7 text-left">Mission ID</th>
              <th className="px-4 py-3 text-left">Drone Name</th>
              <th className="px-4 py-3 text-left">Operator</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Start Time</th>
              <th className="px-4 py-3 text-left">End Time</th>
              <th className="px-4 py-3 text-left">Duration</th>
              <th className="px-4 py-3 text-left">Outcome</th>
              <th className="px-4 py-3 text-left">Remark</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-800 hover:bg-[#171c29]"
              >
                <td className="px-4 py-3">{log.missionId}</td>
                <td className="px-4 py-3">{log.droneName}</td>
                <td className="px-4 py-3">{log.operator}</td>
                <td className="px-4 py-3">{log.location}</td>
                <td className="px-4 py-3">{log.startTime}</td>
                <td className="px-4 py-3">{log.endTime}</td>
                <td className="px-4 py-3">{log.duration}</td>
                <td
                  className={`px-4 py-3 font-medium opacity-80 ${
                    outcomeColors[log.outcome]
                  }`}
                >
                  {log.outcome}
                </td>
                <td className="px-4 py-3">{log.remark}</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <button
                    onClick={() => handleDownload(log)}
                    className="bg-[#F2B1001A] p-2 rounded hover:bg-[#f2b10043]"
                  >
                    <FaDownload className="text-[#845ADF]" />
                  </button>

                  <button
                    onClick={() => handlePlay(log)}
                    className="bg-[#F2B1001A] p-2 rounded hover:bg-[#f2b10043] transition-colors duration-200"
                  >
                    <FaPlay className="text-[#F2B100]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Video Player */}
      {showPlayer && (
        <div className="fixed inset-0 z-1005 flex items-center justify-center bg-[#10131cb7] bg-opacity-80 animate-backdrop">
          <div className="bg-[#10141D] rounded-lg p-5 w-[85%] max-w-xl animate-modal">
            <h3 className="text-lg font-semibold mb-4">
              Playing: {selectedMission?.missionId}
            </h3>
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              autoPlay
              className="w-full rounded-lg"
            />
            <button
              onClick={() => setShowPlayer(false)}
              className="mt-4 bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
