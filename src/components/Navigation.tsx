import { useState } from 'react'

import logo from '../assets/MGMC_logo_vertical.png'
import CAlogo from '../assets/CloudAutomate-logo.png'
import { ChevronDown } from 'lucide-react'

import { Button } from './ui/button'

const navigationItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'O nas',
    href: '/o-nas'
  },
  {
    label: 'Usługi',
    href: '/uslugi'
  },
  {
    label: 'Jak działamy',
    href: '/jak-dzialamy'
  },
  {
    label: 'Case studies',
    href: '/case-studies'
  },
  {
    label: 'Zespół',
    href: '/zespol'
  },
]


export default function Navigation() {

  const [activeItem, setActiveItem] = useState(null)

  return (
    <nav className='flex justify-between items-center p-2 max-w-7xl mx-auto'>
      <div className="flex items-center gap-2">
        <div className="border-r-2 px-3 py-1">
          <a href="https://mgmconsulting.pl/">
            <img src={logo} alt="logo" className='w-32' />
          </a>
        </div>
        <div>
          <span className="text-lg font-bold text-gray-600">AI FIRST</span>
          <br />
          <span className="text-sm text-gray-500">by <img src={CAlogo} alt="Cloud Automate" className='h-3 inline-block' /></span>
        </div>
      </div>
      <ul className='flex gap-4'>
      {navigationItems.map((item) => (
        <li key={item.href} className='flex items-center gap-1'
        onMouseEnter={() => setActiveItem(item.href)}
        onMouseLeave={() => setActiveItem(null)}
        >
          <a href={item.href}>{item.label}</a>
          <ChevronDown className={`size-3 ${activeItem === item.href ? 'rotate-180 text-blue-600 translate-y-1 duration-300' : ''}  text-grey-600`} />
        </li>
      ))}
      </ul>
      <Button variant="outline" size="lg" className=''>Kontakt</Button>
    </nav>
  )
}