import { useState, FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-3 px-4 text-base font-medium rounded-md transition-colors ${
      isActive
        ? 'bg-blue-50 text-blue-700'
        : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                RB Studio 21
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass}>
                {item.label[language]}
              </NavLink>
            ))}

            <div className="flex items-center gap-2 ml-4 border-l border-slate-200 pl-6">
              <button
                onClick={() => setLanguage('cs')}
                className={`text-xs font-bold transition-colors ${
                  language === 'cs' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                CZ
              </button>
              <span className="text-slate-300 text-xs">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs font-bold transition-colors ${
                  language === 'en' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-2 mr-2">
              <button
                onClick={() => setLanguage('cs')}
                className={`text-sm font-medium ${
                  language === 'cs' ? 'text-blue-600' : 'text-slate-400'
                }`}
              >
                CZ
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm font-medium ${
                  language === 'en' ? 'text-blue-600' : 'text-slate-400'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">{t.nav.openMenu}</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={mobileLinkClass}
              >
                {item.label[language]}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;