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
          Integrate the research areas directly into the homepage.  Visitors
          scrolling down from the hero can immediately learn about the lab’s
          focus without navigating to a separate About page.  The coloured
          cards reuse the same palette from the former About page.
        */}
        <div className="mt-24 space-y-8">
          <SectionTitle
            title="Research Areas"
            subtitle="We study methods that make AI systems reliable, efficient and sustainable, and translate them into impact with partners in science, health and the environment."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DATA.researchAreas.map((a, i) => {
              const colours = ['bg-emerald-50', 'bg-teal-50', 'bg-lime-50', 'bg-green-50']
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
        </div>
      </div>
    </section>
  )
}
