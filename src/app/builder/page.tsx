"use client";
import { useRef, useState } from "react";

export default function BuilderPage() {
  // Drag-to-scroll logic for possibilities section
  const cardRowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardCount = 8;

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
    <div className="min-h-screen w-full bg-gradient-to-b from-[#050026] via-[#1a0a3f] to-[#2a0a4f] text-white font-sans">
      {/* Hero Section */}
      <section className="text-white flex flex-col lg:flex-row relative overflow-hidden w-full">
        <div className="px-2 sm:px-5 md:px-20 py-6 sm:py-10 md:py-20 relative w-full sm:w-screen">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 w-full">
            {/* Left column */}
            <div className="w-full lg:w-3/5">
              <div
                className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-[24px] border-[0.5px] border-[#FFFFFFDD] bg-[#11094280] mb-4 sm:mb-8"
                style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 12px 0px inset" }}
              >
                <img
                  alt="Krosscoin for Builders"
                  width={16}
                  height={16}
                  src="/assets/icon/file-icons_buildkite.png"
                />
                <span className="text-xs sm:text-sm font-medium">Krosscoin for Builders</span>
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-center md:text-left">
                The Premier African RWA Layer 1 Blockchain Designed To Define And Enforce Real-World Regulatory Standards
              </h1>
              <p className="text-base sm:text-xl text-gray-300 mb-4 sm:mb-10 w-full md:w-2/3 text-center md:text-left">
                The Premier RWA Layer 1 Blockchain Designed To Meet And Enforce Real-World Regulatory Standards.
              </p>
              <div className="inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200  inline-block">
                <a
                  href="/explorer"
                  className="inline-flex px-8 py-4 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200  inline-block"
                >
                  Krosscoin Explorer
                </a>
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
                  src="/assets/image/builder/builder.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New section with purple blurred background glow */}
      <section className="text-white relative overflow-hidden w-full">
        {/* Background Glow */}
        <div className="absolute bottom-0 right-1/2 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[500px] rounded-full blur-[60px] sm:blur-[100px] opacity-100 bg-gradient-to-br from-[#FF00B8] to-[#6D05B8] z-[-1]" />
        <div className="container mx-auto px-2 sm:px-5 md:px-20 py-10 sm:py-20">
          <div className="text-center mb-8 sm:mb-16 w-full">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Built For Builders Like You</h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto mb-4 sm:mb-8">
              Designed For Innovation—Compliance-Ready, Secure, And Built To Extend The Capabilities Of Cosmos And Beyond.
            </p>
            <div className="inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200  inline-block">
              <a
                href="#"
                className="inline-flex px-8 py-4 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200  inline-block"
              >
                Developer Guide
              </a>
            </div>
          </div>
          <div className="px-2 sm:px-5 relative w-full relative">

          <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 z-1">
            <div className="relative w-[280px] sm:w-[350px] md:w-[450px] h-[280px] sm:h-[350px] md:h-[450px]  flex items-center justify-center">
              {/* Blurred background */}
              <div className="absolute inset-0 bg-[#EC34E0]/22 blur-3xl rounded-full z-0 pulse-move"></div>
              {/* Sharp image */}
              <img
                alt="star"
                className="relative w-full h-full z-10"
                src="/assets/star.svg"
              />
            </div>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3 sm:gap-5 ">
              {/* Left column features */}
              <div className="space-y-10">
                <div className="text-center md:text-right text-white">
                  <h3 className="text-lg md:text-2xl text-white font-semibold mb-2">Plug And Play Compliant Solutions</h3>
                  <p className="text-xs md:text-[16px] text-gray-300 leading-relaxed">
                    Build And Operate In A Regulatory Compliant And Transparent Environment With KROSS Modular Tech Stack..
                  </p>
                </div>
                <div className="text-center md:text-right text-white">
                  <h3 className="text-lg md:text-2xl text-white font-semibold mb-2">Default-Secure Programming Language</h3>
                  <p className="text-xs md:text-[16px] text-gray-300 leading-relaxed">
                    Use RIDE By Waves Blockchain To Build Secure And Robust DApps With Ease
                  </p>
                </div>
              </div>
              {/* Center icons grid */}
              <div className="flex flex-col items-center justify-between w-full gap-2 sm:gap-4 z-10">
                <div className="flex gap-2 sm:gap-3">
                  <img alt="Feature 1" width={100} height={100} className="w-16 sm:w-24 md:w-36" src="/assets/image/builder/builder_sec2_1.svg" />
                  <img alt="Feature 2" width={100} height={100} className="w-16 sm:w-24 md:w-36" src="/assets/image/builder/builder_sec2_2.svg" />
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <img alt="Feature 3" width={100} height={100} className="w-16 sm:w-24 md:w-36" src="/assets/image/builder/builder_sec2_3.svg" />
                  <img alt="Feature 4" width={100} height={100} className="w-16 sm:w-24 md:w-36" src="/assets/image/builder/builder_sec2_4.svg" />
                </div>
              </div>
              {/* Right column features */}
              <div className="space-y-10">
                <div className="text-center md:text-left text-white">
                  <h3 className="text-lg md:text-2xl font-semibold mb-2">Multi-Chain Compatible</h3>
                  <p className="text-xs md:text-[16px] text-gray-300 leading-relaxed">
                    Access To Cross-Chain Interoperability Through Cosmos Inter-Blockchain Communication Protocol (IBC)
                  </p>
                </div>
                <div className="text-center md:text-left text-white">
                  <h3 className="text-lg md:text-2xl font-semibold mb-2">HASHGREED DEX</h3>
                  <p className="text-xs md:text-[16px] text-gray-300 leading-relaxed">
                    Trade And Manage Regulated Tokenized Assets Onchain. Create And Distribute Your Tokens Within A Minute
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Possibilities Section */}
      <section className="text-white overflow-hidden relative">
        {/* Background Glows */}
        <div className="absolute top-0 right-0  flex gap-2 sm:gap-4 z-1">
          <div className="w-[380px] sm:w-[450px] md:w-[550px] h-[380px] sm:h-[450px] md:h-[550px] bg-[#EC34E0]/15 blur-3xl rounded-full"></div>
          {/* <div className="w-[250px] h-[250px] bg-[#487DF1]/20 blur-3xl rounded-full"></div> */}
        </div>
        <div className="mx-auto pl-5 md:pl-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">Explore the world of use cases that can be built atop of Krosscoin and complement the utility of the network</h2>
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
              onScroll={() => {
                if (cardRowRef.current) {
                  const cardWidth = cardRowRef.current.children[0].clientWidth + 32;
                  const idx = Math.round(cardRowRef.current.scrollLeft / cardWidth);
                  if (idx !== activeIndex) setActiveIndex(idx);
                }
              }}
            >
              {/* Card 1 */}
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="DeFi" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/builder/layout/1.svg" />
                </div>
                <div className="py-6">
                  <h3 className="text-4xl md:text-[40px] font-bold mb-4">DeFi</h3>
                  <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Build lending protocols, DEXs, yield vaults, and more—powered by seamless cross-chain asset flow and low-cost, high-speed transactions on Kross Network.</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="Tokenization" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/builder/layout/2.svg" />
                </div>
                <div className="py-6">
                  <h3 className="text-4xl md:text-[40px] font-bold mb-4">Tokenization</h3>
                  <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Bring real-world and digital assets on-chain. From real estate and art to loyalty points and in-game items, tokenize anything with Kross Network secure, scalable foundation and unlock new forms of ownership and liquidity.</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="Infrastructure" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/builder/layout/3.svg" />
                </div>
                <div className="py-6">
                  <h3 className="text-4xl md:text-[40px] font-bold mb-4">Infrastructure</h3>
                  <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Laying the groundwork for decentralized innovation by deploying scalable tools, interoperable modules, and developer-focused solutions to support apps, identities, and data across multiple chains—all on one unified network.</p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="Tokenization of real-world assets(RWA)" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/builder/layout/4.svg" />
                </div>
                <div className="py-6">
                  <h3 className="text-4xl md:text-[40px] font-bold mb-4">Tokenization of real-world assets(RWA)</h3>
                  <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Kross Network enables institutions to easily turn real-world assets into digital tokens. From art and real estate to commodities, these assets become tradable and more accessible. With secure marketplaces built on the chain, institutions can unlock new opportunities for ownership, liquidity, and investment.</p>
                </div>
              </div>
              {/* Card 5 */}
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="Identity System with Decentralized I.D (DID)" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/builder/layout/5.svg" />
                </div>
                <div className="py-6">
                  <h3 className="text-4xl md:text-[40px] font-bold mb-4">Identity System with Decentralized I.D (DID)</h3>
                  <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Use Kross Network&aposs decentralized identity tools to streamline onboarding, meet KYC/AML requirements, and verify users with confidence. Built-in support for reusable IDs and Soulbound NFTs adds an extra layer of trust and security—ideal for apps that require verified user data.</p>
                </div>
              </div>
              {/* Card 6 */}
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="Governance and continuous upgrade" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/builder/layout/6.svg" />
                </div>
                <div className="py-6">
                  <h3 className="text-4xl md:text-[40px] font-bold mb-4">Governance and continuous upgrade</h3>
                  <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Kross Network  embraces a decentralized governance model that empowers both institutions and community members to actively participate in shaping the network. This collaborative system ensures continuous improvements, giving contributors a voice in decisions while keeping the platform flexible, responsive, and future-ready.</p>
                </div>
              </div>
              {/* Card 7 */}
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="On and off-ramping with regulatory compliance" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/builder/layout/7.svg" />
                </div>
                <div className="py-6">
                  <h3 className="text-4xl md:text-[40px] font-bold mb-4">On and off-ramping with regulatory compliance</h3>
                  <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">With a strong focus on compliance, Kross Network offers smooth on-ramp and off-ramp services for fiat, equities, and tokenized assets. Built for both retail and institutional users, it ensures seamless integration into the ecosystem—while fully adhering to evolving regulatory standards</p>
                </div>
              </div>
              {/* Card 8 */}
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="IBC Compatibility for token movement" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/builder/layout/8.svg" />
                </div>
                <div className="py-6">
                  <h3 className="text-4xl md:text-[40px] font-bold mb-4">IBC Compatibility for token movement</h3>
                  <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Leveraging the cosmos Hub and the Inter-Blockchain communication (IBC) communication protocol, Kross Network enables institutions to facilitate the movement of tokens between different zones within the cosmos ecosystem. This IBC compatibility ensures  seamless interoperability and secure transactions, allowing institutions to efficiently transfer assets across various blockchain between the comos network.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Carousel Pagination & Navigation */}
      <div className="flex flex-col items-center">
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
      {/* View Applications Section */}
      <div className="text-white">
        <div className="container mx-auto p-5 md:px-20 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">View Applications</h1>
          </div>
          <div className="bg-gradient-to-br from-[#130945] to-[#13094500] p-4 rounded-[8px]">
            <div className="grid lg:grid-cols-2 items-center">
              {/* Left: Text and button */}
              <div className="p-12 space-y-8">
                <div>
                  <h2 className="text-[40px] md:text-5xl font-bold mb-6">KROSS Hub</h2>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed w-full">Your Entry Point Into The Kross Network. Bridge And Stake Your Assets, Complete Onchain Tasks, And Rise Through The Leaderboard To Unlock Higher Rewards.</p>
                </div>
                <div className="inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200  inline-block">
                  <a
                    href="#"
                    className="inline-flex px-8 py-4 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200  inline-block"
                  >
                    Start Earning Rewards
                  </a>
               </div>
              </div>
              {/* Right: Image */}
              <div className="flex justify-center md:pr-12">
                <div className="w-full h-[335px] rounded-2xl relative">
                  <img alt="krosshub.svg" className="object-cover rounded-2xl absolute inset-0 w-full h-full" src="/assets/image/builder/hub.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Krosscoin Architecture Section */}
      <section className="flex flex-col items-center justify-center px-4 w-full mb-20">
        <div className="text-center mb-16 flex flex-col w-full items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 w-full md:w-3/5">Introducing The Krosscoin Architecture</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Multiple Layers With Its Own Counterparts And Functioning Combined That Made Our Unique Infrastructure Possible.</p>
        </div>
      </section>

      {/* Networking Layer */}
      <section className="min-h-[80vh] md:flex-row items-start justify-center container px-5 md:px-20 mx-auto relative w-full">
      <div className="absolute top-[150px] right-[143px] w-[434px] h-[565px] bg-gradient-to-t from-[#6D05B8]/40 via-[#FF00B8]/30 to-[#6D05B8]/40 blur-3xl rounded-full"></div>
      <div className="absolute top-0 right-[140px] w-[434px] h-[566px] bg-[#6D05B8]/40 blur-3xl rounded-full"></div>
        

        <div className=" w-full justify-start">
          <div className="bg-[#11094240] backdrop-blur-sm border border-[#344054] rounded-[12px] p-10 py-[50px] min-h-[360px] relative max-w-[520px] z-10">
            <h3 className="text-[32px] font-bold mb-8">Networking Layer</h3>
            <p className="text-[#CACACA] mb-10">Kross Chain networking layer handles peer to peer communication. Nodes communicate with each other to share blockchain data (blocks, transactions). This enhances data synchronization, node discovery, and block transaction propagation.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Gossip Protocol</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Nodes</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Explorer</span>
            </div>
          </div>
        </div>
        <div className=" w-full h-full group">
          <div className="absolute top-0 right-1/3  group-hover:translate-x-12 xl:group-hover:translate-x-24 2xl:group-hover:translate-x-36 transition-all duration-1000 ease-in-out">
            <img alt="landing1" className="w-full h-[270px] z-0 relative" src="/assets/image/builder/intro/1.svg" />
          </div>
          {/* Second image (only visible on hover) */}
          <div className="absolute right-5/29  top-2/11 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
            <img
              alt="landing1"
              className="w-full h-[270px] z-0 relative"
              src="/assets/image/builder/intro/1.svg"
            />
          </div>
          <div className="absolute right-21/69 top-2/11 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
            <img
              alt="landing1"
              className="w-full h-[270px] z-0 relative"
              src="/assets/image/builder/intro/1.svg"
            />
          </div>
         
        </div>
      </section>

      {/* Consensus Layer */}
      <section className="min-h-[70vh] flex items-start justify-center container px-5 md:px-20 mx-auto relative w-full">
        <div className="absolute top-[100px] left-[100px] w-[434px] h-[565px] bg-gradient-to-t from-[#6D05B8]/40 via-[#FF00B8]/30 to-[#6D05B8]/40 blur-3xl rounded-full"></div>
        <div className="absolute top-0 left-[140px] w-[334px] h-[466px] bg-[#6D05B8]/20 blur-3xl rounded-full"></div>
        <div className="flex w-full justify-end">
          <div className="bg-[#11094240] backdrop-blur-sm border border-[#344054] rounded-[12px] p-10 min-h-[360px] max-w-[520px] relative z-10">
            <h3 className="text-[32px] font-bold mb-5">Consensus Layer</h3>
            <p className="text-[#CACACA] mb-5">Kross Chain uses Leased Proof Of Stake (LPoS). Token holders can &quotlease&quot (delegate) their KSS coins to trusted validators. This allows smaller token holders to participate and increase a node&aposs chances of producing blocks. Block producers earn transaction fees, shared with those who leased to them.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Energy Efficient</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Inclusive</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-1/13 z-0">
          <img alt="landing2" width={540} height={450} className="w-full md:w-[540px] h-[450px] z-0" src="/assets/image/builder/intro/2.svg" />
        </div>
      </section>

      {/* Data Layer */}
      <section className="min-h-[70vh] flex items-start justify-center container px-5 md:px-20 mx-auto relative w-full">
        <div className="absolute top-[150px] right-[143px] w-[434px] h-[565px] bg-gradient-to-t from-[#6D05B8]/40 via-[#FF00B8]/30 to-[#6D05B8]/40 blur-3xl rounded-full"></div>
        <div className="absolute top-0 right-[140px] w-[434px] h-[566px] bg-[#6D05B8]/40 blur-3xl rounded-full"></div>
        <div className="flex w-full justify-start">
          <div className="bg-[#11094240] backdrop-blur-sm border border-[#344054] rounded-[12px] p-10 py-[50px] min-h-[360px] relative max-w-[520px] z-10">
            <h3 className="text-[32px] font-bold mb-8">Data Layer</h3>
            <p className="text-[#CACACA] mb-10">Stores blockchain data like transactions, account balances, and smart contract states. Data is saved in an append-only structure (blockchain). Each block contains: Regular transactions (transfers, leases, exchanges), Smart contract updates, Alias and data transactions.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Lightweight</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Optimized Data Structure</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-1/13 z-0">
          <img alt="landing3" width={540} height={450} className="w-full md:w-[540px] h-[450px] z-0" src="/assets/image/builder/intro/3.svg" />
        </div>
      </section>

      {/* Application Layer */}
      <section className="min-h-[70vh] flex items-start justify-center container px-5 md:px-20 mx-auto relative w-full">
        <div className="absolute top-[100px] left-[100px] w-[434px] h-[565px] bg-gradient-to-t from-[#6D05B8]/40 via-[#FF00B8]/30 to-[#6D05B8]/40 blur-3xl rounded-full"></div>
        <div className="absolute top-0 left-[140px] w-[334px] h-[466px] bg-[#6D05B8]/20 blur-3xl rounded-full"></div>
        <div className="flex w-full justify-end">
          <div className="bg-[#11094240] backdrop-blur-sm border border-[#344054] rounded-[12px] p-10 min-h-[360px] max-w-[520px] relative z-10">
            <h3 className="text-[32px] font-bold mb-5">Application Layer</h3>
            <p className="text-[#CACACA] mb-5">Kross Chain enables decentralized applications (dApps) and user-facing functionalities. It uses the smart contract language called RIDE, a purposefully non-Turing complete language. It supports Account scripts (programmatic control over accounts) and Asset scripts (programmatic control over tokens). It supports Token creation, DEXes, NFT minting, Staking, DAO creation, and DeFi protocols.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">DEX</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Dapps</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Smart Contract</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-1/13 z-0">
          <img alt="landing4" width={540} height={450} className="w-full md:w-[540px] h-[450px] z-0" src="/assets/image/builder/intro/4.svg" />
        </div>
      </section>

      {/* Token Layer */}
      <section className="min-h-[70vh] flex items-start justify-center container px-5 md:px-20 mx-auto relative w-full">
        <div className="absolute top-[150px] right-[143px] w-[434px] h-[565px] bg-gradient-to-t from-[#6D05B8]/40 via-[#FF00B8]/30 to-[#6D05B8]/40 blur-3xl rounded-full"></div>
        <div className="absolute top-0 right-[140px] w-[434px] h-[566px] bg-[#6D05B8]/40 blur-3xl rounded-full"></div>
        <div className="flex w-full justify-start">
          <div className="bg-[#11094240] backdrop-blur-sm border border-[#344054] rounded-[12px] p-10 py-[50px] min-h-[360px] relative max-w-[520px] z-10">
            <h3 className="text-[32px] font-bold mb-8">Token Layer</h3>
            <p className="text-[#CACACA] mb-10">Kross Chain Token Layer manages custom tokens and NFTs. Kross allows easy token creation without needing smart contracts. Just fill a form and pay a small fee of 1 KSS. No coding required. It also supports non-fungible tokens (NFTs) natively. Custom tokens can have attached scripts (rules) via the Application Layer.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Custom tokens</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">NFT</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Scripted tokens</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Easy Creation</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-1/13 z-0">
          <img alt="landing5" width={540} height={450} className="w-full md:w-[540px] h-[450px] z-0" src="/assets/image/builder/intro/5.svg" />
        </div>
      </section>

      {/* Tools And Interface Layer */}
      <section className="min-h-[70vh] flex items-start justify-center container px-5 md:px-20 mx-auto relative w-full">
        <div className="absolute top-[100px] left-[100px] w-[434px] h-[565px] bg-gradient-to-t from-[#6D05B8]/40 via-[#FF00B8]/30 to-[#6D05B8]/40 blur-3xl rounded-full"></div>
        <div className="absolute top-0 left-[140px] w-[334px] h-[466px] bg-[#6D05B8]/20 blur-3xl rounded-full"></div>
        <div className="flex w-full justify-end">
          <div className="bg-[#11094240] backdrop-blur-sm border border-[#344054] rounded-[12px] p-10 min-h-[360px] max-w-[520px] relative z-10">
            <h3 className="text-[32px] font-bold mb-5">Tools And Interface Layer</h3>
            <p className="text-[#CACACA] mb-5">Kross Chain provides user access and integration tools such as Hashgreed DEX+Wallet, an integrated AMM DEX; Waves SDKs, Kross SDKs, Kross Node APIs - JavaScript, Python, and other libraries for interacting with the blockchain; HashPay mobile app- for easy C2C stablecoin payments ; Hashgreed -Africa&aposs First Asset tokenization Platform and NFT marketplace for creative, web3 commerce and RWA.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Hashgreed DEX</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Hashgreed</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Node APIs</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Desktop Wallet</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Mass NFT Minter</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Dapp Deployer</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-1/13 z-0">
          <img alt="landing6" width={540} height={450} className="w-full md:w-[540px] h-[450px] z-0" src="/assets/image/builder/intro/6.svg" />
        </div>
      </section>

      {/* Governance Layer */}
      <section className="min-h-[70vh] flex items-start justify-center container px-5 md:px-20 mx-auto relative w-full">
        <div className="absolute top-[150px] right-[143px] w-[434px] h-[565px] bg-gradient-to-t from-[#6D05B8]/40 via-[#FF00B8]/30 to-[#6D05B8]/40 blur-3xl rounded-full"></div>
        <div className="absolute top-0 right-[140px] w-[434px] h-[566px] bg-[#6D05B8]/40 blur-3xl rounded-full"></div>
        <div className="flex w-full justify-start">
          <div className="bg-[#11094240] backdrop-blur-sm border border-[#344054] rounded-[12px] p-10 py-[50px] min-h-[360px] relative max-w-[520px] z-10">
            <h3 className="text-[32px] font-bold mb-8">Governance Layer</h3>
            <p className="text-[#CACACA] mb-10">Kross governance is mostly on-chain. Critical updates are proposed and voted on by the community using transaction-based voting. Token holders influence the evolution of the protocol.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">KSS</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Nodes</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-1/13 z-0">
          <img alt="landing5" width={540} height={450} className="w-full md:w-[540px] h-[450px] z-0" src="/assets/image/builder/intro/4.svg" />
        </div>
      </section>

      {/* Interoperability Layer */}
      <section className="min-h-[70vh] flex items-start justify-center container px-5 md:px-20 mx-auto relative w-full">
        <div className="absolute top-[100px] left-[100px] w-[434px] h-[565px] bg-gradient-to-t from-[#6D05B8]/40 via-[#FF00B8]/30 to-[#6D05B8]/40 blur-3xl rounded-full"></div>
        <div className="absolute top-0 left-[140px] w-[334px] h-[466px] bg-[#6D05B8]/20 blur-3xl rounded-full"></div>
        <div className="flex w-full justify-end">
          <div className="bg-[#11094240] backdrop-blur-sm border border-[#344054] rounded-[12px] p-10 min-h-[360px] max-w-[520px] relative z-10">
            <h3 className="text-[32px] font-bold mb-5">Interoperability Layer</h3>
            <p className="text-[#CACACA] mb-5">The interoperability layer of KROSS Chain will be built on the IBC Protocol. This layer ensures that KROSS&aposs regulatory and compliance modules, along with all other features introduced to the Cosmos ecosystem, are not confined to the chain itself but are extended across the entire Inter-Blockchain Communication Protocol ecosystem.</p>
          </div>
        </div>
        <div className="absolute top-0 left-1/13 z-0">
          <img alt="landing6" width={540} height={450} className="w-full md:w-[540px] h-[450px] z-0" src="/assets/image/builder/intro/3.svg" />
        </div>
      </section>

      {/* Explore Ecosystem CTA (Pixel-perfect) */}
      <section className="text-white flex w-full bg-[#110942] border-b-4 border-white">
        <div className="flex w-full items-center justify-center py-25 md:py-[133px]">
          <div className="flex flex-col items-center justify-center gap-[56px] w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight w-full md:w-2/3 text-center">Explore the KROSS Ecosystem</h1>
            <div className="flex gap-4 w-full items-center justify-center">
            <div className="inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200  inline-block">
                <a
                  href="#"
                  className="inline-flex px-8 py-4 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200  inline-block"
                >
                  Start Building
                </a>
              </div>
              <div className="inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200  inline-block">
                <a
                  href="#"
                  className="inline-flex px-8 py-4 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200  inline-block"
                >
                  Discover Ecosystem
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}