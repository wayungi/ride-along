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