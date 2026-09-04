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

export interface VehicleDetails extends Vehicle {
  images: string[];
  insuranceExpiry: string;
  nextServiceDate: string;
  consumptionPerKm: number;
  condition: string;
  transmission: "Automatic" | "Manual";
  bagSpace: string;
}