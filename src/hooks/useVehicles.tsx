import { useState, useEffect, useCallback } from 'react';
import type { Vehicle, VehicleSearchParams } from '../types/types';
import vehicleService from '../services/vehicleService'

interface UseVehiclesOptions {
  initialSearch?: string;
  autoLoad?: boolean;
}

interface UseVehiclesReturn {
  vehicles: Vehicle[]
  filteredVehicles: Vehicle[]
  loading: boolean
  error: string | null
  search: string
  setSearch: (search: string) => void
  refresh: () => Promise<void>
  searchVehicles: (params: VehicleSearchParams) => Promise<void>
  getVehicleById: (id: string) => Promise<Vehicle>
  currentVehicle: Vehicle | null
  currentVehicleLoading: boolean
  currentVehicleError: string | null
}

export const useVehicles = (options: UseVehiclesOptions = {}): UseVehiclesReturn => {
  const { initialSearch = '', autoLoad = true } = options;
  
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [search, setSearch] = useState(initialSearch);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* find vehicle by id */
  const [currentVehicle, setCurrentVehicle] = useState<Vehicle | null>(null);
  const [currentVehicleLoading, setCurrentVehicleLoading] = useState(false);
  const [currentVehicleError, setCurrentVehicleError] = useState<string | null>(null);

  const loadVehicles = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await vehicleService.getVehicles();
      setVehicles(data);
      setFilteredVehicles(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load vehicles');
      console.error('Error loading vehicles:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const searchVehicles = useCallback(async (params: VehicleSearchParams) => {
    try {
      setLoading(true);
      setError(null);
      const data = await vehicleService.searchVehicles(params);
      setFilteredVehicles(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search vehicles');
      console.error('Error searching vehicles:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  /* Update search and filter */
  const handleSearch = useCallback((searchTerm: string) => {
    setSearch(searchTerm);
    if (searchTerm.trim() === '') searchVehicles({});
    else searchVehicles({ search: searchTerm });
  }, [searchVehicles]);

  // Initial load
  useEffect(() => {
    if (autoLoad) {
      loadVehicles();
    }
  }, [autoLoad, loadVehicles]);

  // Refresh vehicles
  const refresh = useCallback(async () => {
    await loadVehicles();
  }, [loadVehicles]);


  const getVehicleById = useCallback(async (id: string): Promise<Vehicle> => {
    try {
      setCurrentVehicleLoading(true);
      setCurrentVehicleError(null);
      
      /** check memory if vehicle exists */
      const existing = vehicles.find(v => v.id === id);
      if (existing) {
        setCurrentVehicle(existing);
        setCurrentVehicleLoading(false);
        return existing;
      }
      
      /* If not in cache, fetch from backend */
      const vehicle = await vehicleService.getVehicleById(id);
      setCurrentVehicle(vehicle);
      return vehicle;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load vehicle';
      setCurrentVehicleError(errorMessage);
      throw err;
    } finally {
      setCurrentVehicleLoading(false);
    }
  }, [vehicles]);

  return {
    vehicles,
    filteredVehicles,
    loading,
    error,
    search,
    setSearch: handleSearch,
    refresh,
    searchVehicles,

    getVehicleById,
    currentVehicle,
    currentVehicleLoading,
    currentVehicleError,
  };
};