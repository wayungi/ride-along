import TransactionList from "./TransactionsList"
import type { Rental } from "../../../../types/types";


 const rentals: Rental[] = [

    {
        "id": "1",
        vehicle: {id: "1", name: "benz", image: ""},
        destination: "Jinja",
        destinationCoordinates: {lat: 32.1,  lng: 0.16},
        pickedAt: "10093876366",
        returnedAt: "10093877366",
        totalPrice: 400000
    },

    {
        "id": "2",
        vehicle: {id: "2", name: "benz", image: ""},
        destination: "Jinja",
        destinationCoordinates: {lat: 32.1,  lng: 0.16},
        pickedAt: "10093876366",
        returnedAt: "10093877366",
        totalPrice: 400000
    },

    {
        "id": "3",
        vehicle: {id: "3", name: "benz", image: ""},
        destination: "Jinja",
        destinationCoordinates: {lat: 32.1,  lng: 0.16},
        pickedAt: "10093876366",
        returnedAt: "10093877366",
        totalPrice: 400000
    },

    {
        "id": "4",
        vehicle: {id: "4", name: "benz", image: ""},
        destination: "Jinja",
        destinationCoordinates: {lat: 32.1,  lng: 0.16},
        pickedAt: "10093876366",
        returnedAt: "10093877366",
        totalPrice: 400000
    },

    {
        "id": "5",
        vehicle: {id: "5", name: "benz", image: ""},
        destination: "Jinja",
        destinationCoordinates: {lat: 32.1,  lng: 0.16},
        pickedAt: "10093876366",
        returnedAt: "10093877366",
        totalPrice: 400000
    }

 ]
  



const Transactions = () => {

    const onSelect = () => {

    }

    return (
        <div>
            <TransactionList 
                rentals={rentals}
                selectedRentalId="1"
                onSelect={onSelect}
            />
        </div>
    )

}

export default Transactions