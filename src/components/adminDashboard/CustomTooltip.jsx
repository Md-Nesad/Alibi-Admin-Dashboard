const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const timeMap = {
      10: "6am",
      20: "9am",
      30: "11am",
      40: "1pm",
      50: "3pm",
      60: "5pm",
      70: "7pm",
      80: "9pm",
      90: "11pm",
      100: "12am",
    };

    const timeLabel = timeMap[label] || label;
    const percentValue = `${payload[0].value}%`;

    return (
      <div className="bg-[#1F212C] border border-[#333] text-white px-3 py-2 rounded-md text-sm">
        <p>{timeLabel}</p>
        <p className="text-[#FFD700] font-medium">{percentValue}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
