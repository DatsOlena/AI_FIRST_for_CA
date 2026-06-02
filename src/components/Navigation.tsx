import logo from '../assets/MGMC_logo_vertical.png'
import CAlogo from '../assets/CloudAutomate-logo.png'



export default function Navigation() {
  return (
    <nav className='flex justify-between items-center p-2 max-w-7xl mx-auto'>
      <div className="flex items-center gap-2">
        <div className="border-r-2 p-3">
          <a href="https://mgmconsulting.pl/">
            <img src={logo} alt="logo" className='h-11 ' />
          </a>
        </div>
        <div>
          <span className="text-lg font-bold">AI FIRST</span>
          <br />
          <span className="text-sm text-gray-500">by <img src={CAlogo} alt="Cloud Automate" className='h-3 inline-block' /></span>
        </div>
      </div>
      <ul className='flex gap-4'>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/o-nas">O nas</a>
        </li>
        <li>
          <a href="/uslugi">Usługi</a>
        </li>
        <li>
          <a href="/jak-dzialamy">Jak działamy</a>
        </li>
        <li>
          <a href="/case-studies">Case studies</a>
        </li>
        <li>
          <a href="/zespol">Zespół</a>
        </li>
        <li>
          <a href="/kontakt">Kontakt</a>
        </li>
      </ul>
      <button>Kontakt</button>
    </nav>
  )
}