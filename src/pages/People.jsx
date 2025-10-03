import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'
export default function People() {
  const allPIs = [DATA.lab.director, ...DATA.lab.pis]
  return (
    <section className="bg-gray-50/60 border-y">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle title="People" subtitle="Principal Investigators based at the University of Exeter." />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPIs.map((p) => (
            <div key={p.name} className="rounded-3xl bg-white border p-6">
              <div className="flex items-center gap-4">
                <img src={p.img} alt={p.name} className="h-16 w-16 rounded-2xl object-cover border"/>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {p.name}
                    {p.name === DATA.lab.director.name && (
                      <span className="ml-2 inline-flex items-center text-xs font-medium text-emerald-700 bg-emerald-100 border border-emerald-200 rounded-full px-2 py-0.5">Director</span>
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm">{p.role}</p>
                  <p className="text-gray-600 text-sm">{p.affiliation}</p>
                </div>
              </div>
              {p.email && (
                <a href={`mailto:${p.email}`} className="mt-4 inline-flex text-sm text-emerald-700 hover:underline">{p.email}</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
