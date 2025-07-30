export default function Splash() {
  return (
    <div className="relative z-10 h-screen flex flex-col bg-[#faeaae] items-center justify-center gap-4 text-center px-6 md:px-16">
      <h2 className="text-[25px] font-sirenia font-light m-0 p-0 leading-none">Praktijk</h2>
      <h1 className="text-[100px] font-sirenia font-black uppercase m-0 p-0 leading-none">Aurora</h1>
      <p className="text-[18px] font-sirenia font-thin text-black m-0 p-0 leading-none">
        Praktijk voor psychologische begeleiding en psychoanalytische therapie
      </p>
      <button className="mt-4 px-6 py-2 rounded-full font-sirenia text-white bg-black hover:bg-white hover:text-black transition duration-300">
        Maak een afspraak
      </button>
    </div>
  )
}
