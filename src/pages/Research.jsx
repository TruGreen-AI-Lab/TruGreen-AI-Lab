import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'
export default function Research() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 space-y-8 animate-fadeIn">
      <SectionTitle
        title="Research"
        subtitle="Core themes connecting methods, systems and applications."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DATA.researchAreas.map((a, i) => {
          const colours = ['bg-teal-50', 'bg-emerald-50', 'bg-lime-50', 'bg-green-50']
          const colour = colours[i % colours.length]
          return (
            <div
              key={a.title}
              className={[
                colour,
                'rounded-3xl border border-emerald-100 p-6 shadow-sm',
                'hover:shadow-md transition-shadow duration-200 ease-in-out',
              ].join(' ')}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {a.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{a.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
