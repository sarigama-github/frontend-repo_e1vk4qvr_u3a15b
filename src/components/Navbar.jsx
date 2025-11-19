import { useState } from 'react'
import { Menu, X, Rocket, Phone } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-slate-200 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 grid place-items-center shadow-lg shadow-sky-500/20">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-semibold tracking-tight group-hover:text-sky-200 transition-colors">BlueForge Studio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#process">Process</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            <div className="hidden md:flex">
              <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-4 py-2 rounded-xl shadow hover:shadow-sky-500/30 transition-all">
                <Phone className="h-4 w-4" />
                Free consult
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-4">
              <div className="grid gap-3">
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#work">Work</NavLink>
                <NavLink href="#process">Process</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-4 py-2 rounded-xl w-full justify-center">
                <Phone className="h-4 w-4" />
                Free consult
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
