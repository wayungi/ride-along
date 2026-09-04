import type { Rental } from "../../../../types/types";

interface TransactionCardProps {
  rental: Rental;
  selected: boolean;
  onClick: () => void;
}

const TransactionCard = ({rental, selected, onClick,}: TransactionCardProps) => {

  return (
    <button
      onClick={onClick}
      className={`w-full text-left flex items-center gap-4 p-3 rounded-xl border transition
        ${ selected ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white hover:border-blue-300"}`}>
      <img src={rental.vehicle.image} alt={rental.vehicle.name} className="w-20 h-16 object-cover rounded-lg"/>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900"> {rental.vehicle.name}</h3>
        <p className="text-sm text-gray-500">{new Date(rental.pickedAt).toLocaleDateString()}</p>
      </div>
      <p className="font-semibold text-gray-900">UGX {rental.totalPrice.toLocaleString()}</p>
    </button>
  );
};

export default TransactionCard;