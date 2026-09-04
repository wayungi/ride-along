import type { Rental } from "../../../../types/types";
import TransactionCard from "./TransactionCard";

interface TransactionListProps {
  rentals: Rental[];
  selectedRentalId: string;
  onSelect: (rental: Rental) => void;
}

const TransactionList = ({rentals,selectedRentalId, onSelect }: TransactionListProps) => {

  return (
    <div className="space-y-3">
      {rentals.slice(0, 5).map((rental) => (
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