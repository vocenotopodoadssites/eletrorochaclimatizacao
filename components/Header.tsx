
import React from 'react';
import { MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="https://i.imgur.com/uucuire.png" 
              alt="Eletro Rocha Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-extrabold tracking-tight text-slate-900 hidden sm:block uppercase">
              ELETRO<span className="text-blue-600">ROCHA</span>
            </span>
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/554896034285" 
            target="_blank" 
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg active:scale-95"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Orçamento Grátis</span>
            <span className="sm:hidden text-xs">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
