import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'
export default function Resources() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle
        title="Resources"
        subtitle="Links to things we maintain or recommend."
      />
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DATA.resources.map((r) => (
          <a
            key={r.label}
            href={r.url}
            className="group flex items-center justify-between gap-4
                       rounded-3xl bg-white/80 border border-emerald-100 px-5 py-4
                       shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
          >
            <span className="font-medium text-gray-900">{r.label}</span>
            {/* simple right arrow icon */}
            <svg
              className="h-5 w-5 text-emerald-600 group-hover:translate-x-1 transition-transform"
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
    </section>
  )
}
