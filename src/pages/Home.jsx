import { Link } from 'react-router-dom'
import { DATA } from '../data'
import homeBg from '../assets/home-bg.png'
import wordmark from '../assets/wordmark.png'

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/*
        The full‑bleed background image establishes an immediate sense of
        identity for the lab.  A dark overlay ensures that the white
        typography remains readable even against a busy background.
      */}
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 -z-0 bg-emerald-950/40" />
      <div className="mx-auto max-w-7xl px-4 py-24 md:py-32 text-white">
        <div className="max-w-2xl space-y-6">
          {/* Use the supplied wordmark instead of plain text for the lab name */}
          <img
            src={wordmark}
            alt="TrueGreen AI Lab wordmark"
            className="w-full max-w-xs md:max-w-md"
          />
          <p className="text-xl md:text-2xl leading-relaxed max-w-prose text-emerald-100">
            {DATA.lab.tagline}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/positions"
              className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white
                         font-medium shadow-md hover:bg-emerald-700 transition-colors"
            >
              Join us
            </Link>
            <Link
              to="/research"
              className="inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-white
                         font-medium backdrop-blur-md border border-white/30 hover:bg-white/30 transition-colors"
            >
              Our research
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
