import { Link, NavLink } from 'react-router-dom'
export default function Nav() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/people', label: 'People' },
    { to: '/research', label: 'Research' },
    { to: '/news', label: 'News' },
    { to: '/publications', label: 'Publications' },
    { to: '/resources', label: 'Resources' },
    { to: '/contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/75 border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
            <path d="M12 2l2.5 4.7L20 8l-4 3.9.9 5.6L12 15.9 7.1 17.5 8 11.9 4 8l5.5-1.3L12 2z" stroke="currentColor" strokeWidth="1.3"/>
          </svg>
          <span className="font-semibold">TruGreen AI Lab</span>
        </Link>
        <nav className="ml-auto flex gap-2 text-sm">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-2 py-1 rounded transition-colors ${isActive ? 'bg-emerald-100 text-emerald-700' : 'hover:bg-emerald-50 hover:text-emerald-700'}`
              }>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
