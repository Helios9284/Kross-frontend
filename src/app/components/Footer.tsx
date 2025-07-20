import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white bg-[#0a0620]">
      <div className="mx-auto px-5 sm:px-2 md:px-20 py-12 sm:py-6">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 items-start w-full">
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <h2 className="text-xs sm:text-[10px] md:text-xs font-bold">SUBSCRIBE TO OUR NEWSLETTER</h2>
            <p className="text-gray-300 font-[400] text-xs sm:text-[11px] md:text-base">A monthly digest of the latest news, articles, and resources.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto md:max-w-lg">
            <input
              type="email"
              placeholder="Email address"
              className="w-full md:w-[400px] px-4 py-3 sm:py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs sm:text-sm md:text-base"
            />
            <div className="inline-flex w-fit p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200">
              <a
                href="#"
                className="inline-flex px-8 py-4 sm:px-4 sm:py-2 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200 text-xs sm:text-sm md:text-base"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-400 border-t-[1px] mt-12 my-24 sm:mt-6 sm:my-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-4">
          <div className="col-span-1 text-center md:text-left">
            <h3 className="font-semibold mb-4 text-gray-200 text-base sm:text-sm">Company</h3>
            <ul className="space-y-3 sm:space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Referral Program</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          <div className="col-span-1 text-center md:text-left">
            <h3 className="font-semibold mb-4 text-gray-200 text-base sm:text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/builder" className="text-gray-400 hover:text-white transition-colors">For Builders</Link></li>
              <li><Link href="/trader" className="text-gray-400 hover:text-white transition-colors">For Traders</Link></li>
              <li><Link href="/institution" className="text-gray-400 hover:text-white transition-colors">For Institution</Link></li>
            </ul>
          </div>
          <div className="col-span-1 text-center md:text-left">
            <h3 className="font-semibold mb-4 text-gray-200 text-base sm:text-sm">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/news" className="text-gray-400 hover:text-white transition-colors">News</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div className="col-span-1 text-center md:text-left">
            <h3 className="font-semibold mb-4 text-gray-200 text-base sm:text-sm">Ecosystem</h3>
            <ul className="space-y-3">
              <li><Link href="/fund" className="text-gray-400 hover:text-white transition-colors">Ecosystem Fund</Link></li>
              <li><Link href="/rwa" className="text-gray-400 hover:text-white transition-colors">RWAccelerator</Link></li>
              <li><Link href="/partner" className="text-gray-400 hover:text-white transition-colors">Partners</Link></li>
              <li><Link href="/coin" className="text-gray-400 hover:text-white transition-colors">KROSS Coin</Link></li>
            </ul>
          </div>
          <div className="col-span-1 text-center md:text-left">
            <h3 className="font-semibold mb-4 text-gray-200 text-base sm:text-sm">Legal</h3>
            <ul className="space-y-3 sm:space-y-2 ">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms and Condition</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li>
                <div className="flex flex-wrap gap-4 lg:items-start mt-10 sm:mt-4 justify-start">
                  {/* Social Icons */}
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="w-6 h-6 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="w-6 h-6 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="w-6 h-6 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <img src="/assets/image/footer/4.svg" alt="medium" className="w-6 h-6 sm:w-5 sm:h-5"/>
                    </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <img src="/assets/image/footer/5.svg" alt="medium" className="w-6 h-6 sm:w-5 sm:h-5"/>
                    </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="w-6 h-6 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 pb-12 sm:pt-6 sm:pb-6">
          <div className="text-center text-2xl sm:text-lg md:text-5xl lg:text-[150px] font-bold bg-gradient-to-r from-[#C7BFFF] to-[#6D05B8] bg-clip-text text-transparent opacity-20 select-none">
            KROSS NETWORK
          </div>
        </div>
      </div>
    </footer>
  );
} 