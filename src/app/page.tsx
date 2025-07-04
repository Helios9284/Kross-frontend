"use client";
import { useRef, useState } from "react";

export default function Home() {
  // Drag-to-scroll logic for possibilities section
  const cardRowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag-to-scroll logic for news section
  const newsRowRef = useRef<HTMLDivElement>(null);
  const [isNewsDragging, setIsNewsDragging] = useState(false);
  const [newsStartX, setNewsStartX] = useState(0);
  const [newsScrollLeft, setNewsScrollLeft] = useState(0);

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

  const handleNewsMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsNewsDragging(true);
    setNewsStartX(e.pageX - (newsRowRef.current?.offsetLeft || 0));
    setNewsScrollLeft(newsRowRef.current?.scrollLeft || 0);
  };

  const handleNewsMouseLeave = () => {
    setIsNewsDragging(false);
  };

  const handleNewsMouseUp = () => {
    setIsNewsDragging(false);
  };

  const handleNewsMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isNewsDragging) return;
    e.preventDefault();
    const x = e.pageX - (newsRowRef.current?.offsetLeft || 0);
    const walk = (x - newsStartX) * 1.2; // scroll speed
    if (newsRowRef.current) {
      newsRowRef.current.scrollLeft = newsScrollLeft - walk;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#050026] to-[#110942] text-white font-sans">
      {/* Hero Section */}
      <section className="container px-5 md:px-20 py-10 md:py-20 relative w-screen">
        <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
          {/* Left column */}
          <div className="lg:w-4/5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[24px] border-[0.5px] border-[#FFFFFFD4] bg-[#11094280] mb-8" style={{ boxShadow: '0px 4px 12px 0px #00000040 inset' }}>
              <img alt="Krosscoin for Builders" width={16} height={16} src="/assets/icon/file-icons_buildkite.png" />
              <span className="text-sm font-normal text-white">Build with Kross</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-6">Africa's First Smart Contract Blockchain Solution</h1>
            <p className="text-xl text-gray-300 mb-10 w-full md:w-3/5">Kross Blockchain is Nigeria's First Layer 1 Blockchain Network - Driving Innovation and Real-World Adoption Across The Continent.</p>
            <a href="#" className="inline-flex px-8 py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow">Krosscoin Explorer</a>
          </div>
          {/* Right column */}
          <div className="lg:w-2/5 flex justify-center relative">
            <div className="relative w-80 h-80 md:w-full md:h-full">
              <div className="absolute inset-0 bg-[#FF00B8]/30 blur-3xl rounded-full -z-0"></div>
              <img alt="Blockchain 3D Cube Visualization" width={525} height={430} className="relative z-10" src="/assets/image/hero.svg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-white relative overflow-hidden w-full">
        {/* Background Glow */}
        <div className="absolute bottom-0 right-1/2 translate-x-1/3 w-[450px] h-[600px] rounded-full blur-[100px] md:blur-[100px] opacity-100 bg-gradient-to-br from-[#FF00B8] to-[#6D05B8] z-[-1]" />
        <div className="container mx-auto px-5 md:px-20 py-20">
          {/* Header */}
          <div className="text-center mb-16 w-full flex flex-col justify-center items-center">
            <div className="inline-flex items-center gap-2 px-8 py-2 rounded-[24px] border-[0.5px] border-[#FFFFFFD4] bg-[#11094280] mb-8 text-sm font-normal text-white" style={{ boxShadow: '0px 4px 12px 0px #00000040 inset' }}>
              Our Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 w-full md:w-1/2">An Open Chain That Powers Secure Decentralized Apps</h2>
            <div className="flex items-center gap-6 justify-center">
              <a href="#" className="inline-flex px-8 py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow">For Builders</a>
              <a href="#" className="rounded-[12px] p-[2px] bg-gradient-to-r from-[#6D05B8] to-[#FF00B8] hover:bg-gradient-to-r hover:from-[#605B8] hover:to-[#AA00B8]">
                <span className="flex text-white items-center justify-center px-8 py-4 bg-[#0a0620] rounded-[12px] whitespace-nowrap text-md hover:bg-gradient-to-r from-[#6D05B8] to-[#FF00B8]">For Traders</span>
              </a>
            </div>
          </div>
          {/* Features Grid */}
          <div className="px-5 relative w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
              {/* Left column features */}
              <div className="space-y-10">
                <div className="text-center md:text-right text-white">
                  <h3 className="text-lg md:text-2xl text-white font-semibold mb-2">Decentralized Identity Guard</h3>
                  <p className="text-xs md:text-[16px] text-gray-300 leading-relaxed">Authenticate Users And Apps With Decentralized IDs, Ensuring Secure And Scalable Identity Across Kross DApps.</p>
                </div>
                <div className="text-center md:text-right text-white">
                  <h3 className="text-lg md:text-2xl text-white font-semibold mb-2">Know Your Counterparty</h3>
                  <p className="text-xs md:text-[16px] text-gray-300 leading-relaxed">Build For A Secure Future With Access To Users Who Meet Rigorous KYC/AML Standards.</p>
                </div>
                <div className="text-center md:text-right text-white">
                  <h3 className="text-lg md:text-2xl text-white font-semibold mb-2">Decentralized Identity Guard</h3>
                  <p className="text-xs md:text-[16px] text-gray-300 leading-relaxed">Authenticate Users And Apps With Decentralized IDs, Ensuring Secure And Scalable Identity Across IBC DApps.</p>
                </div>
              </div>
              {/* Center icons grid */}
              <div className="flex flex-col items-center justify-between w-full">
                <div className="flex gap-2">
                  <img alt="Feature 1" width={150} height={150} src="/assets/icon/feature-1.png" />
                  <img alt="Feature 2" width={150} height={150} src="/assets/icon/feature-2.png" />
                </div>
                <div className="flex w-full justify-between -mt-1">
                  <img alt="Feature 3" width={150} height={150} src="/assets/icon/feature-3.png" />
                  <img alt="Feature 4" width={150} height={150} src="/assets/icon/feature-4.png" />
                </div>
                <div className="flex gap-2 -mt-1">
                  <img alt="Feature 3" width={150} height={150} src="/assets/icon/feature-3.png" />
                  <img alt="Feature 4" width={150} height={150} src="/assets/icon/feature-4.png" />
                </div>
              </div>
              {/* Right column features */}
              <div className="space-y-10">
                <div className="text-center md:text-left text-white">
                  <h3 className="text-lg md:text-2xl font-semibold mb-2">Simplified For Builders & Users</h3>
                  <p className="text-xs md:text-[16px] text-gray-300 leading-relaxed">Deliver Efficient, Low-Cost Tools That Simplify Launching And Using Blockchain Apps — No Matter Your Experience Level.</p>
                </div>
                <div className="text-center md:text-left text-white">
                  <h3 className="text-lg md:text-2xl font-semibold mb-2">Fast And Low Fees</h3>
                  <p className="text-xs md:text-[16px] text-gray-300 leading-relaxed">Move Assets And Data Across Blockchains With Minimal Fees And High Speed Powered By The Inter-Blockchain Communication (IBC).</p>
                </div>
                <div className="text-center md:text-left text-white">
                  <h3 className="text-lg md:text-2xl font-semibold mb-2">Built For Reliability</h3>
                  <p className="text-xs md:text-[16px] text-gray-300 leading-relaxed">Launch With Confidence On A Proven, Secure, And Transparent Chain Powered By The Kross, Waves Or Cosmos SDKs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Possibilities Section */}
      <section className="text-white overflow-hidden relative">
        {/* Background Glows */}
        <div className="absolute -top-10 -left-10 w-[150px] h-[150px] bg-[#EC34E0]/30 blur-3xl rounded-full"></div>
        <div className="absolute top-0 left-[70px] w-[50px] h-[50px] bg-[#487DF1]/20 blur-3xl rounded-full"></div>
        <div className="container mx-auto p-5 md:p-20 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">Discover endless possibilities with the power of Kross Network.</h2>
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
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="DeFi" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/card1.svg" />
                </div>
                <div className="py-6">
                  <h3 className="text-4xl md:text-[40px] font-bold mb-4">DeFi</h3>
                  <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Build lending protocols, DEXs, yield vaults, and more—powered by seamless cross-chain asset flow and low-cost, high-speed transactions on Kross Network.</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="Tokenization" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/card1.svg" />
                </div>
                <div className="py-6">
                  <h3 className="text-4xl md:text-[40px] font-bold mb-4">Tokenization</h3>
                  <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Bring real-world and digital assets on-chain. From real estate and art to loyalty points and in-game items, tokenize anything with Kross Network secure, scalable foundation and unlock new forms of ownership and liquidity.</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="Infrastructure" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/card1.svg" />
                </div>
                <div className="py-6">
                  <h3 className="text-4xl md:text-[40px] font-bold mb-4">Infrastructure</h3>
                  <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Laying the groundwork for decentralized innovation by deploying scalable tools, interoperable modules, and developer-focused solutions to support apps, identities, and data across multiple chains—all on one unified network.</p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="Tokenization of real-world assets(RWA)" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/card1.svg" />
                </div>
                <div className="py-6">
                  <h3 className="text-4xl md:text-[40px] font-bold mb-4">Tokenization of real-world assets(RWA)</h3>
                  <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Kross Network enables institutions to easily turn real-world assets into digital tokens. From art and real estate to commodities, these assets become tradable and more accessible. With secure marketplaces built on the chain, institutions can unlock new opportunities for ownership, liquidity, and investment.</p>
                </div>
              </div>
              {/* Card 5 */}
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="Identity System with Decentralized I.D (DID)" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/card1.svg" />
                </div>
                <div className="py-6">
                  <h3 className="text-4xl md:text-[40px] font-bold mb-4">Identity System with Decentralized I.D (DID)</h3>
                  <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Use Kross Network's decentralized identity tools to streamline onboarding, meet KYC/AML requirements, and verify users with confidence. Built-in support for reusable IDs and Soulbound NFTs adds an extra layer of trust and security—ideal for apps that require verified user data.</p>
                </div>
              </div>
              {/* Card 6 */}
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="Governance and continuous upgrade" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/card1.svg" />
                </div>
                <div className="py-6">
                  <h3 className="text-4xl md:text-[40px] font-bold mb-4">Governance and continuous upgrade</h3>
                  <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">Kross Network  embraces a decentralized governance model that empowers both institutions and community members to actively participate in shaping the network. This collaborative system ensures continuous improvements, giving contributors a voice in decisions while keeping the platform flexible, responsive, and future-ready.</p>
                </div>
              </div>
              {/* Card 7 */}
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="On and off-ramping with regulatory compliance" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/card1.svg" />
                </div>
                <div className="py-6">
                  <h3 className="text-4xl md:text-[40px] font-bold mb-4">On and off-ramping with regulatory compliance</h3>
                  <p className="text-gray-300 text-xl md:text-[22px] leading-relaxed tracking-[0px]">With a strong focus on compliance, Kross Network offers smooth on-ramp and off-ramp services for fiat, equities, and tokenized assets. Built for both retail and institutional users, it ensures seamless integration into the ecosystem—while fully adhering to evolving regulatory standards</p>
                </div>
              </div>
              {/* Card 8 */}
              <div className="w-full md:w-[635px] h-[700px] md:h-[800px] bg-[#110942] backdrop-blur-sm border border-[#464646] rounded-[16px] group overflow-hidden p-6 hover:bg-purple-800/50 transition-all flex-shrink-0 select-none">
                <div className="relative w-full md:w-[585px] h-[390px]">
                  <img alt="IBC Compatibility for token movement" className="object-cover absolute inset-0 w-full h-full" src="/assets/image/card1.svg" />
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
      
      {/* Developer Call-to-Action Section */}
      <div className="relative text-white overflow-hidden">
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
                <a href="#" className="inline-flex px-8 py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow">Start Earning Rewards</a>
              </div>
              {/* Right: Image */}
              <div className="flex justify-center md:pr-12">
                <div className="w-full h-[335px] rounded-2xl relative">
                  <img alt="krosshub.svg" className="object-cover rounded-2xl absolute inset-0 w-full h-full" src="/assets/image/krosshub.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manage & Grow Section */}
      <section className="text-white w-full">
        <div className="w-full transition-all duration-1000 ease-in-out">
          {/* Card 1: Stake On Kross Hub */}
          <div className="w-full flex justify-center sticky top-0">
            <section className="h-[120vh] flex items-start justify-center w-full bg-[#0a0620] relative overflow-hidden">
              <div className="absolute w-[1262px] h-[2322px] top-[86.3px] left-[62px] -rotate-180 bg-[#FF00B866]/50 blur-3xl rounded-full"></div>
              <div className="absolute w-[1416px] h-[2334px] left-[806.78px] -rotate-180 bg-[#6D05B8CC]/50 blur-[560px] rounded-full"></div>
              <div className="absolute w-[1218.9px] h-[1229px] top-[-0.72px] left-[1199.9px] -rotate-180 bg-[#FF00B840]/50 blur-[560px] rounded-full"></div>
              <div className="absolute w-[1254.9px] h-[1429px] top-[-60.76px] left-[1440px] -rotate-180 bg-[#6D05B866]/50 blur-[560px] rounded-full"></div>
              <div className="w-full container px-5 md:px-20">
                <div className="text-center mt-20 mb-20 relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight text-white">Easily Manage And Grow Your Crypto With Kross DEX.</h2>
                </div>
                <div className="max-w-4xl py-[100px] mx-auto">
                  <div className="relative">
                    <div className="relative rounded-[40px] px-10 py-[104px] border-4 border-[#4B6794] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#110942] to-[#140669]"></div>
                      <div className="absolute inset-0 opacity-90" style={{backgroundImage: "url(/assets/image/manageCrypto/crypto1.svg)", backgroundSize: "contain", backgroundPosition: "right", backgroundRepeat: "no-repeat"}}></div>
                      <div className="relative max-w-lg z-10">
                        <h3 className="text-2xl md:text-[40px] font-bold mb-4 transition-colors duration-200 text-white">Stake On Kross Hub</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">Put Your Tokens To Work. Stake On Kross Hub And Get Rewarded.</p>
                        <button className="bg-transparent min-w-[191px] border-2 border-[#ff00ff] hover:bg-[#ff00ff] text-white font-medium py-4 px-8 rounded-[12px] transition-all duration-200 hover:scale-105">Start Staking</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Card 2: Swap With Ease */}
          <div className="w-full flex justify-center sticky top-0">
            <section className="w-screen md:h-[80vh] flex items-start justify-center w-full bg-[#0a0620] relative overflow-hidden">
              <div className="absolute w-[150px] h-[100px] -left-20 bottom-10 bg-[#6D05B86B]/30 blur-3xl rounded-full"></div>
              <div className="absolute w-[250px] h-[200px] left-0 -bottom-50 bg-[#EC34E0CC]/30 blur-3xl  rounded-full"></div>
              <div className="absolute w-[150px] h-[100px] left-[100px] -bottom-50 bg-[#EC34E0CC]/30 blur-3xl rounded-full"></div>
              <div className="absolute w-[150px] h-[100px] right-[50px] -bottom-40 bg-[#6D05B86B]/30 blur-3xl rounded-full"></div>
              <div className="w-full container px-5 md:px-20">
                <div className="max-w-4xl py-[100px] mx-auto">
                  <div className="relative">
                    <div className="relative rounded-[40px] px-10 py-[104px] border-4 border-[#4B6794] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#110942] to-[#140669]"></div>
                      <div className="absolute inset-0 opacity-90" style={{backgroundImage: "url(/assets/image/manageCrypto/crypto2.svg)", backgroundSize: "contain", backgroundPosition: "right", backgroundRepeat: "no-repeat"}}></div>
                      <div className="relative max-w-lg z-10">
                        <h3 className="text-2xl md:text-[40px] font-bold mb-4 transition-colors duration-200 text-white">Swap With Ease</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">Trade Assets Instantly With A Seamless Experience. No Delays, No Complexities, Just Fast, Secure Exchanges At Your Fingertips.</p>
                        <button className="bg-transparent min-w-[191px] border-2 border-[#ff00ff] hover:bg-[#ff00ff] text-white font-medium py-4 px-8 rounded-[12px] transition-all duration-200 hover:scale-105">Swap Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Card 3: Boost Your Earnings with Liquidity Pools */}
          <div className="w-full flex justify-center sticky top-0">
            <section className="w-screen md:h-[80vh] flex items-start justify-center w-full bg-[#0a0620] relative overflow-hidden">
              <div className="absolute w-[350px] h-[350px] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#EC34E0CC]/20 blur-3xl  rounded-full"></div>
              <div className="absolute w-[350px] h-[350px] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#6D05B86B]/20 blur-3xl rounded-full"></div>
              <div className="w-full container px-5 md:px-20">
                <div className="max-w-4xl py-[100px] mx-auto">
                  <div className="relative">
                    <div className="relative rounded-[40px] px-10 py-[104px] border-4 border-[#4B6794] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#110942] to-[#140669]"></div>
                      <div className="absolute inset-0 opacity-90" style={{backgroundImage: "url(/assets/image/manageCrypto/crypto3.svg)", backgroundSize: "contain", backgroundPosition: "right", backgroundRepeat: "no-repeat"}}></div>
                      <div className="relative max-w-lg z-10">
                        <h3 className="text-2xl md:text-[40px] font-bold mb-4 transition-colors duration-200 text-white">Boost Your Earnings with Liquidity Pools</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">Supply assets to earn passive income and claim a share of the fees from every trade that runs through your pool.</p>
                        <button className="bg-transparent min-w-[191px] border-2 border-[#ff00ff] hover:bg-[#ff00ff] text-white font-medium py-4 px-8 rounded-[12px] transition-all duration-200 hover:scale-105">Add Liquidity</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Card 4: Effortless Yield with Kross Vaults */}
          <div className="w-full flex justify-center sticky top-0">
            <section className="w-screen md:h-[80vh] flex items-start justify-center w-full bg-[#0a0620] relative overflow-hidden">
              <div className="absolute w-[250px] h-[250px] -left-50 -top-50 bg-[#FF00B840]/50 blur-3xl rounded-full"></div>
              <div className="absolute w-[250px] h-[250px] -right-50 -bottom-50 bg-[#FF00B840]/60 blur-3xl rounded-full"></div>
              <div className="w-full container px-5 md:px-20">
                <div className="max-w-4xl py-[100px] mx-auto">
                  <div className="relative">
                    <div className="relative rounded-[40px] px-10 py-[104px] border-4 border-[#4B6794] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#110942] to-[#140669]"></div>
                      <div className="absolute inset-0 opacity-90" style={{backgroundImage: "url(/assets/image/manageCrypto/crypto4.svg)", backgroundSize: "contain", backgroundPosition: "right", backgroundRepeat: "no-repeat"}}></div>
                      <div className="relative max-w-lg z-10">
                        <h3 className="text-2xl md:text-[40px] font-bold mb-4 transition-colors duration-200 text-white">Efortless Yield with Kross Vaults</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">Put your Krosscoin to work securely and passively. Kross Vaults give you access to curated assets and their staking rewards—no manual buying, staking, or managing required.</p>
                        <button className="bg-transparent min-w-[191px] border-2 border-[#ff00ff] hover:bg-[#ff00ff] text-white font-medium py-4 px-8 rounded-[12px] transition-all duration-200 hover:scale-105">Access Vault Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Card 5: Transparent Trading with Central Orderbook */}
          <div className="w-full flex justify-center sticky top-0">
            <section className="w-screen md:h-[80vh] flex items-start justify-center w-full bg-[#0a0620] relative overflow-hidden">
              <div className="absolute w-[150px] h-[150px] -right-20 top-10 bg-[#6D05B86B]/30 blur-3xl rounded-full"></div>
              <div className="absolute w-[250px] h-[250px] -left-50 -bottom-50 bg-[#EC34E0CC]/20 blur-3xl  rounded-full"></div>
              <div className="absolute w-[150px] h-[150px] -left-10 -bottom-50 bg-[#EC34E0CC]/20 blur-3xl rounded-full"></div>
              <div className="absolute w-[150px] h-[150px] right-50 -bottom-40 bg-[#6D05B86B]/20 blur-3xl rounded-full"></div>
              <div className="absolute w-[150px] h-[150px] -top-40 bg-[#6D05B86B]/20 blur-3xl rounded-full"></div>
              <div className="w-full container px-5 md:px-20">
                <div className="max-w-4xl py-[100px] mx-auto">
                  <div className="relative">
                    <div className="relative rounded-[40px] px-10 py-[104px] border-4 border-[#4B6794] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#110942] to-[#140669]"></div>
                      <div className="absolute inset-0 opacity-90" style={{backgroundImage: "url(/assets/image/manageCrypto/crypto5.svg)", backgroundSize: "contain", backgroundPosition: "right", backgroundRepeat: "no-repeat"}}></div>
                      <div className="relative max-w-lg z-10">
                        <h3 className="text-2xl md:text-[40px] font-bold mb-4 transition-colors duration-200 text-white">Transparent Trading with Central Orderbook</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">Execute trades with precision and full visibility. Kross Network's Central Limit Orderbook ensures accurate price discovery, deeper liquidity, and smooth trade execution—all in one powerful interface.</p>
                        <button className="bg-transparent min-w-[191px] border-2 border-[#ff00ff] hover:bg-[#ff00ff] text-white font-medium py-4 px-8 rounded-[12px] transition-all duration-200 hover:scale-105">Swap Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0a2f] via-[#1a0a3f] to-[#2a0a4f] text-white relative overflow-hidden">
        <div className="container mx-auto px-5 md:px-20 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Kross Network In The News</h2>
          </div>
          <div className="relative">
            <div
              ref={newsRowRef}
              className="flex overflow-x-hidden gap-6 pb-8 snap-mandatory px-4 cursor-grab active:cursor-grabbing select-none"
              style={{ scrollbarWidth: 'none' }}
              onMouseDown={handleNewsMouseDown}
              onMouseLeave={handleNewsMouseLeave}
              onMouseUp={handleNewsMouseUp}
              onMouseMove={handleNewsMouseMove}
            >
              {/* News Card 1 */}
              <div className="flex-shrink-0 w-[416px] snap-start select-none">
                <div className="bg-[#0f0f3a]/50 rounded-xl backdrop-blur-sm overflow-hidden hover:border-[#ff00ff]/50 transition-all duration-300 group cursor-pointer h-full shadow-lg hover:shadow-xl">
                  <div className="relative h-[260px] overflow-hidden">
                    <img alt="How Tokenized Real Estate Is Revolutionizing Property Investment" className="object-cover group-hover:scale-110 transition-transform duration-500 absolute inset-0 w-full h-full" src="/assets/image/kross-net.svg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#ff00ff] transition-colors duration-200 line-clamp-3">How Tokenized Real Estate Is Revolutionizing Property Investment</h3>
                  </div>
                </div>
              </div>
              {/* News Card 2 */}
              <div className="flex-shrink-0 w-[416px] snap-start select-none">
                <div className="bg-[#0f0f3a]/50 rounded-xl backdrop-blur-sm overflow-hidden hover:border-[#ff00ff]/50 transition-all duration-300 group cursor-pointer h-full shadow-lg hover:shadow-xl">
                  <div className="relative h-[260px] overflow-hidden">
                    <img alt="SEC Grants Hashgreed Approval To Tokenize Real Estate Based Assets" className="object-cover group-hover:scale-110 transition-transform duration-500 absolute inset-0 w-full h-full" src="/assets/image/kross-net.svg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#ff00ff] transition-colors duration-200 line-clamp-3">SEC Grants Hashgreed Approval To Tokenize Real Estate Based Assets</h3>
                  </div>
                </div>
              </div>
              {/* News Card 3 */}
              <div className="flex-shrink-0 w-[416px] snap-start select-none">
                <div className="bg-[#0f0f3a]/50 rounded-xl backdrop-blur-sm overflow-hidden hover:border-[#ff00ff]/50 transition-all duration-300 group cursor-pointer h-full shadow-lg hover:shadow-xl">
                  <div className="relative h-[260px] overflow-hidden">
                    <img alt="The Future Of Blockchain In Real Estate Markets" className="object-cover group-hover:scale-110 transition-transform duration-500 absolute inset-0 w-full h-full" src="/assets/image/kross-net.svg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#ff00ff] transition-colors duration-200 line-clamp-3">The Future Of Blockchain In Real Estate Markets</h3>
                  </div>
                </div>
              </div>
              {/* News Card 4 */}
              <div className="flex-shrink-0 w-[416px] snap-start select-none">
                <div className="bg-[#0f0f3a]/50 rounded-xl backdrop-blur-sm overflow-hidden hover:border-[#ff00ff]/50 transition-all duration-300 group cursor-pointer h-full shadow-lg hover:shadow-xl">
                  <div className="relative h-[260px] overflow-hidden">
                    <img alt="KROSS Network Launches New Developer Tools" className="object-cover group-hover:scale-110 transition-transform duration-500 absolute inset-0 w-full h-full" src="/assets/image/kross-net.svg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#ff00ff] transition-colors duration-200 line-clamp-3">KROSS Network Launches New Developer Tools</h3>
                  </div>
                </div>
              </div>
              {/* News Card 5 */}
              <div className="flex-shrink-0 w-[416px] snap-start select-none">
                <div className="bg-[#0f0f3a]/50 rounded-xl backdrop-blur-sm overflow-hidden hover:border-[#ff00ff]/50 transition-all duration-300 group cursor-pointer h-full shadow-lg hover:shadow-xl">
                  <div className="relative h-[260px] overflow-hidden">
                    <img alt="Institutional Adoption Of RWA Tokenization Grows" className="object-cover group-hover:scale-110 transition-transform duration-500 absolute inset-0 w-full h-full" src="/assets/image/kross-net.svg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#ff00ff] transition-colors duration-200 line-clamp-3">Institutional Adoption Of RWA Tokenization Grows</h3>
                  </div>
                </div>
              </div>
              {/* News Card 6 */}
              <div className="flex-shrink-0 w-[416px] snap-start select-none">
                <div className="bg-[#0f0f3a]/50 rounded-xl backdrop-blur-sm overflow-hidden hover:border-[#ff00ff]/50 transition-all duration-300 group cursor-pointer h-full shadow-lg hover:shadow-xl">
                  <div className="relative h-[260px] overflow-hidden">
                    <img alt="Cross-Chain Interoperability: The Next Frontier" className="object-cover group-hover:scale-110 transition-transform duration-500 absolute inset-0 w-full h-full" src="/assets/image/kross-net.svg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#ff00ff] transition-colors duration-200 line-clamp-3">Cross-Chain Interoperability: The Next Frontier</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
