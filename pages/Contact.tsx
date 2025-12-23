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
    setStatus("submitting");
    setResult(""); // Vyčistíme předchozí výsledky
    
    const formData = new FormData(event.currentTarget);

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
        (event.target as HTMLFormElement).reset();
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
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {t.contact.title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">{t.contact.cardInfoTitle}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">{t.contact.role}</p>
                    <p className="text-slate-900 font-bold">Radek Bartoníček</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">{t.contact.email}</p>
                    <a href="mailto:RBgamestudio21@gmail.com" className="text-blue-600 hover:underline font-medium">
                      RBgamestudio21@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">{t.contact.location}</p>
                    <p className="text-slate-900 font-medium">{t.contact.locationValue}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <MessageSquare size={80} />
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">{t.contact.cardCollabTitle}</h3>
              <p className="text-blue-100 relative z-10 leading-relaxed">
                {t.contact.cardCollabDesc}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">{t.contact.formTitle}</h3>
            
            {status === 'success' ? (
              <div className="text-center py-10 animate-in zoom-in duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{t.contact.successTitle}</h4>
                <p className="text-slate-500 mb-8">{t.contact.successMessage}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
                >
                  {t.contact.btnSendNew}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">
                    {t.contact.formName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t.contact.placeholderName}
                    className="w-full rounded-lg border-slate-200 border px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">
                    {t.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t.contact.placeholderEmail}
                    className="w-full rounded-lg border-slate-200 border px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1">
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
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