import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/65 to-slate-950" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-36 pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </div>

            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
              Websites that feel alive and convert better
            </h1>

            <p className="mt-4 text-lg text-slate-300 max-w-xl">
              We design and ship modern websites for startups and agencies. Fast, animated, accessible, and built to scale.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-3 text-white font-medium shadow hover:shadow-sky-500/30 transition-all">
                Get a proposal
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-slate-100 font-medium hover:bg-white/10 transition">
                See our work
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-90">
              {['Next.js', 'FastAPI', 'Tailwind', 'Framer Motion'].map((t) => (
                <div key={t} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 text-center">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
