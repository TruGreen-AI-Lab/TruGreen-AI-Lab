import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'
export default function Publications() {
  return (
    <section className="bg-gray-50/60 border-y">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle title="Publications" subtitle="Selected recent papers; more to come." />
        <div className="mt-6">
          {DATA.publications.map((p, i) => (
            <div key={i} className="py-4 border-b last:border-none">
              <div className="text-sm text-gray-500">{p.year}</div>
              <div className="font-medium">
                {p.link ? <a href={p.link} className="hover:underline">{p.title}</a> : p.title}
              </div>
              <div className="text-gray-600">{p.authors}</div>
              <div className="text-gray-600 text-sm">{p.venue}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
