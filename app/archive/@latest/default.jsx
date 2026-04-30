import NewsList from "@/components/headers/news/NewsList"
import { getLatestNews } from "@/lib/news"

const LatestNewsPage = () => {
  const latestArticles = getLatestNews()

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestArticles} />
    </>
  )
}

export default LatestNewsPage