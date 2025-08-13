export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-[#333] text-white py-16 px-6 md:px-16 font-sirenia">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="space-y-2 text-left text-base md:text-lg font-thin leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-normal mb-2">Contact</h2>
          <p className="font-normal">
            Gesprekken vinden altijd plaats op afspraak.<br></br> Je kunt een afspraak maken via telefoon of e-mail:
          </p>
          <p>
            <span className="font-normal">Telefoon:</span> 0496 15 97 61
          </p>
          <p>
            <span className="font-normal">E-mail: </span>
            eva@praktijkaurora.be
          </p>
          <p className="italic text-sm">Let op: mijn e-mails kunnen in je spamfolder belanden.</p>
          <p className="mt-4 font-normal">Adres van de praktijk:</p>
          <p>Kapellestraat 20</p>
          <p>8377 Houtave</p>
        </div>
      </div>
    </footer>
  )
}
