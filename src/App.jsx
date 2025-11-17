import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <Navbar />

      {/* Hero with Spline cover */}
      <Hero />

      {/* Projects grid */}
      <Projects />

      {/* About blurb */}
      <About />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Your Name</p>
          <a href="#top" className="text-slate-300 hover:text-white">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
