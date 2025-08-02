import DailyComplianceChart from "../components/adminDashboard/DailyComplianceChart";
import DashboardStatus from "../components/adminDashboard/StatusCard";
import RegionCharts from "../components/adminDashboard/RegionCharts";
import RecentAlerts from "../components/adminDashboard/RecentAlert";
import MiniMap from "../components/adminDashboard/MiniMap";

export default function Overview() {
  const alerts = [
    { coords: [31.9632, 35.9239], type: "low" },
    { coords: [31.9732, 35.9339], type: "high" },
    { coords: [31.9532, 35.9439], type: "medium" },
  ];

  return (
    <div>
      <DashboardStatus />

      <div className="grid grid-cols-2 gap-5 mb-6">
        <DailyComplianceChart />
        <RegionCharts />
      </div>

      <div className="grid grid-cols-2 gap-5 mb-10">
        <RecentAlerts />
        <MiniMap alerts={alerts} userLocation={[31.9632, 35.9239]} />
      </div>
    </div>
  );
}
