import { anomalies } from "../../data/AnomalyAndAISuggestion";

const AnomalyCard = () => {
  return (
    <div className="w-full bg-[#0f172a] h-93 text-[#FFFFFFCC] rounded-t-lg py-4 space-y-4 font-sans">
      <h2 className="text-lg font-semibold px-4 border-b border-gray-800 pb-3">
        Anomaly Detection
      </h2>

      {anomalies.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-800 text-sm relative space-y-2 pb-3"
        >
          <span className="absolute top-3 right-6 text-xs text-gray-400">
            {item.time}
          </span>
          <p className="font-medium px-4">{item.title}</p>
          <p className=" px-4 text-[#FFFFFF80]">User ID: {item.userId}</p>
          <p className="text-gray-400 px-4">{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default AnomalyCard;
