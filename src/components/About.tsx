export default function About() {
  return (
    <div className="relative z-10 pt-44 pb-64 flex flex-col md:flex-row justify-between gap-16 px-6 md:px-16 bg-[#cfb27b] font-sirenia">
      <div className="basis-1/2 max-w-2xl text-left">
        <h2 className="text-3xl md:text-4xl font-regular">Wat?</h2>

        <p className="text-base md:text-lg font-thin leading-relaxed mt-4">
          Op een gegeven moment krijgt ieder mens te maken met psychische obstakels, moeilijkheden en vraagstukken
          waarmee je niet zomaar verder kan. Het telkens opnieuw botsen op deze thema’s, en de ervaring dat ze je steeds
          meer bezighouden en belemmeren, brengt een psychisch lijden met zich mee dat je niet simpelweg naast je neer
          kunt leggen. Dit is het moment waarop erover gaan spreken met iemand die zonder oordeel naar je luistert het
          verschil kan maken.
        </p>
        <p className="text-base md:text-lg font-thin leading-relaxed mt-2">
          Het vrijuit uitspreken, voorbij je innerlijke censuur, in een ruimte die getekend wordt door veiligheid en
          vertrouwen, opent de mogelijkheid om jouw levensgeschiedenis en de symptomen of klachten die erin opduiken
          beter te begrijpen. Precies daarin schuilt de kern van verandering: door zicht te krijgen op wat er in jou
          omgaat, hoe jij daar betekenis aan geeft en welke rol je onbewuste daarin speelt, ontstaat de ruimte om
          ervaringen te doorwerken en nieuwe keuzes mogelijk te maken.
        </p>

        <blockquote className="bg-[#faeaae] font-thin md:text-base rounded-md px-4 py-3 mt-6">
          Ieder mens is uniek en zoekt op zijn eigen manier naar antwoorden op de vele vragen waarmee we in het leven
          geconfronteerd worden. Daarom verschilt de concrete invulling van de therapie telkens opnieuw, afgestemd op
          jouw persoonlijke levensverhaal. We spreken de frequentie af in onderling overleg, rekening houdende met de
          nodige tijd om voldoende zicht te kunnen krijgen en houden op wat speelt.
        </blockquote>

        <button className="mt-6 px-6 py-2 rounded-full text-white bg-black hover:bg-white hover:text-black transition duration-300">
          Maak een afspraak
        </button>
      </div>

      <div className="basis-1/2 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-regular">Voor wie?</h2>
        <p className="text-base md:text-lg font-thin leading-relaxed mt-4">
          In mijn praktijk ben je als (jong)volwassene welkom om te spreken over wat er in jou leeft, je raakt, je
          belemmert. Je kan bij mij terecht met zowel vage als heel concrete klachten, problemen of vragen.
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg mt-2 font-thin leading-relaxed">
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
        <p className="text-base md:text-lg font-thin leading-relaxed mt-2">
          Soms weet je het gewoon even niet meer, stel je alles in vraag of zit je vast op een heel specifiek punt. Ook
          dan kan erover spreken een eerste stap zijn naar helderheid en verandering.
        </p>
      </div>
    </div>
  )
}
