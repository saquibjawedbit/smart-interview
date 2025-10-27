import React from 'react'
import Link from 'next/link'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="text-2xl font-semibold text-slate-800">Mocklyy</span>
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="text-slate-600 hover:text-slate-800">App</Link>
          <Link href="/landing" className="text-slate-600 hover:text-slate-800">Landing</Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-8 pb-24">
        {/* Hero - simplified with soft gradient */}
        <section className="rounded-3xl p-12 md:p-20 mt-10 bg-gradient-to-br from-indigo-50 via-white to-white shadow-lg">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Ace interviews with company-specific AI mocks</h2>
              <p className="text-lg text-slate-600 max-w-xl">Run free, personalized mock interviews created from past interview patterns. Get clear feedback and a simple action plan to improve.</p>

              <div className="flex items-center gap-4">
                <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg shadow-lg hover:from-indigo-700">Start free mock</Link>
                <a href="#features" className="text-sm text-slate-700 hover:underline">See features</a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-72 md:w-80 p-1 rounded-3xl bg-gradient-to-tr from-indigo-400 to-purple-500 shadow-lg transform hover:scale-[1.02] transition">
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold">G</div>
                      <div>
                        <div className="text-xs text-slate-500">Mock session</div>
                        <div className="text-md font-semibold text-slate-900">Google — SWE Intern</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <ScoreBadge value={85} className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-500 text-white font-semibold text-sm ring-2 ring-white" />
                    </div>
                  </div>

                  <hr className="my-3 border-slate-100" />

                  <div className="text-sm text-slate-600">
                    <div className="font-medium truncate">Q: Design a rate limiter</div>
                    <div className="mt-2 text-xs">Feedback: Add complexity analysis and clarify tradeoffs.</div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">System Design</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700">Clarify</span>
                  </div>

                  <div className="mt-4">
                    <button className="w-full px-3 py-2 rounded-md bg-indigo-600 text-white shadow-sm">Run similar mock</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-14">
          <h3 className="text-2xl font-semibold text-slate-800">Features</h3>
          <p className="mt-3 text-slate-600">Everything you need to prepare, practice and track your interview journey.</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="AI Mock Interviews" desc="Company- and profile-specific simulations with feedback from past interview patterns." tag="Free" icon="bolt" />
            <FeatureCard title="Smart Questions" desc="Curated question sets derived from real interview experiences and company signals." tag="AI" icon="question" />
            <FeatureCard title="Resume + Profile" desc="One-click tailoring of your resume and talking points for specific roles." icon="resume" />
            <FeatureCard title="Interview Tracker" desc="Log applications, stages, and outcomes. See historical trends." icon="tracker" />
            <FeatureCard title="Personalized Feedback" desc="Actionable tips and score breakdowns after each mock interview." icon="feedback" />
            <FeatureCard title="Shareable Reports" desc="Download or share a performance report with mentors or recruiters." icon="share" />
          </div>
        </section>

        {/* How it works */}
        <section className="mt-16 bg-white rounded-xl p-10 shadow">
          <h3 className="text-xl font-semibold">How it works</h3>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <Step number={1} title="Create profile" desc="Add your resume, career goals, and past interviews to tailor the experience." icon="profile" />
            <Step number={2} title="Pick company & role" desc="Choose the company and role you want to practice for — we use historical patterns to seed questions." icon="company" />
            <Step number={3} title="Practice & get feedback" desc="Run a mock interview, get automated feedback, examples, and next steps to improve." icon="chat" />
          </div>
        </section>
        {/* Testimonials */}
        <section className="mt-16">
          <h3 className="text-xl font-semibold">What our users say</h3>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <Testimonial name="Riya" role="SWE, batch of '24" quote="The company-specific mock for Google helped me get comfortable with system design questions. The feedback was concrete and improved my answers." />
            <Testimonial name="Carlos" role="Backend Engineer" quote="Loved the detailed breakdown and follow-up practice questions — felt like having a coach for reuseable pattern recognition." />
            <Testimonial name="Mei" role="Product" quote="The resume tailoring + mock interviews combo made interviews so much less stressful. And it's free!" />
          </div>
        </section>

        {/* Pricing / CTA */}
        <section className="mt-16 bg-white rounded-xl p-10 shadow">
          <h3 className="text-xl font-semibold">Plans</h3>
          <p className="mt-2 text-slate-600">Start with the free tier — upgrade later for coaching and private sessions.</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-xl border-2 border-indigo-100 bg-gradient-to-b from-white to-indigo-50 shadow-md animate-fade-up">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold">Free</h4>
                  <p className="text-sm text-slate-600">AI mock interviews, feedback, and reports.</p>
                </div>
                <div className="text-indigo-600 font-bold text-2xl">$0</div>
              </div>
              <ul className="mt-6 text-sm text-slate-700 space-y-3">
                <li>Unlimited mock interviews (standard)</li>
                <li>Company-specific question sets</li>
                <li>Shareable performance report</li>
              </ul>
              <div className="mt-4">
                <button className="w-full px-4 py-2 rounded-md bg-indigo-600 text-white">Get started — Free</button>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-100 bg-white shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold">Pro (coming soon)</h4>
                  <p className="text-sm text-slate-600">1:1 coaching, private sessions, and prioritized feedback.</p>
                </div>
                <div className="text-slate-500 font-bold text-lg">—</div>
              </div>
              <ul className="mt-6 text-sm text-slate-700 space-y-3">
                <li>Private coaching sessions</li>
                <li>Advanced analytics</li>
                <li>Team features</li>
              </ul>
              <div className="mt-4">
                <button className="w-full px-4 py-2 rounded-md border border-slate-200 text-slate-700">Notify me</button>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-100 bg-white shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold">Teams</h4>
                  <p className="text-sm text-slate-600">Hiring-focused features for interviewers and recruiters.</p>
                </div>
                <div className="text-slate-500 font-bold text-lg">—</div>
              </div>
              <ul className="mt-6 text-sm text-slate-700 space-y-3">
                <li>Team dashboards</li>
                <li>Candidate tracking</li>
                <li>Role-based templates</li>
              </ul>
              <div className="mt-4">
                <button className="w-full px-4 py-2 rounded-md border border-slate-200 text-slate-700">Contact sales</button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h3 className="text-xl font-semibold">Frequently asked questions</h3>
          <div className="mt-4 space-y-3">
            <details className="bg-white p-4 rounded-lg shadow-sm">
              <summary className="font-medium">Is Mocklyy really free?</summary>
              <p className="mt-2 text-slate-600">Yes — the core AI mock interviews and feedback features are free. We plan optional paid upgrades for coaching and private sessions.</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-sm">
              <summary className="font-medium">Which companies do you cover?</summary>
              <p className="mt-2 text-slate-600">We curate questions from past interview experiences for many large tech companies and fast-growing startups. You can also add your own past interviews to improve personalization.</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-sm">
              <summary className="font-medium">How is feedback generated?</summary>
              <p className="mt-2 text-slate-600">Feedback is generated by AI models trained to identify common strengths and gaps for interview answers, combined with anonymized signals from past user experiences.</p>
            </details>
          </div>
        </section>

        {/* CTA strip */}
        <section className="mt-12">
          <div className="rounded-xl bg-indigo-600 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold">Ready to practice?</h4>
              <p className="text-sm mt-1 opacity-90">Start a free mock interview tailored to your target company and role.</p>
            </div>
            <div>
              <Link href="/" className="inline-flex items-center px-5 py-3 bg-white text-indigo-700 rounded-md font-medium">Start free mock interview</Link>
            </div>
          </div>
        </section>

        <footer className="mt-12 py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Mocklyy — Built with care</footer>
      </main>
    </div>
  )
}

