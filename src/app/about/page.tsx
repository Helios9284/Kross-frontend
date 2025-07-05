"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#050026] to-[#110942] text-white font-sans ">
      {/* Centered About Us Heading */}
      <h1 className="text-3xl h-[400px] md:text-4xl font-bold text-white text-center mb-16 justify-center items-center flex bg-[#110942]">About Us</h1>
      {/* Two-column Section */}
      <section className="px-5 md:px-20 py-10 md:py-20 w-full flex">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 w-full">
          {/* Left column: Text */}
          <div className="flex-1 flex items-center md:justify-start justify-center">
            <p className="text-white text-base md:text-lg leading-relaxed">
              Kross Blockchain is Africa is pioneering Layer 1 smart contract platform, purpose-built for the compliant tokenization of real-world assets. Designed for speed, scalability, and regulatory trust, Kross empowers businesses, developers, and governments to seamlessly bring value onchain. With enterprise-grade infrastructure and cross-border interoperability, we are bridging traditional finance with the future of decentralized technology. KROSS is where real-world impact meets blockchain innovation.
            </p>
          </div>
          {/* Right column: Image Placeholder */}
          <div className="flex-1 flex items-center md:justify-end justify-center">
            <div className="w-[320px] h-[200px] md:w-[400px] md:h-[260px] bg-[#2b3250] rounded-2xl opacity-40" />
          </div>
        </div>
      </section>


      <section className="px-5 md:px-20 py-10 md:py-20 w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">
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
          <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full place-content-center">
            <div className="bg-[#a6a3c4] opacity-30 rounded-2xl h-24 md:h-28" />
            <div className="bg-[#a6a3c4] opacity-30 rounded-2xl h-24 md:h-28" />
            <div className="bg-[#a6a3c4] opacity-30 rounded-2xl h-24 md:h-28" />
            <div className="bg-[#a6a3c4] opacity-30 rounded-2xl h-24 md:h-28" />
          </div>
        </div>
      </section>
      {/* Our Vision Section */}

      {/* Investors And Accelerators Section */}
      <section className="w-full h-[400px] min-h-[320px] relative">
        <div className="md:flex-row items-center md:items-stretch gap-10  flex items-center  justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Investors And Accelerators</h2>
        </div>
      </section>

      {/* Gradient Contact Section */}
      <section className="w-full h-[700px] flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a2f] via-[#1a0a3f] to-[#2a0a4f] py-16 mt-10">
        <h3 className="text-white text-base font-semibold mb-2">Staying Ahead Of The Curve</h3>
        <p className="text-2xl md:text-3xl text-white text-center mb-8 max-w-2xl opacity-80">
          We&aposre a team of developers and blockchain professionals focused on solving one of the industry&aposs biggest challenges — keeping up with ever-evolving blockchain regulations.
        </p>
        <h3 className="text-white text-3xl font-bold mb-4 mt-32 text-center">Contact Our Team</h3>
       
        <a href="/contact" className="inline-flex px-8 py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow">Contact Us</a>
          
      </section>
    </div>
  );
} 