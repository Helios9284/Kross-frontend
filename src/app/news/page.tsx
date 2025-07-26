"use client"

import { useState } from "react"
// import { Lato } from 'next/font/google'
interface NewsArticle {
  id: number
  title: string
  excerpt: string
  date: string
  categories: string[],
  image: string // Add this line
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
    image: "/assets/image/news/allnews_1.png",
  },
  {
    id: 2,
    title: "Vitalerin Europe and OPK Banc FC Launch €2.0M Stadium Tokenization on Kross Blockchain via Hashgreed",
    excerpt:
      "Vitalerin Europe Sp.Z.O, The Registered European Arm Of The Krosscon Project And A Leading Blockchain Asset Tokenization Firm Has Officially Signed A Landmark Agreement With OPK Banc Football Club, A Professional Football Club Based In Poland To Launch Expansion Project And Integrate AI And Metaverse Technologies Into Its Future Infrastructure.",
    date: "Feb 8, 2024",
    categories: ["Ecosystem", "SIM Coin"],
    image: "/assets/image/news/allnews_2.png",
  },
  {
    id: 3,
    title: "Real Estate Tokenization: Revolutionizing The Real Estate Industry",
    excerpt:
      "The Real Estate Industry Has Long Been Recognized As A Lucrative Investment Avenue. However, Traditional Real Estate Investment Comes With Various Challenges, Including High Entry Barriers, Illiquidity, And Lack Of Accessibility.",
    date: "June 15, 2024",
    categories: ["Ecosystem", "SIM Coin"],
    image: "/assets/image/news/allnews_3.png",
  },
  {
    id: 4,
    title: "Real Estate Tokenization: Pros, Cons, And Challenges",
    excerpt:
      "Vitalerin Europe Sp.Z.O, The Registered European Arm Of The Krosscon Project And A Leading Blockchain Asset Tokenization Firm Has Officially Signed A Landmark Agreement With OPK Banc Football Club, A Professional Football Club Based In Poland To Launch Expansion Project And Integrate AI And Metaverse Technologies Into Its Future Infrastructure.",
    date: "May 10, 2024",
    categories: ["Ecosystem", "SIM Coin"],
    image: "/assets/image/news/allnews_4.png",
  },
  {
    id: 5,
    title: "Real Estate Tokenization: Transforming Investment Opportunities",
    excerpt:
      "The Real Estate Industry Has Long Been Recognized As A Lucrative Investment Avenue. However, Traditional Real Estate Investment Comes With Various Challenges, Including High Entry Barriers, Illiquidity, And Lack Of Accessibility.",
    date: "July 1, 2024",
    categories: ["Ecosystem", "SIM Coin"],
    image: "/assets/image/news/allnews_5.png",
  },
  {
    id: 6,
    title: "The Future Of Real Estate: Tokenization And Its Impact On The Industry",
    excerpt:
      "Real Estate Tokenization Is Reshaping The Landscape Of Investment Opportunities By Leveraging Blockchain Technology To Fractionalize Property Ownership.",
    date: "May 22, 2024",
    categories: ["Ecosystem", "SIM Coin"],
    image: "/assets/image/news/allnews_3.png",
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
      className="min-h-screen w-full bg-gradient-to-b from-[#050026] text-white  overflow-hidden"
      style={{ fontFamily: 'Lato, sans-serif' }}
    >
      {/* Header */}
      <div className="py-8 sm:py-16 h-[200px] sm:h-[370px] flex items-center justify-center" style={{ background: "linear-gradient( #110942 80%)", backgroundImage: "url('/assets/image/news/image.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "bottom" }}>
        <div className="container mx-auto text-center">
          <h1 className="text-2xl sm:text-[48px] font-bold text-white mb-2 sm:mb-3">News</h1>
          <p className="text-base sm:text-gray-300 sm:text-[24px]">Welcome To Kross News</p>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <section className="text-white overflow-hidden relative bg-[#050026] min-h-[600px]  px-4 sm:px-6">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 flex gap-2 sm:gap-4">
          <div className="w-[180px] sm:w-[250px] md:w-[350px] h-[180px] sm:h-[250px] md:h-[350px] bg-[#EC34E0]/15 blur-3xl rounded-full"></div>
          {/* <div className="w-[250px] h-[250px] bg-[#487DF1]/20 blur-3xl rounded-full"></div> */}
        </div>
        <div className="border-b border-gray-700/50">
          <div className="container mx-auto py-2 sm:py-4">
            <div className="flex flex-col xl:flex-row w-full gap-2 sm:gap-0" style={{ fontFamily: 'Lato, sans-serif' }}>
              <div className="flex flex-row items-center gap-1 sm:gap-3 w-full">
                <span className="text-lg sm:text-[32px] whitespace-nowrap">Help Me Learn About</span>
                <div
                  className="p-[2px] rounded-lg bg-gradient-to-l from-[#6D05B8] to-[#FF00B8] w-full xs:w-auto min-w-[120px] sm:min-w-[180px]"
                >
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full h-full px-3 bg-[#050026] text-base sm:text-[32px] text-white focus:outline-none rounded-lg font-medium border-none"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    <option value="everything" className="bg-gray-800 text-white">everything</option>
                    <option value="tokenization" className="bg-gray-800 text-white">Tokenization</option>
                    <option value="blockchain" className="bg-gray-800 text-white">Blockchain</option>
                    <option value="regulations" className="bg-gray-800 text-white">Regulations</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-end w-full mt-2 sm:mt-0">
                <div className="flex items-center w-full max-w-xs sm:max-w-md bg-transparent border border-gray-600 text-white rounded-lg px-2 py-1 relative" style={{fontFamily: 'Lato, sans-serif'}}>
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0"
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
                    className="flex-1 bg-transparent border-none outline-none text-base sm:text-[24px] text-white placeholder:text-gray-400"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      type="button"
                      className="ml-2 text-gray-400 hover:text-white flex-shrink-0"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="container mx-auto py-8 sm:py-16">
          <div className="">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-2 sm:mb-4 gap-2 sm:gap-4">
              <h2 className="text-lg sm:text-4xl font-bold text-white leading-tight">{featuredArticle.title}</h2>
              <span className="text-gray-400 text-xs sm:text-sm">{featuredArticle.date}</span>
            </div>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-8 leading-relaxed">{featuredArticle.excerpt}</p>
            <div className="inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200  inline-block">
              <a
                href="#"
                className="inline-flex px-8 py-4 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200  inline-block"
              >
                Read News
              </a>
            </div>
          </div>
          <img src="/assets/image/news/news_1.svg" alt="featured article" className="w-full h-full object-cover rounded-lg mb-2 sm:mb-4 py-4 sm:py-[36px]" />
        </div>
      </section>
      {/* All News Section */}
      <section className="text-white overflow-hidden relative bg-[#050026] min-h-screen px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Page Title */}
        <h1 className="text-lg sm:text-4xl font-bold text-white mb-4 sm:mb-[100px]">All News</h1>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-8 font-sans">
          {newsArticles.map((article) => (
            <div key={article.id} className="space-y-6 mt-[20px] ">
              <img
                src={article.image}
                alt={article.title}
                className="w-full object-cover rounded-lg mb-4"
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
      </div>
      </section>
    </div>
  )
}
