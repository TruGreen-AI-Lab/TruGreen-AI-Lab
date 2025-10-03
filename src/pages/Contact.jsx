import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'
export default function Contact() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle title="Contact" subtitle="Collaborators and prospective students are welcome to reach out." />
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border p-6">
            <h3 className="font-semibold">Email</h3>
            <a href={`mailto:${DATA.lab.contacts.email}`} className="text-emerald-700 hover:underline">{DATA.lab.contacts.email}</a>
          </div>
          <div className="rounded-3xl border p-6">
            <h3 className="font-semibold">Address</h3>
            <p className="text-gray-600">{DATA.lab.contacts.address}</p>
          </div>
          <div className="rounded-3xl border p-6">
            <h3 className="font-semibold">Social</h3>
            <div className="flex gap-3">
              <a className="hover:underline" href={DATA.lab.contacts.twitter}>X/Twitter</a>
              <a className="hover:underline" href={DATA.lab.contacts.github}>GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
