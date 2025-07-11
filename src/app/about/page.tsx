"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#050026] to-[#110942] text-white font-sans ">
      {/* Centered About Us Heading */}
      {/* Header */}
      <div className="py-8 sm:py-16 h-[200px] sm:h-[370px] flex items-center justify-center" style={{ background: "linear-gradient( #110942 80%)", backgroundImage: "url('/assets/image/about/image.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "bottom" }}>
        <div className="container mx-auto px-2 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: 'lato, sans-serif' }}>About Us</h1>
        </div>
      </div>
      {/* Two-column Section */}
      <section className="px-2 sm:px-5 md:px-20 py-6 sm:py-10 md:py-20 w-full flex flex-col md:flex-row bg-[#050026]">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-10 w-full">
          {/* Left column: Text */}
          <div className="flex-1 flex items-center md:justify-start justify-center mb-6 md:mb-0">
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
              Kross Blockchain is Africa is pioneering Layer 1 smart contract platform, purpose-built for the compliant tokenization of real-world assets. Designed for speed, scalability, and regulatory trust, Kross empowers businesses, developers, and governments to seamlessly bring value onchain. With enterprise-grade infrastructure and cross-border interoperability, we are bridging traditional finance with the future of decentralized technology. KROSS is where real-world impact meets blockchain innovation.
            </p>
          </div>
          {/* Right column: Image Placeholder */}
          <div className="place-content-center">
            <img alt="Blockchain 3D Cube Visualization" width={525} height={430} className="h-full" src="/assets/image/about/about.png" />
          </div>
        </div>
      </section>


      <section className="px-2 sm:px-5 md:px-20 py-6 sm:py-10 md:py-20 w-full bg-[#0E0831]">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Our Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full items-center">
          {/* Left column: both paragraphs stacked */}
          <div className="flex flex-col gap-6">
            <p className="text-white text-base md:text-lg leading-relaxed">
              To build a globally trusted blockchain infrastructure that empowers the secure and compliant digitization of real-world assets. We envision a future where financial systems, institutions, and communities are seamlessly connected onchain—transparent, inclusive, and borderless. At KROSS, we are driving the shift from traditional finance to a decentralized world where value flows freely and securely.
            </p>
            <p className="text-white text-base md:text-lg leading-relaxed">
              At Kross Blockchain, we are always thinking forward. We build cutting-edge technology that is fast, secure, and ready for the future—so our users and partners are never left behind. Whether it is making real-world assets easier to trade or staying ahead of new tech trends, we focus on what is next. With KROSS, you are not just keeping up—you&aposre leading the way.
            </p>
          </div>
          {/* Right column: single 2x2 grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-4 h-full place-content-center">
            <img alt="Blockchain 3D Cube Visualization" width={525} height={430} className="h-full" src="/assets/image/about/1.svg" />
            <img alt="Blockchain 3D Cube Visualization" width={525} height={430} className="h-full mt-[20px]" src="/assets/image/about/2.svg" />
            <img alt="Blockchain 3D Cube Visualization" width={525} height={430} className="h-full -mt-[20px]" src="/assets/image/about/3.svg" />
            <img alt="Blockchain 3D Cube Visualization" width={525} height={430} className="h-full " src="/assets/image/about/4.svg" />
          </div>
        </div>
      </section>
      {/* Our Vision Section */}
      <div className="md:flex-row items-center md:items-stretch gap-6 md:gap-10 flex items-center justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Investors And Accelerators</h2>
        </div>
      {/* Investors And Accelerators Section */}
      <section className="w-full h-[200px] sm:h-[300px] md:h-[400px] min-h-[160px] sm:min-h-[240px] md:min-h-[320px] relative flex justify-center items-center">
        
        <div className="flex flex-col gap-2 md:gap-4 ">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-4 w-full">
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10 w-32 sm:w-40 md:w-48" src="/assets/image/partner/2.svg" />
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10 w-32 sm:w-40 md:w-48" src="/assets/image/partner/1.svg" />
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10 w-32 sm:w-40 md:w-48" src="/assets/image/partner/4.svg" />
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-4 w-full">
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10 w-32 sm:w-40 md:w-48" src="/assets/image/partner/3.svg" />
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10 w-32 sm:w-40 md:w-48" src="/assets/image/partner/6.svg" />
            <img alt="Blockchain 3D Cube Visualization" className="relative z-10 w-32 sm:w-40 md:w-48" src="/assets/image/partner/5.svg" />
          </div>
        </div>
      </section>

      {/* Gradient Contact Section */}
      <section className="w-full h-[300px] sm:h-[500px] md:h-[700px] flex flex-col items-center justify-center relative bg-gradient-to-br from-[#0a0a2f] via-[#1a0a3f] to-[#2a0a4f] py-8 sm:py-16 mt-6 sm:mt-10">
        <div className="absolute bottom-0 left-0 flex gap-4">
            <div className="w-[550px] h-[250px] bg-[#EC34E0]/15 blur-3xl rounded-full"></div>
        </div>
        <div className="absolute top-0 right-0 flex gap-4">
            <div className="w-[550px] h-[250px] bg-[#EC34E0]/15 blur-3xl rounded-full"></div>
        </div>
        <h3 className="text-white text-sm sm:text-base font-semibold mb-1 sm:mb-2">Staying Ahead Of The Curve</h3>
        <p className="text-lg sm:text-2xl md:text-3xl text-center mb-4 sm:mb-8 max-w-4xl text-[#A198A8]/60">
          We&apos;re a team of developers and blockchain professionals focused on solving one of the industry&apos;s biggest challenges — keeping up with ever-evolving blockchain regulations.
        </p>
        <h3 className="text-white text-[48px] sm:text-3xl font-bold mb-2 sm:mb-4 mt-12 sm:mt-32 text-center">Contact Our Team</h3>
       
          <div className="inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200  inline-block">
            <a
              href="/contact"
              className="inline-flex px-8 py-4 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200  inline-block"
            >
              Contact Us
            </a>
          </div>
        
      </section>
    </div>
  );
} 