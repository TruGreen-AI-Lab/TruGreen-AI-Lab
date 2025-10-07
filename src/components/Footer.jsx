export default function Footer() {
  return (
    <footer className="border-t bg-gray-50/60">
      <div
        className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row
                   items-center justify-between gap-4 text-sm text-gray-600"
      >
        {/*
          Dynamic copyright notice – always shows the current year.
        */}
        <div>
          © {new Date().getFullYear()} TruGreen AI Lab. University of Exeter.
        </div>
        <div className="flex items-center gap-4">
          <a href="#/" className="hover:text-emerald-700 transition-colors">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
