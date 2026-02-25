import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'

/*
  A badge component used on the Research page. It extracts the first character
  of a theme title and places it inside a coloured circle.
*/
function ResearchBadge({ title, colour }) {
  const initial = title?.trim()?.charAt(0) || '•'
  return (
    <div
      className={`${colour} h-10 w-10 flex items-center justify-center rounded-full text-emerald-800 font-semibold text-md shadow`}
    >
      {initial}
    </div>
  )
}

function getPIByName(name) {
  const people = [DATA?.lab?.director, ...(DATA?.lab?.pis || [])].filter(Boolean)
  return people.find((p) => p.name === name)
}

export default function Research() {
  const themes = DATA.researchThemes || []

  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 pb-12 space-y-10 animate-fadeIn">
      <SectionTitle
        title="Research"
        subtitle="Research themes led by our principal investigators."
      />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {themes.map((t, i) => {
          const colours = ['bg-teal-100/50', 'bg-emerald-100/50', 'bg-lime-100/50']
          const colour = colours[i % colours.length]
          const pi = getPIByName(t.pi)
          return (
            <div
              key={`${t.pi}-${t.theme}`}
              className="flex flex-col rounded-3xl border border-emerald-100 bg-white/80 backdrop-blur-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
            >
              <div className="flex items-center gap-3 mb-4">
                <ResearchBadge title={t.theme} colour={colour} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">{t.theme}</h3>
                  <p className="text-sm text-gray-500">PI: {t.pi}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed flex-1">{t.desc}</p>

              {pi && (
                <div className="mt-6 pt-5 border-t border-emerald-100 flex items-center gap-4">
                  <img
                    src={pi.img}
                    alt={pi.name}
                    className="h-14 w-14 rounded-2xl object-cover border-2 border-emerald-100 ring-1 ring-emerald-200"
                  />
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-gray-500">Principal Investigator</p>
                    {pi.webpage ? (
                      <a
                        href={pi.webpage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-800 hover:underline font-semibold"
                      >
                        {pi.name}
                      </a>
                    ) : (
                      <p className="text-gray-900 font-semibold">{pi.name}</p>
                    )}
                    {pi.affiliation && (
                      <p className="text-sm text-gray-600 truncate">{pi.affiliation}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {themes.length === 0 && (
        <p className="text-gray-700">Research themes will be added soon.</p>
      )}
    </section>
  )
}
