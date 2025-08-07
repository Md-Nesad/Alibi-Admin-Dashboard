import { useState } from "react";
import { X } from "lucide-react";
import { successMessage } from "../data/Toast";

export default function UserModal({ user, onClose }) {
  if (!user) return null;
  const [isAssigning, setIsAssigning] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  return (
    <div className="fixed inset-0 z-1005 flex items-center justify-center bg-[#10131cb7] bg-opacity-80 animate-backdrop">
      <div className="w-full max-w-md bg-[#10141D] text-white rounded-md p-4 shadow-lg relative pt-10 border-2 border-gray-700 animate-modal ">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#17202C] text-gray-300 hover:text-gray-500 transition rounded-md p-[1px] border border-gray-600"
        >
          <X size={20} />
        </button>

        <div className="flex gap-4">
          {/* Left: Image and name */}
          <div className="flex flex-col">
            <h2 className="text-lg font-medium text-[#FFFFFFB2] mb-2">
              {user.name}
            </h2>
            <img
              src={user.avatar}
              alt="Face ID"
              className="w-36 h-40 rounded-lg object-cover mb-2"
            />
            <p className="text-xs text-[#FFFFFFB2] mb-2 text-center">
              Face ID Photo
            </p>
          </div>

          {/* Vertical Divider and Right Content */}
          <div className="flex flex-col justify-between relative">
            <div className="w-px bg-gray-600 h-40  absolute -left-4 top-10 ml-8 bottom-0" />

            <div className="space-y-5 pl-9 mt-12">
              {/* Suspicious Activity */}
              <div className="flex items-start  gap-2 relative">
                <span className="w-2 h-2 absolute left-[-23.2px] top-2 rounded-full bg-yellow-400" />
                <div>
                  <p className="text-sm font-medium text-[#FFFFFFB2]">
                    Suspicious Activity
                  </p>
                  <p className="text-[11px] text-[#FFFFFF66]">
                    {user.suspicious ||
                      "Multiple Failed Logins, Today: 12:35 PM"}
                  </p>
                </div>
              </div>

              {/* Violation Detected */}
              <div className="flex items-start gap-2 relative">
                <span className="w-2 h-2 absolute left-[-23.2px] top-2 rounded-full bg-red-500" />
                <div>
                  <p className="text-sm font-medium text-[#FFFFFFB2]">
                    Violation Detected
                  </p>
                  <p className="text-[11px] text-[#FFFFFF66]">
                    Unauthorized Login, Today: 12:35 PM
                  </p>
                </div>
              </div>

              {/* Check-In Success */}

              <div className="flex items-start gap-2 relative">
                <span className="w-2 h-2 absolute left-[-23.3px] top-2 rounded-full bg-green-500" />
                <div>
                  <p className="text-sm font-medium text-[#FFFFFFB2]">
                    Check-In Success
                  </p>
                  <p className="text-[11px] text-[#FFFFFF66]">
                    Timestamped, Today: 12:35 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note & Actions */}

        <div className="mt-1 mb-6">
          <h3 className="font-medium mb-1 text-[#FFFFFFB2]">Note</h3>
          <div className="mt-2 w-full h-40 overflow-y-scroll overflow-x-hidden bg-[#141821] text-sm text-gray-300 p-3 pb-6 rounded-md border border-gray-800 custom-scrollbar scroll-smooth">
            <p className="text-justify text-[#ffffffb8] text-[14px] leading-relaxed space-y-2">
              🚨 <strong>AI Alert:</strong> Repeated Geo-Fence Violation
              <br />
              <strong>Subject ID:</strong> #A-672493
              <br />
              <strong>Timestamp:</strong> August 4, 2025 – 18:42 GMT+3
              <br />
              <strong>Severity Level:</strong> 🔴 High Risk – Escalation
              Recommended
              <br />
              <strong>Subject:</strong> Malik R. (DOB: 1991-03-07)
              <br />
              <strong>Supervision Level:</strong> Moderate Risk – House Arrest
              <br /> <br />
              <strong>Geo-Fence Radius:</strong> 200m
              <br />
              <strong>Current Incident:</strong>
              <br />
              At 18:39, subject exited the designated geo-fence zone by
              approximately 317 meters, traveling southeast toward{" "}
              <em>[Al-Madina Commercial District]</em> without authorized
              movement request.
              <br />
              AI-predicted intent pattern suggests possible deviation for
              unauthorized commercial or social activity based on prior ML
              trajectory analysis.
              <br />
              <br />
              <strong>Historical Pattern (Last 7 Days):</strong>
              <br />
              • July 30, 2025 – 22:06: Geo-fence breach (124 meters) – proximity
              to restricted zone flagged.
              <br />
              • August 1, 2025 – 03:17: Late-night boundary exit (276 meters) –
              unreported duration of 47 minutes.
              <br />
              <br />
              <strong>System Confidence Score:</strong> 92.4% (Intentional
              breach pattern)
              <br />
              <br />
              <strong>Recommended Action:</strong>
              <br />
              • Immediate biometric check-in (FaceID, voice sample) – Pending
              <br />
              • Deploy drone patrol within 0.5 km radius – Queued
              <br />• Notify supervising officer – Sent
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 mt-4">
          <button
            onClick={() => {
              setIsAssigning(true);
              setSuccessMsg("");
              setTimeout(() => {
                setIsAssigning(false);
                successMessage("Case Manager Assigned Successfully!");
                onClose();
              }, 1500);
            }}
            disabled={isAssigning}
            className={`${
              isAssigning ? "bg-gray-700" : "bg-[#17202C] hover:bg-blue-900"
            } transition-colors duration-200 text-[#FFFFFFB2] text-[13px] font-medium py-2 rounded-md w-full`}
          >
            {isAssigning ? "Please wait..." : "Assign Case Manager"}
          </button>

          <button
            className="border border-gray-800 text-[#FFFFFFB2] text-[13px] font-medium py-2 rounded-md w-full hover:bg-[#17202cb2] transition-colors duration-200"
            onClick={() => {
              setIsExporting(true);
              setSuccessMsg("");
              setTimeout(() => {
                setIsExporting(false);
                successMessage("Log Exported Successfully!");
                onClose();
              }, 1500);
            }}
            disabled={isExporting}
          >
            {isExporting ? "Please wait..." : "Export Log"}
          </button>
        </div>
      </div>
    </div>
  );
}
