import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Cpu, User, Beaker } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
            <span className="block">{t.home.heroTitle1}</span>
            <span className="block text-blue-600">{t.home.heroTitle2}</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-slate-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {t.home.heroDesc}
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
            <Link
              to="/portfolio"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all shadow-lg shadow-blue-600/20"
            >
              {t.home.ctaPortfolio}
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10 transition-all"
            >
              {t.home.ctaContact}
            </Link>
          </div>
        </div>
      </section>

      {/* Features / About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <User size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.home.featureSoloTitle}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t.home.featureSoloDesc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Cpu size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.home.featureAiTitle}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t.home.featureAiDesc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Smartphone size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.home.featureMobileTitle}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t.home.featureMobileDesc}
            </p>
          </div>

        </div>
      </section>

      {/* NOVÁ SEKCE: Tester Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          {/* Ikona */}
          <div className="flex-shrink-0 bg-white p-4 rounded-full shadow-sm">
            <Beaker size={48} className="text-blue-600" />
          </div>
          
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              {t.home.testerTitle}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6 md:mb-0 max-w-2xl">
              {t.home.testerDesc}
            </p>
          </div>

          {/* Tlačítko */}
          <div className="flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-all hover:shadow-md"
            >
              {t.home.testerBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">{t.home.ctaBottomTitle}</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              {t.home.ctaBottomDesc}
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors"
            >
              {t.home.ctaBottomLink} <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;