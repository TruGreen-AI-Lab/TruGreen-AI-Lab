import { Link } from 'react-router-dom'
import { DATA } from '../data'
import heroBg from '../assets/hero-bg.png'

export default function Home() {
  return (
    <section className="relative overflow-hidden text-white">
      {/*
        The full‑bleed background image establishes an immediate sense of
        identity for the lab.  A dark overlay ensures that the white
        typography remains readable even against a busy background.
      */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 -z-0 bg-emerald-950/60" />
      <div className="mx-auto max-w-7xl px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            TruGreen AI Lab
          </h1>
          <p className="mt-4 text-lg md:text-xl text-emerald-100 max-w-prose">
            {DATA.lab.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white
                         font-medium shadow-md hover:bg-emerald-700 transition-colors"
            >
              Get in touch
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
