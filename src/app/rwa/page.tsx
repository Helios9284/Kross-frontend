"use client"
import React from 'react';
import { useRef, useState } from "react";
export default function Page() {
  const cardRowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (cardRowRef.current?.offsetLeft || 0));
    setScrollLeft(cardRowRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (cardRowRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.2; // scroll speed
    if (cardRowRef.current) {
      cardRowRef.current.scrollLeft = scrollLeft - walk;
    }
  };
  return (
    <div
      className="min-h-screen w-full bg-[#110942]">
      {/* Hero Section */}
      <div className="h-[600px] bg-[#050026]">
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          {/* Left column: Text and buttons */}
          <div className="relative ">
            <div
              className="w-full h-full rounded-2xl"
              style={{ background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 50%, #8b5cf6 100%)" }}
            />
            
          </div>
          {/* Right column: Gradient box */}
          <div className="space-y-8 container px-5 md:px-20 py-10 md:py-20 ">
            <div className="flex flex-col items-center w-full">
              {/* Top Row */}
              <div className="flex w-full justify-between items-center max-w-xl mx-auto mb-4">
                <span className="text-white text-[30px] font-normal">Kross Network ×</span>
                <span className="text-white text-2xl font-normal">Cloud</span>
              </div>
            </div>
            {/* Main Title */}
            <h1 className="text-[64px] font-bold text-white text-center mb-6">
              RWA Launchpad
            </h1>
            {/* Button */}
            <button
              className="px-10 py-4 text-lg font-semibold rounded-lg text-white mt-2"
              style={{
                background: "linear-gradient(90deg, #e91e63 0%, #9c27b0 100%)",
              }}
            >
              Coming Soon!
            </button>
          </div>
        </div>
      </div>
      <div className="py-[112px] px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">Why Join The RWA Launchpad</h1>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
            An Accelerator Program Supported By Google Cloud, Designed To Empower AI Builders And Startups With
            Investment Capital, Mentorship, Dedicated Support And More.
          </p>
          <button
            className="px-8 py-3 text-base font-semibold rounded-lg text-white hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)" }}
          >
            News
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Web3 & AI Expert Guidance */}
          <div
            className="p-8 rounded-2xl border border-purple-500/30"
            style={{ background: "rgba(139, 69, 199, 0.1)" }}
          >
            <div className="mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Web3 & AI Expert Guidance</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Receive support across smart contracts, tokenomics, market maker selection, listing processes, legal,
                  compliance and more from KROSS
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Enjoy access to Google Cloud's extensive resources, including project credits, technical training,
                  business support and Google-wide offers
                </p>
              </div>
            </div>
          </div>

          {/* Google Cloud-Powered */}
          <div
            className="p-8 rounded-2xl border border-purple-500/30"
            style={{ background: "rgba(139, 69, 199, 0.1)" }}
          >
            <div className="mb-6">
              <div className="text-2xl font-bold text-gray-300">Google Cloud</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Google Cloud-Powered</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Leverage the KROSS Testnet Faucet on Google Cloud Web3 portal
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">Secure, scalable Web3 stack</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Technical training and business support from Google engineers
                </p>
              </div>
            </div>
          </div>

          {/* $200k In Cloud Credits */}
          <div
            className="p-8 rounded-2xl border border-purple-500/30"
            style={{ background: "rgba(139, 69, 199, 0.1)" }}
          >
            <div className="mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">$200k In Cloud Credits</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Up to $200,000 USD in cloud credits over two years for qualifying startups
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Qualifying startups must be entirely focused on building breakthrough RWA solutions
                </p>
              </div>
            </div>
          </div>

          {/* $200K RWA Market */}
          <div
            className="p-8 rounded-2xl border border-purple-500/30"
            style={{ background: "rgba(139, 69, 199, 0.1)" }}
          >
            <div className="mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">$200K RWA Market</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Enter the market at a prime time for the tokenization of real-world assets
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  First mover advantage to institutional RWA ecosystem
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Align your project with institutional-grade opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Possibilities Section */}
      <section className="text-white overflow-hidden relative bg-[#050026]">
        {/* Background Glows */}
        <div className="absolute -top-[120px] left-0 w-[520px] h-[400px] bg-[#FF00B866]/50 blur-3xl rounded-full"></div>
        <div className="absolute top-0 left-[70px] w-[50px] h-[50px] bg-[#487DF1]/20 blur-3xl rounded-full"></div>
        <div className="container mx-auto p-5 md:p-20 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">Our Process</h2>
          </div>
          <div className="relative w-full">
            <div
              ref={cardRowRef}
              className="flex gap-8 w-full cursor-grab active:cursor-grabbing select-none pb-4"
              style={{ overflowX: "hidden" }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {/* Card 1 */}
              <div className="bg-[#0a0726] border border-[#6D28D9] rounded-2xl p-8 flex flex-col md:flex-row gap-8 shadow-lg" style={{boxShadow: '0 0 0 1.5px #6D28D9'}}>
                {/* Left Column */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Infrastructure</h2>
                    <div className="uppercase text-sm text-gray-400 mb-6 tracking-widest">Focus Area</div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Ecosystem Expansion</h3>
                    <div className="uppercase text-xs text-gray-400 mb-2">Examples</div>
                    <ul className="list-disc list-inside text-gray-200 mb-8 space-y-1 pl-2">
                      <li>Oracles</li>
                      <li>Explorers</li>
                      <li>Dev Tooling</li>
                    </ul>
                  </div>
                  <button
                    className="px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 shadow-md w-[150px] text-center"
                  >
                    Apply Now
                  </button>
                </div>
                {/* Right Column */}
                <div className="relative w-full md:w-[300px] h-[250px] md:h-full flex-shrink-0">
                    <img
                      alt="DeFi"
                      className="object-cover absolute inset-0 w-full h-full"
                      src="/assets/image/card1.svg"
                    />
                </div>
              </div>
             {/* Card 2 */}
             <div className="w-full bg-[#0a0726] border border-[#6D28D9] rounded-2xl p-8 flex flex-col md:flex-row gap-8 shadow-lg" style={{boxShadow: '0 0 0 1.5px #6D28D9'}}>
                {/* Left Column */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Infrastructure</h2>
                    <div className="uppercase text-sm text-gray-400 mb-6 tracking-widest">Focus Area</div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Ecosystem Expansion</h3>
                    <div className="uppercase text-xs text-gray-400 mb-2">Examples</div>
                    <ul className="list-disc list-inside text-gray-200 mb-8 space-y-1 pl-2">
                      <li>Oracles</li>
                      <li>Explorers</li>
                      <li>Dev Tooling</li>
                    </ul>
                  </div>
                  <button
                    className="px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 shadow-md w-[150px] text-center"
                  >
                    Apply Now
                  </button>
                </div>
                {/* Right Column */}
                <div className="relative w-full md:w-[300px] h-[250px] md:h-full flex-shrink-0">
                    <img
                      alt="DeFi"
                      className="object-cover absolute inset-0 w-full h-full"
                      src="/assets/image/card1.svg"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      {/* Join the RWA Revolution*/}
      <div className="relative text-white overflow-hidden bg-[#050026]">
        <div className="absolute -top-[120px] left-0 w-[520px] h-[400px] bg-[#FF00B866]/50 blur-3xl rounded-full"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/image/developer-bg.svg')",
            backgroundSize: '40%',
            backgroundPosition: 'right bottom',
            backgroundRepeat: 'no-repeat',
            opacity: 0.5,
          }}
        ></div>

        <div className="container mx-auto px-6 mt-[64px]">
        {/* Header */}
        <h1 className="text-4xl lg:text-5xl font-bold text-white text-center mb-20">Program Timeline</h1>

        {/* Timeline Items */}
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Applications Open - Left side */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div
              className="p-8 rounded-2xl border border-purple-500/30"
              style={{ background: "rgba(139, 69, 199, 0.1)" }}
            >
              <h2 className="text-2xl font-bold text-white mb-2">Applications Open</h2>
              <p className="text-lg text-gray-300 mb-6">20 Feb - 6 Apr 2025</p>

              <div className="space-y-2 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Welcome To KROSS</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Get to know the accelerator team and other projects</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Start preparing to be accelerated</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Receive office hours to learn more</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Intro sessions to get a head start</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm">Reminder: The sooner you apply, the higher your approval chances</p>
            </div>

            <div className="flex justify-center">
              <div
                className="w-80 h-64 rounded-2xl"
                style={{ background: "linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)" }}
              ></div>
            </div>
          </div>

          {/* Cohort Announcement - Right side */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center order-2 lg:order-1">
              <div
                className="w-80 h-64 rounded-2xl"
                style={{ background: "linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)" }}
              ></div>
            </div>

            <div
              className="p-8 rounded-2xl border border-purple-500/30 order-1 lg:order-2"
              style={{ background: "rgba(139, 69, 199, 0.1)" }}
            >
              <h2 className="text-2xl font-bold text-white mb-2">Cohort Announcement</h2>
              <p className="text-lg text-gray-300 mb-6">18 May 2025</p>

              <p className="text-gray-300 text-sm mb-2">Welcome to the cohort! Acceleration begins.</p>
              <p className="text-gray-300 text-sm mb-4">Sessions include:</p>

              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Tokenomics and Token Launching</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Business leadership</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Fund raising preparation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dubai Kickoff Summit - Left side */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div
              className="p-8 rounded-2xl border border-purple-500/30"
              style={{ background: "rgba(139, 69, 199, 0.1)" }}
            >
              <h2 className="text-2xl font-bold text-white mb-2">Dubai Kickoff Summit</h2>
              <p className="text-lg text-gray-300 mb-6">18 May 2025</p>

              <p className="text-gray-300 text-sm mb-2">Welcome to the cohort! Acceleration begins.</p>
              <p className="text-gray-300 text-sm mb-4">Sessions include:</p>

              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Tokenomics and Token Launching</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Business leadership</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Fund raising preparation</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div
                className="w-80 h-64 rounded-2xl"
                style={{ background: "linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

        <div className="container mx-auto px-5 md:px-20 py-[120px] relative">
          <div className="w-full md:max-w-5xl mx-auto">
            <div className="bg-[#4839A429] rounded-[16px] p-6 px-10 border border-[#77777775] backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-center">Begin building today, Explore the Details</h2>
                </div>
                <a href="#" className="inline-flex px-8 py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow">Developer Doc</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <section className="w-full flex flex-col  justify-center bg-[#050026] px-10 md:px-20 py-10 md:py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">FAQs</h2>
        <div className="gap-0">
          {[
            'How soon can we expect the results for KYC?',
            'Which types of assets are available on the KROSS Network?',
            'When will I know if I\'m selected?',
            'What happens if I upload more than one ID during the KYC process?',
            'Can I use multiple wallets?',
            'What network does KROSS Network operate on?'
          ].map((q, i, arr) => (
            <React.Fragment key={i}>
              <div className="flex items-center justify-between w-full px-12 py-6 text-white text-lg md:text-xl font-normal">
                <span>{q}</span>
                <span className="text-[#A259FF] text-2xl font-bold select-none ml-auto">+</span>
              </div>
              {i < arr.length - 1 && (
                <hr className="border-t border-[#29214A] mx-8 mb-[80px]  " />
                // <hr className="border-t-2 border-[#29214A] mx-8 rounded-full" />
              )}
            </React.Fragment>
          ))}
                  </div>
      </section> 
    </div>
  )
}
