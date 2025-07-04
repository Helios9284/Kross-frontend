"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#050026] to-[#110942] text-white font-sans">
      {/* Centered About Us Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">About Us</h1>
      {/* Two-column Section */}
      <section className="container px-5 md:px-20 py-10 md:py-20 relative w-screen">
        {/* Left: Text */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 w-full">
          {/* Left column: Heading */}
          <div className="flex-1 flex items-center md:justify-start justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Investors And Accelerators</h2>
          </div>
          {/* Right column: Placeholder for logos/future content */}
          <div className="flex-1 flex items-center md:justify-end justify-center">
            <div className="h-32 md:h-40 w-full bg-[#2b3250] rounded-2xl opacity-40" />
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="container px-5 md:px-20 py-10 md:py-20 relative w-screen flex flex-col">
        {/* Left: Vision Text */}
        <div className="flex-1 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-base md:text-lg leading-relaxed mb-8">
            To build a globally trusted blockchain infrastructure that empowers the secure and compliant digitization of real world assets. We envision a future where financial systems are seamlessly interconnected, transparent, and accessible to all. At KROSS, we are committed to driving innovation and adoption for a borderless and decentralized world.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            At Kross Blockchain, we're always thinking forward. We build cutting-edge technology that's fast, secure, and ready for the future. Our team is passionate about enabling the tokenization of assets and helping institutions meet the needs of tomorrow.
          </p>
        </div>
        {/* Right: 2x2 Grid of Placeholders */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-6 w-full max-w-xs md:max-w-sm">
          <div className="bg-[#a6a3c4] opacity-30 rounded-2xl h-24 md:h-28" />
          <div className="bg-[#a6a3c4] opacity-30 rounded-2xl h-24 md:h-28" />
          <div className="bg-[#a6a3c4] opacity-30 rounded-2xl h-24 md:h-28" />
          <div className="bg-[#a6a3c4] opacity-30 rounded-2xl h-24 md:h-28" />
        </div>
      </section>

      {/* Investors And Accelerators Section */}
      <section className="container px-5 md:px-20 py-10 md:py-20 relative w-screen">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 w-full">
          {/* Left column: Heading */}
          <div className="flex-1 flex items-center md:justify-start justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Investors And Accelerators</h2>
          </div>
          {/* Right column: Placeholder for logos/future content */}
          <div className="flex-1 flex items-center md:justify-end justify-center">
            <div className="h-32 md:h-40 w-full bg-[#2b3250] rounded-2xl opacity-40" />
          </div>
        </div>
      </section>

      {/* Gradient Contact Section */}
      <section className="w-full min-h-[320px] flex flex-col items-center justify-center bg-gradient-to-b from-[#18123a] via-[#2b0a3d] to-[#6d05b8] rounded-t-[48px] py-16 mt-10">
        <h3 className="text-white text-base font-semibold mb-2 opacity-80">Staying Ahead Of The Curve</h3>
        <p className="text-2xl md:text-3xl text-white text-center font-bold mb-8 max-w-2xl opacity-80">
          We're a team of developers and blockchain professionals focused on solving one of the industry's biggest challenges — keeping up with ever-evolving blockchain regulations.
        </p>
        <a href="/contact" className="mt-2 px-8 py-3 bg-[#FF00B8] text-white font-bold rounded-full text-base shadow-lg hover:bg-[#d6009a] transition-colors">Contact Our Team</a>
      </section>
    </div>
  );
} 