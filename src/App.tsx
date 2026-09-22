import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatIBuild from '@/components/WhatIBuild';
import FeaturedProjects from '@/components/FeaturedProjects';
import IoTHardwareLab from '@/components/IoTHardwareLab';
import AIAutomation from '@/components/AIAutomation';
import Experience from '@/components/Experience';
import TechStack from '@/components/TechStack';
import Education from '@/components/Education';
import EngineeringInterests from '@/components/EngineeringInterests';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-ink-200">
      <Navigation />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <FeaturedProjects />
        <IoTHardwareLab />
        <AIAutomation />
        <Experience />
        <TechStack />
        <Education />
        <EngineeringInterests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
