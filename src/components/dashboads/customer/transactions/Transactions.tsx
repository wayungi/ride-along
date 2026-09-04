import TransactionList from "./TransactionsList"
import type { Rental } from "../../../../types/types";

interface TransactionsProps {
    rentals: Rental[],
    selectedRentalId: string,
    onSelect: (rental: Rental) => void
}
 

const Transactions = ({rentals, selectedRentalId}: TransactionsProps) => {

    const onSelect = () => {

    }

    return (
        <div className="max-h-[500px] overflow-y-auto">
            <TransactionList 
                rentals={rentals}
                selectedRentalId={selectedRentalId}
                onSelect={onSelect}
            />
        </div>
    )

}

export default Transactions