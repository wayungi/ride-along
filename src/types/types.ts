export interface Vehicle {
  id: string | number;
  name: string;
  type: string;
  fuelType: "Electric" | "Hybrid" | "Petrol" | "Diesel";
  seats: number;
  pricePerDay: number;
  image: string;
  available: boolean;
  status: string; //"AVAILABLE" | "BOOKED" | "FAULTY" 
  model: string;
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
  pickedAt: number;
  returnedAt: number;
  totalPrice: number;
}

export interface VehicleOwnerInfoProps {
  vehicle: Vehicle;
  username: string;
  tripCost: number;
  status: "Available" | "Rented" | "Faulty";
}

export interface VehicleRegistrationRequest {
  id: string;
  cardId: string;

  name: string;
  model: string;
  type: string;
  fuelType: "Electric" | "Hybrid" | "Petrol" | "Diesel";
  seats: number;
  image: string;
  owner: {
    username: string;
  };
  insuranceExpiry: string;
  submittedAt: string;
}


export interface VehicleSearchParams {
  search?: string;
  type?: string;
  fuelType?: string;
  minPrice?: number;
  maxPrice?: number;
  available?: boolean;
}