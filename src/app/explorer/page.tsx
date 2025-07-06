import React from 'react';

export default function ExplorerPage() {
  const steps = [
    {
      number: "01",
      text: "Go to https://classic.wavesexplorer.com",
    },
    {
      number: "02",
      text: "Tap on the three horizontal lines menu icon on the top left",
    },
    {
      number: "03",
      text: "Tap on settings icon",
    },
    {
      number: "04",
      text: "Enter the Kross node address url inside the field. Enter: https://nodes2.krossexplorer.com",
    },
    {
      number: "05",
      text: "Tap on save and apply button. The site will refresh",
    },
    {
      number: "06",
      text: "Tap on the 3 horizontal lines menu icon again",
    },
    {
      number: "07",
      text: "Tap on Mainnet and select Custom. The site will refresh and you are now using the Kross explorer.",
    },
    {
      number: "08",
      text: "Search addresses, transaction IDs, aliases etc.",
    },
  ]
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#1a0841] to-[#18062b] flex flex-col items-center py-8 sm:py-12 px-1 sm:px-2 relative overflow-hidden" style={{fontFamily: 'lato, sans-serif'}}   >
      {/* Star background effect (optional, can be improved with a component) */}
      
      {/* Hero Section */}
      <section className="px-2 sm:px-5 md:px-20 py-6 sm:py-10 md:py-20 relative w-full sm:w-screen">
            <div
                className="absolute top-1/3 w-[180px] sm:w-[250px] md:w-[350px] h-[180px] sm:h-[250px] md:h-[350px] bg-[#FF00B8]/40 blur-3xl rounded-full -z-0"
                style={{
                  animation: 'blurMoveFade 9s linear infinite',
                  left: 0, // This will be overridden by the animation
                }}
              ></div>
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 w-full">
          {/* Left column */}
          <div className="w-full lg:w-4/5 relative">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-4 sm:mb-6" style={{ fontFamily: 'lato, sans-serif' }}>Our Explorer Is Being Upgraded</h1>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-10 w-full md:w-3/5">It&apos;s a scar on us we need the fix so lets beautify the scar. It costs $10k to build the new upgraded explorer. For now we secure the Blockchain records from Waves chain custom endpoint.</p>
            {/* <a href="#" className="inline-flex px-8 py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow">Krosscoin Explorer</a> */}
          </div>
          {/* Right column */}
          <div className="w-full lg:w-2/5 flex justify-center relative mt-4 lg:mt-0">
            <div className=" w-40 h-40 sm:w-80 sm:h-80 md:w-full md:h-full overflow-x-hidden">
              
              <img alt="Blockchain 3D Cube Visualization" width={525} height={430} className="relative z-10" src="/assets/image/explorer/1.svg" />
            </div>
          </div>
        </div>
      </section>
      <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.04) 0%, transparent 70%)'}} />
      {/* Main Content */}
      <div className="relative z-10  w-full flex flex-col items-center font-sans p-4 sm:p-[40px]">
        {/* Subheading */}
        <div className="absolute top-1/4 left-0 -translate-x-1/2 -translate-y-1/2 flex gap-2 sm:gap-4">
          <div className="w-[180px] sm:w-[250px] md:w-[350px] h-[180px] sm:h-[250px] md:h-[350px] bg-[#6D05B8]/42 blur-3xl rounded-full"></div>
          {/* <div className="w-[250px] h-[250px] bg-[#487DF1]/20 blur-3xl rounded-full"></div> */}
        </div>
        <div className="text-center mb-4 sm:mb-8">
          <span className="block text-lg sm:text-[40px] font-medium text-gray-500">For Now You Can Use The Kross Explorer By</span>
          <span className="block text-2xl sm:text-[48px] font-bold text-transparent text-white mt-1">
            Inserting Our Node Url Inside The Custom Field
          </span>
          <span className="block text-2xl sm:text-[56px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EC34E0] to-[#6D05B8] mt-1">
            Of The Classic Waves Explorer.
          </span>
        </div>
        {/* Steps Button */}
        <button className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 rounded-full border-[0.5px] border-[#FFFFFFD4] bg-[#11094280] text-white font-semibold shadow-lg flex items-center gap-2">
          <span className="text-lg"><img src="/assets/icon/step.svg" alt="Steps" className="w-6 h-6" /></span> Steps
        </button>
        </div>
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="p-10 rounded-3xl border-4 sm:p-12 md:p-16" style={{
              borderImage: 'linear-gradient(to bottom, #6D05B8, transparent) 1',
              background: 'transparent',
            }}>
              <div className="space-y-5">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-5 p-[14px] sm:p-[18px] rounded-full shadow-lg h-auto sm:h-[50px] w-full"
                    style={{
                      background:
                        index % 2 === 0
                          ? "linear-gradient(135deg, #a21caf 0%, #6D05B8 100%)"
                          : "linear-gradient(-135deg, #a21caf 0%, #6D05B8 100%)",
                    }}
                  >
                    <div className="text-white font-bold text-xl flex-shrink-0 w-10 text-center border-2 rounded-full h-10 flex items-center justify-center bg-[#6D05B8]" style={{ borderColor: '#6D05B8' }}>{step.number}</div>
                    <div className="text-white text-base leading-relaxed font-medium text-center sm:text-left break-words w-full">{step.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
} 