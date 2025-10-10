import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'

/*
  A simple badge component used on the Research page.  It extracts the first
  character of a research area’s title and places it inside a coloured
  circle.  The colour is determined by the caller to ensure a varied but
  coordinated palette across the grid.  The badge provides a quick visual
  identifier for each theme without relying on external icon libraries.
*/
function ResearchBadge({ title, colour }) {
  const initial = title.charAt(0)
  return (
    <div
      className={`${colour} h-10 w-10 flex items-center justify-center rounded-full text-emerald-800 font-semibold text-md shadow`}
    >
      {initial}
    </div>
  )
}

export default function Research() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 pb-12 space-y-10 animate-fadeIn">
      <SectionTitle
        title="Research"
        subtitle="Core themes connecting methods, systems and applications."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {DATA.researchAreas.map((a, i) => {
          // pick from a pastel palette to give each card a distinct but harmonious colour
          const colours = [
            'bg-teal-100/50',
            'bg-emerald-100/50',
            'bg-lime-100/50',
            'bg-green-100/50',
          ]
          const colour = colours[i % colours.length]
          return (
            <div
              key={a.title}
              className="flex flex-col rounded-3xl border border-emerald-100 bg-white/80 backdrop-blur-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
            >
              <div className="flex items-center gap-3 mb-4">
                <ResearchBadge title={a.title} colour={colour} />
                <h3 className="text-lg font-semibold text-gray-900">{a.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed flex-1">{a.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
