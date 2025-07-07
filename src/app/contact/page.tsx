"use client"

import type React from "react"

import { useState } from "react"
export default function Page() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-b from-[#110942] to-[#050026] text-white font-sans"
    >
      {/* Header */}
      <div className="px-5 md:px-20 py-10 md:py-20 relative w-full py-16 h-[370px] flex items-center justify-center mb-[150px]" style={{ background: "linear-gradient( #110942 80%)", backgroundImage: "url('/assets/image/contact/contact_1.svg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "bottom" }}>
        <div className=" "
       >
          <h1 className="text-5xl font-bold text-white text-center">Contact Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-2 sm:px-5 md:px-20 py-6 sm:py-10 md:py-20 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-16">
          {/* Contact Form */}
          <div className="">
            <div className="mb-4 sm:mb-10">
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">Get In Touch</h2>
              <p className="text-gray-400 text-sm sm:text-base">All fields are required</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-8" >
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-white text-sm font-medium mb-3">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="w-full h-14 px-4 bg-transparent border-2 border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none rounded-lg text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-white text-sm font-medium mb-3">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="w-full h-14 px-4 bg-transparent border-2 border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none rounded-lg text-base"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-3">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full h-14 px-4 bg-transparent border-2 border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none rounded-lg text-base"
                  required
                />
              </div>

              {/* Topic */}
              <div>
                <label htmlFor="topic" className="block text-white text-sm font-medium mb-3">
                  Topic
                </label>
                <select
                  id="topic"
                  value={formData.topic}
                  onChange={(e) => handleInputChange("topic", e.target.value)}
                  className="w-full h-14 px-4 bg-transparent border-2 border-gray-600 text-white focus:border-purple-500 focus:outline-none rounded-lg text-base"
                  required
                >
                  <option value="" className="bg-gray-800 text-gray-500">
                    Choose your message topic
                  </option>
                  <option value="general" className="bg-gray-800 text-white">
                    General Inquiry
                  </option>
                  <option value="support" className="bg-gray-800 text-white">
                    Technical Support
                  </option>
                  <option value="business" className="bg-gray-800 text-white">
                    Business Partnership
                  </option>
                  <option value="feedback" className="bg-gray-800 text-white">
                    Feedback
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none rounded-lg text-base resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 sm:pt-4">
              <a href="/contact" className="inline-flex px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow">Submit Message</a>

              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-4 sm:lg:pl-8 mx-auto ">
            <div
              className="rounded-2xl p-4 sm:p-10 border border-purple-700/20 flex flex-col h-full"
              style={{ background: "linear-gradient(135deg, #110942 0%, #6D05B8 100%)", borderWidth: '0.5px' }}
            >
              <div className="flex items-center space-x-6 flex-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
                  {/* Address Icon (e.g., Map Pin) */}
                  <img alt="contact_1" className="relative z-10" src="/assets/icon/contact/contact_1.svg" />
                </div>
                <div>
                  <div className="font-bold uppercase text-white text-lg mb-1">Our Address</div>
                  <div className="text-white/80 text-base leading-snug">Horizon 2 Estate, B6 U3, Meadow hall way, Lekki, Lagos</div>
                </div>
              </div>
              <div className="flex items-center space-x-6 flex-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
                  {/* Phone Icon */}
                  <img alt="contact_2" className="relative z-10" src="/assets/icon/contact/contact_2.svg" />
                </div>
                <div>
                  <div className="font-bold uppercase text-white text-lg mb-1">Phone Number(s)</div>
                  <div className="text-white/80 text-base leading-snug">+2348128447600, +19452470511</div>
                </div>
              </div>
              <div className="flex items-center space-x-6 flex-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
                  {/* Email Icon */}
                  <img alt="contact_3" className="relative z-10" src="/assets/icon/contact/contact_3.svg" />
                </div>
                <div>
                  <div className="font-bold uppercase text-white text-lg mb-1">Email Address</div>
                  <div className="text-white/80 text-base leading-snug">support@krossnetwork.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-6 flex-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-full  flex items-center justify-center">
                  {/* Paper Plane Icon */}
                  <img alt="contact_4" className="relative z-10" src="/assets/icon/contact/contact_4.svg" />
                </div>
                <div>
                  <div className="font-bold uppercase text-white text-lg mb-3">Social Media</div>
                  <div className="flex space-x-6 text-white text-2xl">
                    {/* Social icons: Instagram, LinkedIn, Facebook, X (Twitter) */}
                    <a href="#" aria-label="Instagram"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/></svg></a>
                    <a href="#" aria-label="LinkedIn"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75s1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47c-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54c3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
                    <a href="#" aria-label="Facebook"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788c1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/></svg></a>
                    <a href="#" aria-label="Twitter"> <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.95c-.8.36-1.67.61-2.58.72a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08 4.48 4.48 0 0 0-7.64 4.08A12.72 12.72 0 0 1 3.1 4.86a4.48 4.48 0 0 0 1.39 5.98c-.7-.02-1.36-.21-1.94-.53v.05a4.48 4.48 0 0 0 3.6 4.4c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 2 19.54a12.72 12.72 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.2 0-.39-.01-.58a9.1 9.1 0 0 0 2.24-2.32z"/></svg></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
