import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { x: 10, y: 40 },
  { x: 10, y: 30 },
  { x: 20, y: 60 },
  { x: 25, y: 37 },
  { x: 30, y: 70 },
  { x: 35, y: 50 },
  { x: 40, y: 50 },
  { x: 45, y: 70 },
  { x: 50, y: 47 },
  { x: 55, y: 80 },
  { x: 60, y: 60 },
  { x: 65, y: 60 },
  { x: 70, y: 90 },
  { x: 75, y: 67 },
  { x: 80, y: 77 },
  { x: 85, y: 70 },
  { x: 90, y: 65 },
  { x: 95, y: 60 },
  { x: 100, y: 80 },
];

const formatTime = (value) => {
  const timeMap = {
    10: "6am",
    20: "9am",
    30: "12pm",
    40: "3pm",
    50: "6pm",
    60: "9pm",
    70: "12am",
    80: "3am",
    90: "6am",
    100: "9am",
  };
  return timeMap[value] || value;
};

const DailyComplianceChart = () => {
  return (
    <div className="bg-[#0F131C] pr-5 py-3 rounded-xl w-full h-[285px] border border-gray-800">
      <h2 className="text-[#FFFFFFCC] text-lg mb-6 ml-6 font-semibold">
        Daily Compliance
      </h2>
      <ResponsiveContainer width="100%" height={205}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: -14, bottom: 0 }}
        >
          <CartesianGrid stroke="#333" strokeDasharray="0 0" vertical={false} />
          <XAxis
            dataKey="x"
            domain={[10, 100]}
            ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            tickFormatter={formatTime}
            tick={{
              fill: "#FFFFFF80",
              fontWeight: "500",
              fontSize: 12,
              dy: 7,
              dx: 13,
            }}
            axisLine={false} // removes the axis line
            tickLine={false} // removes the tick mark (small line above label)
          />

          <YAxis
            strokeOpacity={0}
            domain={[25, 100]}
            ticks={[25, 50, 75, 100]}
            tickFormatter={(value) => `${value}%`}
            tick={{ fill: "#FFFFFF80", fontWeight: "500", fontSize: 12 }}
            dy={-2}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#1F212C", borderColor: "#333" }}
          />

          {/* Area with stroke and fill */}
          <Area
            type="basis"
            dataKey="y"
            stroke="#FFD700"
            strokeWidth={3}
            fill="#FFD700"
            fillOpacity={0.1}
            isAnimationActive={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyComplianceChart;
