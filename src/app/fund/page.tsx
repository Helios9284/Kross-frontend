"use client"
import React from 'react';
import { useRef, useState } from "react";
export default function Page() {
  const cardRowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardCount = 3;
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
      className="min-h-screen bg-[#050026]">
      {/* Hero Section */}
      <section className="text-white flex flex-col lg:flex-row relative overflow-hidden w-full">
        <div className="px-2 sm:px-5 md:px-20 py-6 sm:py-10 md:py-20 relative w-full sm:w-screen">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 w-full">
            {/* Left column */}
            <div className="w-full lg:w-3/5">
              
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-center md:text-left">
              Kross Ecosystem Fund
              </h1>
              <p className="text-base sm:text-xl text-gray-300 mb-4 sm:mb-10 w-full md:w-2/3 text-center md:text-left">
              Kross Ecosystem Fund supports the development of the Kross blockchain ecosystem by providing funding,
              resources, and strategic guidance to innovative projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200  inline-block">
                <a
                  href="#"
                  className="inline-flex px-8 py-4 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200  inline-block"
                >
                  Get Started
                </a>
              </div>
              <div className="inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200  inline-block">
                <a
                  href="#"
                  className="inline-flex px-8 py-4 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200  inline-block"
                >
                  Learn More
                </a>
              </div>
              </div>
            </div>
            {/* Right column */}
            <div className="w-full lg:w-2/5 flex justify-center relative mt-4 lg:mt-0">
              <div className="absolute inset-0 bg-[#FF00B8]/30 blur-3xl"></div>
              <div className="relative w-40 h-40 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <img
                  alt="Blockchain 3D Cube Visualization"
                  width={500}
                  height={500}
                  src="/assets/image/fund/fund_1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Alliance Section */}
      <section className="text-white overflow-hidden relative bg-[#050026] h-auto min-h-[600px] md:h-[800px]" style={{ backgroundImage: "url('/assets/image/fund/Component.svg')", backgroundSize: "auto", backgroundRepeat: "no-repeat", backgroundPosition: "top center" }}>
        {/* Background Glows */}
        <div className="absolute -bottom-[120px] left-0 w-[320px] sm:w-[420px] md:w-[520px] h-[200px] sm:h-[300px] md:h-[400px] bg-[#6D05B8]/20 blur-3xl rounded-full"></div>
        <div className="container mx-auto p-5 md:p-20 relative">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 max-w-4xl mx-auto leading-tight">An international alliance of forward-thinking investors and incubators.</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">Pioneering The Shift In Kross Decentralized Financial System</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-4 w-full">
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10 w-32 sm:w-40 md:w-48" src="/assets/image/partner/2.svg" />
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10 w-32 sm:w-40 md:w-48" src="/assets/image/partner/1.svg" />
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10 w-32 sm:w-40 md:w-48" src="/assets/image/partner/4.svg" />
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-4 w-full">
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10 w-32 sm:w-40 md:w-48" src="/assets/image/partner/3.svg" />
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10 w-32 sm:w-40 md:w-48" src="/assets/image/partner/6.svg" />
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10 w-32 sm:w-40 md:w-48" src="/assets/image/partner/5.svg" />
          </div>
        </div>
      </section>
      {/* KEF Glimpse Section */}
      <section className="w-full py-10 md:py-20 relative flex flex-col items-center justify-center bg-[#050026] px-2 sm:px-5 md:px-20">
        <div className="w-full py-6 md:py-10">
          <div className="max-w-4xl mx-auto px-2 sm:px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-4 md:mb-6 text-center">
              A Glimpse Into The Kross <br />
              Ecosystem Fund (KEF)
            </h3>
            <p className="text-base sm:text-lg md:text-[24px] text-gray-300 text-center">
              The KEF Was Created To Fast-Track The Growth And Adoption Of Impactful Projects Within The Kross Ecosystem.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full px-2 sm:px-4 mt-8 md:mt-[64px]">
          {/* Card 1 */}
          <div className="border border-[#4B6794] rounded-[16px] p-10 flex flex-col items-start gap-6 bg-[#110942] min-h-[220px]">
            <span className="mb-2">{/* User icon */}
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10" src="/assets/icon/fund/1.svg" />
            </span>
            <span className="text-[24px] font-medium text-white leading-snug text-left">KYC And AML Checks To Keep Users And The Network Safe.</span>
          </div>
              {/* Card 2 */}
          <div className="border border-[#4B6794] rounded-[16px] p-10 flex flex-col items-start gap-6 bg-[#110942]/60 min-h-[220px]">
            <span className="mb-2">{/* Visibility icon */}
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10" src="/assets/icon/fund/2.svg" />
            </span>
            <span className="text-[24px] font-medium text-white leading-snug text-left">Complete Visibility Of Funds Through On-Chain Transactions.</span>
              </div>
              {/* Card 3 */}
          <div className="border border-[#4B6794] rounded-[16px] p-10 flex flex-col items-start gap-6 bg-[#110942]/60 min-h-[220px]">
            <span className="mb-2">{/* Dollar icon */}
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10" src="/assets/icon/fund/3.svg" />
            </span>
            <span className="text-[24px] font-medium text-white leading-snug text-left">Peace Of Mind For Stakers With On-Chain Coverage And Insurance Safeguards.</span>
              </div>
              {/* Card 4 */}
          <div className="border border-[#4B6794] rounded-[16px] p-10 flex flex-col items-start gap-6 bg-[#110942]/60 min-h-[220px]">
            <span className="mb-2">{/* Audit icon */}
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10" src="/assets/icon/fund/4.svg" />
            </span>
            <span className="text-[24px] font-medium text-white leading-snug text-left">Audited For Safety. Built For Scale. Trusted By Institutions.</span>
          </div>
        </div>
        <div className="mt-10 inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200  inline-block">
          <a
            href="#"
            className="inline-flex px-8 py-4 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200  inline-block"
          >
            Join Now
          </a>
        </div>

      </section>
      {/* Possibilities Section */}
      <section className="text-white overflow-hidden relative bg-[#050026]">
        {/* Background Glows */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 flex gap-2 sm:gap-4">
          <div className="w-[180px] sm:w-[250px] md:w-[350px] h-[180px] sm:h-[250px] md:h-[350px]  bg-gradient-to-r from-[#6D05B8]/40 to-[#FF00B8]/10 blur-3xl rounded-full"></div>
          {/* <div className="w-[250px] h-[250px] bg-[#487DF1]/20 blur-3xl rounded-full"></div> */}
        </div>
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
              <div className="w-[678px]  md:w-[700px] h-[362px] md:h-[400px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="flex flex-col-reverse md:flex-row-reverse h-full">
                  {/* Left: Image */}
                  <div className="relative w-full md:w-[300px] h-[250px] md:h-full flex-shrink-0">
                    <img
                      alt="DeFi"
                      className="object-cover absolute inset-0 w-full h-full"
                      src="/assets/image/fund/fund_process_3.svg"
                    />
                  </div>
                  {/* Right: Content */}
                  <div className="flex flex-col py-6 px-0 md:px-8 w-full">
                    <h3 className="text-4xl md:text-[40px] font-bold mb-4">Apply</h3>
                    <p className="text-gray-300 text-[16px]  leading-relaxed tracking-[0px]">
                    We welcome builders at every stage, whether you&apos;re just starting or scaling. We&apos;re on the lookout for bold, visionary teams ready to shape the future of real-world asset (RWA) applications and the infrastructure behind them.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="w-[678px]  md:w-[700px] h-[362px] md:h-[400px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="flex flex-col-reverse md:flex-row-reverse h-full">
                  <div className="relative w-full md:w-[300px] h-[250px] md:h-full flex-shrink-0">
                    <img alt="Tokenization" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/fund/fund_process_1.svg" />
                  </div>
                  <div className="flex flex-col py-6 px-0 md:px-8 w-full">
                    <h3 className="text-4xl md:text-[40px] font-bold mb-4">Present your Ideas</h3>
                    <p className="text-gray-300 text-[16px]  leading-relaxed tracking-[0px]">Submit your deck and a brief introduction, we welcome early-stage concepts. If your project resonates with our goals, we&apos;ll circulate it among our investment partners for further consideration.</p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="w-[678px]  md:w-[700px] h-[362px] md:h-[400px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="flex flex-col-reverse md:flex-row-reverse h-full">
                  <div className="relative w-full md:w-[300px] h-[250px] md:h-full flex-shrink-0">
                    <img alt="Tokenization" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/fund/fund_process_2.svg" />
                  </div>
                  <div className="flex flex-col py-6 px-0 md:px-8 w-full">
                    <h3 className="text-4xl md:text-[40px] font-bold mb-4">Evaluation</h3>
                    <p className="text-gray-300 text-[16px] leading-relaxed tracking-[0px]">We evaluate projects across multiple dimensions, focusing on strong teams with a well-defined execution plan. If selected, you&apos;ll gain access to funding, mentorship, and our extensive network. The process includes in-depth discussions with our investment team and capital partners.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Carousel Pagination & Navigation */}
      <div className="flex flex-col items-center pb-[20px]">
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
        <div className="flex gap-12">
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
                <div className="inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200  inline-block">
                <a
                  href="#"
                  className="inline-flex px-8 py-4 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200  inline-block"
                >
                  Join Now
                </a>
              </div>
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
