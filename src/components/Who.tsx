import Image from "next/image"
import styles from "./About.module.css"

const randomDelay = `${Math.random() * 20}s`
const randomDuration = `${30 + Math.random() * 10}s` // 30–40s

export default function About() {
  return (
    <div className="relative z-10 flex flex-col md:flex-row justify-center mt-44 mb-64 items-center px-6 md:px-16 text-[#333]">
      {/* Left: Blob-wrapped image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className={styles.blobWrap} style={{ animationDelay: randomDelay, animationDuration: randomDuration }}>
          <Image src="/eva.jpg" alt="Eva De Coster" width={220} height={290} className="object-cover rounded-md" />
        </div>
      </div>

      {/* Right: Text */}
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
