import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

interface RentalMapProps {
  latitude: number;
  longitude: number;
  destination: string;
}

const MapUpdater = ({latitude, longitude}: { latitude: number; longitude: number;}) => {

  const map = useMap();

  useEffect(() => {
    map.setView([latitude, longitude], map.getZoom());
  }, [latitude, longitude, map]);
  return null;
};

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


        <MapUpdater latitude={latitude} longitude={longitude}/>

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