"use client";

import { DUMMY_NEWS } from "@/dummy-news"
import { notFound } from "next/navigation"
import { useRouter } from "next/navigation"

const InterceptedImagePage = ({ params }) => {
  const router = useRouter()

  const newsItem = DUMMY_NEWS.find(item => item.slug === params.slug)

  if (!newsItem) {
    notFound
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
