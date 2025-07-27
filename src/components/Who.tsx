"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamically import BlobBorder to prevent SSR issues
const BlobBorder = dynamic(() => import("./BlobBorder").then(mod => mod.BlobBorder), {
  ssr: false,
})

export default function Who() {
  return (
    <div className="relative z-10 bg-[#faeaae] flex flex-col md:flex-row justify-center pt-28 pb-32 items-center px-6 md:px-16">
      {/* Left: Animated Blob Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <Suspense fallback={<div className="w-[450px] h-[600px] bg-gray-200 rounded-md" />}>
          <BlobBorder imageSrc="/eva.jpg" />
        </Suspense>
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 font-sirenia">
        <h2 className="text-3xl md:text-4xl font-regular">Wie ben ik?</h2>
        <p className="text-base md:text-lg font-thin leading-relaxed mt-4">
          Ik ben Eva De Coster, klinisch psychologe en psychoanalytisch psychotherapeute.
        </p>
        <p className="text-base md:text-lg font-thin leading-relaxed mt-2">
          Naast mijn werk in de praktijk ben ik afdelingspsychologe binnen het Psychiatrisch Ziekenhuis Onzelievevrouw
          in Brugge.
        </p>
      </div>
    </div>
  )
}
