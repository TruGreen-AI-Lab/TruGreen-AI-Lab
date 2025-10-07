import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/lab-logo.png'
export default function Nav() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/people', label: 'People' },
    { to: '/research', label: 'Research' },
    { to: '/news', label: 'News' },
    { to: '/publications', label: 'Publications' },
    { to: '/positions', label: 'Positions' },
  ]
  return (
    <header
      className="sticky top-0 z-50 border-b border-emerald-200 bg-white/80
                 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/70"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-6">
        {/*
          Logo and site title.  The SVG has been preserved from the original
          design but padded slightly to breathe.  You could replace this
          markup with an inline image or another SVG if a bespoke mark is
          available.
        */}
        <Link to="/" className="flex items-center gap-3">
          {/* Animated logo image */}
          <img
            src={logo}
            alt="TrueGreen AI Lab logo"
            className="h-8 w-auto animate-spin-slow"
          />
          <span className="font-semibold text-lg tracking-tight text-gray-900">
            TruGreen AI Lab
          </span>
        </Link>
        {/* Primary navigation */}
        <nav className="ml-auto flex flex-wrap items-center gap-2 text-sm uppercase tracking-wide font-medium">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                [
                  'px-3 py-2 rounded-md transition-colors',
                  isActive
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'hover:bg-emerald-50 hover:text-emerald-700',
                ].join(' ')
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
