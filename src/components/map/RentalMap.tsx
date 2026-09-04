import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

interface RentalMapProps {
  latitude: number;
  longitude: number;
  destination: string;
}

const RentalMap = ({latitude,longitude, destination}: RentalMapProps) => {
    
  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden">
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[latitude, longitude]}>
          <Popup>
            {destination}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default RentalMap;