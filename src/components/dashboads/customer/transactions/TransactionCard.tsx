import type { Rental } from "../../../../types/types";

interface TransactionCardProps {
  rental: Rental;
  selected: boolean;
  onClick: () => void;
}

const TransactionCard = ({rental, selected, onClick,}: TransactionCardProps) => {

  return (
    <div onClick={onClick} className={`w-full text-left flex items-center gap-4 p-3 border-b transition
        ${ selected ? "border-gray-300 bg-gray-100" : "border-gray-200 bg-white hover:border-gray-300"}`}>
      <img src={rental.vehicle.image} alt={rental.vehicle.name} className="w-20 h-16 object-cover rounded-lg"/>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-900"> {rental.vehicle.name}</h3>
        <p className="text-sm text-gray-500">{new Date(rental.pickedAt).toLocaleDateString()}</p>
      </div>
      <p className="text-sm font-medium text-gray-900">UGX {rental.totalPrice.toLocaleString()}</p>
    </div>
  );
};

export default TransactionCard;