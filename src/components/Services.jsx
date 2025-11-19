import { motion } from 'framer-motion'
import { Sparkles, Layout, PenTool, ChartSpline, Rocket } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Web Design & Dev',
    desc: 'Responsive, accessible websites using modern stacks and best practices.'
  },
  {
    icon: PenTool,
    title: 'Brand & UI Kits',
    desc: 'Design systems, component libraries, and brand identity that scale.'
  },
  {
    icon: ChartSpline,
    title: 'Motion & Interactions',
    desc: 'Micro-animations and scroll effects that improve clarity and delight.'
  },
  {
    icon: Rocket,
    title: 'Performance & SEO',
    desc: 'Core Web Vitals, structured data, analytics, and launch support.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(56,189,248,0.08),transparent),radial-gradient(600px_200px_at_90%_20%,rgba(129,140,248,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200/90 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-sky-300" />
              What we do
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">Services crafted for outcomes</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 hover:border-sky-300/30 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.2),0_30px_60px_-15px_rgba(2,6,23,0.6)] transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-white/10 grid place-items-center mb-4">
                <Icon className="h-6 w-6 text-sky-300" />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-slate-300 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
