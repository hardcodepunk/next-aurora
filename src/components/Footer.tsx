import { FaFacebookF, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#333] text-white py-16 px-6 md:px-16 font-sirenia">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="space-y-2 text-left text-base md:text-lg font-thin leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-normal mb-2">Contact</h2>
          <p>Praktijk Aurora — psychotherapie en analyse</p>
          <p className="font-normal text-white">contact@aurora.be</p>
          <p>Erkenningsnummer: nummer</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="flex text-2xl" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="flex text-2xl" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}
