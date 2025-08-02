import { FaUsers, FaExclamationTriangle } from "react-icons/fa";
import Drone from "../../assets/icons/Drone";
import Setting from "../../assets/icons/Setting";
import { Link } from "react-router-dom";
import { DroneDeployment } from "../../assets/icons/Overview";

const StatusCard = ({ icon, label, value, path }) => (
  <Link to={path}>
    <div className="bg-[#0F131C] text-[#FFFFFFCC] px-5 py-4 rounded-lg flex items-center gap-4 shadow-md w-full border border-gray-800">
      <div className="text-2xl text-[#FFFFFFCC]">{icon}</div>
      <div>
        <p className="text-sm text-[#FFFFFFCC]">{label}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  </Link>
);

export default function DashboardStatus() {
  return (
    <div className="grid grid-cols-4 gap-4 my-5">
      <StatusCard
        icon={<FaUsers />}
        label="Active Users"
        value="750"
        path="/dashboard/user_management"
      />
      <StatusCard
        icon={<FaExclamationTriangle />}
        label="Flagged Violations"
        value="10"
        path="/dashboard/user_interection"
      />
      <StatusCard
        icon={<DroneDeployment />}
        label="Drone Missions"
        value="16"
        path="/dashboard/drone_deployee"
      />
      <StatusCard
        icon={<Setting />}
        label="System Status"
        value="Healthy"
        path="/dashboard/analysis"
      />
    </div>
  );
}
