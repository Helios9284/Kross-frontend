"use client";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import React, { useState, useRef, useEffect } from "react";

export default function NavBar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);

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
          {/* <img
            alt="Logo Icon"
            width={30}
            height={30}
            src="/assets/image/logo.png"
          /> */}
          <p className="text-white text-[30px] font-[500] leading-[30px]" style={{ fontFamily: 'lato, sans-serif' }}>Kross Network</p>
        </Link>
        {/* Main menu (desktop) */}
        <div className="hidden lg:flex items-center gap-3 justify-center font-sans">
          <Link href="/builder" className="text-white text-[16px] font-[500] leading-[24px] rounded-[12px] px-3">For Builders</Link>
          <Link href="/trader" className="text-white text-[16px] font-[500] leading-[24px] rounded-[12px] px-3">For Traders</Link>
          <Link href="/institution" className="text-white text-[16px] font-[500] leading-[24px] rounded-[12px] px-3">For Institution</Link>
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
            <span className="flex text-white items-center justify-center px-6 py-4 bg-[#0a0620] rounded-[12px] whitespace-nowrap text-md hover:bg-gradient-to-r from-[#6D05B8] to-[#FF00B8]">
              Krosscoin Explorer
            </span>
          </button>
        </div>

      </div>
    </div>
  );
} 