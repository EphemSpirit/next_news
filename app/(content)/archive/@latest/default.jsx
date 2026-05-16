import NewsList from "@/components/headers/news/NewsList"

const LatestNewsPage = async () => {
  const res = await fetch("http://localhost:8080/news/latest")
  const latestArticles = await res.json()

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestArticles} />
    </>
  )
}

export default LatestNewsPage