"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamically import BlobBorder to prevent SSR issues
const BlobBorder = dynamic(() => import("./BlobBorder").then(mod => mod.BlobBorder), {
  ssr: false,
})

export default function About() {
  return (
    <div className="relative z-10 flex flex-col md:flex-row justify-center mt-44 mb-64 items-center px-6 md:px-16 text-[#333]">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 h-[310px]">
        <Suspense fallback={<div className="w-[240px] h-[310px] bg-gray-200 rounded-md" />}>
          <BlobBorder imageSrc="/eva.jpg" />
        </Suspense>
      </div>

      <div className="w-full md:w-1/2 font-sirenia text-right">
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
