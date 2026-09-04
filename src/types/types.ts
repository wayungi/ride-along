export interface Vehicle {
  id: string | number;
  name: string;
  type: string;
  fuelType: "Electric" | "Hybrid" | "Petrol" | "Diesel";
  seats: number;
  pricePerDay: number;
  image: string;
  available: boolean;
}

export interface VehicleInfo extends Vehicle {
  images: string[];
  insuranceExpiry: string;
  nextServiceDate: string;
  consumptionPerKm: number;
  condition: string;
  transmission: "Automatic" | "Manual";
  bagSpace: string;
}

export interface Rental {
  id: string;
  vehicle: {id: string; name: string; image: string;};
  destination: string;
  destinationCoordinates: {lat: number; lng: number;};
  pickedAt: string;
  returnedAt: string;
  totalPrice: number;
}