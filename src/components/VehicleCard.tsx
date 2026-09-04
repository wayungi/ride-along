
// import { type VehicleSpecs} from '../types/types'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faGasPump, 
//   faUsers, 
//   faSuitcase, 
//   faRoad, 
//   faCalendarPlus 
// } from '@fortawesome/free-solid-svg-icons';


// interface VehicleCardProps {
//   vehicle: VehicleSpecs;
// }

// const VehicleCard  = ({ vehicle }: VehicleCardProps) => {

//     const {
//         id,
//         name,
//         type,
//         fuelType,
//         seats,
//         pricePerDay,
//         imageIcon,
//         bags,
//         isAvailable,
//         fuelEfficiency
//     } =  vehicle;
  
//   const handleBookClick = () => {};

//   return (
//     <div 
//     className={`bg-white rounded-[28px] p-6 pb-7 shadow-[0_8px_24px_rgba(0,20,40,0.05)] 
//     transition-all duration-200 flex flex-col border border-white/30 backdrop-blur-sm hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(0,40,80,0.08)] hover:border-[#d6e4ff]`}>
   
//       <div className="bg-gradient-to-br from-[#eef4fa] to-[#dce6f2] rounded-2xl h-[140px] flex items-center justify-center mb-4 text-[3.8rem] text-[#1f3a5f]">
//         <img src={imageIcon} />
//       </div>

    
//       <div className="text-[1.35rem] font-bold text-[#0b2b4a] mb-0.5">
//         {name}
//       </div>

     
//       <div className="text-[#5b7290] font-medium text-sm flex items-center gap-1.5 mb-2">
//         <FontAwesomeIcon icon={faGasPump} />
//         <span>{fuelType} · {type}</span>
//       </div>

//       {/* Car Details */}
//       <div className="flex justify-between text-[#3f5a7a] text-sm border-t border-[#e9eefa] pt-2.5 mt-1.5 mb-2">
//         <span className="flex items-center gap-1.5">
//           <FontAwesomeIcon icon={faUsers} className="text-[#2a7de1]" />
//           {seats}
//         </span>
//         <span className="flex items-center gap-1.5">
//           <FontAwesomeIcon icon={faSuitcase} className="text-[#2a7de1]" />
//           {bags} {bags === 1 ? 'bag' : 'bags'}
//         </span>
//         <span className="flex items-center gap-1.5">
//           <FontAwesomeIcon icon={faRoad} className="text-[#2a7de1]" />
//           {fuelEfficiency}
//         </span>
//       </div>

//       {/* Price and Book Button */}
//       <div className="flex items-baseline justify-between mt-1">
//         <span className="font-bold text-1xl text-[#0b2b4a]">
//           Shs {pricePerDay} <small className="font-normal text-sm text-[#5f7b9c] ml-1">/ day</small>
//         </span>
//         <button 
//           onClick={handleBookClick}
//           className="bg-[#eef4ff] border-none rounded-[40px] px-5 py-2 font-semibold text-[#1a5bbf] transition-all duration-150 cursor-pointer flex items-center gap-1.5 hover:bg-[#1a5bbf] hover:text-white hover:shadow-[0_4px_12px_rgba(26,91,191,0.3)]"
//         >
//           <FontAwesomeIcon icon={faCalendarPlus} /> Book
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VehicleCard;




import type { Vehicle } from "../types/types"

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const {
    name,
    type,
    fuelType,
    seats,
    pricePerDay,
    image,
    available,
  } = vehicle;

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={image}
        alt={name}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {name}
            </h2>

            <p className="text-sm text-gray-500">
              {type}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              available
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {available ? "Available" : "Unavailable"}
          </span>
        </div>

        <div className="mb-5 flex gap-4 text-sm text-gray-600">
          <span>{fuelType}</span>

          <span>{seats} seats</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">
              Ugx {pricePerDay}
            </span>

            <span className="text-sm text-gray-500">
              {" "}
              / day
            </span>
          </div>

          <button
            disabled={!available}
            className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Hire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;