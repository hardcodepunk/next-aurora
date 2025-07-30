export default function About() {
  return (
    <div className="relative z-10 pt-44 pb-64 flex flex-col md:flex-row justify-between gap-16 px-6 md:px-16 bg-[#cfb27b] font-sirenia">
      {/* Left Column: Text + CTA */}
      <div className="basis-1/2 max-w-2xl text-left">
        <h2 className="text-3xl md:text-4xl font-regular">Wat kan therapie voor jou betekenen?</h2>

        <p className="text-base md:text-lg font-thin leading-relaxed mt-4">
          Iedereen botst vroeg of laat op psychische moeilijkheden. Als deze thema’s blijven terugkeren en je steeds
          meer belemmeren, ontstaat er lijden dat je niet zomaar kan negeren.
        </p>
        <p className="text-base md:text-lg font-thin leading-relaxed mt-2">
          In gesprek gaan met iemand die zonder oordeel luistert, biedt dan verlichting. In een veilige ruimte vrijuit
          spreken helpt je om jezelf beter te begrijpen, en precies daarin ligt de kracht tot verandering.
        </p>

        <blockquote className="bg-[#faeaae] font-thin md:text-base rounded-md px-4 py-3 mt-6">
          Therapie wordt steeds persoonlijk afgestemd, met het verlangen die te samen vorm te geven, zodat er voldoende
          ruimte is om jouw unieke levensverhaal en vragen te verkennen.
        </blockquote>

        <button className="mt-6 px-6 py-2 rounded-full text-white bg-black hover:bg-white hover:text-black transition duration-300">
          Maak een afspraak
        </button>
      </div>

      {/* Right Column: Thematic List */}
      <div className="basis-1/2 max-w-xl">
        <h3 className="text-2xl md:text-3xl font-regular mb-4">Thema's waarmee je terecht kan</h3>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-thin leading-relaxed">
          <li>Angst en paniek</li>
          <li>Depressieve gevoelens en neerslachtigheid</li>
          <li>Rouw en verliesverwerking</li>
          <li>Aanhoudende onrust en innerlijke gespannenheid</li>
          <li>Dwanggedachten en dwangmatig gedrag</li>
          <li>Moeilijkheden rond seksualiteit</li>
          <li>Identiteitsvraagstukken en vervreemding van zichzelf</li>
          <li>Psychische impact van lichamelijke klachten</li>
          <li>Sociale moeilijkheden en interpersoonlijke spanningen</li>
          <li>Gevoelens van geremdheid of onzekerheid</li>
        </ul>
      </div>
    </div>
  )
}
