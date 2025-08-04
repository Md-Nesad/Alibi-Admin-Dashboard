import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import image from "../../assets/images/Ellipse 57 (1).png";

const MiniMap = ({ alerts, userLocation }) => {
  // User icon
  const userIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
    iconSize: [40, 40],
  });

  // Location-type icon (e.g., for city)
  const locationTypeIcon = new L.Icon({
    iconUrl: image,
    iconSize: [30, 30],
    iconAnchor: [16, 35], // center bottom
  });

  // Amman label icon (always visible text)
  const ammanLabelIcon = new L.DivIcon({
    html: `<div style="color:#FFFFFFCC; font-size:15px; font-weight:bold; padding:3px 6px; border-radius:4px; display:inline-block; box-shadow:0 0 3px rgba(0,0,0,0.4); margin-left:35px;">Amman</div>`,
    className: "",
    iconAnchor: [0, 0],
  });

  // Marker color based on alert type
  const getColorIcon = (type) => {
    const color =
      type === "high" ? "red" : type === "medium" ? "orange" : "yellow";
    return new L.DivIcon({
      html: `<div style="background:${color}; width:15px; height:15px; border-radius:50%; border:2px solid #fff;"></div>`,
      className: "",
    });
  };

  const ammanCoords = [31.9632, 35.9239];

  return (
    <div className="relative w-full bg-[#0a0a0a] h-full rounded-2xl shadow-lg">
      <h2 className="absolute top-2 left-12 z-[1000] text-[#FFFFFFCC] text-lg font-medium px-3 py-1 rounded shadow">
        Mini Map
      </h2>
      <MapContainer
        center={userLocation || ammanCoords}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full rounded-xl"
      >
        {/* Dark Tile Layer */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
          subdomains="abcd"
          maxZoom={25}
        />

        {/* User Marker */}
        <Marker position={userLocation || ammanCoords} icon={userIcon}>
          <Popup>You are here</Popup>
        </Marker>

        {/* Amman Label */}
        <Marker position={ammanCoords} icon={ammanLabelIcon} />

        {/* Amman Location Icon */}
        <Marker position={ammanCoords} icon={locationTypeIcon}>
          <Popup>Amman - Capital City</Popup>
        </Marker>

        {/* Alert Markers */}
        {alerts.map((alert, index) => (
          <Marker
            key={index}
            position={alert.coords}
            icon={getColorIcon(alert.type)}
          >
            <Popup>{alert.type.toUpperCase()} Alert</Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 z-[1000] bg-[#1a1a1a]/90 border border-white/10 text-[#FFFFFFCC] p-3 rounded-md text-xs shadow-md space-y-1">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span> High
          Alert
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-orange-400 rounded-full mr-2"></span>{" "}
          Medium Alert
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-yellow-300 rounded-full mr-2"></span> Low
          Alert
        </div>
      </div>
    </div>
  );
};

export default MiniMap;
