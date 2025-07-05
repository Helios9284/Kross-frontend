"use client"

import { useState } from "react"
// import { Lato } from 'next/font/google'

interface NewsArticle {
  id: number
  title: string
  excerpt: string
  date: string
  categories: string[]
  image: string
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "SEC Grants Hashgreed approval to tokenize real estate based assets",
    excerpt:
      "The Real Estate Industry Has Long Been Recognized As A Lucrative Investment Avenue. However, Traditional Real Estate Investment Comes With Various Challenges, Including High Entry Barriers, Illiquidity, And Lack Of Accessibility.",
    date: "Feb 8, 2024",
    categories: ["Ecosystem", "SIM Coin"],
    image: "/assets/image/blog_post_1.svg",
  },
  {
    id: 2,
    title: "Vitalerin Europe and OPK Banc FC Launch €2.0M Stadium Tokenization on Kross Blockchain via Hashgreed",
    excerpt:
      "Vitalerin Europe Sp.Z.O, The Registered European Arm Of The Krosscon Project And A Leading Blockchain Asset Tokenization Firm Has Officially Signed A Landmark Agreement With OPK Banc Football Club, A Professional Football Club Based In Poland To Launch Expansion Project And Integrate AI And Metaverse Technologies Into Its Future Infrastructure.",
    date: "Feb 8, 2024",
    categories: ["Ecosystem", "SIM Coin"],
    image: "/assets/image/blog_post_2.svg",
  },
  {
    id: 3,
    title: "Real Estate Tokenization: Revolutionizing The Real Estate Industry",
    excerpt:
      "The Real Estate Industry Has Long Been Recognized As A Lucrative Investment Avenue. However, Traditional Real Estate Investment Comes With Various Challenges, Including High Entry Barriers, Illiquidity, And Lack Of Accessibility.",
    date: "June 15, 2024",
    categories: ["Ecosystem", "SIM Coin"],
    image: "/assets/image/blog_post_3.svg",
  },
  {
    id: 4,
    title: "Real Estate Tokenization: Pros, Cons, And Challenges",
    excerpt:
      "Vitalerin Europe Sp.Z.O, The Registered European Arm Of The Krosscon Project And A Leading Blockchain Asset Tokenization Firm Has Officially Signed A Landmark Agreement With OPK Banc Football Club, A Professional Football Club Based In Poland To Launch Expansion Project And Integrate AI And Metaverse Technologies Into Its Future Infrastructure.",
    date: "May 10, 2024",
    categories: ["Ecosystem", "SIM Coin"],
    image: "/assets/image/blog_post_4.svg",
  },
  {
    id: 5,
    title: "Real Estate Tokenization: Transforming Investment Opportunities",
    excerpt:
      "The Real Estate Industry Has Long Been Recognized As A Lucrative Investment Avenue. However, Traditional Real Estate Investment Comes With Various Challenges, Including High Entry Barriers, Illiquidity, And Lack Of Accessibility.",
    date: "July 1, 2024",
    categories: ["Ecosystem", "SIM Coin"],
    image: "/assets/image/blog_post_5.svg",
  },
  {
    id: 6,
    title: "The Future Of Real Estate: Tokenization And Its Impact On The Industry",
    excerpt:
      "Real Estate Tokenization Is Reshaping The Landscape Of Investment Opportunities By Leveraging Blockchain Technology To Fractionalize Property Ownership.",
    date: "May 22, 2024",
    categories: ["Ecosystem", "SIM Coin"],
    image: "/assets/image/blog_post_3.svg",
  },
]

// const lato = Lato({
//   subsets: ['latin'],
//   weight: ['400', '700'], // Add other weights if needed
// })

