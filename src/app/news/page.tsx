"use client"

import { useState } from "react"
// import { Lato } from 'next/font/google'
interface NewsArticle {
  id: number
  title: string
  excerpt: string
  date: string
  categories: string[]
}

const featuredArticle = {
  title: "SEC Grants Hashgreed Approval To Tokenize Real Estate Based Assets",
  excerpt:
    "The Securities and Exchange Commission (SEC) has Granted Approval to Kross Real Estate Securities Network, Hashgreed, to offer Tokenized Real Estate Digital Assets.",
  date: "Aug 14, 2024",
}
const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "SEC Grants Hashgreed approval to tokenize real estate based assets",
    excerpt:
      "The Real Estate Industry Has Long Been Recognized As A Lucrative Investment Avenue. However, Traditional Real Estate Investment Comes With Various Challenges, Including High Entry Barriers, Illiquidity, And Lack Of Accessibility.",
    date: "Feb 8, 2024",
    categories: ["Ecosystem", "SIM Coin"],
  },
  {
    id: 2,
    title: "Vitalerin Europe and OPK Banc FC Launch €2.0M Stadium Tokenization on Kross Blockchain via Hashgreed",
    excerpt:
      "Vitalerin Europe Sp.Z.O, The Registered European Arm Of The Krosscon Project And A Leading Blockchain Asset Tokenization Firm Has Officially Signed A Landmark Agreement With OPK Banc Football Club, A Professional Football Club Based In Poland To Launch Expansion Project And Integrate AI And Metaverse Technologies Into Its Future Infrastructure.",
    date: "Feb 8, 2024",
    categories: ["Ecosystem", "SIM Coin"],
  },
  {
    id: 3,
    title: "Real Estate Tokenization: Revolutionizing The Real Estate Industry",
    excerpt:
      "The Real Estate Industry Has Long Been Recognized As A Lucrative Investment Avenue. However, Traditional Real Estate Investment Comes With Various Challenges, Including High Entry Barriers, Illiquidity, And Lack Of Accessibility.",
    date: "June 15, 2024",
    categories: ["Ecosystem", "SIM Coin"],
  },
  {
    id: 4,
    title: "Real Estate Tokenization: Pros, Cons, And Challenges",
    excerpt:
      "Vitalerin Europe Sp.Z.O, The Registered European Arm Of The Krosscon Project And A Leading Blockchain Asset Tokenization Firm Has Officially Signed A Landmark Agreement With OPK Banc Football Club, A Professional Football Club Based In Poland To Launch Expansion Project And Integrate AI And Metaverse Technologies Into Its Future Infrastructure.",
    date: "May 10, 2024",
    categories: ["Ecosystem", "SIM Coin"],
  },
  {
    id: 5,
    title: "Real Estate Tokenization: Transforming Investment Opportunities",
    excerpt:
      "The Real Estate Industry Has Long Been Recognized As A Lucrative Investment Avenue. However, Traditional Real Estate Investment Comes With Various Challenges, Including High Entry Barriers, Illiquidity, And Lack Of Accessibility.",
    date: "July 1, 2024",
    categories: ["Ecosystem", "SIM Coin"],
  },
  {
    id: 6,
    title: "The Future Of Real Estate: Tokenization And Its Impact On The Industry",
    excerpt:
      "Real Estate Tokenization Is Reshaping The Landscape Of Investment Opportunities By Leveraging Blockchain Technology To Fractionalize Property Ownership.",
    date: "May 22, 2024",
    categories: ["Ecosystem", "SIM Coin"],
  },
]
// const lato = Lato({
//   subsets: ['latin'],
//   weight: ['400', '700'], // Add other weights if needed
// })


export default function Page() {
 
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("everything")

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-b from-[#050026] text-white font-san"
    >
      {/* Header */}
      <div className="py-16  h-[370px] flex items-center justify-center"  style={{ background: "linear-gradient( #110942 80%)" }}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-3">News</h1>
          <p className="text-gray-300 text-lg">Welcome To Kross News</p>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <section className="text-white overflow-hidden relative bg-[#050026] min-h-screen">
        <div className="absolute -top-10 -left-10 w-[150px] h-[150px] bg-[#EC34E0]/30 blur-3xl rounded-full"></div>
        <div className="absolute top-0 left-[70px] w-[50px] h-[50px] bg-[#487DF1]/20 blur-3xl rounded-full"></div>
        <div className="border-b border-gray-700/50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Left: Label + Select */}
              <div className="flex items-center space-x-3">
                <span className="text-lg">Help Me Learn About</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-40 h-10 px-3 bg-transparent border border-purple-500 text-white focus:outline-none rounded-lg font-medium"
                >
                  <option value="everything" className="bg-gray-800 text-white">everything</option>
                  <option value="tokenization" className="bg-gray-800 text-white">Tokenization</option>
                  <option value="blockchain" className="bg-gray-800 text-white">Blockchain</option>
                  <option value="regulations" className="bg-gray-800 text-white">Regulations</option>
                </select>
              </div>
              {/* Right: Search */}
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
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
                  className="pl-10 pr-10 py-2 w-80 bg-transparent border border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:outline-none rounded"
                />
                {/* X button (clear) */}
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  onClick={() => setSearchTerm('')}
                  type="button"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-4xl font-bold text-white leading-tight">{featuredArticle.title}</h2>
              <span className="text-gray-400 text-sm">{featuredArticle.date}</span>
            </div>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">{featuredArticle.excerpt}</p>
            <button
              className="px-6 py-2 text-base font-semibold rounded-lg text-white hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)" }}
            >
              Read News
            </button>
          </div>
        </div>
      </section>
      {/* All News Section */}
      <section className="text-white overflow-hidden relative bg-[#050026] min-h-screen">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-white mb-[100px]">All News</h1>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
          {newsArticles.map((article) => (
            <div key={article.id} className="space-y-6 mt-[200px] ">
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
      </div>
      </section>
    </div>
  )
}
