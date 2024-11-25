"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function Component() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [time, setTime] = useState<string | undefined>()
  const [title, setTitle] = useState("")
  const [scheduledEvent, setScheduledEvent] = useState<{ date: Date; time: string; title: string } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (date && time && title) {
      setScheduledEvent({ date, time, title })
      setTitle("")
      setTime(undefined)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Schedule an Event</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Event Title</Label>
            <Input
              id="title"
              placeholder="Enter event title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Select Date</Label>
            {/* fix for width required: https://stackoverflow.com/questions/78196878/how-can-i-make-my-calendar-occupy-the-half-of-my-website-using-shadcn} */}
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="h-full w-full flex"
              classNames={{
                months:
                  "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
                month: "space-y-4 w-full flex flex-col",
                table: "w-full h-full border-collapse space-y-1",
                head_row: "",
                row: "w-full mt-2",
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Select Time</Label>
            <Select onValueChange={setTime} required>
              <SelectTrigger id="time">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                  <SelectItem key={hour} value={`${hour.toString().padStart(2, '0')}:00`}>
                    {`${hour.toString().padStart(2, '0')}:00`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Schedule Event</Button>
        </form>
      </CardContent>
      {scheduledEvent && (
        <CardFooter className="flex flex-col items-start">
          <h3 className="font-semibold">Scheduled Event:</h3>
          <p>Title: {scheduledEvent.title}</p>
          <p>Date: {scheduledEvent.date.toDateString()}</p>
          <p>Time: {scheduledEvent.time}</p>
        </CardFooter>
      )}
    </Card>
  )
}