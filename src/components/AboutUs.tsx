import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '400+', label: 'firm obsłużonych doradczo' },
  { value: '10+', label: 'lat doświadczenia' },
  { value: 'PL · UK', label: 'rynki działania' },
] as const

const competencies = [
  {
    title: 'AI Implementations',
    text: 'Automatyzujemy powtarzalne procesy przy użyciu wiodących modeli AI — Claude, GPT-4o, Gemini. Od screeningu CV, przez oferty sprzedażowe, po analizę danych z wielu systemów jednocześnie.',
  },
  {
    title: 'CRM Implementations',
    text: 'Wdrażamy i integrujemy systemy CRM z codzienną pracą zespołów sprzedaży. Łączymy CRM z asystentem głosowym AI — każdy kontakt trafia do systemu automatycznie, żaden lead nie przepada w ciszy.',
  },
  {
    title: 'Advisory & Digitalisation',
    text: 'Pomagamy firmom zaplanować transformację cyfrową od podstaw — audyt procesów, dobór narzędzi, szkolenia zespołu. Wspieramy też przy pozyskiwaniu dotacji na cyfryzację i innowacje.',
  },
  {
    title: 'Industries We Know',
    text: 'Usługi profesjonalne, doradztwo, rekrutacja, dystrybucja B2B, produkcja, szkolenia — to firmy, z którymi pracujemy od lat. Znamy ich procesy, problemy i to, gdzie AI robi największą różnicę.',
  },
] as const

export default function AboutUs() {
  return (
    <section id="o-nas" className="bg-[#0A0F1E] px-6 py-10 lg:py-14">
      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
            O nas
          </p>

          <h2 className="font-bricolage text-3xl font-extrabold leading-tight text-white lg:text-[2.25rem]">
            Doradztwo i technologia. Razem, od początku.
          </h2>

          <p className="mt-6 text-lg leading-[1.65] text-white/75">
            AI First to część rodziny MGM Consulting — firmy z wieloletnim
            doświadczeniem w doradztwie biznesowym, cyfryzacji i wdrożeniach
            technologicznych dla firm usługowych i produkcyjnych w Polsce i
            Wielkiej Brytanii.
          </p>

          <p className="mt-5 text-[15px] leading-[1.7] text-white/55">
            Wychodzimy od konsultingu: zanim cokolwiek zautomatyzujemy,
            rozumiemy Twój biznes. Mapujemy procesy, identyfikujemy wąskie
            gardła i liczymy realny zwrot. Dopiero wtedy dobieramy technologię
            — nie na odwrót.
          </p>

          <p className="mt-4 text-[15px] leading-[1.7] text-white/55">
            Przez lata doradzaliśmy firmom przy inwestycjach, cyfryzacji i
            rozwoju operacyjnym. Wdrożenia AI to naturalne rozwinięcie tej samej
            pracy: pomagamy firmom rosnąć skuteczniej, bez proporcjonalnego
            wzrostu kosztów.
          </p>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="font-bricolage text-2xl font-bold text-white lg:text-[1.75rem]">
                  {value}
                </dt>
                <dd className="mt-1.5 text-[13px] leading-snug text-white/45">
                  {label}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="/o-nas"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-[#1A73E8] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1558b8]"
          >
            Porozmawiaj z naszym doradcą
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2">
          {competencies.map(({ title, text }) => (
            <article key={title} className="bg-[#0A0F1E] p-6 lg:p-7">
              <h3 className="mb-3 text-[15px] font-semibold leading-snug text-white">
                {title}
              </h3>
              <p className="text-[14px] leading-[1.65] text-white/50">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
