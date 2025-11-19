import { motion } from 'framer-motion'
import { BrainCircuit, Wrench, Rocket, Handshake } from 'lucide-react'

const steps = [
  { icon: BrainCircuit, title: 'Discover', desc: 'We learn your goals, audience, and constraints.' },
  { icon: Wrench, title: 'Design & Build', desc: 'Rapid iterations with motion-first UI.' },
  { icon: Handshake, title: 'Review', desc: 'Tight feedback loops and testing.' },
  { icon: Rocket, title: 'Launch', desc: 'Deploy, measure, and optimize.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Our process</h2>
          <p className="text-slate-300 mt-2">Simple, collaborative, and outcomes-driven.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-white/10 grid place-items-center mb-3">
                <Icon className="h-5 w-5 text-sky-300" />
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
