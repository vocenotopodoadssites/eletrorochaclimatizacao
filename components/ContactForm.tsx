
import React from 'react';
import { MessageCircle, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-[#001A4D] rounded-[3rem] overflow-hidden shadow-2xl relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="p-10 md:p-20 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight uppercase tracking-tight">
              Não sofra com o calor. <br className="hidden md:block"/> 
              <span className="text-yellow-400">Tenha o melhor serviço agora mesmo!</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
              Chame a Eletro Rocha agora no WhatsApp e garanta seu orçamento gratuito. Atendimento rápido, técnico e com garantia total.
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <a 
                href="https://wa.me/554896034285" 
                target="_blank"
                className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-[2rem] text-2xl font-black transition-all shadow-2xl hover:scale-105 active:scale-95 group"
              >
                <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
                FALAR NO WHATSAPP
              </a>
              
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {[
                  { icon: <ShieldCheck size={20} className="text-yellow-400" />, text: "Serviços com Garantia" },
                  { icon: <Zap size={20} className="text-yellow-400" />, text: "Atendimento Rápido" },
                  { icon: <CheckCircle size={20} className="text-yellow-400" />, text: "Preço Justo" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white font-bold uppercase text-xs tracking-widest">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">
                Atendendo Florianópolis e Região | (48) 99603-4285
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
