import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-500 text-sm">
          &copy; {currentYear} RB Game Studio 21. {t.footer.rights}
        </div>
        <div className="flex items-center gap-6">
          <a
            href="mailto:RBgamestudio21@gmail.com"
            className="text-slate-500 hover:text-blue-600 text-sm transition-colors"
          >
            RBgamestudio21@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;