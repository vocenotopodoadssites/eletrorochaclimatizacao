
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  return (
    <a 
      href="https://wa.me/554896034285" 
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 group"
      aria-label="Chamar no WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-slate-900 px-5 py-2 rounded-2xl text-xs font-black shadow-2xl border border-slate-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none translate-y-2 group-hover:translate-y-0">
        ORÇAMENTO AGORA! ⚡
      </div>
      <MessageCircle size={32} />
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
    </a>
  );
};

export default WhatsAppFloat;
