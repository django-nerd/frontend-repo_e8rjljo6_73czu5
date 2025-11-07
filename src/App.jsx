import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, VisionMission, Services, Products, WhyUs, Footer } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Products />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
