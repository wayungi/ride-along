import type { Vehicle } from "../../../../types/types";
import VehicleOverview from "./VehicleOverview";

interface Fleet {
  vehicles: Vehicle[];
}

const VehicleList = ({vehicles}: Fleet) => {

  return (
    <div className="flex flex-col items-center">
      { vehicles.map((v) => (
        <VehicleOverview 
          key={v.id}
          id={v.id}
          image={v.image}
          model ={v.model}
          status = {v.status}
        />
      ))}     
    </div>
  );
};

export default VehicleList;
