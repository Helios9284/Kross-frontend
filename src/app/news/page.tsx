"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useMemo } from "react"

interface NewsArticle {
  id: number
  title: string
  excerpt: string
  date: string
  categories: string[]
  image: string
  link?: string
}

const featuredArticle = {
  id: 0,
  title: "SEC Grants Hashgreed Approval To Tokenize Real Estate Based Assets",
  excerpt:
    "The Securities and Exchange Commission (SEC) has Granted Approval to Kross Real Estate Securities Network, Hashgreed, to offer Tokenized Real Estate Digital Assets.",
  date: "Aug 14, 2024",
  link: "https://medium.com/krosscoin-universal-app-monetization-platform/vinekross-europe-partners-with-ofk-branc-football-club-to-pioneer-20m-football-stadium-ce76d136d25c"
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
    link: "https://medium.com/krosscoin-universal-app-monetization-platform/vinekross-europe-partners-with-ofk-branc-football-club-to-pioneer-20m-football-stadium-ce76d136d25c"
  },
  {
    id: 2,
    title: "Vitalerin Europe and OPK Banc FC Launch €2.0M Stadium Tokenization on Kross Blockchain via Hashgreed",
    excerpt:
      "Vitalerin Europe Sp.Z.O, The Registered European Arm Of The Krosscon Project And A Leading Blockchain Asset Tokenization Firm Has Officially Signed A Landmark Agreement With OPK Banc Football Club, A Professional Football Club Based In Poland To Launch Expansion Project And Integrate AI And Metaverse Technologies Into Its Future Infrastructure.",
    date: "Feb 8, 2024",
    categories: ["Ecosystem", "SIM Coin"],
    image: "/assets/image/news/allnews_2.png",
    link: "https://medium.com/krosscoin-universal-app-monetization-platform/vinekross-europe-partners-with-ofk-branc-football-club-to-pioneer-20m-football-stadium-ce76d136d25c"
  },
  {
    id: 3,
    title: "Real Estate Tokenization: Revolutionizing The Real Estate Industry",
    excerpt:
      "The Real Estate Industry Has Long Been Recognized As A Lucrative Investment Avenue. However, Traditional Real Estate Investment Comes With Various Challenges, Including High Entry Barriers, Illiquidity, And Lack Of Accessibility.",
    date: "June 15, 2024",
    categories: ["tokenization", "blockchain"],
    image: "/assets/image/news/allnews_3.png",
    link: "https://medium.com/@example/article-3"
  },
  {
    id: 4,
    title: "Real Estate Tokenization: Pros, Cons, And Challenges",
    excerpt:
      "Vitalerin Europe Sp.Z.O, The Registered European Arm Of The Krosscon Project And A Leading Blockchain Asset Tokenization Firm Has Officially Signed A Landmark Agreement With OPK Banc Football Club, A Professional Football Club Based In Poland To Launch Expansion Project And Integrate AI And Metaverse Technologies Into Its Future Infrastructure.",
    date: "May 10, 2024",
    categories: ["tokenization", "regulations"],
    image: "/assets/image/news/allnews_4.png",
    link: "https://www.commercialcafe.com/blog/real-estate-tokenization/?utm_source=chatgpt.com"
  },
  {
    id: 5,
    title: "Real Estate Tokenization: Transforming Investment Opportunities",
    excerpt:
      "The Real Estate Industry Has Long Been Recognized As A Lucrative Investment Avenue. However, Traditional Real Estate Investment Comes With Various Challenges, Including High Entry Barriers, Illiquidity, And Lack Of Accessibility.",
    date: "July 1, 2024",
    categories: ["tokenization", "blockchain"],
    image: "/assets/image/news/allnews_5.png",
    link: "https://medium.com/debutinfotech/real-estate-tokenization-transforming-investment-opportunities-904f70187b21"
  },
  {
    id: 6,
    title: "The Future Of Real Estate: Tokenization And Its Impact On The Industry",
    excerpt:
      "Real Estate Tokenization Is Reshaping The Landscape Of Investment Opportunities By Leveraging Blockchain Technology To Fractionalize Property Ownership.",
    date: "May 22, 2024",
    categories: ["tokenization", "blockchain"],
    image: "/assets/image/news/allnews_3.png",
    link: "https://medium.com/@example/article-6"
  },
]

