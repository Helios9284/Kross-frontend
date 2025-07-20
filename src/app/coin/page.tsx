"use client";
import { motion } from "framer-motion";
export default function Page() {
  const centralizedExchanges = [
    "Binance",
    "ByBit",
    "KuCoin",
    "OKX",
    "Kraken",
    "Gate.io",
    "Bitget",
    "AscendEX",
    "Crypto.com",
  ]
  const exchangeImages = {
    "Binance": "/assets/icon/coin/Binance.svg",
    "ByBit": "/assets/icon/coin/1.svg",
    "KuCoin": "/assets/icon/coin/kucoin.svg",
    "OKX": "/assets/icon/coin/okx.svg",
    "Kraken": "/assets/icon/coin/kraken.svg",
    "Gate.io": "/assets/icon/coin/gate.svg",
    "Bitget": "/assets/icon/coin/bitget.svg",
    "AscendEX": "/assets/icon/coin/ascent.svg",
    "Crypto.com": "/assets/icon/coin/crypto.com.svg",
  }

  const decentralizedExchanges = ["Uniswap", "Hyperliquid", "Osmosis", "DYDX"]
  const exchangeImages_1 = {
    "Uniswap": "/assets/icon/coin/uniswap.svg",
    "Hyperliquid": "/assets/icon/coin/hyper.svg",
    "Osmosis": "/assets/icon/coin/osmosis.svg",
    "DYDX": "/assets/icon/coin/dydx.svg"
  }
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#050026] via-[#1a0a3f] to-[#110942] text-white font-sans">
      {/* Hero Section */}
      <section className="text-white flex flex-col lg:flex-row relative overflow-hidden w-full  min-h-[600px]">
        <div className="px-2 sm:px-5 md:px-20 py-6 sm:py-10 md:py-20 relative w-full sm:w-screen">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 w-full">
            {/* Left column */}
            <motion.div
              className="w-full lg:w-2/3"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div
                className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-[24px] border-[0.5px] border-[#FFFFFFDD] bg-[#11094280] mb-4 sm:mb-8"
                style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 12px 0px inset" }}
              >
                <img
                  alt="The $KSS Coin"
                  width={16}
                  height={16}
                  src="/assets/icon/file-icons_buildkite.png"
                />
                <span className="text-xs sm:text-sm font-medium">The $KSS Coin</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-4 sm:mb-6 text-center md:text-left">
              Leverage The Strength Of <br/>$KSS to fully activate The<br/> Potential of The KROSS<br/> Ecosystem
              </h1>
              
              <div className="inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200  inline-block">
                <a
                  href="#"
                  className="inline-flex px-8 py-4 sm:px-4 sm:py-2 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200  inline-block text-base sm:text-sm"
                >
                 Buy $KSS Coin
                </a>
              </div>
            </motion.div>
            {/* Right column */}
            <motion.div
              className="w-full lg:w-1/3 flex justify-center relative"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto">
                <div className="absolute inset-0 bg-[#FF00B8]/30 blur-3xl rounded-full -z-0"></div>
                <img alt="Blockchain 3D Cube Visualization" width={525} height={430} className="relative w-full h-auto" src="/assets/image/coin/coin_1.png" />
              </div>
            </motion.div>
              
          </div>
        </div>
      </section>

      {/* New section with purple blurred background glow */}
      <section className="text-white relative overflow-hidden w-full" style={{ backgroundImage: "url('/assets/image/coin/Component.png')", backgroundSize: "auto", backgroundRepeat: "no-repeat", backgroundPosition: "top center" }}>
        <div className="absolute top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 sm:gap-4">
          <div className="w-[180px] sm:w-[250px] md:w-[350px] h-[180px] sm:h-[250px] md:h-[350px] bg-[#EC34E0]/25 blur-3xl rounded-full"></div>
        </div>
        {/* Background Glow */}
        <div className="absolute bottom-0 right-1/2 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[500px] rounded-full blur-[60px] sm:blur-[100px] opacity-100 bg-gradient-to-br from-[#FF00B8] to-[#6D05B8] z-[-1]" />
        <div className="container mx-auto px-2 sm:px-5 md:px-20 py-10 sm:py-20">
          <div className="text-center mb-8 sm:mb-16 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-[64px]">Utilities</h2>
            
          </div>
          <div className="px-2 sm:px-5 relative w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3 sm:gap-5">
              {/* Left column features */}
              <div className="space-y-10">
                <div className="text-center md:text-right text-white">
                  <h3 className="text-base sm:text-lg md:text-2xl text-white font-semibold mb-2">Governance</h3>
                  <p className="text-xs sm:text-sm md:text-[16px] text-gray-300 leading-relaxed">
                  With $KSS at its core, KROSS empowers its community to lead. From protocol integrations to chain upgrades, every major decision is shaped by collective input and governance.
                  </p>
                </div>
                <div className="text-center md:text-right text-white">
                  <h3 className="text-base sm:text-lg md:text-2xl text-white font-semibold mb-2">LPoS Security</h3>
                  <p className="text-xs sm:text-sm md:text-[16px] text-gray-300 leading-relaxed">
                  Powered by Leased Proof of Stake, the KROSS blockchain lets KSS holders play an active role in network security by leasing their tokens to validators. In return, both validators and community participants earn rewards for helping maintain and grow the ecosystem.
                  </p>
                </div>
              </div>
              {/* Center icons grid */}
              <div className="flex flex-col items-center justify-between w-full gap-4">
                <div className="flex gap-3">
                  <img alt="Feature 1" width={150} height={150} className="w-16 sm:w-24 md:w-36 h-auto" src="/assets/image/builder/builder_sec2_1.png" />
                  <img alt="Feature 2" width={150} height={150} className="w-16 sm:w-24 md:w-36 h-auto" src="/assets/image/builder/builder_sec2_3.png" />
                </div>
                <div className="flex gap-3">
                  <img alt="Feature 3" width={150} height={150} className="w-16 sm:w-24 md:w-36 h-auto" src="/assets/image/builder/builder_sec2_2.png" />
                  <img alt="Feature 4" width={150} height={150} className="w-16 sm:w-24 md:w-36 h-auto" src="/assets/image/builder/builder_sec2_4.png" />
                </div>
              </div>
              {/* Right column features */}
              <div className="space-y-10">
                <div className="text-center md:text-left text-white">
                  <h3 className="text-base sm:text-lg md:text-2xl font-semibold mb-2">100% RWA Backed</h3>
                  <p className="text-xs sm:text-sm md:text-[16px] text-gray-300 leading-relaxed">
                  The $KSS token is intrinsically linked to Real World Assets, with 100% of project-generated $KSS sales allocated toward the acquisition and development of early-stage, scalable real estate assets intended for tokenization. This positions $KSS as the first Layer 1 coin fully backed by land-based holdings. Liquidity Providers earn between 5% to 20% APY by supplying liquidity on exchanges and have the option to swap up to 50% of their $KSS for KABT (Kross Asset Backed Tokens), enabling broad and ongoing value discovery for the $KSS ecosystem.
                  </p>
                </div>
                <div className="text-center md:text-left text-white">
                  <h3 className="text-base sm:text-lg md:text-2xl font-semibold mb-2">Gasless Transaction fees</h3>
                  <p className="text-xs sm:text-sm md:text-[16px] text-gray-300 leading-relaxed">
                  KROSS Chain transaction fees are fixed, low cost, and paid in the network&aposs native token - $KSS. This predictable fee model ensures affordability and scalability for users, developers, and dApps, even during high network activity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white relative overflow-hidden w-full bg-gradient-to-l from-[#050026] to-[#110942]">
        <div className="absolute top-3/5 left-1/6 -translate-x-1/2 -translate-y-1/2 flex gap-4">
            <div className="w-[350px] h-[350px] bg-[#EC34E0]/15 blur-3xl rounded-full"></div>
            {/* <div className="w-[250px] h-[250px] bg-[#487DF1]/20 blur-3xl rounded-full"></div> */}
        </div>
        <div className=" px-6 ">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mt-[40px] sm:mt-[64px] mb-[24px] sm:mb-[40px]">Buy $KSS</h1>

          {/* Centralized Exchanges Section */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2
              className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-[#6D05B8] to-[#FF00B8] bg-clip-text text-transparent"
            >
              Centralized Exchanges
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* First row - 4 exchanges */}
              {centralizedExchanges.slice(0, 4).map((exchange, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-14 px-6 rounded-xl border border-white-500/30 text-white font-medium hover:bg-purple-500/10 transition-colors"

                >
                   <img
                    src={exchangeImages[exchange as keyof typeof exchangeImages]}
                    alt={exchange}
                    className="pr-2 w-8 h-8 sm:w-10 sm:h-10"
                  />
                  {exchange}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              {/* Second row - 3 exchanges */}
              {centralizedExchanges.slice(4, 7).map((exchange, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-14 px-6 rounded-xl border border-white-500/30 text-white font-medium hover:bg-purple-500/10 transition-colors"

                >
                  <img
                    src={exchangeImages[exchange as keyof typeof exchangeImages]}
                    alt={exchange}
                    className="pr-2 w-8 h-8 sm:w-10 sm:h-10"
                  />
                  {exchange}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
              {/* Third row - 2 exchanges */}
              {centralizedExchanges.slice(7, 9).map((exchange, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-14 px-6 rounded-xl border border-white-500/30 text-white font-medium hover:bg-purple-500/10 transition-colors"

                >
                  <img
                    src={exchangeImages[exchange as keyof typeof exchangeImages]}
                    alt={exchange}
                    className="pr-2"
                  />
                  {exchange}
                </div>
              ))}
            </div>
          </div>

          {/* Decentralized Exchanges Section */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#6D05B8] to-[#FF00B8] bg-clip-text text-transparent">
              Decentralized Exchanges
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {decentralizedExchanges.map((exchange, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-14 px-6 rounded-xl border border-white-500/30 text-white font-medium hover:bg-purple-500/10 transition-colors"
                >
                  <img
                    src={exchangeImages_1[exchange as keyof typeof exchangeImages_1]}
                    alt={exchange}
                    className="pr-2"
                  />
                  {exchange}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Networking Layer */}
      <section className="min-h-[100px] flex items-center justify-center px-5 md:px-20 mx-auto relative w-full bg-gradient-to-l from-[#050026] to-[#110942]">

        <div className="group">
        <div className="absolute top-3/5 left-1/3 -translate-x-1/2 -translate-y-1/2 flex gap-4">
            <div className="w-[350px] h-[350px] bg-[#EC34E0]/15 blur-3xl rounded-full"></div>
            {/* <div className="w-[250px] h-[250px] bg-[#487DF1]/20 blur-3xl rounded-full"></div> */}
        </div>
           
        </div>
        <img
          alt="Blockchain 3D Cube Visualization"
          width={500}
          height={500}
          src="/assets/image/coin/coin_2.png"
        />
      </section>


    </div>
  );
}