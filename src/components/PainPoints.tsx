import Card from './ui/card'
import icon1 from '../assets/icons/icon1.png'
import icon2 from '../assets/icons/icon2.png'
import icon3 from '../assets/icons/icon3.png'
import icon4 from '../assets/icons/icon4.png'
import icon5 from '../assets/icons/icon5.png'
import icon6 from '../assets/icons/icon6.png'

const painPoints = [
  {
    id: 1,
    title: 'Rekruterzy przesiewają setki CV ręcznie',
    text: 'Każda rola to 8–14 godzin manualnego screeningu, formatowania profili i wysyłania tych samych e-maili. Czas, który mógłby iść na relacje z klientem.',
    icon: icon1,
    accentColor: '#1A73E8',
    isNew: false,
  },
  {
    id: 2,
    title: 'Działy sprzedaży tonią w zapytaniach ofertowych',
    text: 'Wycena jednego RFQ zajmuje 20–45 minut. Przy 30 zapytaniach dziennie — to pełen etat. A odpowiedzi i tak wychodzą z opóźnieniem.',
    icon: icon2,
    accentColor: '#0ABFA3',
    isNew: false,
  },
  {
    id: 3,
    title: 'Dokumenty i umowy — wciąż robione ręcznie',
    text: 'Tworzenie pakietów dokumentacyjnych, formatowanie ofert, wysyłanie potwierdzeń — powtarzalne zadania, które zajmują ludzi, którzy powinni robić coś ważniejszego.',
    icon: icon3,
    accentColor: '#8B5CF6',
    isNew: false,
  },
  {
    id: 4,
    title: 'Sprzedawcy nie dają rady obsłużyć wszystkich kontaktów',
    text: 'Leady wpadają — przez telefon, e-mail, formularze, WhatsApp — a handlowcy fizycznie nie nadążają z follow-upami. Bez integracji CRM z asystentem głosowym AI każda nieodebrana rozmowa to potencjalnie stracona szansa. Część klientów po prostu odpada w ciszy.',
    icon: icon4,
    accentColor: '#F59E0B',
    isNew: true,
  },
  {
    id: 5,
    title: 'Doradcy i prawnicy tworzą te same dokumenty od zera',
    text: 'Umowy, listy motywacyjne, regulaminy, podsumowania analiz — każdy dokument zaczyna się od białej kartki, choć 80% treści jest identyczna jak poprzednim razem. Godziny pracy eksperta na kopiowaniu szablonów zamiast na merytoryce.',
    icon: icon5,
    accentColor: '#EF4444',
    isNew: true,
  },
  {
    id: 6,
    title: 'Zarząd podejmuje decyzje bez danych — albo czeka tydzień na raport',
    text: 'Dane są rozproszone w pięciu systemach: CRM mówi jedno, ERP drugie, arkusze trzecie. Raport dla zarządu to kilka godzin pracy analityka — i zanim jest gotowy, jest już nieaktualny. Decyzje zapadają wówczas w oparciu o intuicję, nie dane.',
    icon: icon6,
    accentColor: '#10B981',
    isNew: true,
  },
] as const

export default function PainPoints() {
  return (
    <section className="bg-white px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="mb-4 inline-flex items-center rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue">
            Czy to brzmi znajomo?
          </p>

          <h2 className="font-bricolage text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight tracking-[-0.5px] text-gray-900">
            Twój zespół traci godziny na zadania, które{' '}
            <span className="text-brand-blue">AI robi w minutach</span>.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 lg:text-lg">
            Praca powtarzalna. Wysoka, ale ukryta. Rekruterzy, handlowcy,
            project managerowie — wszyscy mają za dużo na głowie.
          </p>
        </header>

        <div className="overflow-hidden rounded-[20px] border border-[#E5E7EB]">
          <div className="grid grid-cols-1 divide-y divide-[#E5E7EB] md:grid-cols-2 md:divide-x md:divide-y lg:grid-cols-3">
            {painPoints.map((painPoint) => (
              <Card
                key={painPoint.id}
                id={painPoint.id}
                title={painPoint.title}
                text={painPoint.text}
                icon={painPoint.icon}
                accentColor={painPoint.accentColor}
                isNew={painPoint.isNew}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
