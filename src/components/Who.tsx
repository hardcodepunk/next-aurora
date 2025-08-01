"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const BlobBorder = dynamic(() => import("./BlobBorder").then(mod => mod.BlobBorder), {
  ssr: false,
})

export default function Who() {
  return (
    <div className="relative z-10 bg-[#faeaae] flex flex-col md:flex-row justify-center pt-28 pb-32 items-center px-6 md:px-16">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <Suspense fallback={<div className="w-[450px] h-[600px] bg-gray-200 rounded-md" />}>
          <BlobBorder imageSrc="/eva.jpg" />
        </Suspense>
      </div>

      <div className="w-full md:w-1/2 font-sirenia">
        <div className="basis-1/2 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-regular">Wie ben ik?</h2>
          <p className="text-base md:text-lg font-thin leading-relaxed mt-4">
            Ik ben Eva De Coster, klinisch psychologe en psychoanalytisch psychotherapeute.
          </p>
          <p className="text-base md:text-lg font-thin leading-relaxed mt-2">
            Naast mijn werk in de praktijk ben ik afdelingspsychologe binnen het Psychiatrisch Ziekenhuis Onzelievevrouw
            in Brugge.
          </p>

          <h3 className="text-2xl md:text-3xl font-regular mt-6">Achtergrond</h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-base md:text-lg mt-2 font-thin leading-relaxed">
            <li>Opleiding master Klinische Psychologie aan de Universiteit van Gent; 2012–2017</li>
            <li>
              Erkende therapie-opleiding Psychoanalytische therapie en psychoanalyse met volwassenen vanuit
              Freudiaans-Lacaniaans perspectief aan de Universiteit van Gent; 2020–2024
            </li>
            <li>Permanente vorming sinds 2012 op basis van studiedagen en supervisie</li>
            <li>Visum als klinisch psycholoog; nummer 262926</li>
            <li>Erkenning door de Psychologencommissie; erkenningsnummer 952118341</li>
          </ul>
        </div>
        <button className="mt-4 px-6 py-2 rounded-full font-sirenia text-white bg-black hover:bg-white hover:text-black transition duration-300">
          Maak een afspraak
        </button>
      </div>
    </div>
  )
}
