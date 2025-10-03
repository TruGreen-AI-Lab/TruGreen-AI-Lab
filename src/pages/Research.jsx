import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'
export default function Research() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 space-y-6">
      <SectionTitle title="Research" subtitle="Core themes that connect methods, systems, and applications." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DATA.researchAreas.map(a => (
          <div key={a.title} className="rounded-3xl border p-6 hover:shadow-sm transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900">{a.title}</h3>
            <p className="mt-2 text-gray-600">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
