import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Atlas Analytics',
    tag: 'SaaS Dashboard',
    img: 'https://images.unsplash.com/photo-1551281044-8e8b8f4a7329?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Nova Commerce',
    tag: 'E‑commerce',
    img: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Orbit Learn',
    tag: 'EdTech Platform',
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Selected work</h2>
          <p className="text-slate-300 mt-2">A peek at recent launches we’re proud of.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={p.img} alt="" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-flex items-center rounded-lg bg-white/10 px-2 py-1 text-xs text-slate-200 mb-2">{p.tag}</span>
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
