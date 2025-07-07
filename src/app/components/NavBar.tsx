"use client";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(target) &&
        ecosystemRef.current &&
        !ecosystemRef.current.contains(target)
      ) {
        setResourcesOpen(false);
        setEcosystemOpen(false);
      } else if (
        resourcesRef.current &&
        !resourcesRef.current.contains(target)
      ) {
        setResourcesOpen(false);
      } else if (
        ecosystemRef.current &&
        !ecosystemRef.current.contains(target)
      ) {
        setEcosystemOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside as EventListener);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside as EventListener);
    };
  }, []);

  return (
    <div className="w-full h-full bg-[#050026] shadow-custom navbar-blur-outline" >
      <div className="flex px-5 md:px-20 py-6 justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            alt="Logo Icon"
            width={30}
            height={30}
            src="/assets/image/logo.svg"
          />
          <p className="text-white text-[30px] font-[500] leading-[30px]" style={{ fontFamily: 'lato, sans-serif' }}>Kross Network</p>
        </Link>
        {/* Main menu (desktop) */}
        <div className="hidden lg:flex items-center gap-3 justify-center font-sans">
          <div className="half-gradient-border rounded-[12px] p-[2px] transition-all duration-200 bg-transparent z-10">
            <button
              type="button"
              onClick={() => router.push("/builder")}
              className="block text-white text-[16px] font-[500] leading-[24px] rounded-[5px] px-3 py-1 bg-[#050026] transition-all duration-200 relative z-10"
            >
              For Builders
            </button>
          </div>
          <div className="half-gradient-border rounded-[12px] p-[2px] transition-all duration-200 bg-transparent z-10">
            <button
              type="button"
              onClick={() => router.push("/trader")}
              className="block text-white text-[16px] font-[500] leading-[24px] rounded-[5px] px-3 py-1 bg-[#050026] transition-all duration-200 relative z-10"
            >
              For Traders
            </button>
          </div>
          <div className="half-gradient-border rounded-[12px] p-[2px] transition-all duration-200 bg-transparent z-10">
            <button
              type="button"
              onClick={() => router.push("/institution")}
              className="block text-white text-[16px] font-[500] leading-[24px] rounded-[5px] px-3 py-1 bg-[#050026] transition-all duration-200 relative z-10"
            >
              For Institution
            </button>
          </div>
        </div>
        {/* Dropdowns and button (desktop) */}
        <div className="hidden lg:flex items-center gap-6 justify-center font-sans">
          <div className="relative group" ref={resourcesRef}>
            <div className="flex items-center cursor-pointer relative" onClick={() => setResourcesOpen((prev) => !prev)}>
              <p className="text-white text-[16px] font-[500] leading-[24px] ">Resources</p>
              <FaChevronDown className="text-white w-3 h-3" />
            </div>
            {resourcesOpen && (
              <div className="absolute top-full left-0 mt-4 bg-[#050026] rounded-[16px] border border-[#2b3250] shadow-lg z-10 flex flex-col w-max px-[16px] py-[16px]">
                <Link
                  href="/news"
                  className="text-white text-[14px] font-[300] mb-6 hover:underline text-left"
                  onClick={() => setResourcesOpen(false)}
                >
                  News
                </Link>
                <Link
                  href="/blog"
                  className="text-white text-[14px] font-[300] mb-6 hover:underline text-left"
                  onClick={() => setResourcesOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/guide"
                  className="text-white text-[14px] font-[300] hover:underline text-left"
                  onClick={() => setResourcesOpen(false)}
                >
                  Developers&apos; Guide
                </Link>
              </div>
            )}
          </div>
          <div className="relative group" ref={ecosystemRef}>
            <div className="flex items-center cursor-pointer relative" onClick={() => setEcosystemOpen((prev) => !prev)}>
              <p className="text-white text-[16px] font-[500] leading-[24px]">Ecosystem</p>
              <FaChevronDown className="text-white w-3 h-3" />
            </div>
            {ecosystemOpen && (
              <div className="absolute top-full left-0 mt-4 bg-[#050026] rounded-[16px] border border-[#2b3250] shadow-lg z-10 flex flex-col w-max px-[16px] py-[16px]">
                <Link
                  href="/fund"
                  className="text-white text-[14px] font-[300] mb-6 hover:underline text-left"
                  onClick={() => setEcosystemOpen(false)}
                >
                  Ecosystem Fund
                </Link>
                <Link
                  href="/rwa"
                  className="text-white text-[14px] font-[300] mb-6 hover:underline text-left"
                  onClick={() => setEcosystemOpen(false)}
                >
                  RWAccelerator
                </Link>
                <Link
                  href="/partner"
                  className="text-white text-[14px] font-[300] mb-6 hover:underline text-left"
                  onClick={() => setEcosystemOpen(false)}
                >
                  Partners
                </Link>
                <Link
                  href="/coin"
                  className="text-white text-[14px] font-[300] hover:underline text-left"
                  onClick={() => setEcosystemOpen(false)}
                >
                  $OM Coin
                </Link>
              </div>
            )}
          </div>
          <button className="rounded-[12px] p-[2px] bg-gradient-to-r from-[#6D05B8] to-[#FF00B8] hover:from-[#605B8] hover:to-[#AA00B8] font-sans ">
            <Link href="/explorer" className="flex text-white items-center justify-center px-6 py-4 bg-[#0a0620] rounded-[12px] whitespace-nowrap text-md hover:bg-gradient-to-r from-[#6D05B8] to-[#FF00B8]">
              Krosscoin Explorer
            </Link>
          </button>
        </div>
        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Open mobile menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="lg:hidden w-full bg-[#050026] border-t border-[#2b3250] px-5 py-4 flex flex-col gap-4 z-50">
          <Link href="/builder" className="text-white text-lg font-[500] py-2" onClick={() => setMobileOpen(false)}>For Builders</Link>
          <Link href="/trader" className="text-white text-lg font-[500] py-2" onClick={() => setMobileOpen(false)}>For Traders</Link>
          <Link href="/institution" className="text-white text-lg font-[500] py-2" onClick={() => setMobileOpen(false)}>For Institution</Link>
          <div className="border-t border-[#2b3250] my-2"></div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold">Resources</span>
            <Link href="/news" className="text-white text-base py-1" onClick={() => setMobileOpen(false)}>News</Link>
            <Link href="/blog" className="text-white text-base py-1" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/guide" className="text-white text-base py-1" onClick={() => setMobileOpen(false)}>Developers&apos; Guide</Link>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-white font-semibold">Ecosystem</span>
            <Link href="/fund" className="text-white text-base py-1" onClick={() => setMobileOpen(false)}>Ecosystem Fund</Link>
            <Link href="/rwa" className="text-white text-base py-1" onClick={() => setMobileOpen(false)}>RWAccelerator</Link>
            <Link href="/partner" className="text-white text-base py-1" onClick={() => setMobileOpen(false)}>Partners</Link>
            <Link href="/coin" className="text-white text-base py-1" onClick={() => setMobileOpen(false)}>$OM Coin</Link>
          </div>
          <button className="rounded-[12px] p-[2px] bg-gradient-to-r from-[#6D05B8] to-[#FF00B8] font-sans mt-4">
            <span className="flex text-white items-center justify-center px-6 py-4 bg-[#0a0620] rounded-[12px] whitespace-nowrap text-md">Krosscoin Explorer</span>
          </button>
        </div>
      )}
    </div>
  );
} 