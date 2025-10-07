import { Link } from 'react-router-dom'
import { DATA } from '../data'
import SectionTitle from '../components/SectionTitle'
// Use a light, eco‑inspired illustration for the hero instead of the dark
// background previously used.  This subtle pattern of circuit lines and
// leaves feels airy and professional while still nodding to the lab’s
// mission.  See src/assets/home-light-bg.png for details.
import homeBg from '../assets/home-light-bg.png'

export default function Home() {
  return (
    <section className="relative overflow-hidden animate-fadeIn">
      {/*
        A light, full‑bleed illustration sets the tone for the homepage.  The
        pastel greens and subtle circuitry reflect our focus on eco‑friendly
        AI without overpowering the content.  No dark overlay is required
        thanks to the high contrast between the background and the text.
      */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="mx-auto max-w-7xl px-4 py-24 md:py-32 text-gray-800">
        <div className="max-w-3xl space-y-8">
          {/* Site name replaces the previous logo image for a cleaner feel on a light background */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-700">
            TruGreen AI Lab
          </h1>
          {/* Tagline emphasises key concepts in varying shades of emerald.  Spans are
              broken across lines to improve readability on small screens. */}
          <p className="text-xl md:text-2xl leading-relaxed max-w-prose">
            <span className="block">
              <span className="text-emerald-600 font-semibold">Trustworthy</span>,
              <span className="text-emerald-700 font-semibold"> Green</span>,
              <span className="text-emerald-800 font-semibold"> Efficient&nbsp;AI</span>
            </span>
            <span className="block mt-1">
              for <span className="font-semibold text-emerald-600">Real‑World Impact</span>
            </span>
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/positions"
              className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white
                         font-medium shadow-md hover:bg-emerald-700 transition-colors"
            >
              Join us
            </Link>
            <Link
              to="/research"
              className="inline-flex items-center rounded-full bg-emerald-50 px-6 py-3 text-emerald-700
                         font-medium border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              Our research
            </Link>
          </div>
        </div>
        {/*
          Provide only a teaser of our research on the homepage to avoid
          duplicating the detailed descriptions found on the Research page.
          Visitors see the core themes at a glance and can follow the link
          below to learn more.
        */}
        <div className="mt-24 space-y-6">
          <SectionTitle
            title="Research"
            subtitle="Core themes connecting methods, systems and applications."
          />
          <div className="flex flex-wrap gap-3">
            {DATA.researchAreas.map((a, i) => {
              const colours = ['bg-emerald-50', 'bg-teal-50', 'bg-lime-50', 'bg-green-50']
              const colour = colours[i % colours.length]
              return (
                <span
                  key={a.title}
                  className={[colour, 'px-4 py-2 rounded-full text-emerald-800 text-sm font-medium border border-emerald-100'].join(' ')}
                >
                  {a.title}
                </span>
              )
            })}
          </div>
          <div className="pt-4">
            <Link
              to="/research"
              className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white
                         font-medium shadow-md hover:bg-emerald-700 transition-colors"
            >
              Explore our research
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
