import type { Rental } from "../../../../types/types";
import TransactionCard from "./TransactionCard";

interface TransactionListProps {
  rentals: Rental[];
  selectedRentalId: string;
  onSelect: (rental: Rental) => void;
}

const TransactionList = ({rentals,selectedRentalId, onSelect }: TransactionListProps) => {

  return (
    <div className="flex flex-col items-center">
      {rentals.map((rental) => (
        <TransactionCard
          key={rental.id}
          rental={rental}
          selected={rental.id === selectedRentalId}
          onClick={() => onSelect(rental)}
        />
      ))}
    </div>
  );
};

export default TransactionList;