export default function Page() {
 
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const [learnAbout, setLearnAbout] = useState("everything")
  const [relatesTo, setRelatesTo] = useState("everyone")

  const clearSearch = () => {
    setSearchTerm("")
  }
  return (
    <div
      className="min-h-screen w-full bg-gradient-to-b from-[#050026] text-white font-sans"style={{ fontFamily: 'lato, sans-serif' }}
    >
      {/* Header */}
      <div className="py-16  h-[370px] flex items-center justify-center"  style={{ background: "linear-gradient( #110942 78%)" }}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-3" style={{ fontFamily: 'lato, sans-serif' }}>Blog</h1>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <section className="text-white overflow-hidden relative bg-[#050026] min-h-screen">
      <div className=" py-16">
        {/* Filter Interface */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 text-center text-[32px]">
          <span className="text-white  font-normal">I am Interested to learn about</span>

          <div className="relative">
            <select
              value={learnAbout}
              onChange={(e) => setLearnAbout(e.target.value)}
              className="appearance-none bg-transparent border border-purple-400/60 rounded-lg px-4 py-2 pr-10 text-white focus:border-purple-400 focus:outline-none min-w-[130px]"
              style={{ borderColor: "#a855f7" }}
            >
              <option value="everything" className="bg-gray-800 text-white">
                everything
              </option>
              <option value="tokenization" className="bg-gray-800 text-white">
                tokenization
              </option>
              <option value="blockchain" className="bg-gray-800 text-white">
                blockchain
              </option>
              <option value="regulations" className="bg-gray-800 text-white">
                regulations
              </option>
            </select>
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <span className="text-white font-normal">that relates to</span>

          <div className="relative ">
            <select
              value={relatesTo}
              onChange={(e) => setRelatesTo(e.target.value)}
              className="text-[32px] appearance-none bg-transparent border border-purple-400/60 rounded-lg px-4 py-2 pr-10 text-white focus:border-purple-400 focus:outline-none min-w-[130px] text-base"
              style={{ borderColor: "#a855f7" }}
            >
              <option value="everyone" className="bg-gray-800 text-white">
                everyone
              </option>
              <option value="investors" className="bg-gray-800 text-white">
                investors
              </option>
              <option value="developers" className="bg-gray-800 text-white">
                developers
              </option>
              <option value="traders" className="bg-gray-800 text-white">
                traders
              </option>
            </select>
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-20">
          <div className="relative w-full max-w-lg">
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search News"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-transparent border border-gray-600/40 rounded-lg text-white placeholder:text-gray-400 focus:border-purple-400 focus:outline-none text-[24px]"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="px-5 md:px-20 py-10 md:py-20 relative w-full">
          {/* First row: left and right columns */}
          <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
            {/* Left column */}
            <div className="lg:w-3/5">
              <h1 className="text-4xl md:text-5xl lg:text-[40px] font-bold leading-tight mb-6">SEC Grants Hashgreed approval to tokenize real estate based assets</h1>
              <p className="text-xl text-gray-300 mb-10 w-full md:w-3/5">The Nigerian Securities and Exchange Commission (SEC) has granted approval to Africa&apos;s first digital securities platform, Hashgreed, to offer real estate based digital securities. </p>
              <a href="#" className="inline-flex px-8 py-4 bg-gradient-to-r from-[#FF00B8] to-[#6D05B8] rounded-[12px] text-white font-medium hover:from-[#6D05B8] hover:to-[#FF00B8] hover-shadow">Read News</a>
              <div className="flex flex-wrap items-center gap-4 mt-20 pt-8 w-full">
                <span className="px-4 py-2 text-sm font-medium rounded-full border border-purple-400/30 bg-transparent">
                  Traders
                </span>
                <span className="px-4 py-2 text-sm font-medium rounded-full border border-purple-400/30 bg-transparent">
                  Explainer
                </span>
                <span className="px-4 py-2 text-sm font-medium rounded-full border border-purple-400/30 bg-transparent">
                  Tutorials
                </span>
                <span className="text-gray-400 text-sm font-medium">May 10, 2025</span>
              </div>
            </div>
            {/* Right column */}
            <div className="lg:w-2/5 w-full h-full flex justify-center items-center relative">
                <div className="absolute inset-0 bg-[#FF00B8]/30 blur-3xl rounded-full -z-0"></div>
                <img
                  alt="Blockchain 3D Cube Visualization"
                  className="relative z-10 object-contain w-full h-full "
                  src="/assets/image/blog_1.svg"
                />
            </div>
          </div>
        </div>
          
      </div>
      
      </section>
      {/* All News Section */}
      <section className="px-5 md:px-20 py-10 md:py-20 text-white overflow-hidden relative bg-[#050026] min-h-screen">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-white mb-[100px]">Blog Posts</h1>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
          {newsArticles.map((article) => (
            <div key={article.id} className="space-y-6 mt-[20px] ">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              {/* Article Title */}
              <h2 className="text-xl font-bold text-white leading-tight hover:text-purple-300 cursor-pointer transition-colors">
                {article.title}
              </h2>

              {/* Categories and Date */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                  {article.categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-4 py-1 border border-gray-400 text-gray-200 rounded-lg text-sm font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <span className="text-gray-400 text-sm font-medium">{article.date}</span>
              </div>

              {/* Article Excerpt */}
              <p className="text-gray-300 text-sm leading-relaxed font-sans">{article.excerpt}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-[150px]">
          {[1, 2, 3, 4, 5].map((page) => (
            currentPage === page ? (
              <div
                key={page}
                className="p-[2px] rounded-md"
                style={{
                  background: "linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)"
                }}
              >
                <button
                  onClick={() => setCurrentPage(page)}
                  className="w-10 h-10 rounded-md font-medium text-white bg-[#050026] flex items-center justify-center"
                  style={{ border: "none", fontFamily: 'Lato, sans-serif' }}
                >
                  {page}
                </button>
              </div>
            ) : (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className="w-10 h-10 rounded-md font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {page}
              </button>
            )
          ))}
          <button className="w-10 h-10 rounded-lg font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all">
            <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  )
}
