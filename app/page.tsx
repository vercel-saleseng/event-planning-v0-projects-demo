'use client'

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Utensils, Facebook, Film, Instagram, Ticket, Twitter } from "lucide-react"
import "../app/globals.css"
import Ticketing from "./ticketing"

export default function EventPageTemplate() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-blue-700 text-white border-b-4 border-yellow-400">
        <Link className="flex items-center justify-center" href="#">
          <Film className="h-6 w-6 mr-2 text-blue-700" />
          <span className="sr-only">Athens Film Festival</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#schedule">
            Schedule
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#tickets">
            Tickets
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-700 to-blue-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Athens International Film Festival
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Experience the magic of cinema in the heart of Athens. Join us for a week-long celebration of films from around the world.
                </p>
              </div>
              <div className="flex justify-center gap-2">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold" asChild>
                  <Link href="#tickets">Book Your Tickets</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-blue-900 hover:text-white hover:bg-blue-600" asChild>
                  <Link href="#schedule">View Schedule</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">About Our Festival</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <Film className="h-10 w-10 mb-4 mx-auto text-secondary" />, title: "Diverse Selection", description: "From indie gems to international blockbusters, experience a wide range of cinematic masterpieces." },
                { icon: <Utensils className="h-10 w-10 mb-4 mx-auto text-secondary" />, title: "Greek Cuisine", description: "Enjoy local delicacies and refreshments at our food court between screenings." },
                { icon: <Calendar className="h-10 w-10 mb-4 mx-auto text-secondary" />, title: "Week-long Event", description: "Seven days of non-stop cinema, discussions, and workshops for film enthusiasts." },
              ].map((feature, i) => (
                <Card key={i} className="flex flex-col items-center text-center bg-background text-foreground border-t-4 border-blue-500">
                  <CardHeader>
                    {feature.icon}
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-foreground">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="schedule" className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-blue-100 text-blue-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-foreground">Festival Schedule</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { time: "10:00 AM", title: "Comedy Classics", description: "Start your day with laughter" },
                { time: "2:00 PM", title: "International Films", description: "Experience global cinema" },
                { time: "6:00 PM", title: "Greek Cinema Showcase", description: "Celebrate local talent" },
                { time: "9:00 PM", title: "Midnight Thrillers", description: "End the night with suspense" },
              ].map((slot, i) => (
                <Card key={i} className="flex flex-col bg-background text-foreground">
                  <CardHeader>
                    <CardTitle>{slot.time}</CardTitle>
                    <CardDescription className="text-foreground font-semibold">{slot.title}</CardDescription>
                    <CardDescription className="text-muted-foreground">{slot.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="tickets" className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-foreground">Book Your Tickets</h2>
            <div className="max-w-md mx-auto">
              <Ticketing />
            </div>
          </div>
        </section>
        <section id="contact" className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Experience Cinema?</h2>
                <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't miss out on this cinematic journey. Secure your tickets for the Athens International Film Festival today!
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="#tickets">Get Your Tickets Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row pt-12 pb-6 w-full shrink-0 items-center px-4 md:px-6 bg-blue-700 text-white border-t-4 border-yellow-400">
        <p className="text-xs">© 2024 Athens International Film Festival. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4 sm:gap-6">
          <Link href="#">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}