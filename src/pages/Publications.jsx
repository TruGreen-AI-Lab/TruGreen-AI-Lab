import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'
export default function Publications() {
  return (
    <section className="bg-gray-50/80 border-y">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle
          title="Publications"
          subtitle="Selected recent papers; more to come."
        />
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.publications.map((p, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white/80 border border-emerald-100 p-6
                         shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
            >
              <span
                className="inline-block mb-3 text-xs font-medium rounded-full
                           bg-emerald-50 text-emerald-700 px-3 py-1"
              >
                {p.year}
              </span>
              <div className="font-semibold text-gray-900">
                {p.link ? (
                  <a href={p.link} className="hover:underline">
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </div>
              <div className="mt-1 text-sm text-gray-700">{p.authors}</div>
              <div className="text-sm text-gray-500">{p.venue}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
