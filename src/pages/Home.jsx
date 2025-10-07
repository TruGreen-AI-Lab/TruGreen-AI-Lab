import { Link } from 'react-router-dom'
import { DATA } from '../data'
import homeBg from '../assets/home-bg.png'
import logo from '../assets/lab-logo.png'

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
      {/* Dark overlay for contrast – slightly lighter to reveal more of the background */}
      <div className="absolute inset-0 -z-0 bg-emerald-900/30" />
      <div className="mx-auto max-w-7xl px-4 py-24 md:py-32 text-white">
        <div className="max-w-3xl space-y-8">
          {/* Use the supplied logo instead of plain text for the lab name */}
          <img
            src={logo}
            alt="TrueGreen AI Lab logo"
            className="w-full max-w-md md:max-w-lg"
          />
          <p className="text-2xl md:text-3xl leading-relaxed max-w-prose text-emerald-50">
            {DATA.lab.tagline}
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
