// src/app/components/loading.tsx
import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image src="/farmtex-black.svg" alt="Loading..." width={100} height={100} />
    </div>
  )
}

export default Loading