function ScoreBadge({ value, className }: { value: number; className?: string }) {
  const [display, setDisplay] = React.useState(0)

  React.useEffect(() => {
    let start: number | null = null
    const duration = 900

    function easeOutQuad(t: number) {
      return t * (2 - t)
    }

    let raf = 0
    function step(timestamp: number) {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutQuad(progress)
      const current = Math.round(eased * value)
      setDisplay(current)
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [value])

  return <div className={className}>{display}%</div>
}

function Logo() {
  return (
    <div className="w-10 h-10 rounded-md bg-indigo-600 flex items-center justify-center text-white font-semibold">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2L3 7v6c0 5 4 10 9 11 5-1 9-6 9-11V7l-9-5z" fill="#FFFFFF" opacity="0.95" />
        <path d="M9 12l2 2 4-4" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function getIcon(name?: string) {
  switch (name) {
    case 'bolt':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="#4F46E5" />
        </svg>
      )
    case 'question':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 6a3 3 0 00-3 3h2a1 1 0 112 0c0 1-2 1-2 4h2c0-2 2-2 2-4a3 3 0 00-3-3zM11 17h2v2h-2v-2z" fill="#0F172A" />
        </svg>
      )
    case 'resume':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M6 2h7l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z" fill="#0F172A" />
        </svg>
      )
    case 'tracker':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 13h2v6H3v-6zm4-8h2v14H7V5zm4 4h2v10h-2V9zm4-6h2v16h-2V3z" fill="#0F172A" />
        </svg>
      )
    case 'feedback':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 17.3l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.76L5.82 21z" fill="#F59E0B" />
        </svg>
      )
    case 'share':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 6l-4-4-4 4" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 2v14" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'profile':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'company':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 21h18V8H3v13zM7 4h10v4H7V4z" fill="#0F172A" />
        </svg>
      )
    case 'chat':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" fill="#0F172A" />
        </svg>
      )
    default:
      return null
  }
}

function FeatureCard({ title, desc, tag, icon }: { title: string; desc: string; tag?: string; icon?: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition animate-fade-up">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="flex-none w-10 h-10 rounded-lg icon-bg flex items-center justify-center">
            {getIcon(icon)}
          </div>
          <h4 className="font-semibold text-slate-800">{title}</h4>
        </div>
        {tag ? <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full">{tag}</span> : null}
      </div>
      <p className="mt-3 text-slate-600 text-sm">{desc}</p>
    </div>
  )
}

function Step({ number, title, desc, icon }: { number: number; title: string; desc: string; icon?: string }) {
  return (
    <div className="flex items-start gap-4 animate-fade-up">
      <div className="flex-none w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-medium">{getIcon(icon) || number}</div>
      <div>
        <div className="font-semibold text-slate-800">{title}</div>
        <div className="text-slate-600 text-sm mt-1">{desc}</div>
      </div>
    </div>
  )
}

function Testimonial({ name, role, quote }: { name: string; role: string; quote: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <p className="text-slate-700">“{quote}”</p>
      <div className="mt-4 text-sm text-slate-500">
        <div className="font-medium text-slate-800">{name}</div>
        <div>{role}</div>
      </div>
    </div>
  )
}
