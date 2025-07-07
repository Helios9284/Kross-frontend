"use client";
import { useState, useEffect } from "react";
import React from 'react';
const TraderPage = () => {

  const [, setAnimatedPills] = useState([false, false, false, false, false]);
  useEffect(() => {
    const timeouts = [0, 1, 2, 3, 4].map((i) =>
      setTimeout(() => {
        setAnimatedPills((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * 120)
    );
    return () => timeouts.forEach(clearTimeout);
  }, []);



  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#050026] to-[#110942] text-white" style={{fontFamily: 'lato, sans-serif'}}>
      {/* Hero Section */}
      <section className="w-full px-2 sm:px-5 md:px-20 py-6 sm:py-10 md:py-20 relative">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-10 w-full">
          {/* Left column */}
          <div className="w-full lg:w-3/5">
            <div className="inline-flex items-center gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-[24px] border-[0.5px] border-[#FFFFFFD4] bg-[#11094280] mb-4 sm:mb-8" style={{ boxShadow: '0px 4px 12px 0px #00000040 inset' }}>
              <img alt="Krosscoin for Traders" width={16} height={16} src="/assets/icon/file-icons_buildkite.png" />
              <span className="text-xs sm:text-sm font-normal text-white">Krosscoin for Traders</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-4 sm:mb-6" style={{ fontFamily: 'lato, sans-serif' }}>Simplify Your Crypto Journey</h1>
            <a href="#" className="inline-flex px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow">Join Traders</a>
          </div>
          {/* Right column */}
          <div className="w-full lg:w-2/5 flex justify-center relative mt-4 lg:mt-0">
            <div className="relative w-40 h-40 sm:w-80 sm:h-80 md:w-full md:h-full">
              <div className="absolute inset-0 bg-[#FF00B8]/30 blur-3xl rounded-full -z-0"></div>
              <img alt="Blockchain 3D Cube Visualization" width={525} height={430} className="relative z-10 w-full h-auto" src="/assets/image/trader_1.svg" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Kross Network Section */}
      <section
        className="w-full py-6 sm:py-10 md:py-20 relative flex flex-col items-center justify-center bg-[#110942] px-2 sm:px-5 md:px-20"
        style={{
          backgroundImage: "url('/assets/image/trader_2.svg')",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom"
        }}
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-10">Why Kross Network</h2>
        <div className="overflow-hidden w-full mb-8 sm:mb-14">
          <div className="flex flex-row-reverse gap-4 animate-marquee whitespace-nowrap" style={{animationDuration: '18s'}}>
            {['Control? All Yours', 'Security? Top-Tier', 'Control? All Yours', 'Security? Top-Tier', 'Control? All Yours'].map((text, idx) => (
              <div key={idx} className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] inline-block">
                <span
                  className="px-6 py-2 rounded-[8px] bg-[#110942] text-lg text-white inline-block"
                >
                  {text}
                </span>
              </div>
            ))}
            {/* Duplicate pills for seamless loop */}
            {['Control? All Yours', 'Security? Top-Tier', 'Control? All Yours', 'Security? Top-Tier', 'Control? All Yours'].map((text, idx) => (
              <div key={`dup-${idx}`} className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] inline-block">
                <span
                  className="px-6 py-2 rounded-[8px] bg-[#110942] text-lg text-white inline-block"
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee linear infinite;
            }
          `}</style>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 w-full px-2 sm:px-4 max-w-4xl" >
          {/* Card 1 */}
          <div className="border border-[#4B6794] rounded-[16px] p-10 flex flex-col items-start gap-6 bg-[#110942]/60 min-h-[220px]">
            <span className="mb-2">{/* User icon */}
              <img alt="trader_1"  src="/assets/icon/trader_1.svg" />
            </span>
            <span className="text-[24px] font-medium text-white leading-snug text-left">KYC And AML Checks To Keep Users And The Network Safe.</span>
              </div>
              {/* Card 2 */}
          <div className="border border-[#4B6794] rounded-[16px] p-10 flex flex-col items-start gap-6 bg-[#110942]/60 min-h-[220px]">
            <span className="mb-2">{/* Visibility icon */}
              <img alt="trader_2"  src="/assets/icon/trader_2.svg" />
            </span>
            <span className="text-[24px] font-medium text-white leading-snug text-left">Complete Visibility Of Funds Through On-Chain Transactions.</span>
              </div>
              {/* Card 3 */}
          <div className="border border-[#4B6794] rounded-[16px] p-10 flex flex-col items-start gap-6 bg-[#110942]/60 min-h-[220px]">
            <span className="mb-2">{/* Dollar icon */}
            <img alt="trader_3"  src="/assets/icon/trader_3.svg" />
            </span>
            <span className="text-[24px] font-medium text-white leading-snug text-left">Peace Of Mind For Stakers With On-Chain Coverage And Insurance Safeguards.</span>
              </div>
              {/* Card 4 */}
          <div className="border border-[#4B6794] rounded-[16px] p-10 flex flex-col items-start gap-6 bg-[#110942]/60 min-h-[220px]">
            <span className="mb-2">{/* Audit icon */}
            <img alt="trader_4"  src="/assets/icon/trader_4.svg" />
            </span>
            <span className="text-[24px] font-medium text-white leading-snug text-left">Audited For Safety. Built For Scale. Trusted By Institutions.</span>
          </div>
        </div>
      </section>
     
      {/* Manage & Grow Section */}
      <section className="text-white w-full"
        style={{
          backgroundImage: "url('/assets/image/trader_2.svg')",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom"
        }}>
        <div className="w-full transition-all duration-1000 ease-in-out">
          {/* Card 1: Stake On Kross Hub */}
          <div className="w-full flex justify-center sticky top-0">
            <section className="h-[120vh] flex items-start justify-center w-full bg-[#050026] relative overflow-hidden">
              <div className="absolute w-[1262px] h-[2322px] top-[86.3px] left-[62px] -rotate-180 bg-[#FF00B866]/50 blur-3xl rounded-full"></div>
              <div className="absolute w-[1416px] h-[2334px] left-[806.78px] -rotate-180 bg-[#6D05B8CC]/50 blur-[560px] rounded-full"></div>
              <div className="absolute w-[1218.9px] h-[1229px] top-[-0.72px] left-[1199.9px] -rotate-180 bg-[#FF00B840]/50 blur-[560px] rounded-full"></div>
              <div className="absolute w-[1254.9px] h-[1429px] top-[-60.76px] left-[1440px] -rotate-180 bg-[#6D05B866]/50 blur-[560px] rounded-full"></div>
              <div className="w-full container px-5 md:px-20">
                <div className="text-center mt-20 mb-20 relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight text-white">Our features</h2>
                </div>
                <div className="max-w-4xl py-[100px] mx-auto"
                >
                  <div className="relative"
                  >
                    <div className="relative rounded-[40px] px-10 py-[104px] border-4 border-[#4B6794] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#110942] to-[#140669]"></div>
                      <div className="absolute inset-0 opacity-90" style={{backgroundImage: "url(/assets/image/trader/trader_feature_1.svg)", backgroundSize: "contain", backgroundPosition: "right", backgroundRepeat: "no-repeat"}}></div>
                      <div className="relative max-w-lg z-10">
                        <h3 className="text-2xl md:text-[40px] font-bold mb-4 transition-colors duration-200 text-white">$KSS Staking</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">Get rewards for simply staking on the KROSS DEX. Coming Soon</p>
                        <button className="bg-transparent min-w-[191px] border-2 border-[#ff00ff] hover:bg-[#ff00ff] text-white font-medium py-4 px-8 rounded-[12px] transition-all duration-200 hover:scale-105">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Card 2: Swap With Ease */}
          <div className="w-full flex justify-center sticky top-0">
            <section className="w-screen md:h-[80vh] flex items-start justify-center w-full bg-[#0a0620] relative overflow-hidden">
              <div className="absolute w-[150px] h-[100px] -left-20 bottom-10 bg-[#6D05B86B]/30 blur-3xl rounded-full"></div>
              <div className="absolute w-[250px] h-[200px] left-0 -bottom-50 bg-[#EC34E0CC]/30 blur-3xl  rounded-full"></div>
              <div className="absolute w-[150px] h-[100px] left-[100px] -bottom-50 bg-[#EC34E0CC]/30 blur-3xl rounded-full"></div>
              <div className="absolute w-[150px] h-[100px] right-[50px] -bottom-40 bg-[#6D05B86B]/30 blur-3xl rounded-full"></div>
              <div className="w-full container px-5 md:px-20">
                <div className="max-w-4xl py-[100px] mx-auto">
                  <div className="relative">
                    <div className="relative rounded-[40px] px-10 py-[104px] border-4 border-[#4B6794] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#110942] to-[#140669]"></div>
                      <div className="absolute inset-0 opacity-90" style={{backgroundImage: "url(/assets/image/trader/trader_feature_2.svg)", backgroundSize: "contain", backgroundPosition: "right", backgroundRepeat: "no-repeat"}}></div>
                      <div className="relative max-w-lg z-10">
                        <h3 className="text-2xl md:text-[40px] font-bold mb-4 transition-colors duration-200 text-white">Vaults</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">KROSS Vaults let you earn rewards on stablecoins like KUSD and HNGN, effortlessly. Get the benefits of staking without the complexity of managing assets yourself. Coming Soon
                        </p>
                        <button className="bg-transparent min-w-[191px] border-2 border-[#ff00ff] hover:bg-[#ff00ff] text-white font-medium py-4 px-8 rounded-[12px] transition-all duration-200 hover:scale-105">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Card 3: Boost Your Earnings with Liquidity Pools */}
          <div className="w-full flex justify-center sticky top-0">
            <section className="w-screen md:h-[80vh] flex items-start justify-center w-full bg-[#0a0620] relative overflow-hidden">
              <div className="absolute w-[350px] h-[350px] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#EC34E0CC]/20 blur-3xl  rounded-full"></div>
              <div className="absolute w-[350px] h-[350px] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#6D05B86B]/20 blur-3xl rounded-full"></div>
              <div className="w-full container px-5 md:px-20">
                <div className="max-w-4xl py-[100px] mx-auto">
                  <div className="relative">
                    <div className="relative rounded-[40px] px-10 py-[104px] border-4 border-[#4B6794] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#110942] to-[#140669]"></div>
                      <div className="absolute inset-0 opacity-90" style={{backgroundImage: "url(/assets/image/trader/trader_feature_3.svg)", backgroundSize: "contain", backgroundPosition: "right", backgroundRepeat: "no-repeat"}}></div>
                      <div className="relative max-w-lg z-10">
                        <h3 className="text-2xl md:text-[40px] font-bold mb-4 transition-colors duration-200 text-white">Swap</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">Enjoy a smooth trading with the Wallet integrated HASHGREED DEX, Africa&aposs First DEX for Regulated RWA tokens</p>
                        <button className="bg-transparent min-w-[191px] border-2 border-[#ff00ff] hover:bg-[#ff00ff] text-white font-medium py-4 px-8 rounded-[12px] transition-all duration-200 hover:scale-105">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Card 4: Effortless Yield with Kross Vaults */}
          <div className="w-full flex justify-center sticky top-0">
            <section className="w-screen md:h-[80vh] flex items-start justify-center w-full bg-[#0a0620] relative overflow-hidden">
              <div className="absolute w-[250px] h-[250px] -left-50 -top-50 bg-[#FF00B840]/50 blur-3xl rounded-full"></div>
              <div className="absolute w-[250px] h-[250px] -right-50 -bottom-50 bg-[#FF00B840]/60 blur-3xl rounded-full"></div>
              <div className="w-full container px-5 md:px-20">
                <div className="max-w-4xl py-[100px] mx-auto">
                  <div className="relative">
                    <div className="relative rounded-[40px] px-10 py-[104px] border-4 border-[#4B6794] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#110942] to-[#140669]"></div>
                      <div className="absolute inset-0 opacity-90" style={{backgroundImage: "url(/assets/image/trader/trader_feature_4.svg)", backgroundSize: "contain", backgroundPosition: "right", backgroundRepeat: "no-repeat"}}></div>
                      <div className="relative max-w-lg z-10">
                        <h3 className="text-2xl md:text-[40px] font-bold mb-4 transition-colors duration-200 text-white">Central Limit Orderbook</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">Reap the benefits of a transparent order book for accurate price discovery and streamlined trade execution.</p>
                        <button className="bg-transparent min-w-[191px] border-2 border-[#ff00ff] hover:bg-[#ff00ff] text-white font-medium py-4 px-8 rounded-[12px] transition-all duration-200 hover:scale-105">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Card 5: Transparent Trading with Central Orderbook */}
          <div className="w-full flex justify-center sticky top-0">
            <section className="w-screen md:h-[80vh] flex items-start justify-center w-full bg-[#0a0620] relative overflow-hidden">
              <div className="absolute w-[150px] h-[150px] -right-20 top-10 bg-[#6D05B86B]/30 blur-3xl rounded-full"></div>
              <div className="absolute w-[250px] h-[250px] -left-50 -bottom-50 bg-[#EC34E0CC]/20 blur-3xl  rounded-full"></div>
              <div className="absolute w-[150px] h-[150px] -left-10 -bottom-50 bg-[#EC34E0CC]/20 blur-3xl rounded-full"></div>
              <div className="absolute w-[150px] h-[150px] right-50 -bottom-40 bg-[#6D05B86B]/20 blur-3xl rounded-full"></div>
              <div className="absolute w-[150px] h-[150px] -top-40 bg-[#6D05B86B]/20 blur-3xl rounded-full"></div>
              <div className="w-full container px-5 md:px-20">
                <div className="max-w-4xl py-[100px] mx-auto">
                  <div className="relative">
                    <div className="relative rounded-[40px] px-10 py-[104px] border-4 border-[#4B6794] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#110942] to-[#140669]"></div>
                      <div className="absolute inset-0 opacity-90" style={{backgroundImage: "url(/assets/image/trader/trader_feature_5.svg)", backgroundSize: "contain", backgroundPosition: "right", backgroundRepeat: "no-repeat"}}></div>
                      <div className="relative max-w-lg z-10">
                        <h3 className="text-2xl md:text-[40px] font-bold mb-4 transition-colors duration-200 text-white">Liquidity Pools & Farms</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">Provide assets to earn LP rewards and a share of all transaction fees charged to traders that use the pool, starting at the HASHGREED DEX.</p>
                        <button className="bg-transparent min-w-[191px] border-2 border-[#ff00ff] hover:bg-[#ff00ff] text-white font-medium py-4 px-8 rounded-[12px] transition-all duration-200 hover:scale-105">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
           {/* FAQ Section */}
      <section className="w-full flex flex-col  justify-center bg-[#050026] px-10 md:px-20 py-10 md:py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">FAQs</h2>
        <div className="gap-0">
          {[
            'How soon can we expect the results for KYC?',
            'Which types of assets are available on the KROSS Network?',
            'When will I know if I\'m selected?',
            'What happens if I upload more than one ID during the KYC process?',
            'Can I use multiple wallets?',
            'What network does KROSS Network operate on?'
          ].map((q, i, arr) => (
            <React.Fragment key={i}>
              <div className="flex items-center justify-between w-full px-12 py-6 text-white text-lg md:text-xl font-normal">
                <span>{q}</span>
                <span className="text-[#A259FF] text-2xl font-bold select-none ml-auto">+</span>
              </div>
              {i < arr.length - 1 && (
                <hr className="border-t border-[#29214A] mx-8 mb-[100px]  " />
                // <hr className="border-t-2 border-[#29214A] mx-8 rounded-full" />
              )}
            </React.Fragment>
          ))}
                  </div>
      </section> 
      {/* Explore Ecosystem CTA (Pixel-perfect) */}
      <section className="text-white flex w-full bg-[#110942] border-b-4 border-white">
        <div className="flex w-full items-center justify-center py-25 md:py-[133px]">
          <div className="flex flex-col items-center justify-center gap-[56px] w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight w-full md:w-2/3 text-center">Ready To Get Started</h1>
            <div className="flex gap-4 w-full items-center justify-center">
              <div className="inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200  inline-block">
                <a
                  href="#"
                  className="inline-flex px-8 py-4 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200  inline-block"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TraderPage; 