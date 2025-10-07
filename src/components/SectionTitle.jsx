export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="space-y-2">
      {/*
        A subtle accent bar on the left draws the eye to the section title and
        reinforces the brand colour.  The padding ensures the bar doesn’t
        overlap the text.
      */}
      <div className="flex items-start">
        <div className="mt-1 mr-3 h-6 w-1.5 rounded bg-emerald-500"></div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-800">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-gray-600 max-w-3xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
