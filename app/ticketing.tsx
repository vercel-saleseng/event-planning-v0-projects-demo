'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Ticket } from "lucide-react"

const TICKET_PRICE = 15 // Price per ticket in euros

const availableTimes = [
    { id: '1', time: '10:00 AM - Comedy Classics' },
    { id: '2', time: '2:00 PM - International Films' },
    { id: '3', time: '6:00 PM - Greek Cinema Showcase' },
    { id: '4', time: '9:00 PM - Midnight Thrillers' },
]

export default function Ticketing() {
    const [selectedTime, setSelectedTime] = useState('')
    const [quantity, setQuantity] = useState(1)

    const totalPrice = quantity * TICKET_PRICE

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(`Submitted: ${quantity} tickets for ${selectedTime}`)
        alert(`Thank you for your purchase! Total: €${totalPrice}`)
    }

    return (
        <Card className="w-full max-w-md mx-auto border-t-4 border-yellow-400 bg-white text-blue-900">
            <CardHeader>
                <Ticket className="h-6 w-6 mb-2 text-blue-700" />
                <CardTitle className="text-blue-900">Buy Tickets</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="time-select" className="block text-sm font-medium text-blue-900">
                            Select Screening
                        </label>
                        <Select onValueChange={setSelectedTime} value={selectedTime}>
                            <SelectTrigger id="time-select">
                                <SelectValue placeholder="Choose a screening" />
                            </SelectTrigger>
                            <SelectContent>
                                {availableTimes.map((timeSlot) => (
                                    <SelectItem className="bg-background" key={timeSlot.id} value={timeSlot.time}>
                                        {timeSlot.time}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="quantity" className="block text-sm font-medium text-blue-900">
                            Quantity
                        </label>
                        <Input
                            id="quantity"
                            type="number"
                            min="1"
                            max="10"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="w-full"
                        />
                    </div>
                    <div className="text-lg font-semibold text-blue-900">
                        Total: €{totalPrice.toFixed(2)}
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold"
                    disabled={!selectedTime || quantity < 1}
                    onClick={handleSubmit}
                >
                    Buy Tickets
                </Button>
            </CardFooter>
        </Card>
    )
}