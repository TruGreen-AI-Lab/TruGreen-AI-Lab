import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'

// A simple page listing open positions.  We reuse the resources data but
// filter for items that mention "position" in their label.  If no
// positions are available the visitor is informed accordingly.
export default function Positions() {
  // Pull the curated list of positions from the data file.  Each position
  // includes a title, a short description and a URL.  If the list is
  // empty a helpful message is displayed.
  const positions = DATA.positions ?? []
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 pb-12 animate-fadeIn">
      <SectionTitle
        title="Positions"
        subtitle="Open roles and opportunities to join our team."
      />
      {positions.length > 0 ? (
        <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-3xl border border-emerald-100 bg-gradient-to-r from-white/80 via-emerald-50/40 to-white/80 px-6 py-5 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out"
            >
              <div>
                <span className="font-medium text-gray-900 text-base group-hover:text-emerald-800">
                  {p.title}
                </span>
                <p className="mt-2 text-sm text-gray-700 leading-snug">
                  {p.detail}
                </p>
              </div>
              <svg
                className="h-6 w-6 mt-4 self-end text-emerald-600 group-hover:translate-x-1 transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-gray-700">There are currently no open positions.</p>
      )}
    </section>
  )
}