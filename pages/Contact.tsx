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
    
    // OPRAVA: Uložíme si referenci na formulář hned na začátku, 
    // aby k ní asynchronní kód měl přístup i po dokončení fetch požadavku.
    const form = event.currentTarget;
    
    setStatus("submitting");
    setResult(""); 
    
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
        // Použijeme uloženou referenci 'form' místo 'event.currentTarget'
        form.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.contact.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{t.contact.infoTitle}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t.contact.emailLabel}</h3>
                    <p className="text-slate-600">radekbartonicek@rbgamestudio21.eu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t.contact.locationLabel}</h3>
                    <p className="text-slate-600">Česká republika, Jižní Čechy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Send size={120} />
              </div>
              <h2 className="text-2xl font-bold mb-4 relative z-10">{t.contact.collaborationTitle}</h2>
              <p className="text-blue-100 mb-6 relative z-10">{t.contact.collaborationText}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            {status === 'success' ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.contact.successTitle}</h3>
                <p className="text-slate-600 mb-8">{t.contact.successMessage}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <User size={16} /> {t.contact.labelName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t.contact.placeholderName}
                    className="w-full rounded-lg border-slate-200 border px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Mail size={16} /> {t.contact.labelEmail}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.contact.placeholderEmail}
                    className="w-full rounded-lg border-slate-200 border px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <MessageSquare size={16} /> {t.contact.labelMessage}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
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