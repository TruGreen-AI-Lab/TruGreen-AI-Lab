import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'

/*
  A minimal external link icon to visually indicate clickable publication
  titles.  The arrow shape echoes typical external link glyphs but is
  self‑contained, avoiding the need for extra dependencies.  It can be
  reused in other places if required.
*/
const ExternalLinkIcon = ({ className = '' }) => (
  <svg
    className={`h-4 w-4 ml-1 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12.97 2.47a.75.75 0 011.06 0l6.5 6.5a.75.75 0 010 1.06l-6.5 6.5a.75.75 0 11-1.06-1.06l4.72-4.72H4.5a.75.75 0 010-1.5h13.19l-4.72-4.72a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
)

export default function Publications() {
  return (
    <section className="bg-gradient-to-b from-gray-50/80 to-white border-y animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12">
        <SectionTitle
          title="Publications"
          subtitle="Selected recent papers; more to come."
        />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DATA.publications.map((p, i) => (
            <div
              key={i}
              className="flex flex-col rounded-3xl bg-gradient-to-br from-white/70 via-emerald-50/40 to-white/70 border border-emerald-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
            >
              <span
                className="inline-block mb-4 self-start text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1"
              >
                {p.year}
              </span>
              <div className="flex items-center font-semibold text-gray-900">
                {p.link ? (
                  <a href={p.link} className="hover:underline inline-flex items-center">
                    {p.title}
                    <ExternalLinkIcon className="text-emerald-600" />
                  </a>
                ) : (
                  p.title
                )}
              </div>
              <div className="mt-2 text-sm text-gray-700 italic">{p.authors}</div>
              <div className="text-sm text-gray-500">{p.venue}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
