"use client";

import { useEffect, useState } from "react"
import NewsList from "@/components/headers/news/NewsList"

const NewsPage = () => {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [news, setNews] = useState([])

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const res = await fetch("http://localhost:8080/news")
      if (!res.ok) {
        setError("Failed to fetch news.")
        setIsLoading(false)
      }
      setIsLoading(false)

      const news = await res.json()
      setNews(news)
    }

    fetchNews()
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />
  }
  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  )
}

export default NewsPage