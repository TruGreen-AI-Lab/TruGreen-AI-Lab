import { Link, NavLink } from 'react-router-dom'
export default function Nav() {
  // Omit the About link since its content now lives on the home page.  The
  // navigation remains concise, pointing visitors to key sections like
  // People, Research, News, Publications and Positions.
  const links = [
    { to: '/csc-phd', label: '🔥2025-26 CSC 博士奖学金招生中' },
    { to: '/', label: 'Home' },
    { to: '/people', label: 'People' },
    { to: '/research', label: 'Research' },
    { to: '/news', label: 'News' },
    { to: '/publications', label: 'Publications' },
    { to: '/positions', label: 'Positions' },
    // Expose the CSC PhD scholarship page in the navigation.  Keep the
    // label short to preserve horizontal space; the full bilingual title
    // appears on the page itself.
    
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
          {/* Use a simple typographic mark for the lab name instead of an image.  */}
          <span className="font-semibold text-lg tracking-tight text-emerald-700">
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
