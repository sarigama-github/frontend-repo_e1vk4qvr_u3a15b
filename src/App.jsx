import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-10 text-slate-400 text-sm flex flex-col sm:flex-row gap-2 items-center justify-between">
          <p>© {new Date().getFullYear()} BlueForge Studio. All rights reserved.</p>
          <p>Built with love, motion, and accessibility in mind.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
