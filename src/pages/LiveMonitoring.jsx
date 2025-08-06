import React from "react";
import ActionButtons from "../components/liveMonitoring/ActionButton";
import MonitoringTable from "../components/liveMonitoring/MonitoringTable";
import TamperAlertCard from "../components/liveMonitoring/TamplerAlertCard";

export default function LiveMonitoring() {
  return (
    <div className="my-5">
      <ActionButtons />
      <MonitoringTable />
      <TamperAlertCard />
    </div>
  );
}
