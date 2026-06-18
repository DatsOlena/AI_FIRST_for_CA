import { ArrowRight, Play } from 'lucide-react'

export default function FounderVideo() {
  return (
    <section className="bg-[#EEF2FF] px-6 py-10 lg:py-14">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
          Słowo od założyciela
        </p>

        <h2 className="font-bricolage text-3xl font-extrabold leading-tight text-gray-900 lg:text-[2.25rem]">
          Posłuchaj, jak podchodzimy do wdrożeń
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:text-lg">
          Krótka rozmowa o tym, co AI First znaczy w praktyce — i dlaczego to
          działa dla firm, które chcą rosnąć bez proporcjonalnego wzrostu
          kosztów.
        </p>

        {/* 16:9 placeholder — replace with Vimeo/YouTube iframe when ready */}
        <button
          type="button"
          className="group relative mx-auto mt-10 block w-full max-w-[760px] overflow-hidden rounded-lg bg-gray-900 text-left shadow-md"
          aria-label="Odtwórz wideo — słowo od założyciela"
        >
          <div className="aspect-video w-full bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="flex h-full items-center justify-center">
              <span className="relative flex size-16 items-center justify-center rounded-full bg-white/95 text-[#1A73E8] shadow-lg transition-transform group-hover:scale-105">
                <span
                  className="absolute inset-0 animate-ping rounded-full bg-white/30"
                  aria-hidden
                />
                <Play className="relative ml-1 size-7 fill-current" aria-hidden />
              </span>
            </div>
          </div>
          <p className="absolute bottom-3 left-0 right-0 text-center text-xs text-white/50">
            Wideo wkrótce · 16:9 · 60–90 s
          </p>
        </button>

        <p className="mx-auto mt-8 max-w-xl text-[15px] leading-[1.7] text-gray-600">
          Cześć, nazywam się Marcel Galan. Przez ostatnie lata wdrażałem
          rozwiązania AI dla firm usługowych i produkcyjnych w Polsce i Wielkiej
          Brytanii. Jeśli zastanawiasz się, czy AI może działać w Twojej firmie
          — zapraszam na bezpłatną 30-minutową weryfikację.
        </p>

        <a
          href="#kontakt"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#1A73E8] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1558b8]"
        >
          Umów bezpłatną rozmowę
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  )
}
