import React, { useState } from 'react';
import { Mail, MapPin, Send, User, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  // Stavy pro formulář
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setResult("Odesílám...");
    
    const formData = new FormData(event.currentTarget);

    // --- ZDE VLOŽ SVŮJ ACCESS KEY Z EMAILU ---
    formData.append("access_key", "39bf4491-8123-463b-b7f3-18f12673907e"); 
    // -----------------------------------------

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Zpráva byla úspěšně odeslána!");
        setStatus("success");
        (event.target as HTMLFormElement).reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Něco se pokazilo. Zkuste to prosím později.");
      setStatus("error");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hlavička */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {t.contact.title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Levý sloupec: Kontaktní informace (Původní) */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">{t.contact.cardInfoTitle}</h3>
              <div className="space-y-6">
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600">
                      <User className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-500">{t.contact.role}</p>
                    <p className="text-lg font-semibold text-slate-900">Radek Bartoníček</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-500">{t.contact.email}</p>
                    <a href="mailto:RBgamestudio21@gmail.com" className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                      RBgamestudio21@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-500">{t.contact.location}</p>
                    <p className="text-lg font-semibold text-slate-900">{t.contact.locationValue}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Collaboration Card */}
            <div className="bg-slate-900 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">{t.contact.cardCollabTitle}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t.contact.cardCollabDesc}
              </p>
            </div>
          </div>

          {/* Pravý sloupec: Kontaktní formulář (Nový) */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              Napište mi zprávu
            </h3>
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Odesláno!</h4>
                <p className="text-slate-500 max-w-xs">Děkuji za vaši zprávu. Odpovím vám co nejdříve na uvedený email.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Poslat další zprávu
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Honeypot field (anti-spam) - hidden */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Vaše jméno
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    required 
                    placeholder="Jan Novák"
                    className="w-full rounded-lg border-slate-200 border px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Váš email
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    required 
                    placeholder="jan@email.cz"
                    className="w-full rounded-lg border-slate-200 border px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Zpráva
                  </label>
                  <textarea 
                    name="message" 
                    id="message"
                    required 
                    rows={4}
                    placeholder="Mám nápad na vylepšení..."
                    className="w-full rounded-lg border-slate-200 border px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                    <AlertCircle size={16} />
                    {result}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform active:scale-[0.98]"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5" /> Odesílám...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Odeslat zprávu
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;