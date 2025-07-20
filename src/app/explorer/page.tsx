"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";
export default function ExplorerPage() {
  // Step-by-step instructions for using the Kross Explorer
  const steps = [
    {
      number: '01',
      text: 'Go to https://classic.wavesexplorer.com',
    },
    {
      number: '02',
      text: 'Tap on the three horizontal lines menu icon on the top left',
    },
    {
      number: '03',
      text: 'Tap on settings icon',
    },
    {
      number: '04',
      text: 'Enter the Kross node address url inside the field. Enter: https://nodes2.krossexplorer.com',
    },
    {
      number: '05',
      text: 'Tap on save and apply button. The site will refresh',
    },
    {
      number: '06',
      text: 'Tap on the 3 horizontal lines menu icon again',
    },
    {
      number: '07',
      text: 'Tap on Mainnet and select Custom. The site will refresh and you are now using the Kross explorer.',
    },
    {
      number: '08',
      text: 'Search addresses, transaction IDs, aliases etc.',
    },
  ];

  // State to toggle steps visibility
  const [showSteps, setShowSteps] = useState(true);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#050026] via-[#1a0a3f] to-[#2a0a4f] text-white " style={{fontFamily: 'lato, sans-serif'}}>
      <section className="px-5 md:px-20 py-10 md:py-20 relative w-full min-h-[600px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 sm:gap-4 " >
          <div className=" relative w-[280px] sm:w-[450px] md:w-[850px] h-[280px] sm:h-[450px] md:h-[650px] flex items-center justify-center">
            {/* Blurred background */}
            <div className="absolute inset-0 bg-[#FF00B8]/25 blur-3xl rounded-full z-0 explorer-move" ></div>
            {/* Sharp image */}

          </div>
          
        </div>
        <div className="absolute top-1/3 left-0 -translate-x-1/2 -translate-y-1/2 flex gap-2 sm:gap-4 " >
          <div className=" relative w-[280px] sm:w-[450px] md:w-[850px] h-[280px] sm:h-[450px] md:h-[650px] flex items-center justify-center">
            {/* Blurred background */}
            {/* Sharp image */}
            <img
              alt="star"
              className="relative w-full h-full z-4"
              src="/assets/star.svg"
            />
            
          </div>
          
        </div>
        <div className="absolute top-1/3 left-1/3 flex gap-2 sm:gap-4">
          <div className=" relative w-[180px] sm:w-[250px] md:w-[350px] h-[180px] sm:h-[250px] md:h-[350px] flex items-center justify-center">
        
            <img
              alt="star"
              className="relative w-full h-full z-10"
              src="/assets/star1.svg"
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 flex gap-2 sm:gap-4">
          <div className=" relative w-[180px] sm:w-[250px] md:w-[350px] h-[180px] sm:h-[250px] md:h-[350px] flex items-center justify-center">
        
            <img
              alt="star"
              className="relative w-full h-full z-10"
              src="/assets/star1.svg"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10 w-full ">
          {/* Left column */}
          <motion.div
            className="w-full lg:w-2/4 z-10"
            initial={{ x: -100, opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-tight mb-6" style={{ fontFamily: 'lato, sans-serif' }}> Our Explorer Is<br/> Being Upgraded</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 w-full md:w-3/5">It&apos;s a scar on us we need the fix so let&apos;s beautify the scar. It <br/>costs $10k to build the new upgraded explorer. For now <br/>we secure the Blockchain records from Waves chain<br/> custom endpoint.</p>

          </motion.div>
          {/* Right column */}
          <motion.div
            className="w-full lg:w-2/4 flex justify-center relative"
            initial={{ x: 100, opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto flex justify-center items-center">
              <img alt="Blockchain 3D Cube Visualization" width={525} height={430} className="relative w-full h-auto" src="/assets/image/explorer/1.png" />
            </div>
          </motion.div>
        </div>
      </section>
      {/* Info Section */}
      <section className="relative bg-[#050026] w-full">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.04) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 w-full flex flex-col items-center font-sans p-4 sm:p-[40px] ">
          <div className="absolute top-1/4 left-0 -translate-x-1/2 -translate-y-1/2 flex gap-2 sm:gap-4" aria-hidden="true">
            <div className="w-[180px] sm:w-[250px] md:w-[350px] h-[180px] sm:h-[250px] md:h-[350px] bg-[#6D05B8]/42 blur-3xl rounded-full"></div>
          </div>
          <div className="text-center mb-4 sm:mb-8">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-medium text-gray-500">
              For Now You Can Use The Kross Explorer By
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-transparent text-white mt-1">
              Inserting Our Node Url Inside The Custom Field
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EC34E0] to-[#6D05B8] mt-1">
              Of The Classic Waves Explorer.
            </span>
          </div>
          {/* Steps Toggle Button */}
          <button
            className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-[0.5px] border-[#FFFFFFD4] bg-[#11094280] text-white font-semibold shadow-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#6D05B8] text-base sm:text-lg"
            aria-pressed={showSteps}
            aria-controls="explorer-steps"
            onClick={() => setShowSteps((prev) => !prev)}
          >
            <span className="text-2xl sm:text-3xl flex items-center gap-2">
              <img src="/assets/icon/step.svg" alt="Steps icon"  />
            
            {showSteps ? 'Steps' : 'Steps'} 
            </span>
          </button>
        </div>
      </section>

      {/* Steps Section (collapsible) */}
      {showSteps && (
        <section className="relative bg-[#050026] w-full " id="explorer-steps">
          <div className="pb-[145px]" style={{backgroundImage: "url('/assets/image/explorer/grid.png')", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", backgroundPosition: "top center"}}>
            <div className="max-w-4xl mx-auto">
              <div
                className="p-[2px] rounded-3xl"
                // style={{ background: 'linear-gradient(to bottom, #6D05B8, transparent)' }}
                
              >
                <div className="relative w-full h-full overflow-hidden">
                  {/* Blurred background */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "url('/assets/image/explorer/rectangle.svg')",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "top center",
                      filter: "blur(64px)", // Strong, but not excessive
                      opacity: 0.5
                    }}
                  />
                  {/* Optional: Add a dark overlay for smoother blending */}
                  <div className="absolute inset-0 bg-[#050026] opacity-75" />
                  {/* Foreground content */}
                  <div className="relative z-10">
                    <div className="p-6 sm:p-10 rounded-3xl bg-transparent sm:p-12 md:p-16" style={{backgroundImage: "url('/assets/image/explorer/rectangle.svg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "top center"}}>
                      <ol className="space-y-6" aria-label="Steps to use Kross Explorer">
                        {steps.map((step, index) => (
                          <li
                            key={index}
                            className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-5 p-4 sm:p-[18px] rounded-full shadow-lg min-h-20 w-full font-sans"
                            style={{
                              background:
                                index % 2 === 0
                                  ? 'linear-gradient(135deg, #a21caf 0%, #6D05B8 100%)'
                                  : 'linear-gradient(-135deg, #a21caf 0%, #6D05B8 100%)',
                            }}
                          >
                            <span
                              className="text-white font-bold text-2xl sm:text-3xl md:text-4xl border-2 rounded-full bg-[#6D05B8] inline-flex items-center justify-center aspect-square px-4"
                              style={{ borderColor: '#6D05B8' }}
                              aria-label={`Step ${step.number}`}
                            >
                              {step.number}
                            </span>
                            <span className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-medium text-center sm:text-left break-words w-full">
                              {step.text}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
} 