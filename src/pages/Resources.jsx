import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'
export default function Resources() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle title="Resources" subtitle="Links to things we maintain or recommend." />
      <div className="mt-6 flex flex-wrap gap-3">
        {DATA.resources.map(r => (
          <a key={r.label} href={r.url} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:bg-gray-50">
            <span>{r.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
