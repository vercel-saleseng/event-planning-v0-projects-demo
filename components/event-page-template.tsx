'use client'

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Utensils, Facebook, Wine, Instagram, Twitter } from "lucide-react"
import "../app/globals.css";
import Ticketing from "./ticketing"

export function EventPageTemplate() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
        <Link className="flex items-center justify-center" href="#">
          <Wine className="h-6 w-6 mr-2" />
          <span className="sr-only">Event Name</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#tickets">
            Tickets
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background/50 from-60% to-muted/40 text-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Event Name
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Join us for this incredible event! An unforgettable experience awaits you at this one-of-a-kind gathering.
                </p>
              </div>
              <div className="flex justify-center gap-2">
                <Button size="lg">
                  Book Your Ticket
                </Button>
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">About Our Event</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <Wine className="h-10 w-10 mb-4 mx-auto text-primary" />, title: "Feature One", description: "Experience our first amazing feature that sets this event apart." },
                { icon: <Utensils className="h-10 w-10 mb-4 mx-auto text-primary" />, title: "Feature Two", description: "Discover what makes our second feature so special and unique." },
                { icon: <Calendar className="h-10 w-10 mb-4 mx-auto text-primary" />, title: "Feature Three", description: "Learn about the third distinctive element of this experience." },
              ].map((feature, i) => (
                <Card key={i} className="flex flex-col items-center text-center bg-background text-foreground">
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
        <section id="tickets" className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-muted/40 text-muted-foreground">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-foreground">Book Your Spot</h2>
            <div className="max-w-md mx-auto">
              <Ticketing />
            </div>
          </div>
        </section>
        <section id="contact" className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Join Us?</h2>
                <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't miss out on this amazing opportunity. Secure your spot at our event today!
                </p>
              </div>
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row pt-12 pb-6 w-full shrink-0 items-center px-4 md:px-6 bg-gradient-to-b from-background to-muted text-muted-foreground">
        <p className="text-xs">© 2024 Event Name. All rights reserved.</p>
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