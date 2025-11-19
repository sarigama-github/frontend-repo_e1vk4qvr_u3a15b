export default function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Let’s build something remarkable</h3>
              <p className="text-slate-300 mt-2">Tell us about your goals and we’ll shape a proposal in 24 hours.</p>
            </div>
            <form className="grid gap-3">
              <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Your name" />
              <input type="email" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Email" />
              <textarea rows="3" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Project brief"></textarea>
              <button className="inline-flex justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-3 text-white font-medium">Request proposal</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
