import { apiClient } from '../api/apiClient';
import type { Vehicle, VehicleSearchParams } from '../types/types';
import type { ApiResponse } from '../types/api';

const vehicleService = {
 
  async getVehicles(): Promise<Vehicle[]> {
    const request = { "SERVICE": "VehicleService", "ACTION": "browseAvailable" }
    const data = await apiClient<ApiResponse<Vehicle[]>>("", { method:"POST", body: JSON.stringify(request) });
    return data.returnObject;
  },

  async getVehicleById(id: string): Promise<Vehicle> {
    const request = { "SERVICE": "vehicles", "ACTION": "byId", "id": id }
    return apiClient<Vehicle>("", {method: "POST", body: JSON.stringify(request)});
  },

  async createVehicle(vehicleData: Partial<Vehicle>): Promise<Vehicle> {
    const request = { "SERVICE": "vehicles", "ACTION": "create", ...vehicleData }
    return apiClient("", {"method": "POST", body:JSON.stringify(request)});
  },

  async updateVehicle(vehicleData: Partial<Vehicle>): Promise<Vehicle> {
    const request = { "SERVICE": "vehicles", "ACTION": "update", ...vehicleData }
    return  apiClient("", {method: "POST", body: JSON.stringify(request)});
  },

  async deleteVehicle(id: string): Promise<void> {
    const request = { "SERVICE": "vehicles", "ACTION": "delete", "id": id }
    return apiClient("", {"method": "POST", body: JSON.stringify(request) });
  },


  async searchVehicles(params: VehicleSearchParams): Promise<Vehicle[]>  {
    const queryParams = new URLSearchParams();
    const request = { "SERVICE": "VehicleService", "ACTION": "browseAvailable" }

    
    if (params.search) queryParams.append('search', params.search);
    if (params.type) queryParams.append('type', params.type);
    if (params.fuelType) queryParams.append('fuelType', params.fuelType);
    if (params.minPrice) queryParams.append('minPrice', params.minPrice.toString());
    if (params.maxPrice) queryParams.append('maxPrice', params.maxPrice.toString());
    if (params.available !== undefined) queryParams.append('available', params.available.toString());

    
    const data = await apiClient<ApiResponse<Vehicle[]>>("", {"method": "POST", body: JSON.stringify(request) });
    return data.returnObject
  },

};

export default vehicleService;