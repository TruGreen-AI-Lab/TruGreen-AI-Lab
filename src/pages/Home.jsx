import { Link } from 'react-router-dom'
import { DATA } from '../data'
export default function Home() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">TruGreen AI Lab</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-prose">{DATA.lab.tagline}</p>
          <div className="mt-6 flex gap-3">
            <Link to="/contact" className="inline-flex items-center rounded-2xl border border-emerald-600 px-4 py-2 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors">Get in touch</Link>
            <Link to="/research" className="inline-flex items-center rounded-2xl border px-4 py-2 hover:bg-gray-50">Our research</Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-emerald-100/60 border border-emerald-200 shadow-inner flex items-center justify-center">
            <span className="text-emerald-700 font-medium">Add a hero image or wordmark here</span>
          </div>
        </div>
      </div>
    </section>
  )
}
