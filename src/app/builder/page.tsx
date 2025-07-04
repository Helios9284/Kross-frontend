"use client";
import { useRef, useState } from "react";

export default function BuilderPage() {
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
    <div className="min-h-screen w-full bg-gradient-to-b from-[#050026] via-[#1a0a3f] to-[#2a0a4f] text-white font-sans">
      {/* Hero Section */}
      <section className="text-white flex relative overflow-hidden w-full">
        <div className="container mx-auto px-5 md:px-20 py-10 md:py-20 relative w-screen">
          <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
            {/* Left column */}
            <div className="lg:w-2/3">
              <div
                className="inline-flex items-center gap-2 px-3 py-2 rounded-[24px] border-[0.5px] border-[#FFFFFFDD] bg-[#11094280] mb-8"
                style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 12px 0px inset" }}
              >
                <img
                  alt="Krosscoin for Builders"
                  width={16}
                  height={16}
                  src="/assets/icon/file-icons_buildkite.png"
                />
                <span className="text-sm font-medium">Krosscoin for Builders</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center md:text-left">
                The Premier African RWA Layer 1 Blockchain Designed To Define And Enforce Real-World Regulatory Standards
              </h1>
              <p className="text-xl text-gray-300 mb-10 w-full md:w-2/3 text-center md:text-left">
                The Premier RWA Layer 1 Blockchain Designed To Meet And Enforce Real-World Regulatory Standards.
              </p>
              <div className="flex w-full justify-center md:justify-start">
                <a
                  href="#"
                  className="inline-flex px-8 py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow"
                >
                  Krosscoin Explorer
                </a>
              </div>
            </div>
            {/* Right column */}
            <div className="lg:w-1/3 flex justify-center relative">
              <div className="absolute inset-0 bg-[#FF00B8]/30 blur-3xl"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96">
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
        <div className="absolute bottom-0 right-1/2 w-[400px] h-[500px] rounded-full blur-[100px] opacity-100 bg-gradient-to-br from-[#FF00B8] to-[#6D05B8] z-[-1]" />
        <div className="container mx-auto px-5 md:px-20 py-20">
          <div className="text-center mb-16 w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built For Builders Like You</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Designed For Innovation—Compliance-Ready, Secure, And Built To Extend The Capabilities Of Cosmos And Beyond.
            </p>
            <a
              href="#"
              className="inline-flex px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-lg text-white font-medium hover:from-fuchsia-700 hover:to-pink-700 transition-all shadow-lg shadow-fuchsia-700/30"
            >
              Developer Guide
            </a>
          </div>
          <div className="px-5 relative w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
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
              <div className="flex flex-col items-center justify-between w-full gap-4">
                <div className="flex gap-3">
                  <img alt="Feature 1" width={150} height={150} src="/assets/icon/feature-1.png" />
                  <img alt="Feature 2" width={150} height={150} src="/assets/icon/feature-2.png" />
                </div>
                <div className="flex gap-3">
                  <img alt="Feature 3" width={150} height={150} src="/assets/icon/feature-3.png" />
                  <img alt="Feature 4" width={150} height={150} src="/assets/icon/feature-4.png" />
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

      {/* Krosscoin Architecture Section */}
      <section className="flex flex-col items-center justify-center px-4 w-full mb-20">
        <div className="text-center mb-16 flex flex-col w-full items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 w-full md:w-3/5">Introducing The Krosscoin Architecture</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Multiple Layers With Its Own Counterparts And Functioning Combined That Made Our Unique Infrastructure Possible.</p>
        </div>
      </section>

      {/* Networking Layer */}
      <section className="min-h-[80vh] flex items-start justify-center container px-5 md:px-20 mx-auto relative w-full">
        <div className="absolute top-[150px] right-[143px] w-[434px] h-[565px] bg-gradient-to-t from-[#6D05B8]/40 via-[#FF00B8]/30 to-[#6D05B8]/40 blur-3xl rounded-full"></div>
        <div className="absolute top-0 right-[140px] w-[434px] h-[566px] bg-[#6D05B8]/40 blur-3xl rounded-full"></div>
        <div className="flex w-full justify-start">
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
        <div className="group">
          <div className="absolute top-0 right-1/2 translate-x-1/2 z-0 group-hover:translate-x-36 xl:group-hover:translate-x-68 2xl:group-hover:translate-x-100 transition-all duration-1000 ease-in-out">
            <img alt="landing1" width={540} height={450} className="w-full h-[450px] z-0 relative" src="/assets/image/builder/landing1.svg" />
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
            <p className="text-[#CACACA] mb-5">Kross Chain uses Leased Proof Of Stake (LPoS). Token holders can "lease" (delegate) their KSS coins to trusted validators. This allows smaller token holders to participate and increase a node's chances of producing blocks. Block producers earn transaction fees, shared with those who leased to them.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Energy Efficient</span>
              <span className="p-2 rounded-[12px] text-sm border border-[#686868]">Inclusive</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 z-0">
          <img alt="landing2" width={540} height={450} className="w-full md:w-[540px] h-[450px] z-0" src="/assets/image/builder/landing2.svg" />
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
        <div className="absolute top-0 z-0">
          <img alt="landing3" width={540} height={450} className="w-full md:w-[540px] h-[450px] z-0" src="/assets/image/builder/landing3.svg" />
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
        <div className="absolute top-0 z-0">
          <img alt="landing4" width={540} height={450} className="w-full md:w-[540px] h-[450px] z-0" src="/assets/image/builder/landing4.svg" />
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
        <div className="absolute top-0 z-0">
          <img alt="landing5" width={540} height={450} className="w-full md:w-[540px] h-[450px] z-0" src="/assets/image/builder/landing5.svg" />
        </div>
      </section>

      {/* Tools And Interface Layer */}
      <section className="min-h-[70vh] flex items-start justify-center container px-5 md:px-20 mx-auto relative w-full">
        <div className="absolute top-[100px] left-[100px] w-[434px] h-[565px] bg-gradient-to-t from-[#6D05B8]/40 via-[#FF00B8]/30 to-[#6D05B8]/40 blur-3xl rounded-full"></div>
        <div className="absolute top-0 left-[140px] w-[334px] h-[466px] bg-[#6D05B8]/20 blur-3xl rounded-full"></div>
        <div className="flex w-full justify-end">
          <div className="bg-[#11094240] backdrop-blur-sm border border-[#344054] rounded-[12px] p-10 min-h-[360px] max-w-[520px] relative z-10">
            <h3 className="text-[32px] font-bold mb-5">Tools And Interface Layer</h3>
            <p className="text-[#CACACA] mb-5">Kross Chain provides user access and integration tools such as Hashgreed DEX+Wallet, an integrated AMM DEX; Waves SDKs, Kross SDKs, Kross Node APIs - JavaScript, Python, and other libraries for interacting with the blockchain; HashPay mobile app- for easy C2C stablecoin payments ; Hashgreed -Africa's First Asset tokenization Platform and NFT marketplace for creative, web3 commerce and RWA.</p>
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
        <div className="absolute top-0 z-0">
          <img alt="landing6" width={540} height={450} className="w-full md:w-[540px] h-[450px] z-0" src="/assets/image/builder/landing6.svg" />
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
        <div className="absolute top-0 z-0">
          <img alt="landing5" width={540} height={450} className="w-full md:w-[540px] h-[450px] z-0" src="/assets/image/builder/landing5.svg" />
        </div>
      </section>

      {/* Interoperability Layer */}
      <section className="min-h-[70vh] flex items-start justify-center container px-5 md:px-20 mx-auto relative w-full">
        <div className="absolute top-[100px] left-[100px] w-[434px] h-[565px] bg-gradient-to-t from-[#6D05B8]/40 via-[#FF00B8]/30 to-[#6D05B8]/40 blur-3xl rounded-full"></div>
        <div className="absolute top-0 left-[140px] w-[334px] h-[466px] bg-[#6D05B8]/20 blur-3xl rounded-full"></div>
        <div className="flex w-full justify-end">
          <div className="bg-[#11094240] backdrop-blur-sm border border-[#344054] rounded-[12px] p-10 min-h-[360px] max-w-[520px] relative z-10">
            <h3 className="text-[32px] font-bold mb-5">Interoperability Layer</h3>
            <p className="text-[#CACACA] mb-5">The interoperability layer of KROSS Chain will be built on the IBC Protocol. This layer ensures that KROSS's regulatory and compliance modules, along with all other features introduced to the Cosmos ecosystem, are not confined to the chain itself but are extended across the entire Inter-Blockchain Communication Protocol ecosystem.</p>
          </div>
        </div>
        <div className="absolute top-0 z-0">
          <img alt="landing6" width={540} height={450} className="w-full md:w-[540px] h-[450px] z-0" src="/assets/image/builder/landing6.svg" />
        </div>
      </section>

      {/* Explore Ecosystem CTA (Pixel-perfect) */}
      <section className="text-white flex w-full bg-[#110942] border-b-4 border-white">
        <div className="flex w-full items-center justify-center py-25 md:py-[133px]">
          <div className="flex flex-col items-center justify-center gap-[56px] w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight w-full md:w-2/3 text-center">Explore the KROSS Ecosystem</h1>
            <div className="flex gap-4 w-full items-center justify-center">
              <a href="#" className="inline-flex px-8 py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow">Start Building</a>
              <a href="#" className="rounded-[12px] p-[2px] bg-gradient-to-r from-[#6D05B8] to-[#FF00B8] hover:bg-gradient-to-r hover:from-[#6D05B8] hover:to-[#AA00B8]">
                <span className="flex text-white items-center justify-center px-8 py-4 bg-[#110942] rounded-[12px] whitespace-nowrap text-md hover:bg-gradient-to-r from-[#6D05B8] to-[#FF00B8]">Discover Ecosystem</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
} 