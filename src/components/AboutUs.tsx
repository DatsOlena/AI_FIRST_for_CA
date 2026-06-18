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

const sectionGradientStyle = {
  background: `
    radial-gradient(
      ellipse 70% 60% at 50% 50%,
      rgba(26, 115, 232, 0.12) 0%,
      rgba(10, 15, 30, 0) 70%
    ),
    #0A0F1E
  `,
} as const

export default function AboutUs() {
  return (
    <section
      id="o-nas"
      className="relative overflow-hidden px-6 py-16 text-white lg:py-24"
      style={sectionGradientStyle}
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div>

          <h2 className="font-bricolage text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight tracking-[-0.5px] text-white">
            Doradztwo i technologia. Razem, od początku.
          </h2>

          <p className="mt-6 text-[18px] leading-relaxed text-white/80">
            AI First to część rodziny MGM Consulting — firmy z wieloletnim
            doświadczeniem w doradztwie biznesowym, cyfryzacji i wdrożeniach
            technologicznych dla firm usługowych i produkcyjnych w Polsce i
            Wielkiej Brytanii.
          </p>

          <p className="mt-4 text-base leading-relaxed text-white/60">
            Wychodzimy od konsultingu: zanim cokolwiek zautomatyzujemy,
            rozumiemy Twój biznes. Mapujemy procesy, identyfikujemy wąskie
            gardła i liczymy realny zwrot. Dopiero wtedy dobieramy technologię
            — nie na odwrót.
          </p>

          <p className="mt-4 text-base leading-relaxed text-white/60">
            Przez lata doradzaliśmy firmom przy inwestycjach, cyfryzacji i
            rozwoju operacyjnym. Wdrożenia AI to naturalne rozwinięcie tej samej
            pracy: pomagamy firmom rosnąć skuteczniej, bez proporcjonalnego
            wzrostu kosztów.
          </p>

          <div className="mt-10 flex flex-wrap gap-8 border-y border-white/10 py-8">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="font-bricolage text-2xl font-extrabold text-brand-highlight lg:text-3xl">
                  {value}
                </p>
                <p className="mt-1 max-w-[140px] text-sm text-white/50">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/o-nas"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(26,115,232,0.45)] transition-[transform,box-shadow,background] hover:-translate-y-0.5 hover:bg-brand-highlight hover:shadow-[0_8px_28px_rgba(107,184,255,0.55)]"
          >
            Porozmawiaj z naszym doradcą
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>

        {/* Right column — 2×2 competency grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {competencies.map(({ title, text }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-[border-color,background,transform] hover:-translate-y-0.5 hover:border-brand-highlight/30 hover:bg-white/[0.06]"
            >
              <h3 className="mb-2 text-base font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
