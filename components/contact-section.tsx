"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formData)

    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-teal-50 dark:from-slate-900 dark:to-teal-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Contact Us</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Have questions about Musikfest Wannsee? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 dark:text-white">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="text-lg p-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="text-lg p-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-base">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your message about?"
                    required
                    className="text-lg p-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    required
                    className="min-h-[150px] text-lg p-6"
                  />
                </div>

                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white text-lg py-6">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-800 dark:text-white mb-1">Festival Office</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Königstraße 42
                      <br />
                      14109 Berlin, Germany
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-800 dark:text-white mb-1">Phone</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      +49 30 1234 5678
                      <br />
                      Monday-Friday, 9am-5pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-800 dark:text-white mb-1">Email</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      info@musikfestwannsee.de
                      <br />
                      tickets@musikfestwannsee.de
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-white">Festival Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-800 dark:text-white">Box Office Hours:</span>
                    <span className="text-slate-600 dark:text-slate-300">10am - 8pm daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-800 dark:text-white">Venue Opening:</span>
                    <span className="text-slate-600 dark:text-slate-300">1 hour before concerts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-800 dark:text-white">Information Desk:</span>
                    <span className="text-slate-600 dark:text-slate-300">9am - 9pm daily</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-teal-50 dark:bg-teal-900/30 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Press Inquiries</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                For press accreditation and interview requests, please contact our press office directly.
              </p>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
                <span className="text-teal-600 dark:text-teal-400">press@musikfestwannsee.de</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
