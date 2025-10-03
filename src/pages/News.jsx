import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'
export default function News() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle title="News" subtitle="Highlights and announcements." />
      <ul className="mt-6 space-y-4">
        {DATA.news.map((n, i) => (
          <li key={i} className="rounded-2xl border p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono bg-gray-100 border rounded px-1.5 py-0.5">{n.date}</span>
              <span className="font-medium">{n.title}</span>
            </div>
            <p className="mt-1 text-gray-600">{n.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
