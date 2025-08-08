import { aiSuggestions } from "../../data/AnomalyAndAISuggestion";

const AISuggestion = () => {
  return (
    <div className="w-full h-93 bg-[#0f172a] text-[#FFFFFFCC] rounded-t-lg py-4 space-y-4 font-sans">
      <h2 className="text-lg font-semibold px-4 border-b border-gray-800 pb-3">
        AI Suggestions
      </h2>

      {aiSuggestions.map((suggest, index) => (
        <div
          key={index}
          className="border-b border-gray-800 text-sm relative space-y-2 pb-3"
        >
          <span className="absolute top-3 right-6 text-xs text-[#FFFFFF80]">
            {suggest.time}
          </span>
          <p className="font-medium px-4">{suggest.title}</p>
          <p className="text-[#FFFFFF80] px-4">User ID: {suggest.userId}</p>
          <p className="text-[#FFFFFF80] px-4">{suggest.message}</p>
        </div>
      ))}
    </div>
  );
};

export default AISuggestion;
