"use client"
import React from 'react';
import { useRef, useState } from "react";
export default function Page() {
  const cardRowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardCount = 2;
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
  
  const scrollToCard = (idx: number) => {
    if (cardRowRef.current) {
      const cardWidth = cardRowRef.current.children[0].clientWidth + 32; // 32 = gap-8
      cardRowRef.current.scrollTo({
        left: cardWidth * idx,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1;
      setActiveIndex(newIndex);
      scrollToCard(newIndex);
    }
  };

  const handleNext = () => {
    if (activeIndex < cardCount - 1) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      scrollToCard(newIndex);
    }
  };

  const handleDotClick = (idx: number) => {
    setActiveIndex(idx);
    scrollToCard(idx);
  };


  return (
    <div
      className="min-h-screen w-full bg-[#110942]" style={{fontFamily: 'lato, sans-serif'}}>
      {/* Hero Section */}
      <div className="h-[300px] sm:h-[400px] md:h-[600px] bg-[#050026]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center ">
          {/* Left column: Text and buttons */}
          <div className="relative ">
            <div
              className="w-full h-full rounded-2xl min-h-[120px] sm:min-h-[200px] md:min-h-[300px]"
              style={{ background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 50%, #8b5cf6 100%)" }}
            />
            
          </div>
          {/* Right column: Gradient box */}
          <div className="space-y-4 sm:space-y-8 container px-2 sm:px-5 md:px-20 py-6 sm:py-10 md:py-20 ">
            <div className="flex flex-col items-center w-full">
              {/* Top Row */}
              <div className="flex w-full justify-between items-center max-w-xs sm:max-w-xl mx-auto mb-2 sm:mb-4">
                <span className="text-white text-lg sm:text-[30px] font-normal">Kross Network ×</span>
                <span className="text-white text-base sm:text-2xl font-normal">Cloud</span>
              </div>
            </div>
            {/* Main Title */}
            <h1 className="text-2xl sm:text-[64px] font-bold text-white text-center mb-2 sm:mb-6">
              RWA Launchpad
            </h1>
            {/* Button */}
            <button
              className="px-6 sm:px-10 py-2 sm:py-4 text-base sm:text-lg font-semibold rounded-lg text-white mt-1 sm:mt-2"
              style={{
                background: "linear-gradient(90deg, #e91e63 0%, #9c27b0 100%)",
              }}
            >
              Coming Soon!
            </button>
          </div>
        </div>
      </div>
      <div className="py-8 sm:py-[112px] px-2 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-8 leading-tight">Why Join The RWA Launchpad</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-10">
            An Accelerator Program Supported By Google Cloud, Designed To Empower AI Builders And Startups With
            Investment Capital, Mentorship, Dedicated Support And More.
          </p>
          <button
            className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-lg text-white"
            style={{ background: "linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)" }}
          >
            News
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {/* Web3 & AI Expert Guidance */}
          <div
            className="p-8 rounded-2xl border border-purple-500/30"
            style={{ background: "rgba(139, 69, 199, 0.1)" }}
          >
            <div className="mb-6">
              <img alt="Feature 4" src="/assets/icon/rwa/1.svg" />
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
                  Enjoy access to Google Cloud&aposs extensive resources, including project credits, technical training,
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
            <img alt="Feature 4" src="/assets/icon/rwa/2.svg" />

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
              <img alt="Feature 4" src="/assets/icon/rwa/3.svg" />
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
              <img alt="Feature 4" src="/assets/icon/rwa/4.svg" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">Choose your Tracks</h2>
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
              <div className="w-[678px]  md:w-[700px] h-[362px] md:h-[400px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="flex flex-col-reverse md:flex-row-reverse h-full">
                  {/* Left: Image */}
                  <div className="relative w-full md:w-[300px] h-[250px] md:h-full flex-shrink-0">
                    <img
                      alt="DeFi"
                      className="object-cover absolute inset-0 w-full h-full"
                      src="/assets/image/fund/fund_process_1.svg"
                    />
                  </div>
                  {/* Right: Content */}
                  <div className="flex flex-col justify-center py-6 px-0 md:px-8 w-full">
                    <div>
                      <h2 className="text-[24px] font-bold text-white mb-1">Infrastructure</h2>
                      <div className="text-[16px] uppercase text-gray-400 mb-4 tracking-widest">Focus Area</div>
                      <h3 className="text-[24px] font-semibold text-white mb-1">Ecosystem Expansion</h3>
                      <div className="text-[16px] uppercase text-gray-400 mb-2 tracking-widest">Examples</div>
                      <ul className="list-disc list-inside text-white text-base space-y-1 mb-6">
                        <li>Oracles</li>
                        <li>Explorers</li>
                        <li>Dev Tooling</li>
                      </ul>
                    </div>
                    <button className="mt-auto w-fit px-6 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="w-[678px]  md:w-[700px] h-[362px] md:h-[400px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="flex flex-col-reverse md:flex-row-reverse h-full">
                  <div className="relative w-full md:w-[300px] h-[250px] md:h-full flex-shrink-0">
                    <img alt="Tokenization" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/rwa/rwa_2.svg" />
                  </div>
                  <div className="flex flex-col justify-center py-6 px-0 md:px-8 w-full">
                    <div>
                      <h2 className="text-[24px] font-bold text-white mb-1">Tokenization</h2>
                      <div className="text-[16px] uppercase text-gray-400 mb-4 tracking-widest">Focus Area</div>
                      <h3 className="text-[24px] font-semibold text-white mb-1">Bringing assets on chain</h3>
                      <div className="text-[16px] uppercase text-gray-400 mb-2 tracking-widest">Examples</div>
                      <ul className="list-disc list-inside text-white text-[14px] space-y-1 mb-6">
                        <li>Decentralised Identity Solutions</li>
                        <li>RWA-backed borrowing and lending</li>
                        <li>Secondary markets for RWAs</li>
                      </ul>
                    </div>
                    <button className="mt-auto w-fit px-6 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
              {/* Carousel Pagination & Navigation */}
      <div className="flex flex-col items-center bg-[#050026]">
        {/* Dots */}
        <div className="flex gap-4 mb-8">
          {Array.from({ length: cardCount }).map((_, idx) => (
            <button
              key={idx}
              className={`w-4 h-4 rounded-full transition ${activeIndex === idx ? "bg-[#A020F0]" : "bg-gray-300"}`}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to card ${idx + 1}`}
            />
          ))}
        </div>
        {/* Arrows */}
        <div className="flex gap-12 mb-10">
          {/* Left Arrow */}
          <button
            className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center group transition hover:border-[#A020F0] transition"
            onClick={handlePrev}
            disabled={activeIndex === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 group-hover:stroke-[#A020F0] transition">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          {/* Right Arrow */}
          <button
            className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center group transition  hover:border-[#A020F0] transition"
            onClick={handleNext}
            disabled={activeIndex === cardCount - 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 group-hover:stroke-[#A020F0] transition">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
      {/* Program Timeline */}
      <div className="p-10 mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Program Benefits</h1>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Benefit 1 */}
          <div className="border border-gray-700 rounded-2xl p-8 bg-gray-900/20">
            <div className="mb-6">
              <img alt="Feature 4" src="/assets/icon/rwa/benefit/1.svg" />
            </div>
            <h3 className="text-xl font-bold mb-4 leading-tight">12 Weeks Of Hands-On Mentorship From Web3 Veterans</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Participants will receive direct guidance from experienced Web3 professionals, gaining insights into best
              practices, industry trends, and technical expertise.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="border border-gray-700 rounded-2xl p-8 bg-gray-900/20">
            <div className="mb-6">
              <img alt="Feature 4" src="/assets/icon/rwa/benefit/2.svg" />
            </div>
            <h3 className="text-xl font-bold mb-4 leading-tight">Access To The Google For Startups Cloud Program</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Selected participants can access Google&apos;s Web3 and AI experts, up to $200,000 USD Google Cloud and
              Firebase credit and includes technical training, business support and Google-wide offers.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="border border-gray-700 rounded-2xl p-8 bg-gray-900/20">
            <div className="mb-6">
              <img alt="Feature 4" src="/assets/icon/rwa/benefit/3.svg" />
            </div>
            <h3 className="text-xl font-bold mb-4 leading-tight">Compliance Guidance</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Receive expert support from the KROSS team to navigate the regulatory landscape, ensuring projects adhere
              to relevant compliance standards and best practices.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="border border-gray-700 rounded-2xl p-8 bg-gray-900/20">
            <div className="mb-6">
              <img alt="Feature 4" src="/assets/icon/rwa/benefit/4.svg" />
            </div>
            <h3 className="text-xl font-bold mb-4 leading-tight">Investor Pitch Preparation And Demo Day Access</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Train with the KROSS team on investor pitching, refining business models, attend demo day opportunities
              for funding and networking.
            </p>
          </div>
        </div>

        {/* Apply Now Button */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            Apply Now
          </button>
        </div>
      </div>
      {/* Join the RWA Revolution*/}
      <div className="p-10 mx-auto">  
        {/* Header */}
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16">Program Timeline</h1>

        <div className="space-y-5 md:space-y-10">
          {/* Applications Open - Left Aligned on Desktop, Full Width on Mobile */}
          <div className="w-full lg:w-2/3 lg:ml-0">
            <div className="border border-gray-700 rounded-xl md:rounded-2xl p-4 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
                {/* Content */}
                <div className="order-2 lg:order-1">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">Applications Open</h2>
                  <p className="text-gray-400 text-base md:text-lg mb-4 md:mb-6">20 Feb - 6 Apr 2025</p>
                  <ul className="space-y-2 mb-4 md:mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1 text-xs md:text-sm">•</span>
                      <span className="text-xs md:text-sm">Welcome to KROSS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1 text-xs md:text-sm">•</span>
                      <span className="text-xs md:text-sm">Get to know the accelerator team and other projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1 text-xs md:text-sm">•</span>
                      <span className="text-xs md:text-sm">Start preparing to be accelerated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1 text-xs md:text-sm">•</span>
                      <span className="text-xs md:text-sm">Regular office hours to learn more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1 text-xs md:text-sm">•</span>
                      <span className="text-xs md:text-sm">Intro sessions to get a head start</span>
                    </li>
                  </ul>
                  <p className="text-xs md:text-sm text-gray-400">
                    <span className="font-semibold">Reminder:</span> The sooner you apply, the higher your approval
                    chances
                  </p>
                </div>

                {/* Icon Card */}
                <div className="flex justify-center order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl md:rounded-2xl p-4 md:p-8 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                    <div className="bg-white/20 rounded-lg md:rounded-xl p-2 md:p-4">
                      <svg className="w-8 h-8 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cohort Announcement - Right Aligned on Desktop, Full Width on Mobile */}
          <div className="w-full lg:w-2/3 lg:ml-auto">
            <div className="border border-gray-700 rounded-xl md:rounded-2xl p-4 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
                {/* Icon Card */}
                <div className="flex justify-center order-1">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl md:rounded-2xl p-4 md:p-8 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                    <div className="bg-white/20 rounded-lg md:rounded-xl p-2 md:p-4">
                      <svg className="w-8 h-8 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="order-2">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">Cohort Announcement</h2>
                  <p className="text-gray-400 text-base md:text-lg mb-4 md:mb-6">18 May 2025</p>
                  <p className="text-xs md:text-sm mb-4">
                    Welcome to the cohort! Acceleration begins. Sessions include:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1 text-xs md:text-sm">•</span>
                      <span className="text-xs md:text-sm">Tokenomics and Token Launching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1 text-xs md:text-sm">•</span>
                      <span className="text-xs md:text-sm">Business leadership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1 text-xs md:text-sm">•</span>
                      <span className="text-xs md:text-sm">Fund raising preparation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Dubia Kickoff Summit - Left Aligned on Desktop, Full Width on Mobile */}
          <div className="w-full lg:w-2/3 lg:ml-0">
            <div className="border border-gray-700 rounded-xl md:rounded-2xl p-4 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
                {/* Content */}
                <div className="order-2 lg:order-1">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">Dubia Kickoff Summit</h2>
                  <p className="text-gray-400 text-base md:text-lg mb-4 md:mb-6">18 May 2025</p>
                  <p className="text-xs md:text-sm mb-4">
                    Welcome to the cohort! Acceleration begins. Sessions include:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1 text-xs md:text-sm">•</span>
                      <span className="text-xs md:text-sm">Tokenomics and Token Launching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1 text-xs md:text-sm">•</span>
                      <span className="text-xs md:text-sm">Business leadership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1 text-xs md:text-sm">•</span>
                      <span className="text-xs md:text-sm">Fund raising preparation</span>
                    </li>
                  </ul>
                </div>

                {/* Icon Card */}
                <div className="flex justify-center order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl md:rounded-2xl p-4 md:p-8 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                    <div className="bg-white/20 rounded-lg md:rounded-xl p-2 md:p-4">
                      <svg className="w-8 h-8 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.81,14.12L5.64,11.29L8.47,14.12L7.06,15.53L3.5,12L7.06,8.47L8.47,9.88L5.64,12.71L2.81,9.88L1.39,11.29L4.22,14.12L1.39,16.95L2.81,18.36L5.64,15.53L8.47,18.36L9.88,16.95L7.05,14.12L9.88,11.29L8.47,9.88L5.64,12.71L2.81,9.88M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Join the RWA Revolution*/}
      <div className="relative text-white overflow-hidden bg-[#050026]">
        <div className="absolute -top-[120px] left-0 w-[520px] h-[400px] bg-[#FF00B866]/50 blur-3xl rounded-full"></div>
        
        <div className="container mx-auto px-5 md:px-20 py-[120px] relative" style={{backgroundImage: "url('/assets/image/rwa/3.svg')", backgroundSize: "40%", backgroundPosition: 'right bottom', backgroundRepeat: "no-repeat" }}>
          <div className="w-full md:max-w-5xl mx-auto">
            <div className="bg-[#4839A429] rounded-[16px] p-6 px-10 border border-[#77777775] backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-center">Join the RWA Revolution</h2>
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
