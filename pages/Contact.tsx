import React from 'react';
import { Mail, MapPin, User } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {t.contact.title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contact Info Card */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-10 text-center">{t.contact.cardInfoTitle}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-4">
                  <User size={28} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1 text-lg">{t.contact.role}</p>
                  <p className="text-slate-600">Radek Bartoníček</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-4">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1 text-lg">{t.contact.email}</p>
                  <a href="mailto:RBgamestudio21@gmail.com" className="text-blue-600 hover:underline font-medium">
                    RBgamestudio21@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-4">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1 text-lg">{t.contact.location}</p>
                  <p className="text-slate-600">{t.contact.locationValue}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Collaboration Card */}
          <div className="bg-blue-600 p-8 md:p-12 rounded-2xl text-white shadow-lg shadow-blue-600/20 text-center">
            <h3 className="text-2xl font-bold mb-4">{t.contact.cardCollabTitle}</h3>
            <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
              {t.contact.cardCollabDesc}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;