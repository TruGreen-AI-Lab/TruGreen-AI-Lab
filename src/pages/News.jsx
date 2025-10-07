import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'
export default function News() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 animate-fadeIn">
      <SectionTitle title="News" subtitle="Highlights and announcements." />
      <ul className="mt-8 space-y-5">
        {DATA.news.map((n, i) => (
          <li
            key={i}
            className="relative rounded-3xl bg-white/70 border border-emerald-100 p-5
                       shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
          >
            <div className="flex items-center gap-4">
              <span
                className="text-xs font-mono bg-emerald-50 text-emerald-700
                           border border-emerald-100 rounded px-2 py-1"
              >
                {n.date}
              </span>
              <span className="font-medium text-gray-900">{n.title}</span>
            </div>
            <p className="mt-2 text-gray-700 leading-relaxed">{n.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
