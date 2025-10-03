export default function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-800">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-600 max-w-3xl">{subtitle}</p>}
    </div>
  )
}
