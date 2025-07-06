import React from 'react';

const features = [
  {
    title: 'Onchain Compliance',
    desc: 'Kross Network ensures all assets and transactions meet regulatory standards, providing peace of mind for institutions.'
  },
  {
    title: 'Plug And Play Tokenization',
    desc: 'Easily tokenize real-world assets with our seamless integration tools, reducing time-to-market and operational complexity.'
  },
  {
    title: 'Counterparty Risk',
    desc: 'Minimize risk with transparent, on-chain settlement and robust smart contract infrastructure.'
  },
  {
    title: 'Interoperability',
    desc: 'Connect with multiple blockchains and financial systems, ensuring your assets are accessible and transferable.'
  },
  {
    title: 'Security',
    desc: 'Enterprise-grade security protocols protect your assets and data at every layer.'
  },
  {
    title: 'Accessibility',
    desc: '24/7 access to your tokenized assets and real-time reporting from anywhere in the world.'
  },
];

const InstitutionPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#050026] to-[#110942] text-white" style={{fontFamily: 'Lato, sans-serif'}}>
      {/* Hero Section */}
      <section className="container px-2 sm:px-5 md:px-20 py-6 sm:py-10 md:py-20 relative w-full sm:w-screen">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-10 w-full">
          {/* Left column */}
          <div className="w-full lg:w-4/5">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-4 sm:mb-6">Transforming Real-World Assets<br/>Into Powerful Digital Value</h1>
            <p className="text-base sm:text-xl text-gray-300 mb-4 sm:mb-10 w-full md:w-3/5">Powering compliant RWA tokenization for businesses, governments, And developers through secure, institutional-grade infrastructure</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="/contact" className="inline-flex px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow">Contact us</a>
              <a href="#" className="inline-flex px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow">Tokenisation guide</a>
            </div>
          </div>
          
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full flex flex-col items-center justify-center py-8 sm:py-10 md:py-20 bg-[#050026]">
        <div className="max-w-xl text-center mx-auto">
          <p className="text-base sm:text-lg text-gray-300 mb-1 sm:mb-2">The Tokenization Of Real World Assets (RWA) Is Expected To Exceed</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">US$16 Trillion And Represent 10%<br/>Of GDP Globally By 2030.</h2>
          <span className="text-gray-400 text-xs sm:text-base">NASDAQ</span>
        </div>
      </section>

      {/* Partner Section */}
      <section className="w-full flex flex-col items-center justify-center py-8 sm:py-10 md:py-20 bg-[#050026]">
        <div className="max-w-2xl text-center mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">Institutions Partnering With Us</h3>
          <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">Our mission is to bring the global financial ecosystem onchain. We are committed to accelerating the efforts of those transforming tangible assets into secure, tokenized representations, driving the future of finance.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-4">
            <img src="/assets/image/institution/1.svg" alt="Institution Partner" className="w-full sm:w-1/3 h-auto" />
            <img src="/assets/image/institution/2.svg" alt="Institution Partner" className="w-full sm:w-1/3 h-auto" />
            <img src="/assets/image/institution/3.svg" alt="Institution Partner" className="w-full sm:w-1/3 h-auto" />
          </div>
          <a href="/contact" className="inline-flex px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium mt-[20px]">Contact us</a>
        </div>
      </section>

      {/* Why Institutions Choose Section */}
      <section className="w-full flex flex-col items-center justify-center py-8 sm:py-14 bg-[#050026]">
        <div className="max-w-2xl text-center mx-auto mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Why Do Institutions Choose Kross Network?</h3>
          <p className="text-[24px] sm:text-lg text-gray-300 mb-2 sm:mb-4 py-[24px]">Our mission is to bring the global financial ecosystem onchain. We are committed to accelerating the efforts of those transforming tangible assets into secure, tokenized representations, driving the future of finance</p>
          <span className="bg-transparent min-w-[120px] sm:min-w-[191px] border-2 border-[#ff00ff] hover:bg-[#ff00ff] text-white font-medium py-2 sm:py-4 px-4 sm:px-8 rounded-[12px] transition-all duration-200 hover:scale-105">Tokenisation guide</span>
          
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-10 px-[20px] md:px-[74px] py-[24px]">
          {features.map((f, i) => (
            <div key={i} className="border border-[#110942] rounded-[16px] p-8 bg-[#110942]/25 min-h-[180px] flex flex-col items-start" >
              <h4 className="text-[32px] md:text-[24px] font-bold mb-2">{f.title}</h4>
              <p className="text-[16px] md:text-[16px] text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full flex flex-col items-center justify-center py-8 sm:py-16 bg-[#110942]">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-[86px] text-center">Why Do Institutions Choose Kross Network?</h3>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 items-center mb-4 sm:mb-8 px-2 sm:px-4 mx-auto">
          <div className="flex justify-center">
            <img src="/assets/image/institution/3.svg" alt="Institution Partner" className="w-auto h-full" />
          </div>
          <div className="flex flex-col items-end">
            <p className="text-base md:text-lg text-gray-300 mb-6 text-left max-w-xl">&quot;We&apos;re committed to bringing the global financial system onchain. Kross Network plays a key role in helping us accelerate the tokenization of real-world assets, turning them into secure, digital representations. This transformation is essential to building a more open and efficient financial ecosystem.&quot;
              <br/><span className="block mt-4 font-semibold text-white">Mr.Ademolu Oyenuga<br/><span className="text-xs font-normal">Director/Board Member</span></span>
          </p>
          </div>
        </div>
        <div className="flex gap-2 justify-center mt-6">
          <span className="w-3 h-3 rounded-full bg-[#A259FF] inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#29214A] inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#29214A] inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#29214A] inline-block"></span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex flex-col items-center justify-center py-8 sm:py-16">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Start Tokenizing Your Real World Assets</h3>
        <a href="#" className="inline-flex px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium">Get Started</a>
      </section>
    </div>
  );
};

export default InstitutionPage;