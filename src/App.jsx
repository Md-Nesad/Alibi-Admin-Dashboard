import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import UserManageMent from "./pages/UserManageMent";
import LiveMonitoring from "./pages/LiveMonitoring";
import AIIntelligence from "./pages/AIIntelligence";
import UserInterection from "./pages/UserInterection";
import DroneDeploye from "./pages/DroneDeploye";
import Analysis from "./pages/Analysis";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route index element={<Login />} />
          <Route path="*" element={<NotFound />} />
          {/* dashboard nested routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="overview" element={<Overview />} />
            <Route path="user_management" element={<UserManageMent />} />
            <Route path="live_monitoring" element={<LiveMonitoring />} />
            <Route path="ai_inteligence" element={<AIIntelligence />} />
            <Route path="user_interection" element={<UserInterection />} />
            <Route path="drone_deployee" element={<DroneDeploye />} />
            <Route path="analysis" element={<Analysis />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
