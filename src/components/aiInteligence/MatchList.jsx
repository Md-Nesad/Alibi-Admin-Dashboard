import { useState } from "react";
import { users } from "../../data/Data";

const MatchesList = ({ searchTerm }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [decisions, setDecisions] = useState({}); // Track accept/reject per user

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const handleDecision = (index, decision) => {
    setDecisions((prev) => ({
      ...prev,
      [index]: decision,
    }));
  };

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#12151C] text-[#FFFFFFCC] w-full sm:w-[260px] rounded-xl space-y-1 overflow-y-auto h-[700px] matches-list mb-6 custom-scrollbar">
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user, index) => {
          const isActive = index === activeIndex;
          const decision = decisions[index];
          return (
            <div
              key={index}
              className={`p-4 flex flex-col gap-2 border-b border-gray-700 cursor-pointer  transition-all duration-200
              ${isActive ? "bg-[#1e293b]" : "bg-[#0f172a]"}
              ${decision === "accepted" ? "border-green-500" : ""}
              ${decision === "rejected" ? "border-red-500" : ""}
            `}
              onClick={() => handleCardClick(index)}
            >
              <div className="flex items-center gap-3">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-15 h-17 rounded-md object-cover"
                />
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-400">
                    Match Score: {user.score}
                  </p>
                  <p className="text-sm text-gray-400">{user.time}</p>
                  <p className="text-sm text-gray-400">
                    Location: {user.location}
                  </p>
                </div>
              </div>

              {/* Buttons or decision message */}
              {isActive && (
                <>
                  {!decision ? (
                    <div className="flex gap-3">
                      <button
                        className="bg-[#00bc001f] hover:bg-[#00bc0058] transition-colors duration-200 text-[#00BC00] py-1 px-7 rounded border border-gray-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDecision(index, "accepted");
                        }}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-[#f2000036] hover:bg-[#f200005c] transition-colors duration-200 text-[#F20000B2] border border-gray-700 py-1 px-7 rounded"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDecision(index, "rejected");
                        }}
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`mt-1 text-sm font-medium ${
                        decision === "accepted"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {decision === "accepted"
                        ? "✅ You accepted this user"
                        : "❌ You rejected this user"}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })
      ) : (
        <div className="text-white text-center text-md mt-5 font-semibold">
          ❌ No matches found!
        </div>
      )}
    </div>
  );
};

export default MatchesList;
