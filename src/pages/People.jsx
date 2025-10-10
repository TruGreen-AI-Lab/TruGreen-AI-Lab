import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'
/**
 * A small envelope icon used on the People page to denote email addresses.  The
 * viewBox and stroke settings mirror those of Heroicons to ensure the
 * illustration feels cohesive with the overall design without requiring any
 * external dependencies.  The icon is defined inline so that it can be
 * referenced directly within the JSX without additional imports.
 */
const EnvelopeIcon = ({ className = '' }) => (
  <svg
    className={`h-4 w-4 mr-1 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.662a2.25 2.25 0 01-1.013 1.884l-6.75 4.5a2.25 2.25 0 01-2.474 0l-6.75-4.5A2.25 2.25 0 013 7.412V6.75"
    />
  </svg>
)

export default function People() {
  const allPIs = [DATA.lab.director, ...DATA.lab.pis]
  return (
    <section className="bg-gradient-to-b from-gray-50/80 to-white border-y animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12">
        <SectionTitle
          title="People"
          subtitle="Principal investigators based at the University of Exeter."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allPIs.map((p) => (
            <div
              key={p.name}
              className="rounded-3xl bg-gradient-to-br from-white/70 via-emerald-50/40 to-white/70 border border-emerald-100 backdrop-blur-md p-6
                         shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in-out"
            >
              <div className="flex items-center gap-4">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-16 w-16 rounded-2xl object-cover border-2 border-emerald-100 ring-1 ring-emerald-200"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center flex-wrap">
                    {p.name}
                    {p.name === DATA.lab.director.name && (
                      <span
                        className="ml-2 mt-1 inline-flex items-center text-xs font-medium text-emerald-700 bg-emerald-100 border border-emerald-200 rounded-full px-2 py-0.5"
                      >
                        Director
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm">{p.role}</p>
                  <p className="text-gray-600 text-sm">{p.affiliation}</p>
                </div>
              </div>
              {p.email && (
                <a
                  href={`mailto:${p.email}`}
                  className="mt-4 inline-flex items-center text-sm text-emerald-700 hover:underline hover:text-emerald-800"
                >
                  <EnvelopeIcon className="text-emerald-600" />
                  {p.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
