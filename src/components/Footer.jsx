export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600">
        <div>© {new Date().getFullYear()} TruGreen AI Lab. University of Exeter.</div>
        <div className="flex items-center gap-4">
          <a href="#/" className="hover:underline">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
