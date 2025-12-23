import { useState, FC, MouseEvent } from 'react';
import { GAMES, WEB_TESTING_URLS } from '../constants';
import { Play, Smartphone, Clock, Globe, Info } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Portfolio: FC = () => {
  const { t, language } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  // Stav pro určení typu hlášky: 'coming_soon' (Připravuje se) nebo 'desktop_only' (Jen pro PC)
  const [modalType, setModalType] = useState<'coming_soon' | 'desktop_only'>('coming_soon');

  // Funkce pro detekci mobilního zařízení
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  // Logika kliknutí na Google Play
  const handleGooglePlayClick = (e: MouseEvent, game: typeof GAMES[0]) => {
    e.preventDefault();

    // 1. Zkontrolujeme, zda má hra definovaný Web Testing URL
    const webTestingUrl = WEB_TESTING_URLS[game.id];

    if (webTestingUrl && game.googlePlayUrl && game.googlePlayUrl !== '#') {
      // Hra je vydaná (má odkazy)
      if (isMobileDevice()) {
        // Na mobilu -> Otevřít Store
        window.open(game.googlePlayUrl, '_blank');
      } else {
        // Na PC -> Otevřít Web Testing
        window.open(webTestingUrl, '_blank');
      }
    } else {
      // Hra nemá odkazy -> Zobrazit "Připravuje se"
      setModalType('coming_soon');
      setShowModal(true);
    }
  };

  // Logika kliknutí na App Store
  const handleAppStoreClick = (e: MouseEvent) => {
    e.preventDefault();
    setModalType('coming_soon');
    setShowModal(true);
  };

  // Logika kliknutí na Web Button
  const handleWebClick = (e: MouseEvent, game: typeof GAMES[0]) => {
    e.preventDefault();
    
    if (!game.webUrl) return;

    // Pokud je hra jen pro PC a uživatel je na mobilu
    if (game.isDesktopOnly && isMobileDevice()) {
      setModalType('desktop_only');
      setShowModal(true);
    } else {
      // Jinak otevřeme hru
      window.open(game.webUrl, '_blank');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20 relative">
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
                
                {/* Genre Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                  {game.genre[language]}
                </div>

                {/* Coming Soon Badge */}
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
                  
                  {/* TLAČÍTKO WEB: Zobrazí se, pokud má hra webUrl */}
                  {game.webUrl && (
                    <button 
                      onClick={(e) => handleWebClick(e, game)}
                      className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-3 rounded-lg font-medium transition-colors text-xs sm:text-sm cursor-pointer shadow-md mb-1"
                    >
                      <Globe size={16} />
                      {t.portfolio.btnPlayWeb}
                    </button>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={(e) => handleGooglePlayClick(e, game)}
                      className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-3 rounded-lg font-medium transition-colors text-xs sm:text-sm cursor-pointer w-full"
                    >
                      <Play size={16} className="fill-current" />
                      {t.portfolio.googlePlay}
                    </button>
                    <button 
                      onClick={handleAppStoreClick}
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-3 rounded-lg font-medium transition-colors text-xs sm:text-sm cursor-pointer w-full"
                    >
                      <Smartphone size={16} />
                      {t.portfolio.appStore}
                    </button>
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

      {/* Modální okno (Popup) */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all scale-100">
            <div className="text-center">
              
              {/* Ikona podle typu hlášky */}
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                {modalType === 'coming_soon' ? (
                  <Clock className="h-6 w-6 text-blue-600" />
                ) : (
                  <Smartphone className="h-6 w-6 text-blue-600" />
                )}
              </div>

              {/* Titulek */}
              <h3 className="text-lg leading-6 font-medium text-slate-900 mb-2">
                {modalType === 'coming_soon' 
                  ? t.portfolio.modalTitle 
                  : t.portfolio.moreInfo /* "Více informací" jako nadpis pro varování */
                }
              </h3>

              {/* Popis */}
              <p className="text-slate-500 mb-6">
                {modalType === 'coming_soon' 
                  ? t.portfolio.modalDescription 
                  : t.portfolio.modalDesktopOnly
                }
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm cursor-pointer"
              >
                {t.portfolio.modalBack}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;