import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Locations from './components/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
