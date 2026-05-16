import { notFound } from "next/navigation"

const ImagePage = async ({ params }) => {
  const res = await fetch(`http://localhost:8080/news/${params.slug}`)

  const newsItem = await res.json()

  if (!newsItem) {
    notFound()
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={`${newsItem.title}`} />
    </div>
  )
}

export default ImagePage