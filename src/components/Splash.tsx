import Image from "next/image"

export default function Splash() {
  return (
    <div className="relative z-10 h-screen flex flex-col bg-[#faeaae] items-center justify-center gap-4 text-center px-6 md:px-16 overflow-hidden">
      {/* Flowers */}
      <Image
        src="/flower-1.svg"
        alt="Flower left"
        width={250}
        height={500}
        className="absolute left-10 bottom-0 translate-y-12 md:translate-y-0"
      />
      <Image
        src="/flower-2.svg"
        alt="Flower right"
        width={140}
        height={200}
        className="absolute bottom-0 left-45 -translate-x-1/2 translate-y-6"
      />
      <Image
        src="/flower-3.svg"
        alt="Flower bottom"
        width={300}
        height={500}
        className="absolute right-10 bottom-0 translate-y-12 md:translate-y-0"
      />

      {/* Text content */}
      <h2 className="text-[25px] font-sirenia font-light m-0 p-0 leading-none">Praktijk</h2>
      <h1 className="text-[100px] font-sirenia font-black uppercase m-0 p-0 leading-none">Aurora</h1>
      <p className="text-[18px] font-sirenia font-thin text-black m-0 p-0 leading-none">
        Praktijk voor psychologische begeleiding en psychoanalytische therapie
      </p>
      <a
        href="#contact"
        className="inline-block mt-4 px-6 py-2 rounded-full font-sirenia text-white bg-black hover:bg-white hover:text-black transition duration-300"
      >
        Maak een afspraak
      </a>
    </div>
  )
}
