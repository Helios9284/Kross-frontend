import React from 'react';

export default function ExplorerPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#1a0841] to-[#18062b] flex flex-col items-center py-12 px-2 relative overflow-hidden" style={{fontFamily: 'lato, sans-serif'}}   >
      {/* Star background effect (optional, can be improved with a component) */}
      
      {/* Hero Section */}
      <section className="px-5 md:px-20 py-10 md:py-20 relative w-screen">
        <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
          {/* Left column */}
          <div className="lg:w-4/5 relative">
            <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 flex gap-4">
                <div className="w-[350px] h-[350px] bg-[#EC34E0]/25 blur-3xl rounded-full"></div>
            {/* <div className="w-[250px] h-[250px] bg-[#487DF1]/20 blur-3xl rounded-full"></div> */}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-6" style={{ fontFamily: 'lato, sans-serif' }}>Our Explorer Is Being Upgraded</h1>
            <p className="text-xl text-gray-300 mb-10 w-full md:w-3/5">It's a scar on us we need the fix so lets beautify the scar. It costs $10k to build the new upgraded explorer. For now we secure the Blockchain records from Waves chain custom endpoint.</p>
            {/* <a href="#" className="inline-flex px-8 py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow">Krosscoin Explorer</a> */}
          </div>
          {/* Right column */}
          <div className="lg:w-2/5 flex justify-center relative">
            <div className="relative w-80 h-80 md:w-full md:h-full">
              <div className="absolute inset-0 bg-[#FF00B8]/40 blur-3xl rounded-full -z-0"></div>
              {/* <img alt="Blockchain 3D Cube Visualization" width={525} height={430} className="relative z-10" src="/assets/image/hero.svg" /> */}
            </div>
          </div>
        </div>
      </section>
      <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.04) 0%, transparent 70%)'}} />
      {/* Main Content */}
      <div className="relative z-10  w-full flex flex-col items-center font-sans bg-[#050026] p-[40px]">
        {/* Subheading */}
        <div className="absolute top-1/4 left-0 -translate-x-1/2 -translate-y-1/2 flex gap-4">
          <div className="w-[350px] h-[350px] bg-[#6D05B8]/42 blur-3xl rounded-full"></div>
          {/* <div className="w-[250px] h-[250px] bg-[#487DF1]/20 blur-3xl rounded-full"></div> */}
        </div>
        <div className="text-center mb-8">
          <span className="block text-[40px] font-medium text-gray-500">For Now You Can Use The Kross Explorer By</span>
          <span className="block text-[48px] font-bold text-transparent text-white mt-1">
            Inserting Our Node Url Inside The Custom Field
          </span>
          <span className="block text-[56px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EC34E0] to-[#6D05B8] mt-1">
            Of The Classic Waves Explorer.
          </span>
        </div>
        {/* Steps Button */}
        <button className="mb-6 px-6 py-2 rounded-full border-[0.5px] border-[#FFFFFFD4] bg-[#11094280] text-white font-semibold shadow-lg flex items-center gap-2">
          <span className="text-lg"><img src="/assets/icon/step.svg" alt="Steps" className="w-6 h-6" /></span> Steps
        </button>
        {/* Steps Card */}
        <div className="w-full max-w-xl bg-[#1a0841]/80 rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-2xl border border-[#EC34E0]/20">
          {[
            {num: '01', text: 'Go to https://classic.wavesexplorer.com'},
            {num: '02', text: 'Tap on the three horizontal lines menu icon on the top left'},
            {num: '03', text: 'Tap on settings icon'},
            {num: '04', text: 'Enter the Kross node address url inside the field. Enter: https://node2.krossexplorer.com'},
            {num: '05', text: 'Tap on save and apply button. The site will refresh'},
            {num: '06', text: 'Tap on the 3 horizontal lines menu icon again'},
            {num: '07', text: 'Tap on Mainnet and select Custom. The site will refresh and you are now using the Kross explorer.'},
            {num: '08', text: 'Search addresses, transaction IDs, aliases etc.'},
          ].map((step, idx) => (
            <div key={step.num} className="flex items-center gap-4">
              <div className="w-14 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#6D05B8] to-[#EC34E0] text-white text-xl font-bold shadow-md">
                {step.num}
              </div>
              <div className="flex-1 text-white text-base md:text-lg font-medium bg-[#2a115a]/60 rounded-full px-4 py-2">
                {step.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 