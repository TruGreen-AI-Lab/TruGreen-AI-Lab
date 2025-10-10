import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'
export default function News() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 pb-12 animate-fadeIn">
      <SectionTitle title="News" subtitle="Highlights and announcements." />
      {/*
        Render a vertical list of news items.  Each item uses a subtle
        left‑aligned marker circle and a gradient background to evoke a
        timeline.  Spacing, borders and shadows create separation between
        entries while maintaining a cohesive feel across the list.
      */}
      <ul className="mt-10 space-y-6">
        {DATA.news.map((n, i) => (
          <li
            key={i}
            // The list item no longer uses a card-like background.  We keep
            // the relative positioning for the timeline marker and a simple
            // horizontal gap between the marker and the content.  All
            // decorations (border, shadow, gradient) have been removed to
            // create a cleaner timeline appearance.
            className="relative flex gap-4"
          >
            {/* timeline marker */}
            <div className="flex flex-col items-center">
              <span className="h-3 w-3 mt-2 rounded-full bg-emerald-500"></span>
              {i !== DATA.news.length - 1 && (
                <span className="flex-1 w-px bg-emerald-100 mt-1"></span>
              )}
            </div>
            {/* content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-100 rounded px-2 py-1"
                >
                  {n.date}
                </span>
                {n.url ? (
                  <a
                    href={n.url}
                    className="font-medium text-blue-600 hover:underline text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {n.title}
                  </a>
                ) : (
                  <span className="font-medium text-gray-900 text-base">
                    {n.title}
                  </span>
                )}
              </div>
              <p className="mt-2 text-gray-700 leading-relaxed">
                {n.highlight ? (
                  // split the detail by the highlight and interleave the highlighted text
                  n.detail
                    .split(n.highlight)
                    .map((part, idx, arr) => {
                      if (idx < arr.length - 1) {
                        return (
                          <span key={idx}>
                            {part}
                            <span className="text-red-600 font-semibold">
                              {n.highlight}
                            </span>
                          </span>
                        )
                      }
                      return part
                    })
                ) : (
                  n.detail
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
