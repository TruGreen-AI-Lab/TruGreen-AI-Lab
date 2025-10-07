import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'
export default function Contact() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle
          title="Contact"
          subtitle="Collaborators and prospective students are welcome to reach out."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div
            className="rounded-3xl bg-white/80 border border-emerald-100 p-6
                       shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
          >
            <div className="flex items-center gap-3 mb-3">
              <svg
                className="h-6 w-6 text-emerald-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="font-semibold text-gray-900">Email</h3>
            </div>
            <a
              href={`mailto:${DATA.lab.contacts.email}`}
              className="text-emerald-700 hover:underline break-all"
            >
              {DATA.lab.contacts.email}
            </a>
          </div>
          {/* Address Card */}
          <div
            className="rounded-3xl bg-white/80 border border-emerald-100 p-6
                       shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
          >
            <div className="flex items-center gap-3 mb-3">
              <svg
                className="h-6 w-6 text-emerald-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  d="M12 11a4 4 0 100-8 4 4 0 000 8z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22s8-7.5 8-11a8 8 0 10-16 0c0 3.5 8 11 8 11z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="font-semibold text-gray-900">Address</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {DATA.lab.contacts.address}
            </p>
          </div>
          {/* Social Card */}
          <div
            className="rounded-3xl bg-white/80 border border-emerald-100 p-6
                       shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
          >
            <div className="flex items-center gap-3 mb-3">
              <svg
                className="h-6 w-6 text-emerald-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  d="M17 8a3 3 0 11-6 0 3 3 0 016 0zM21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="font-semibold text-gray-900">Social</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <a className="text-emerald-700 hover:underline" href={DATA.lab.contacts.twitter}>
                X / Twitter
              </a>
              <a className="text-emerald-700 hover:underline" href={DATA.lab.contacts.github}>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
