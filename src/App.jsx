import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route index element={<Login />} />
          <Route path="*" element={<NotFound />} />
          {/* dashboard nested routes */}
          <Route path="/dashboard/overview" element={<Dashboard />}>
            <Route index element={<Overview />} />
            {/*
            <Route path="room" element={<AllRooms />} />
            <Route path="available" element={<AvailableRooms />} />
            <Route path="unavailable" element={<UnAvailableRooms />} />
            <Route path="dashboard_booking" element={<Booking />} />
            <Route path="add_booking" element={<AddBookingInformation />} />
            <Route path="cancelation" element={<Cancelation />} />
            <Route path="reservation" element={<Reservation />} />
            <Route path="housekeeping" element={<HouseKeeping />} />
            <Route path="add_housekeeper" element={<AddHouseKeeper />} />
            <Route path="guests" element={<GuestList />} />
            <Route path="concierge" element={<ConciergeList />} />
            <Route path="addconcierge" element={<AddConcierge />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
