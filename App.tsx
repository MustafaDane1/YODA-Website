import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Teams from './components/Teams';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Ekibimiz from './components/Ekibimiz'; // Squad yerine
import Mezunlar from './components/Mezunlar'; // Yeni eklendi

const GlobalStyler: React.FC = () => {
  const styles = `
    html, body {
      background-color: #000000 !important; 
    }
  `;

  return <style>{styles}</style>;
};

const App: React.FC = () => {
  return (
    <div className="text-yoda-light font-poppins">
      
      {/* GÜNCELLEME: Stil enjektörünü buraya ekliyoruz */}
      <GlobalStyler />
      
      <Header />
      <main>
        <Hero />
        <About />
        <Teams />
        <Ekibimiz />
        <Mezunlar />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;