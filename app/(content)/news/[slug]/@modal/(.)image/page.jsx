"use client";

import { notFound } from "next/navigation"
import { useRouter } from "next/navigation"

const InterceptedImagePage = async ({ params }) => {
  const router = useRouter()

  const res = await fetch(`http://localhost:8080/news/${params.slug}`)

  const newsItem = await res.json()

  if (!newsItem) {
    notFound()
  }

  const handleModalClose = () => {
    router.back()
  }

  return (
    <>
      <div className="modal-backdrop" onClick={handleModalClose} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={`${newsItem.title}`} />
        </div>
      </dialog>
    </>
  )
}

export default InterceptedImagePage
