import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Privacy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">{t.privacy.title}</h1>
        </div>

        {/* Content */}
        <div className="prose prose-slate prose-blue max-w-none text-slate-600">
          {/* Lead */}
          <p className="lead text-xl mb-8">
            {t.privacy.lead}
          </p>

          {/* 1. Introduction */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.privacy.introTitle}</h2>
            <p className="mb-4 text-justify">
              {t.privacy.introText}
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.privacy.infoCollectionTitle}</h2>
            <p className="mb-4 text-justify">
              {t.privacy.infoCollectionText}
            </p>
            
            <p className="mb-2 font-medium">{t.privacy.thirdPartyServicesTitle}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <a href="https://support.google.com/admob/answer/6128543?hl=cs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  AdMob
                </a>
              </li>
              <li>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Google Play Services
                </a>
              </li>
            </ul>
          </section>

          {/* GDPR */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.privacy.gdprTitle}</h2>
            <p className="text-justify">
              {t.privacy.gdprText}
            </p>
          </section>

          {/* CCPA */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.privacy.ccpaTitle}</h2>
            <p className="text-justify">
              {t.privacy.ccpaText}
            </p>
          </section>

          {/* Log Data */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.privacy.logDataTitle}</h2>
            <p className="text-justify">
              {t.privacy.logDataText}
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.privacy.cookiesTitle}</h2>
            <p className="text-justify">
              {t.privacy.cookiesText}
            </p>
          </section>

          {/* Security */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.privacy.securityTitle}</h2>
            <p className="text-justify">
              {t.privacy.securityText}
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.privacy.childrenTitle}</h2>
            <p className="text-justify">
              {t.privacy.childrenText}
            </p>
          </section>

          {/* Changes */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.privacy.changesTitle}</h2>
            <p className="text-justify">
              {t.privacy.changesText}
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{t.privacy.contactTitle}</h2>
            <p>
              {t.privacy.contactText}
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Privacy;