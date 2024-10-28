'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const TICKET_PRICE = 25 // Price per ticket in dollars

const availableTimes = [
  { id: '1', time: '10:00 AM' },
  { id: '2', time: '2:00 PM' },
  { id: '3', time: '6:00 PM' },
  { id: '4', time: '9:00 PM' },
]

export default function Ticketing() {
  const [selectedTime, setSelectedTime] = useState('')
  const [quantity, setQuantity] = useState(1)

  const totalPrice = quantity * TICKET_PRICE

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the submission, e.g., send to an API
    console.log(`Submitted: ${quantity} tickets for ${selectedTime}`)
    alert(`Thank you for your purchase! Total: $${totalPrice}`)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Buy Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="time-select" className="block text-sm font-medium text-gray-700">
              Select Time
            </label>
            <Select onValueChange={setSelectedTime} value={selectedTime}>
              <SelectTrigger id="time-select">
                <SelectValue placeholder="Choose a time" />
              </SelectTrigger>
              <SelectContent>
                {availableTimes.map((timeSlot) => (
                  <SelectItem key={timeSlot.id} value={timeSlot.time}>
                    {timeSlot.time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
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
          <div className="text-lg font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="w-full"
          disabled={!selectedTime || quantity < 1}
          onClick={handleSubmit}
        >
          Buy Tickets
        </Button>
      </CardFooter>
    </Card>
  )
}