import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import logo from '../assets/MGMC_logo_vertical.png'
import CAlogo from '../assets/CloudAutomate-logo.png'

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'Usługi', href: '/uslugi' },
  { label: 'Jak działamy', href: '/jak-dzialamy' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Zespół', href: '/zespol' },
] as const

export default function Navigation() {
  const [activeItem, setActiveItem] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <div className="flex min-w-0 items-center gap-4">
          <div className="shrink-0 border-r border-[#E5E7EB] pr-4">
            <a href="https://mgmconsulting.pl/" aria-label="MGM Consulting">
              <img src={logo} alt="MGM Consulting" className="h-10 w-auto" />
            </a>
          </div>
          <div className="min-w-0 leading-tight">
            <span className="block text-base font-bold text-gray-800">
              AI FIRST
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              by
              <img
                src={CAlogo}
                alt="Cloud Automate"
                className="inline-block h-3 w-auto"
              />
            </span>
          </div>
        </div>

        <ul className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <li
              key={item.href}
              onMouseEnter={() => setActiveItem(item.href)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-[#EEF2FF] hover:text-[#1A73E8]"
              >
                {item.label}
                <ChevronDown
                  className={`size-3.5 transition-all duration-200 ${
                    activeItem === item.href
                      ? 'translate-y-0.5 text-[#1A73E8]'
                      : 'text-gray-400'
                  }`}
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="shrink-0 rounded-md bg-[#1A73E8] px-4 py-2 text-sm font-medium text-white hover:bg-[#1558b8]"
        >
          Kontakt
        </a>
      </nav>
    </header>
  )
}
