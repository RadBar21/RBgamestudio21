import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  return (
    <HashRouter>
      <LanguageProvider>
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </HashRouter>
  );
};

export default App;