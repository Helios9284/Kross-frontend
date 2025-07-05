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
      className="min-h-screen bg-[#050026]">
      {/* Hero Section */}
      <div className="">
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          {/* Left column: Text and buttons */}
          <div className="space-y-8 container px-5 md:px-20 py-10 md:py-20 ">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Kross Ecosystem Fund
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Kross Ecosystem Fund supports the development of the Kross blockchain ecosystem by providing funding,
              resources, and strategic guidance to innovative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 text-lg font-semibold rounded-lg text-white hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)" }}
              >
                Get Started
              </button>
              <button className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-gray-600 text-white hover:bg-gray-800 bg-transparent transition-colors">
                Learn More
              </button>
            </div>
          </div>
          {/* Right column: Gradient box */}
          <div className="relative">
            <div
              className="w-full h-full rounded-2xl"
              style={{ background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 50%, #8b5cf6 100%)" }}
            />
          </div>
        </div>
      </div>

      {/* Alliance Section */}

      <section className="text-white overflow-hidden relative bg-[#050026] h-[800px]">
        {/* Background Glows */}
        <div className="absolute -bottom-[120px] left-0 w-[520px] h-[400px] bg-[#FF00B866]/50 blur-3xl rounded-full"></div>
        <div className="container mx-auto p-5 md:p-20 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">An international alliance of forward-thinking investors and incubators.</h2>
            <p className="text-xl text-gray-300">Pioneering The Shift In Kross Decentralized Financial System</p>
          </div>
        </div>
      </section>
      {/* KEF Glimpse Section */}
      <section className="w-full py-10 md:py-20 relative flex flex-col items-center justify-center bg-[#050026] px-5 md:px-20">
        <div className="w-full py-10">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-[48px] font-bold text-white mb-6 text-center">
              A Glimpse Into The Kross <br />
              Ecosystem Fund (KEF)
            </h3>
            <p className="text-[24px] text-gray-300 text-center">
              The KEF Was Created To Fast-Track The Growth And Adoption Of Impactful Projects Within The Kross Ecosystem.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 mt-[64px]">
          {/* Card 1 */}
          <div className="border border-[#A259FF] rounded-[16px] p-10 flex flex-col items-start gap-6 bg-[#110942] min-h-[220px]" style={{boxShadow: '0 0 0 2px #2D2177'}}>
            <span className="mb-2">{/* User icon */}
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#A259FF" fillOpacity="0.12"/><path d="M16 17.5c2.485 0 4.5-2.015 4.5-4.5s-2.015-4.5-4.5-4.5-4.5 2.015-4.5 4.5 2.015 4.5 4.5 4.5Zm0 2c-3.038 0-9 1.523-9 4.5V26h18v-2c0-2.977-5.962-4.5-9-4.5Z" fill="#A259FF"/></svg>
            </span>
            <span className="text-[24px] font-medium text-white leading-snug text-left">KYC And AML Checks To Keep Users And The Network Safe.</span>
              </div>
              {/* Card 2 */}
          <div className="border border-[#A259FF] rounded-[16px] p-10 flex flex-col items-start gap-6 bg-[#110942]/60 min-h-[220px]" style={{boxShadow: '0 0 0 2px #2D2177'}}>
            <span className="mb-2">{/* Visibility icon */}
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#A259FF" fillOpacity="0.12"/><path d="M8 16c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8Zm8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="#A259FF"/></svg>
            </span>
            <span className="text-[24px] font-medium text-white leading-snug text-left">Complete Visibility Of Funds Through On-Chain Transactions.</span>
              </div>
              {/* Card 3 */}
          <div className="border border-[#A259FF] rounded-[16px] p-10 flex flex-col items-start gap-6 bg-[#110942]/60 min-h-[220px]" style={{boxShadow: '0 0 0 2px #2D2177'}}>
            <span className="mb-2">{/* Dollar icon */}
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#A259FF" fillOpacity="0.12"/><path d="M16 10v12M12 14h8M12 18h8" stroke="#A259FF" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            <span className="text-[24px] font-medium text-white leading-snug text-left">Peace Of Mind For Stakers With On-Chain Coverage And Insurance Safeguards.</span>
              </div>
              {/* Card 4 */}
          <div className="border border-[#A259FF] rounded-[16px] p-10 flex flex-col items-start gap-6 bg-[#110942]/60 min-h-[220px]" style={{boxShadow: '0 0 0 2px #2D2177'}}>
            <span className="mb-2">{/* Audit icon */}
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#A259FF" fillOpacity="0.12"/><path d="M10 22V10h12v12H10Zm2-2h8v-8h-8v8Z" fill="#A259FF"/></svg>
            </span>
            <span className="text-[24px] font-medium text-white leading-snug text-left">Audited For Safety. Built For Scale. Trusted By Institutions.</span>
          </div>
        </div>
        <a href="#" className="inline-flex mt-[72px] px-8 py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow">Join Now</a>

      </section>
    
      
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
              <div className="w-[678px]  md:w-[700px] h-[362px] md:h-[400px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Left: Image */}
                  <div className="relative w-full md:w-[300px] h-[250px] md:h-full flex-shrink-0">
                    <img
                      alt="DeFi"
                      className="object-cover absolute inset-0 w-full h-full"
                      src="/assets/image/card1.svg"
                    />
                  </div>
                  {/* Right: Content */}
                  <div className="flex flex-col justify-center py-6 px-0 md:px-8 w-full">
                    <h3 className="text-4xl md:text-[40px] font-bold mb-4">DeFi</h3>
                    <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">
                      Build lending protocols, DEXs, yield vaults, and more—powered by seamless cross-chain asset flow and low-cost, high-speed transactions on Kross Network.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="w-[678px]  md:w-[700px] h-[362px] md:h-[400px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-[300px] h-[250px] md:h-full flex-shrink-0">
                    <img alt="Tokenization" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/card1.svg" />
                  </div>
                  <div className="flex flex-col justify-center py-6 px-0 md:px-8 w-full">
                    <h3 className="text-4xl md:text-[40px] font-bold mb-4">Tokenization</h3>
                    <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Bring real-world and digital assets on-chain. From real estate and art to loyalty points and in-game items, tokenize anything with Kross Network secure, scalable foundation and unlock new forms of ownership and liquidity.</p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="w-[678px]  md:w-[700px] h-[362px] md:h-[400px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-[300px] h-[250px] md:h-full flex-shrink-0">
                    <img alt="Infrastructure" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/card1.svg" />
                  </div>
                  <div className="flex flex-col justify-center py-6 px-0 md:px-8 w-full">
                    <h3 className="text-4xl md:text-[40px] font-bold mb-4">Infrastructure</h3>
                    <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Laying the groundwork for decentralized innovation by deploying scalable tools, interoperable modules, and developer-focused solutions to support apps, identities, and data across multiple chains—all on one unified network.</p>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="w-[678px]  md:w-[700px] h-[362px] md:h-[400px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-[300px] h-[250px] md:h-full flex-shrink-0">
                    <img alt="Tokenization of real-world assets(RWA)" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/card1.svg" />
                  </div>
                  <div className="flex flex-col justify-center py-6 px-0 md:px-8 w-full">
                    <h3 className="text-4xl md:text-[40px] font-bold mb-4">Tokenization of real-world assets(RWA)</h3>
                    <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Kross Network enables institutions to easily turn real-world assets into digital tokens. From art and real estate to commodities, these assets become tradable and more accessible. With secure marketplaces built on the chain, institutions can unlock new opportunities for ownership, liquidity, and investment.</p>
                  </div>
                </div>
              </div>
              {/* Card 5 */}
              <div className="w-[678px]  md:w-[700px] h-[362px] md:h-[400px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-[300px] h-[250px] md:h-full flex-shrink-0">
                    <img alt="Identity System with Decentralized I.D (DID)" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/card1.svg" />
                  </div>
                  <div className="flex flex-col justify-center py-6 px-0 md:px-8 w-full">
                    <h3 className="text-4xl md:text-[40px] font-bold mb-4">Identity System with Decentralized I.D (DID)</h3>
                    <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Use Kross Network's decentralized identity tools to streamline onboarding, meet KYC/AML requirements, and verify users with confidence. Built-in support for reusable IDs and Soulbound NFTs adds an extra layer of trust and security—ideal for apps that require verified user data.</p>
                  </div>
                </div>
              </div>
              {/* Card 6 */}
              <div className="w-[678px]  md:w-[700px] h-[362px] md:h-[400px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-[300px] h-[250px] md:h-full flex-shrink-0">
                    <img alt="Governance and continuous upgrade" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/card1.svg" />
                  </div>
                  <div className="flex flex-col justify-center py-6 px-0 md:px-8 w-full">
                    <h3 className="text-4xl md:text-[40px] font-bold mb-4">Governance and continuous upgrade</h3>
                    <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Kross Network  embraces a decentralized governance model that empowers both institutions and community members to actively participate in shaping the network. This collaborative system ensures continuous improvements, giving contributors a voice in decisions while keeping the platform flexible, responsive, and future-ready.</p>
                  </div>
                </div>
              </div>
              {/* Card 7 */}
              <div className="w-[678px]  md:w-[700px] h-[362px] md:h-[400px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-[300px] h-[250px] md:h-full flex-shrink-0">
                    <img alt="On and off-ramping with regulatory compliance" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/card1.svg" />
                  </div>
                  <div className="flex flex-col justify-center py-6 px-0 md:px-8 w-full">
                    <h3 className="text-4xl md:text-[40px] font-bold mb-4">On and off-ramping with regulatory compliance</h3>
                    <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">With a strong focus on compliance, Kross Network offers smooth on-ramp and off-ramp services for fiat, equities, and tokenized assets. Built for both retail and institutional users, it ensures seamless integration into the ecosystem—while fully adhering to evolving regulatory standards</p>
                  </div>
                </div>
              </div>
              {/* Card 8 */}
              <div className="w-[678px]  md:w-[700px] h-[362px] md:h-[400px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-[300px] h-[250px] md:h-full flex-shrink-0">
                    <img alt="IBC Compatibility for token movement" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/card1.svg" />
                  </div>
                  <div className="flex flex-col justify-center py-6 px-0 md:px-8 w-full">
                    <h3 className="text-4xl md:text-[40px] font-bold mb-4">IBC Compatibility for token movement</h3>
                    <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Leveraging the cosmos Hub and the Inter-Blockchain communication (IBC) communication protocol, Kross Network enables institutions to facilitate the movement of tokens between different zones within the cosmos ecosystem. This IBC compatibility ensures  seamless interoperability and secure transactions, allowing institutions to efficiently transfer assets across various blockchain between the comos network.</p>
                  </div>
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
