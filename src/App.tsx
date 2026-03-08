import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Recommendations } from './components/Recommendations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
