import SectionTitle from '../components/SectionTitle'
import { DATA } from '../data'

/**
 * A simple page advertising our CSC PhD scholarship.  It contains a headline
 * with both Chinese and English text to make it clear who we are seeking.
 * Below the heading is a call‑to‑action button which links to a PDF
 * describing the project proposal.  The file is served from the public
 * folder at the root of the site so that Vite will copy it to the build
 * output untouched.  The button uses a full‑width rounded style on small
 * screens and collapses down to its natural size on larger screens.
 */
export default function CscPhd() {
  // Read the list of proposals from the data file.  If none are defined
  // this will default to an empty array and the proposals section will be
  // omitted.
  const proposals = DATA.cscProposals ?? []
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 pb-12 space-y-8 animate-fadeIn">
      <SectionTitle
        title="中国国家留学基金委和英国埃克塞特大学合作奖学金（博士生项目）招生中"
        subtitle="We are recruiting for CSC-funded full PhD studentships for TurGeen AI Lab"
      />
      {/* CSC-Exeter website link */}
      <div>
        <a
          href="https://www.exeter.ac.uk/study/pg-research/csc-scholarships/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-3xl bg-emerald-600 text-white px-6 py-3 font-semibold shadow hover:bg-emerald-700 transition"
        >
          CSC-Exeter offical website
        </a>
      </div>
      {/* Render a list of proposals if provided.  Each proposal is shown as
          a card-like button with its title.  Clicking it downloads the
          corresponding PDF from the public folder. */}
      <p className="text-lg text-gray-700">
        我们欢迎来自计算机科学、人工智能、数据科学和网络安全等各个领域的申请者。<br /><br />
        申请者可以通过两种方式申请：提交您自己的研究计划，或选择以下已提供的研究项目之一。<br /><br />
        <strong>自行制定研究计划：</strong> 我们强烈鼓励并欢迎您提交自己的研究计划（详见“CSC-Exeter offical website 如何申请”部分）。<br />
        <strong>查看现有项目列表：</strong> 详见以下项目列表。
        有意向的同学请联系项目指导老师。
      </p>
      {proposals.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {proposals.map((p) => (
            <a
              key={p.title}
              href={`${p.file}`}
              download
              className="flex items-center justify-between gap-4 rounded-3xl border border-emerald-100 bg-white/80 backdrop-blur-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
            >
              <span className="text-emerald-800 font-medium text-base">
                {p.title}
              </span>
              {Array.isArray(p.supervisors) && p.supervisors.length > 0 && (
                <span className="block text-sm text-gray-600">
                  Supervisors: {p.supervisors.join(', ')}
                </span>
              )}
              <svg
                className="h-6 w-6 text-emerald-600 group-hover:translate-x-1 transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}