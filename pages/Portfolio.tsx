import React from 'react';
import { GAMES } from '../constants';
import { Play, Smartphone, Info, Clock } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Portfolio: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {t.portfolio.title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GAMES.map((game) => (
            <div key={game.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
              
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img 
                  src={game.imageUrl} 
                  alt={game.title[language]} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Genre Badge (Right) */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                  {game.genre[language]}
                </div>

                {/* Status Badge (Left) - Only if coming soon */}
                {game.status === 'coming_soon' && (
                  <div className="absolute top-4 left-4 bg-amber-400/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm flex items-center gap-1">
                    <Clock size={12} />
                    {t.portfolio.statusComingSoon}
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{game.title[language]}</h3>
                <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                  {game.description[language]}
                </p>
                
                {/* Action Buttons */}
                <div className="mt-auto space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href={game.googlePlayUrl}
                      className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-3 rounded-lg font-medium transition-colors text-xs sm:text-sm"
                    >
                      <Play size={16} className="fill-current" />
                      {t.portfolio.googlePlay}
                    </a>
                    <a 
                      href={game.appStoreUrl}
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-3 rounded-lg font-medium transition-colors text-xs sm:text-sm"
                    >
                      <Smartphone size={16} />
                      {t.portfolio.appStore}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {GAMES.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">{t.portfolio.emptyState}</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Portfolio;