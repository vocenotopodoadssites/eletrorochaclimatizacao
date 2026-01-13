
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Bot, Send, Sparkles, X } from 'lucide-react';

const AiAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Olá! Sou o RochaBot, o assistente inteligente da Eletro Rocha. Posso te ajudar com dúvidas técnicas sobre seu ar-condicionado ou elétrica. Como posso ajudar?' }
  ]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...chatHistory.map(c => ({ role: c.role, parts: [{ text: c.text }] })), { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: `Você é o RochaBot, o consultor técnico virtual da empresa Eletro Rocha (proprietário: Sr. Rocha).
          Sua missão é auxiliar clientes de Santa Catarina com dúvidas sobre ar-condicionado (instalação, limpeza, economia) e serviços elétricos.
          Regras de conduta:
          1. Sempre exalte o profissionalismo da Eletro Rocha.
          2. Seja extremamente educado e técnico. 
          3. Recomende que para qualquer serviço seguro, o cliente deve contratar a Eletro Rocha pelo WhatsApp (48) 99603-4285.
          4. Se perguntarem preço, explique que varia conforme o serviço e direcione ao WhatsApp.
          Estamos em Florianópolis/SC. Responda em Português PT-BR.`
        }
      });

      const aiText = response.text || 'Desculpe, tive um pequeno erro. Pode repetir?';
      setChatHistory(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error(error);
      setChatHistory(prev => [...prev, { role: 'model', text: 'Desculpe, estou em manutenção. Por favor, chame nosso técnico diretamente no WhatsApp: (48) 99603-4285!' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {isOpen ? (
        <div className="w-80 sm:w-96 bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200 overflow-hidden flex flex-col h-[500px] animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#001A4D] p-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <Bot size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-black text-sm tracking-tight leading-none mb-1">ROCHABOT AI</h3>
                <span className="text-[10px] uppercase font-bold text-blue-300">Consultor Eletro Rocha</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full"><X size={20}/></button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50">
            {chatHistory.map((chat, idx) => (
              <div key={idx} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium shadow-sm ${
                  chat.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                }`}>
                  {chat.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          {/* Footer Input */}
          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pergunte sobre ar-condicionado..." 
              className="flex-1 text-sm outline-none border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 font-medium"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="bg-[#001A4D] text-white p-3 rounded-xl hover:bg-blue-900 disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-white text-slate-900 border border-slate-200 px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl hover:shadow-blue-200 transition-all font-black uppercase text-xs tracking-widest group"
        >
          <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
          </div>
          Dúvida Técnica? Fale com a IA
        </button>
      )}
    </div>
  );
};

export default AiAdvisor;
