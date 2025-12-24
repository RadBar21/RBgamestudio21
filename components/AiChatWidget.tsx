import { useState, useRef, useEffect, FC, KeyboardEvent } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { AI_SYSTEM_PROMPT } from '../ai-knowledge';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AiChatWidget: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Ahoj! 👋 Jsem virtuální asistent RB Game Studia. Na co se chceš zeptat?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Pomocné funkce pro Stealth komunikaci
  const stealthEncode = (str: string) => {
    // 1. UTF-8 -> Base64
    const b64 = btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_match, p1) => {
      return String.fromCharCode(parseInt(p1, 16));
    }));
    // 2. Otočení řetězce pozpátku (Zrcadlo)
    return b64.split('').reverse().join('');
  };

  const stealthDecode = (str: string) => {
    // 1. Otočení zpět
    const reversed = str.trim().split('').reverse().join('');
    // 2. Base64 -> UTF-8
    return decodeURIComponent(Array.prototype.map.call(atob(reversed), (c: string) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // 1. Příprava dat
      const rawPayload = {
        contents: [
          { role: 'user', parts: [{ text: AI_SYSTEM_PROMPT }] },
          { role: 'model', parts: [{ text: 'Rozumím.' }] },
          ...messages.slice(-6).map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ]
      };

      // 2. Stealth kódování (Base64 + Reverse)
      const encodedData = stealthEncode(JSON.stringify(rawPayload));

      // 3. Odeslání jako text/plain (méně hlídané než JSON)
      const response = await fetch('https://www.spacecolony.eu/content.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: encodedData
      });

      if (!response.ok) {
        throw new Error('Chyba serveru');
      }

      // 4. Přijetí obráceného textu z PHP
      const stealthResponse = await response.text();
      
      // 5. Stealth dekódování (Reverse + Base64)
      const decodedJsonString = stealthDecode(stealthResponse);
      const decodedResponse = JSON.parse(decodedJsonString);
      
      if (decodedResponse.candidates && decodedResponse.candidates[0]?.content?.parts[0]?.text) {
        const aiResponse = decodedResponse.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
      } else {
        throw new Error('Neplatná data');
      }

    } catch (error) {
      console.error('Chyba AI:', error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: 'Omlouvám se, spojení bylo přerušeno firewallem. Zkuste to prosím za okamžik.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-4 font-sans">
      
      {isOpen && (
        <div className="bg-white w-[350px] h-[500px] rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full">
                <Sparkles size={18} className="text-yellow-300" />
              </div>
              <div>
                <h3 className="font-bold text-sm">RB Studio AI Assistant</h3>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-blue-100 hover:text-white transition-colors p-1 hover:bg-blue-700 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                  msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-blue-100 text-blue-600'
                }`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                
                <div className={`max-w-[80%] p-3 text-sm rounded-2xl shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                }`}>
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Bot size={16} />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm">
                  <Loader2 size={16} className="animate-spin text-blue-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-slate-100">
            <div className="flex gap-2 items-center bg-slate-50 border border-slate-200 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Napiš zprávu..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>

        </div>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
        >
          <div className="relative">
            <MessageCircle size={28} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
            </span>
          </div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-bold">
            AI Chat
          </span>
        </button>
      )}
    </div>
  );
};

export default AiChatWidget;