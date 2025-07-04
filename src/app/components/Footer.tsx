export default function Footer() {
  return (
    <footer className="text-white bg-[#0a0620]">
      <div className="container mx-auto px-5 md:px-20 py-12 ">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 items-start w-full">
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <h2 className="text-sm md:text-xs font-bold">SUBSCRIBE TO OUR NEWSLETTER</h2>
            <p className="text-gray-300 font-[400] text-sm md:text-base">A monthly digest of the latest news, articles, and resources.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto md:max-w-md">
            <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base" />
            <a href="#" className="inline-flex px-8 py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow">Subscribe</a>
          </div>
        </div>
        <div className="border-t border-gray-400 border-t-[1px] mt-12 my-24"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-1 text-center md:text-left">
            <h3 className="font-semibold mb-4 text-gray-200">Company</h3>
            <ul className="space-y-3">
              <li><a href="/aboutus" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contactus" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Referral Program</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          <div className="col-span-1 text-center md:text-left">
            <h3 className="font-semibold mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/builder" className="text-gray-400 hover:text-white transition-colors">For Builders</a></li>
              <li><a href="/trader" className="text-gray-400 hover:text-white transition-colors">For Traders</a></li>
              <li><a href="/institution" className="text-gray-400 hover:text-white transition-colors">For Institution</a></li>
            </ul>
          </div>
          <div className="col-span-1 text-center md:text-left">
            <h3 className="font-semibold mb-4 text-gray-200">Resources</h3>
            <ul className="space-y-3">
              <li><a href="/news" className="text-gray-400 hover:text-white transition-colors">News</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div className="col-span-1 text-center md:text-left">
            <h3 className="font-semibold mb-4 text-gray-200">Ecosystem</h3>
            <ul className="space-y-3">
              <li><a href="/ecosystem" className="text-gray-400 hover:text-white transition-colors">Ecosystem Fund</a></li>
              <li><a href="/accelerator" className="text-gray-400 hover:text-white transition-colors">RWAccelerator</a></li>
              <li><a href="/partner" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              <li><a href="/$kiss" className="text-gray-400 hover:text-white transition-colors">SOM Coin</a></li>
            </ul>
          </div>
          <div className="col-span-1 text-center md:text-left">
            <h3 className="font-semibold mb-4 text-gray-200">Legal</h3>
            <ul className="space-y-3 ">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms and Condition</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li>
                <div className="flex flex-wrap gap-4 lg:items-start mt-10 justify-center">
                  {/* Social Icons */}
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send" viewBox="0 0 24 24"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube" viewBox="0 0 24 24"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 pb-12">
          <div className="text-center text-2xl md:text-5xl lg:text-[150px] font-bold bg-gradient-to-r from-[#C7BFFF] to-[#6D05B8] bg-clip-text text-transparent opacity-20 select-none">
            KROSS NETWORK
          </div>
        </div>
      </div>
    </footer>
  );
} 