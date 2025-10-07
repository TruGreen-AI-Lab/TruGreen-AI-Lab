import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'
export default function People() {
  const allPIs = [DATA.lab.director, ...DATA.lab.pis]
  return (
    <section className="bg-gray-50/80 border-y">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle
          title="People"
          subtitle="Principal investigators based at the University of Exeter."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPIs.map((p) => (
            <div
              key={p.name}
              className="rounded-3xl bg-white/80 border border-emerald-100 backdrop-blur-md p-6
                         shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
            >
              <div className="flex items-center gap-4">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-16 w-16 rounded-2xl object-cover border border-emerald-100"
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
                  className="mt-4 inline-flex items-center text-sm text-emerald-700 hover:underline"
                >
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
