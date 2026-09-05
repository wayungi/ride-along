import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents,} from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface LocationPickerProps {
  onLocationSelect: (latitude: number, longitude: number) => void;
}

interface Coordinates { latitude: number; longitude: number;}

interface LocationMarkerProps {
  position: Coordinates | null;
  setPosition: (position: Coordinates | null) => void;
  onLocationSelect: (
    latitude: number,
    longitude: number
  ) => void;
}

const LocationMarker = ({ position, setPosition, onLocationSelect,}: LocationMarkerProps) => {
  useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;
      const coordinates = {latitude: lat, longitude: lng};
      setPosition(coordinates);
      onLocationSelect(lat, lng);
    },
  });
  return position ? (<Marker position={[position.latitude, position.longitude ]}/>) : null;
};


const LocationPicker = ({onLocationSelect}: LocationPickerProps) => {

  const [position, setPosition] = useState<Coordinates | null>(null);

  const clearLocation = () => {
    setPosition(null);
    onLocationSelect(0, 0);/* 0,0 is a valid location */ 
  };

  return (
    <div className="w-full h-[500]">
      {/* Map */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200">
        <MapContainer center={[0.3476, 32.5825]} zoom={7} scrollWheelZoom={true} className="w-full h-full">
          <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationMarker position={position} setPosition={setPosition} onLocationSelect={onLocationSelect} />
        </MapContainer>
      </div>

      {/* Selected Location */}
      <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
        {position ? (
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-gray-900">Selected Location</p>
              <div className="flex gap-6 mt-2 text-sm text-gray-500">
                <p> Latitude:{" "} <span className="font-medium text-gray-700">{position.latitude.toFixed(6)}</span></p>
                <p>Longitude:{" "}<span className="font-medium text-gray-700">{position.longitude.toFixed(6)}</span></p>
              </div>
            </div>

            <button
              type="button"
              onClick={clearLocation}
              className="px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition"
            >Clear</button>
          </div>
        ) : (
          <p className="text-sm text-gray-500">
            Click anywhere on the map to select a location.
          </p>
        )}
      </div>
    </div>
  );
};

export default LocationPicker;