const ITEMS_PER_PAGE = 6;
const CATEGORIES = ["everything", "tokenization", "blockchain", "regulations", "ecosystem", "sim coin"];

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("everything")

  // Filter and search logic
  const filteredArticles = useMemo(() => {
    let filtered = newsArticles;

    // Filter by category
    if (selectedCategory !== "everything") {
      filtered = filtered.filter(article =>
        article.categories.some(cat => 
          cat.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      );
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchLower) ||
        article.excerpt.toLowerCase().includes(searchLower) ||
        article.categories.some(cat => cat.toLowerCase().includes(searchLower))
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset pagination when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    setCurrentPage(1);
  };

  const handleExternalClick = (link: string) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const handleArticleClick = (article: NewsArticle) => {
    if (article.link) {
      handleExternalClick(article.link);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisiblePages - 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-b from-[#050026] text-white overflow-hidden"
      style={{ fontFamily: 'Lato, sans-serif' }}
    >
      {/* Header */}
      <div 
        className="py-8 sm:py-16 h-[200px] sm:h-[370px] flex items-center justify-center bg-cover bg-no-repeat bg-bottom" 
        style={{ 
          background: "linear-gradient(#110942 80%)", 
          backgroundImage: "url('/assets/image/news/image.png')" 
        }}
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">
            News
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
            Welcome To Kross News
          </p>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <section className="text-white overflow-hidden relative bg-[#050026] min-h-[600px] px-4 sm:px-6">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 flex gap-2 sm:gap-4">
          <div className="w-[180px] sm:w-[250px] md:w-[350px] h-[180px] sm:h-[250px] md:h-[350px] bg-[#EC34E0]/15 blur-3xl rounded-full"></div>
        </div>
        
        <div className="border-b border-gray-700/50">
          <div className="container mx-auto py-4">
            <div className="flex flex-col xl:flex-row w-full gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                <span className="text-xl sm:text-2xl lg:text-3xl whitespace-nowrap font-medium">
                  Help Me Learn About
                </span>
                <div className="p-[2px] rounded-lg bg-gradient-to-l from-[#6D05B8] to-[#FF00B8] w-full sm:w-auto min-w-[200px]">
                  <select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="w-full h-full px-4 py-2 bg-[#050026] text-lg sm:text-xl lg:text-2xl text-white focus:outline-none rounded-lg font-medium border-none cursor-pointer"
                    aria-label="Filter articles by category"
                  >
                    {CATEGORIES.map(category => (
                      <option key={category} value={category} className="bg-gray-800 text-white capitalize">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-end w-full">
                <div className="flex items-center w-full max-w-md bg-transparent border border-gray-600 text-white rounded-lg px-3 py-2 relative">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-lg sm:text-xl text-white placeholder:text-gray-400"
                    aria-label="Search articles"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => handleSearchChange('')}
                      type="button"
                      className="ml-2 text-gray-400 hover:text-white flex-shrink-0 p-1"
                      aria-label="Clear search"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {featuredArticle.title}
              </h2>
              <span className="text-gray-400 text-sm sm:text-base font-medium">
                {featuredArticle.date}
              </span>
            </div>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              {featuredArticle.excerpt}
            </p>
            <div className="inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-all duration-300">
              <button
                onClick={() => handleExternalClick(featuredArticle.link)}
                className="inline-flex px-6 py-3 rounded-[10px] bg-[#050026] hover:bg-transparent text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                Read News
              </button>
            </div>
          </div>
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src="/assets/image/news/news_1.svg"
              alt="Featured article illustration"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* All News Section */}
      <section className="text-white overflow-hidden relative bg-[#050026] min-h-screen px-4 sm:px-6">
        <div className="container mx-auto pb-16">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-16 gap-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              All News
            </h1>
            <div className="text-sm text-gray-400">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== "everything" && ` in ${selectedCategory}`}
            </div>
          </div>

          {/* No Results Message */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or category filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('everything');
                }}
                className="px-6 py-2 bg-gradient-to-r from-[#6D05B8] to-[#FF00B8] text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* News Grid */}
          {filteredArticles.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {paginatedArticles.map((article) => (
                  <article
                    key={article.id}
                    className="group cursor-pointer transition-transform hover:scale-105"
                    onClick={() => handleArticleClick(article)}
                  >
                    <div className="space-y-4">
                      <div className="relative w-full h-[200px] sm:h-[240px] overflow-hidden rounded-lg">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <h2 className="text-lg sm:text-xl font-bold text-white leading-tight group-hover:text-purple-300 transition-colors line-clamp-2">
                        {article.title}
                      </h2>

                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-2">
                          {article.categories.slice(0, 2).map((category, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 border border-gray-400 text-gray-200 rounded-full text-xs font-medium hover:border-purple-400 transition-colors capitalize"
                            >
                              {category}
                            </span>
                          ))}
                          {article.categories.length > 2 && (
                            <span className="px-3 py-1 text-gray-400 text-xs">
                              +{article.categories.length - 2}
                            </span>
                          )}
                        </div>
                        <span className="text-gray-400 text-sm font-medium whitespace-nowrap">
                          {article.date}
                        </span>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-16">
                  <div className="text-sm text-gray-400">
                    Page {currentPage} of {totalPages}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {/* Previous Button */}
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="w-10 h-10 rounded-lg font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Previous page"
                    >
                      <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Page Numbers */}
                    {getPageNumbers().map((page) => (
                      currentPage === page ? (
                        <div
                          key={page}
                          className="p-[2px] rounded-md bg-gradient-to-r from-[#e91e63] to-[#9c27b0]"
                        >
                          <button
                            className="w-10 h-10 rounded-md font-medium text-white bg-[#050026] flex items-center justify-center"
                            disabled
                          >
                            {page}
                          </button>
                        </div>
                      ) : (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className="w-10 h-10 rounded-md font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all"
                        >
                          {page}
                        </button>
                      )
                    ))}

                    {/* Next Button */}
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="w-10 h-10 rounded-lg font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Next page"
                    >
                      <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}