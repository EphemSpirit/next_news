"use client";
import { useRouter } from "next/navigation";

const ImageModal = () => {
  const router = useRouter()

  const handleModalClose = () => {
    router.back()
  }
  return (
    <div className="modal-backdrop" onClick={handleModalClose} />
  )
}

export default ImageModal