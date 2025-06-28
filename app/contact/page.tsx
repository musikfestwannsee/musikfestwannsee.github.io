"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import { WaterParallaxBackground, LightParallaxBackground } from "@/components/parallax-background"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    // In a real application, you would send this data to your server
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-700 text-white">
        <WaterParallaxBackground />
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions about Musikfest Wannsee? We're here to help! Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 bg-beige-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <h3 className="text-xl font-bold text-green-700 mb-2">Thank You!</h3>
                      <p className="text-lg text-green-600 mb-4">
                        Your message has been sent successfully. We'll get back to you soon.
                      </p>
                      <Button
                        onClick={() => {
                          setFormSubmitted(false)
                          setFormData({
                            name: "",
                            email: "",
                            subject: "",
                            message: "",
                            inquiryType: "general",
                          })
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="inquiryType" className="text-lg">
                            Inquiry Type
                          </Label>
                          <RadioGroup
                            id="inquiryType"
                            value={formData.inquiryType}
                            onValueChange={handleRadioChange}
                            className="flex flex-wrap gap-4 mt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="general" id="general" />
                              <Label htmlFor="general" className="text-base">
                                General Inquiry
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="tickets" id="tickets" />
                              <Label htmlFor="tickets" className="text-base">
                                Tickets
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="program" id="program" />
                              <Label htmlFor="program" className="text-base">
                                Program
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="sponsorship" id="sponsorship" />
                              <Label htmlFor="sponsorship" className="text-base">
                                Sponsorship
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="press" id="press" />
                              <Label htmlFor="press" className="text-base">
                                Press
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-lg">
                              Your Name
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="text-lg h-12"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-lg">
                              Email Address
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="text-lg h-12"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-lg">
                            Subject
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="text-lg h-12"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-lg">
                            Message
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="min-h-[150px] text-lg"
                          />
                        </div>
                      </div>

                      <Button type="submit" size="lg" className="text-lg">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription className="text-lg">Here's how you can reach us directly.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Address</h3>
                      <p className="text-base">
                        Musikfest Wannsee Office
                        <br />
                        Am Großen Wannsee 10
                        <br />
                        14109 Berlin, Germany
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-base">+49 30 123 456 789</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9:00-17:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-base">info@musikfest-wannsee.de</p>
                      <p className="text-sm text-gray-500">We'll respond as soon as possible</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="bg-primary text-white p-2 rounded-full hover:bg-primary-600 transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="bg-primary text-white p-2 rounded-full hover:bg-primary-600 transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="bg-primary text-white p-2 rounded-full hover:bg-primary-600 transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-2xl">Festival Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday, June 15</span>
                      <span>14:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Tuesday, June 16</span>
                      <span>10:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Wednesday, June 17</span>
                      <span>10:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Thursday, June 18</span>
                      <span>10:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Friday, June 19</span>
                      <span>10:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday, June 20</span>
                      <span>10:00 - 23:30</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Find Us</h2>
          <div className="bg-beige-50 p-4 rounded-lg shadow-md">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden bg-gray-200">
              {/* This would be replaced with an actual map component */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-xl text-gray-500">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg mb-4">
              The festival takes place at various venues around the beautiful Wannsee area in Berlin.
            </p>
            <Button asChild variant="outline" size="lg">
              <a href="https://maps.google.com/?q=Wannsee+Berlin" target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-beige-50 relative overflow-hidden">
        <LightParallaxBackground />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Find answers to common questions about Musikfest Wannsee.</p>
          <Button asChild size="lg" className="text-lg">
            <Link href="/tickets#faq">View FAQ</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
