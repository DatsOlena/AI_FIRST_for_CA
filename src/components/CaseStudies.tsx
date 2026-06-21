type CaseStudy = {
  industry: string
  metric: string
  title: string
  description: string
}

const caseStudies: CaseStudy[] = [
  {
    industry: 'IT Recruitment Agency',
    metric: '−65%',
    title: 'Czas screeningu CV zredukowany z 5 dni do 28 godzin',
    description:
      'Claude analizuje napływające CV, scoruje je względem wymagań roli i generuje anonimowe profile kandydatów gotowe do wysłania do klienta.',
  },
  {
    industry: 'B2B Training Company',
    metric: '4 min',
    title: 'Oferta handlowa gotowa w 4 minuty zamiast 3 godzin',
    description:
      'Konsultant wypełnia formularz, AI generuje ofertę w brand-template firmy. Czas od briefu do wysłania skrócony z 2–3 godzin do 4 minut.',
  },
  {
    industry: 'B2B Distributor',
    metric: '15×',
    title: 'RFQ procesowane 15 razy szybciej — 2 min zamiast 35',
    description:
      'AI czyta e-maile z zapytaniami ofertowymi, identyfikuje produkty i generuje gotowy draft oferty do zatwierdzenia przez handlowca.',
  },
]

function CaseStudyCard({ industry, metric, title, description }: CaseStudy) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 lg:p-7">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.1em] text-white/45">
        {industry}
      </p>

      <p className="font-bricolage text-[44px] font-extrabold leading-none text-[#0ABFA3]">
        {metric}
      </p>

      <h3 className="mt-4 text-base font-semibold leading-snug text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-white/55">
        {description}
      </p>
    </article>
  )
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-[#12193A] px-6 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
            Efekty, nie obietnice
          </p>

          <h2 className="font-bricolage text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight tracking-[-0.5px] text-white">
            Liczby, które mówią za nas.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/55 lg:text-lg">
            Przykłady ze zrealizowanych projektów — z konkretnymi pomiarami
            przed i po wdrożeniu.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.industry} {...study} />
          ))}
        </div>
      </div>
    </section>
  )
}
