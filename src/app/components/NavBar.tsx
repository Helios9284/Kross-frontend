import Link from "next/link";
import { FaChevronDown, FaBars } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="w-full h-full bg-[#0a0620] shadow-custom">
      <div className="container mx-auto flex px-5 md:px-20 py-6 justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* <img
            alt="Logo Icon"
            width={30}
            height={30}
            src="/assets/image/logo.png"
          /> */}
          <p className="text-white text-[30px] font-[500] leading-[30px] font-lato">Kross Network</p>
        </Link>
        {/* Main menu (desktop) */}
        <div className="hidden lg:flex items-center gap-3 justify-center">
          <Link href="/builder" className="text-white text-[16px] font-[500] leading-[24px] rounded-[12px] px-3">For Builders</Link>
          <Link href="/trader" className="text-white text-[16px] font-[500] leading-[24px] rounded-[12px] px-3">For Traders</Link>
          <Link href="/institution" className="text-white text-[16px] font-[500] leading-[24px] rounded-[12px] px-3">For Institution</Link>
        </div>
        {/* Dropdowns and button (desktop) */}
        <div className="hidden lg:flex items-center gap-6 justify-center">
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer">
              <p className="text-white text-[16px] font-[500] leading-[24px]">Resources</p>
              <FaChevronDown className="text-white w-3 h-3" />
            </div>
          </div>
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer">
              <p className="text-white text-[16px] font-[500] leading-[24px]">Ecosystem</p>
              <FaChevronDown className="text-white w-3 h-3" />
            </div>
          </div>
          <button className="rounded-[12px] p-[2px] bg-gradient-to-r from-[#6D05B8] to-[#FF00B8] hover:from-[#605B8] hover:to-[#AA00B8]">
            <span className="flex text-white items-center justify-center px-6 py-4 bg-[#0a0620] rounded-[12px] whitespace-nowrap text-md hover:bg-gradient-to-r from-[#6D05B8] to-[#FF00B8]">
              Krosscoin Explorer
            </span>
          </button>
        </div>
        {/* Hamburger menu (mobile) */}
        <div className="lg:hidden flex items-center">
          <button className="text-white">
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
} 