import { ArrowRight } from 'lucide-react'

type ServiceCardData = {
  badge: string
  badgeColor: string
  title: string
  audience: string
  features: readonly string[]
  timeline: string
  roi: string
  price: string
}

const services: ServiceCardData[] = [
  {
    badge: 'Example 1 · B2B Sales',
    badgeColor: '#0ABFA3',
    title: 'Automatyzacja dokumentów sprzedażowych',
    audience:
      'firm consultingowych, agencji, producentów z działem handlowym',
    features: [
      'Oferty handlowe z briefu lub formularza w minuty',
      'Transkrypt ze spotkania → brief projektowy + action items',
      'Drafty umów i dokumentów onboardingowych',
      'Asystent głosowy + CRM — każdy kontakt obsłużony',
      'Integracja z CRM: Pipedrive, Salesforce i inne',
    ],
    timeline: '3–5 tyg.',
    roi: '150–300%',
    price: '30 000 PLN',
  },
  {
    badge: 'Example 2 · Recruitment',
    badgeColor: '#1A73E8',
    title: 'Automatyzacja procesów rekrutacyjnych',
    audience:
      'agencji HR, headhunterów, działów talent acquisition (20–200 os.)',
    features: [
      'Automatyczny screening i scoring CV względem wymagań roli',
      'Profile kandydatów w branded template agencji',
      'Drafty e-maili do kandydatów i klientów',
      'Dokumenty onboardingowe i pakiety umów',
      'Integracja z ATS: Bullhorn, Vincere, Traffit, eRecruiter',
    ],
    timeline: '4–6 tyg.',
    roi: '200–400%',
    price: '35 000 PLN',
  },
  {
    badge: 'Example 3 · Analytics',
    badgeColor: '#8B5CF6',
    title: 'Analiza informacji w poprzek działów firmy',
    audience:
      'firm z rozproszonymi danymi w CRM, ERP, e-mailach, raportach i arkuszach',
    features: [
      'Przekrojowe raporty z danych z wielu systemów jednocześnie',
      'Automatyczne podsumowania tygodniowe / miesięczne dla zarządu',
      'Wykrywanie anomalii i trendów bez ręcznego przeglądania danych',
      'Pytania do danych w języku naturalnym (bez SQL, bez Excela)',
      'Integracja z: Google Workspace, Microsoft 365, ERP, CRM, BI',
    ],
    timeline: '6–10 tyg.',
    roi: '150–250%',
    price: '40 000 PLN',
  },
]

function ServiceCard({
  badge,
  badgeColor,
  title,
  audience,
  features,
  timeline,
  roi,
  price,
}: ServiceCardData) {
  return (
    <article className="flex h-full flex-col rounded-[20px] border border-[#E5E7EB] bg-white p-6 transition-[transform,border-color,box-shadow] hover:-translate-y-1 hover:border-[#1A73E8] hover:shadow-[0_12px_32px_rgba(26,115,232,0.1)] lg:p-7">
      <span
        className="mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold text-white"
        style={{ backgroundColor: badgeColor }}
      >
        {badge}
      </span>

      <h3 className="font-bricolage text-xl font-extrabold leading-snug text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        <span className="font-semibold text-gray-800">Dla:</span> {audience}
      </p>

      <ul className="mt-5 flex flex-1 flex-col gap-2.5 border-t border-[#E5E7EB] pt-5">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex gap-2 text-sm leading-snug text-gray-600"
          >
            <span
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gray-400"
              aria-hidden
            />
            {feature}
          </li>
        ))}
      </ul>

      <p className="mt-5 border-t border-[#E5E7EB] pt-4 text-xs leading-relaxed text-gray-500">
        Czas wdrożenia: {timeline} · ROI rok 1: {roi} · Setup od: {price}
      </p>
    </article>
  )
}

export default function Services() {
  return (
    <section id="uslugi" className="bg-white px-6 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
            Co wdrażamy
          </p>

          <h2 className="font-bricolage text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight tracking-[-0.5px] text-gray-900">
            Automatyzacja AI dopasowana do Twoich procesów.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 lg:text-lg">
            Pracujemy z wiodącymi modelami AI — Claude, GPT-4o, Gemini i
            innymi — dobierając technologię do konkretnego zadania, nie na
            odwrót. Poniżej trzy przykładowe obszary wdrożeń.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.badge} {...service} />
          ))}
        </div>

        <p className="mt-10 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1A73E8] transition-colors hover:text-[#1558b8]"
          >
            To tylko przykłady — porozmawiajmy o Twoim procesie
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </p>
      </div>
    </section>
  )
}
