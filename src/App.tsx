import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <main>
        <Hero />
        <div aria-hidden="true" className="h-10 bg-gradient-to-b from-background to-secondary" />
        <About />
        <div aria-hidden="true" className="h-10 bg-gradient-to-b from-secondary to-background" />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
