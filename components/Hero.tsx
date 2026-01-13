
import React from 'react';
import { CheckCircle, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-[#001A4D] text-white py-16 lg:py-24 overflow-hidden">
      {/* Background decoration matching logo colors */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400 opacity-5 skew-x-12 transform translate-x-20"></div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-blue-400/30">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            Especialistas em Climatização e Elétrica
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Instalação e Manutenção de Ar-Condicionado com <span className="text-yellow-400 font-black">Excelência Rocha</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl">
            A Eletro Rocha garante o clima perfeito para sua casa ou empresa. Técnicos certificados, atendimento imediato e preço justo em toda Santa Catarina.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a 
              href="https://wa.me/554896034285" 
              target="_blank"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white text-lg font-black px-10 py-5 rounded-2xl transition-all shadow-xl hover:shadow-green-500/30 active:scale-95 group"
            >
              <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
              SOLICITAR ORÇAMENTO NO WHATSAPP
            </a>
          </div>

          <div className="grid grid-cols-2 gap-y-4 gap-x-2">
            {[
              "Garantia Técnica Eletro Rocha",
              "Instalação Profissional",
              "Manutenção Preventiva",
              "Atendimento (48) 99603-4285"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300 font-medium">
                <CheckCircle size={18} className="text-yellow-400 shrink-0" />
                <span className="text-sm md:text-base">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700/50">
            <img 
              src="https://i.imgur.com/PpR3hXj.png" 
              alt="Técnico qualificado realizando manutenção preventiva em ar-condicionado" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
            {/* Overlay tag with Official Logo */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-1">
                <img 
                  src="https://i.imgur.com/uucuire.png" 
                  alt="ER Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-slate-900">
                <div className="font-black text-base">Eletro Rocha</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Qualidade que você confia</div>
              </div>
            </div>
          </div>
          {/* Accent decoration */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
