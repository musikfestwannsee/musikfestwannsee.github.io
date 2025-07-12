"use client"

import type React from "react"

import { useState } from "react"
import { FacebookIcon, InstagramIcon, Mail, MapPin, Phone } from "lucide-react"
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
    <section id="contact" className="py-20 bg-gradient-to-b to-blue-50 from-teal-50 dark:from-slate-900 dark:to-teal-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Kontakt</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Have questions about Musikfest Wannsee? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 h-24">
            <Card className="border-none bg-teal-50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-white">Hier können Sie uns erreichen:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-3 mt-1" />
                  <div>
                    <p className="text-slate-600 dark:text-slate-300">
                      musikfest.wannsee@gmail.de
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
            <div className="space-y-8 h-24">
            <Card className="border-none bg-teal-50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-white">Wir sind auch auf Social Media:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-center justify-between">
                  <a href={'https://www.facebook.com/people/Musikfest-Wannsee/61558670768402/'} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" >Facebook</Button>
                  </a>
                  <a href={'http://www.instagram.com/musikfestwannsee'} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" >Instagram</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
