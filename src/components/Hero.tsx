import { ArrowRight, ChevronDown } from 'lucide-react'
import heroVisual from '../assets/Hero-image.png'

const stats = [
  { value: '−65%', label: 'czas screeningu CV w rekrutacji' },
  { value: '2 min', label: 'RFQ → oferta zamiast 30 min' },
  { value: '300%', label: 'średnie ROI w pierwszym roku' },
] as const

const heroOverlayStyle = {
  background: `
    linear-gradient(
      90deg,
      rgba(4, 12, 28, 0.62) 0%,
      rgba(6, 18, 42, 0.38) 32%,
      rgba(8, 22, 48, 0.12) 48%,
      transparent 62%
    ),
    radial-gradient(
      ellipse 85% 65% at 100% 0%,
      rgba(26, 115, 232, 0.28) 0%,
      rgba(26, 115, 232, 0.08) 45%,
      transparent 72%
    ),
    radial-gradient(
      ellipse 70% 55% at 0% 100%,
      rgba(20, 184, 166, 0.22) 0%,
      rgba(20, 184, 166, 0.06) 50%,
      transparent 68%
    )
  `,
} as const

export default function Hero() {
  return (
    <>
      <section className="relative w-full overflow-hidden text-white">
        <img
          src={heroVisual}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] brightness-[1.08] contrast-[1.02]"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={heroOverlayStyle}
        />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-6 py-7 lg:py-10">
            <div className="flex flex-col">
              <p className="mb-3 inline-flex w-fit text-sm items-center gap-2.5">
                Wdrożenia AI dla firm usługowych i produkcyjnych
              </p>

              <h1 className="font-bricolage text-[clamp(2.25rem,5vw,58px)] font-extrabold leading-[1.05] tracking-[-1.5px] text-white">
                Odblokuj czas
                <br />
                swojego <span className="text-brand-highlight">zespołu</span>.
                <br />
                Zautomatyzuj
                <br />
                powtarzalne.
              </h1>

              <p className="mt-6 max-w-[480px] text-[18px] leading-relaxed text-white/60">
                Wdrażamy najnowsze modele AI — Claude, GPT-4o, Gemini i inne —
                bezpośrednio w procesy Twojej firmy. Dobieramy technologię do
                zadania, nie na odwrót. Z mierzalnym ROI w ciągu 3–6 miesięcy.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(26,115,232,0.45)] transition-[transform,box-shadow,background] hover:-translate-y-0.5 hover:bg-brand-highlight hover:shadow-[0_8px_28px_rgba(107,184,255,0.55)]"
                >
                  Umów bezpłatną weryfikację
                  <ArrowRight className="size-4" aria-hidden />
                </a>
                <a
                  href="#jak-dzialamy"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/18 px-6 py-3 text-sm font-medium text-white/70 transition-[transform,color,background,border-color] hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/5 hover:text-white/90"
                >
                  Zobacz jak działamy
                  <ChevronDown className="size-4" aria-hidden />
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {stats.map(({ value, label }) => (
                  <div
                    key={value}
                    className="rounded-xl border border-white/12 bg-white/6 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="font-bricolage text-[32px] font-extrabold leading-none text-brand-highlight">
                      {value}
                    </p>
                    <p className="mt-2 text-sm leading-snug text-white/55">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      <div className="border-t border-white/8 bg-[#060c18] px-6 py-2 text-center text-[13px] leading-relaxed">
        <p className="mx-auto max-w-3xl text-white/60">
          Zaufały nam firmy z branży rekrutacyjnej, usług B2B i produkcji w
          Polsce i Wielkiej Brytanii
        </p>
      </div>
    </>
  )
}
