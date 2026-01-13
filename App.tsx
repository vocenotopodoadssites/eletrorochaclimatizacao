
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Steps />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;
