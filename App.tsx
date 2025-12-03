
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import DetailedFeatures from './components/DetailedFeatures';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Coaches from './components/Coaches';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <ProblemSection />
      <DetailedFeatures />
      <Services />
      <Testimonials />
      <Pricing />
      <Coaches />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
