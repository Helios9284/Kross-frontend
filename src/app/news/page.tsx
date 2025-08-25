"use client"

import { useEffect, useState } from "react"
import Link from "next/link";

interface Post {
  title: string;
  date: string;
  link: string;
  excerpt: string;
  image: string;
  tags: string[];
}

const featuredArticle = {
  title: "SEC Grants Hashgreed Approval To Tokenize Real Estate Based Assets",
  excerpt:
    "The Securities and Exchange Commission (SEC) has Granted Approval to Kross Real Estate Securities Network, Hashgreed, to offer Tokenized Real Estate Digital Assets.",
  date: "Aug 14, 2024",
}

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("everything")
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const postsPerPage = 6;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/posts");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setPosts(data);
        } else if (data.error) {
          setError(data.error);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  
  // Format date helper
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    } catch {
      return "Unknown date"
    }
  }

  // Filter posts based on search and category
  const filteredPosts = posts.filter((post) => {
    const query = searchTerm.toLowerCase()
    const matchesSearch = 
      post.title?.toLowerCase().includes(query) ||
      post.excerpt?.toLowerCase().includes(query) ||
      post.tags?.some(tag => tag.toLowerCase().includes(query))

    if (selectedCategory === "everything") {
      return matchesSearch
    }

    // Filter by category using tags
    const matchesCategory = post.tags?.some(tag => 
      tag.toLowerCase().includes(selectedCategory.toLowerCase())
    )

    return matchesSearch && matchesCategory
  })

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage))
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleMediumClick = () => {
    // Replace with your actual Medium page URL
    window.open("https://tribuneonlineng.com/sec-grants-hashgreed-approval-to-tokenize-real-estate-based-assets/", "_blank", "noopener,noreferrer")
  }

  // Reset to page 1 when search or category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory])

  // Adjust current page if it exceeds total pages
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages)
    }
  }, [totalPages, currentPage])

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-b from-[#050026] text-white overflow-hidden"
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
      <section className="text-white overflow-hidden relative bg-[#050026] min-h-[600px] px-4 sm:px-6">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 flex gap-2 sm:gap-4">
          <div className="w-[180px] sm:w-[250px] md:w-[350px] h-[180px] sm:h-[250px] md:h-[350px] bg-[#EC34E0]/15 blur-3xl rounded-full"></div>
        </div>
        <div className="border-b border-gray-700/50">
          <div className="container mx-auto py-2 sm:py-4">
            <div className="flex flex-col xl:flex-row w-full gap-2 sm:gap-0" style={{ fontFamily: 'Lato, sans-serif' }}>
              <div className="flex flex-row items-center gap-1 sm:gap-3 w-full">
                <span className="text-lg sm:text-[32px] whitespace-nowrap">Help Me Learn About</span>
                <div className="p-[2px] rounded-lg bg-gradient-to-l from-[#6D05B8] to-[#FF00B8] w-full xs:w-auto min-w-[120px] sm:min-w-[180px]">
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
                    <option value="real estate" className="bg-gray-800 text-white">Real Estate</option>
                    <option value="cryptocurrency" className="bg-gray-800 text-white">Cryptocurrency</option>
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
                    placeholder="Search Articles"
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
            <div className="inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200 inline-block">
              <Link
                href="/news"
                className="inline-flex px-8 py-4 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200 inline-block"
                onClick={handleMediumClick}
              >
                Read News
              </Link>
            </div>
          </div>
          <img src="/assets/image/news/news_1.svg" alt="featured article" className="w-full h-full object-cover rounded-lg mb-2 sm:mb-4 py-4 sm:py-[36px]" />
        </div>
      </section>

      {/* Articles Section */}
      <div className="container mx-auto min-h-screen bg-[#050026] py-12">
        <div className="mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-left text-white">
            All News
          </h1>

          {loading ? (
            <div className="text-center text-gray-400 text-xl">Loading posts...</div>
          ) : error ? (
            <div className="text-center text-red-400 text-xl">Error: {error}</div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center text-gray-400 text-xl">
              {searchTerm || selectedCategory !== "everything" 
                ? "No posts match your search criteria" 
                : "No posts found"
              }
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentPosts.map((post, idx) => (
                  <div
                    key={idx}
                    className=" text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Image with fallback */}
                    <div className="h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder-image.jpg';
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag, i) => (
                            <span
                              key={i}
                              className="border-[#686868] border-[2px] text-xs px-3 py-1 rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span className="bg-gray-700 text-xs px-3 py-1 rounded-full">
                              +{post.tags.length - 2}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mb-4">
                          {formatDate(post.date)}
                        </div>
                      </div>

                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold hover:text-blue-400 block mb-3 transition-colors"
                      >
                        {post.title}
                      </a>

                      <p className="text-[#CACACA] text-sm line-clamp-3 mb-5 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                      <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`px-4 py-2 rounded-lg transition-colors ${currentPage === number
                            ? "bg-blue-600 text-white"
                            : "bg-gray-800 text-white hover:bg-gray-700"
                          }`}
                      >
                        {number}
                      </button>
                    ))}

                    <button
                      onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                    </nav>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}