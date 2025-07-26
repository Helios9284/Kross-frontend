"use client";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
export default function EarningPage() {
  const [, setImgVisible] = useState(false);
  useEffect(() => {
    setImgVisible(true);
  }, []);
  return (
    <div
    className="min-h-screen bg-[#050026] overflow-hidden w-full">
    {/* Hero Section */}
    <section className="text-white px-4 sm:px-6 md:px-20 py-8 sm:py-12 md:py-20 relative w-full min-h-[300px] md:min-h-[400px]">
        <div className="absolute top-0 left-0 flex gap-2 sm:gap-4 ">
          <div className="relative w-[180px] sm:w-[250px] md:w-[450px] h-[180px] sm:h-[250px] md:h-[350px] flex items-center justify-center">
          
            {/* Sharp image */}
            <img
              alt="star"
              className="relative w-full h-full object-cover z-4"
              src="/assets/image/earning/star.png"
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 flex gap-2 sm:gap-4 ">
          <div className="relative w-[180px] sm:w-[250px] md:w-[450px] h-[180px] sm:h-[250px] md:h-[650px] flex items-center justify-center">
          
            {/* Sharp image */}
            <img
              alt="star"
              className="relative w-full h-full object-cover z-0"
              src="/assets/image/earning/star_2.png"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 flex gap-2 sm:gap-4 ">
          <div className="relative w-[180px] sm:w-[350px] md:w-[850px] h-[180px] sm:h-[350px] md:h-[450px] flex items-center justify-center">

            <div className="absolute top-0 left-1/2 inset-0 bg-[#FF00B8]/25 blur-3xl rounded-full z-0 explorer-move" ></div>

          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 w-full ">
          {/* Left column */}
          <motion.div
            className="w-full lg:w-3/5 z-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-4 sm:mb-6" style={{ fontFamily: 'lato, sans-serif' }}>Start Earning Rewards <br/>with Kross<br/> Applications</h1>
           
          </motion.div>
          {/* Right column */}
          <motion.div
            className="w-full lg:w-2/5 flex justify-center relative mt-6 lg:mt-0"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative sm:w-80 sm:h-80 md:w-full md:h-full">
              <div className="absolute inset-0 bg-[#FF00B8]/30 blur-3xl rounded-full -z-0"></div>
                <img
                    alt="Blockchain 3D Cube Visualization"
                    className="relative w-full h-full object-cover"
                    src="/assets/image/earning/1.png"
                    style={{ borderRadius: '8.94px' }}
                />
            </div>
          </motion.div>
        </div>
    </section>

    <section className="w-full relative flex flex-col items-center justify-center bg-[#050026] px-2 sm:px-5 md:px-20 pb-[100px] font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/5 flex gap-2 sm:gap-4">
        <div className="relative w-[180px] sm:w-[350px] md:w-[850px] h-[180px] sm:h-[350px] md:h-[450px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[#FF00B8]/15 blur-3xl rounded-full z-0"></div>
        </div>
      </div>
      <div className="absolute top-[220px] -translate-x-1/2 left-0 w-[120px] sm:w-[220px] md:w-[320px] h-[200px] sm:h-[300px] md:h-[400px] bg-[#6D05B8]/20 blur-3xl rounded-full z-0"></div>

      <div className="w-full py-6 md:py-[67px]">
        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          <h3 className="font-bold text-white text-center break-words whitespace-normal text-[clamp(16px,4vw,24px)]">
            Choose From Our Suite Of Applications To Begin 
          </h3>
          <p
            className="font-bold text-center bg-clip-text text-transparent break-words whitespace-normal text-[clamp(16px,4vw,24px)]"
            style={{ backgroundImage: "radial-gradient(circle, #FF00B8, #6D05B8)" }}
          >
            Earning, Trading, Playing, Or Investing.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4" style={{ fontFamily: 'Lato, sans-serif' }} >
        {/* First row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-8 w-full mt-8 z-50 grid-mobile-1col  ">
          {/* Card 1 */}
          <div className="border border-[#4B6794] rounded-[16px] p-2 sm:p-4 md:p-6 flex flex-col items-start gap-4 sm:gap-6 bg-[#110942] min-h-[200px] md:min-h-[362px] w-full overflow-hidden min-w-0">
            <span className="font-bold text-white leading-snug text-left w-full break-words whitespace-normal text-[clamp(24px,2.5vw,30px)] md:text-[40px]">Hashgreed</span>
            <span className="text-white leading-snug text-left break-words whitespace-normal text-[clamp(16px,2vw,22px)]  md:text-[22px]">
              Africa&apos;s First NFT marketplace for creative, web3 commerce and asset tokenization. Regulated in various jurisdictions globally.
            </span>
            <div style={{ width: "fit-content" }} className="inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200 inline-block mt-auto">
              <a href="https://lifestyle.krosscoin.io/" className="inline-flex px-8 py-4 rounded-[10px] bg-[#110942] hover:bg-transparent text-white font-medium  text-[clamp(12px,2vw,16px)]  md:text-[16px] hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200 inline-block">
                Enter Hashgreed
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-[#4B6794] rounded-[16px]  p-2 sm:p-4 md:p-6 flex flex-col items-start gap-4 sm:gap-6 bg-[#110942]/60 min-h-[200px] md:min-h-[362px] w-full overflow-hidden min-w-0">
            <span className="font-bold text-white leading-snug text-left w-full break-words whitespace-normal text-[clamp(24px,2.5vw,30px)] md:text-[40px]">Hashgreed DEX</span>
            <span className="text-white leading-snug text-left break-words whitespace-normal text-[clamp(16px,2vw,22px)] md:text-[22px]">
              Africa&apos;s First DEX for regulated and tokenized RWA trading.
            </span>
            <div style={{ width: "fit-content" }} className="inline-flex p-[2px] rounded-[12px] w-full bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200 inline-block mt-auto">
              <a href="https://lifestyle.krosscoin.io/" className="inline-flex px-8 py-4 rounded-[10px] bg-[#110942] hover:bg-transparent text-white font-medium  text-[clamp(12px,2vw,16px)]  md:text-[16px] hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200 inline-block">
                Enter Hashgreed DEX
              </a>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-8 w-full mt-8 z-50 grid-mobile-1col">
          {/* Card 3 */}
          <div className="border border-[#4B6794] rounded-[16px] p-2 sm:p-4 md:p-6 flex flex-col items-start gap-4 sm:gap-6 bg-[#110942]/60 min-h-[200px] md:min-h-[362px] w-full overflow-hidden min-w-0">
            <span className="font-bold text-white leading-snug text-left w-full whitespace-normal text-[clamp(24px,2.5vw,30px)] md:text-[40px]">TapOwn Game</span>
            <span className="text-white leading-snug text-left break-words whitespace-normal text-[clamp(12px,2vw,16px)]  md:text-[16px]">
              World&apos;s first Tap to Own RWA telegram mini-app game. Play the game, stack up OWN coins and earn free shares in Tech startups and real estate globally.
            </span>
            <div style={{ width: "fit-content" }} className="inline-flex p-[2px] w-full rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200 inline-block mt-auto">
              <a href="#" className="inline-flex px-8 py-4 rounded-[10px] bg-[#110942] hover:bg-transparent text-white font-medium  text-[clamp(12px,2vw,16px)]  md:text-[16px] hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200 inline-block">
                Enter TapOwn
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="border border-[#4B6794] rounded-[16px] p-2 sm:p-4 md:p-6 flex flex-col items-start gap-4 sm:gap-6 bg-[#110942]/60 min-h-[200px] md:min-h-[362px] w-full overflow-hidden min-w-0">
            <span className="font-bold text-white leading-snug text-left w-full break-words whitespace-normal text-[clamp(24px,2.5vw,30px)] md:text-[40px]">
              Hashpay
            </span>
            <span className="text-white leading-snug text-left w-full break-words whitespace-normal text-[clamp(12px,2vw,16px)] md:text-[16px]">
              Pay Seamlessly: Mobile app Kross wallet listed on both Apple App Store and Google Play Store. First mobile NFT wallet app from Africa listed on both app and play stores.
            </span>
          </div>

          {/* Card 5 */}
          <div className="border border-[#4B6794] rounded-[16px] p-2 sm:p-4 md:p-6 flex flex-col items-start gap-4 sm:gap-6 bg-[#110942]/60 min-h-[200px] md:min-h-[362px] w-full overflow-hidden min-w-0">
            <span className="font-bold text-white leading-snug text-left w-full break-words whitespace-normal text-[clamp(24px,2.5vw,30px)] md:text-[40px]">Hashgreed Domain</span>
            <span className="text-white leading-snug text-left break-words whitespace-normal text-[clamp(12px,2vw,16px)]  md:text-[16px]">
              World&apos;s first digital cooperative platform for investing in tokenized real world assets. For Nigerians Only.
            </span>
            <div style={{ width: "fit-content" }} className="inline-flex p-[2px] leading-snug   break-words rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200 inline-block mt-auto">
              <a href="https://lifestyle.krosscoin.io/" className="inline-flex px-8 py-4  text-[clamp(12px,2vw,16px)]  md:text-[16px] rounded-[10px] bg-[#110942] hover:bg-transparent text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200 inline-block">
                Enter Hashgreed Domain
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
  );
} 