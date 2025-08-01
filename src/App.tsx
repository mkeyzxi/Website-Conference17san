import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Organizers from './components/Organizers';
import Competitions from './components/Competitions';
import Schedule from './components/Schedule';
import Documentation from './components/Documentation';
import Support from './components/Support';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Organizers />
      <Competitions />
      <Schedule />
      <Documentation />
      <Support />
      <Footer />
    </div>
  );
}

export default App;