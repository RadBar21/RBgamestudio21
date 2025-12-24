import { useState, FC, FormEvent } from 'react';
import { Mail, MapPin, Send, User, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact: FC = () => {
  const { t } = useLanguage();
  
  // Stavy pro formulář
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // OPRAVA: Uložíme si referenci na formulář hned na začátku
    const form = event.currentTarget;
    
    setStatus("submitting");
    setResult(""); // Vyčistíme předchozí výsledky
    
    const formData = new FormData(form);

    // --- ZDE JE TVŮJ ACCESS KEY ---
    formData.append("access_key", "39bf4491-8123-463b-b7f3-18f12673907e"); 
    // -----------------------------

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        // Použijeme uloženou referenci 'form'
        form.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("An unexpected error occurred.");
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
          
          {/* Levý sloupec: Kontaktní informace */}
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

            {/* Collaboration Card - Obnovené dekorativní kruhy */}
            <div className="bg-blue-600 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
              {/* Dekorativní kruhy na pozadí */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">{t.contact.cardCollabTitle}</h3>
                <p className="text-blue-100 leading-relaxed">
                  {t.contact.cardCollabDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Pravý sloupec: Kontaktní formulář */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              {t.contact.formTitle}
            </h3>
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{t.contact.successTitle}</h4>
                <p className="text-slate-500 max-w-xs">{t.contact.successMessage}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  {t.contact.btnSendNew}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Honeypot field (anti-spam) - hidden */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    {t.contact.formName}
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    required 
                    placeholder={t.contact.placeholderName}
                    className="w-full rounded-lg border-slate-200 border px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    {t.contact.formEmail}
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    required 
                    placeholder={t.contact.placeholderEmail}
                    className="w-full rounded-lg border-slate-200 border px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    {t.contact.formMessage}
                  </label>
                  <textarea 
                    name="message" 
                    id="message"
                    required 
                    rows={4}
                    placeholder={t.contact.placeholderMessage}
                    className="w-full rounded-lg border-slate-200 border px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                    <AlertCircle size={16} />
                    {t.contact.errorMessage} {result && `(${result})`}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform active:scale-[0.98]"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5" /> {t.contact.btnSubmitting}
                    </>
                  ) : (
                    <>
                      <Send size={18} /> {t.contact.btnSubmit}
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