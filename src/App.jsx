import { ThemeProvider } from './context/ThemeContext';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import CoverLetter from './sections/CoverLetter';

function App() {
  return (
    <SpeedInsights>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Resume />
            <CoverLetter />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </SpeedInsights>
  );
}

export default App;

