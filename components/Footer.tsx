
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://i.imgur.com/uucuire.png" 
                alt="Eletro Rocha Logo" 
                className="h-14 w-auto object-contain bg-white p-1 rounded-lg"
              />
              <span className="text-2xl font-black tracking-tight uppercase italic">ELETRO<span className="text-blue-500">ROCHA</span></span>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed mb-6">
              Sua parceira de confiança para climatização e elétrica em Santa Catarina. Profissionalismo e transparência em cada serviço.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-yellow-400 border-l-4 border-yellow-400 pl-3">Atendimento</h4>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li>Segunda a Sexta: 08h às 18h</li>
              <li>Sábado: 08h às 12h</li>
              <li className="mt-4 pt-4 border-t border-slate-800">
                <span className="block text-white font-black mb-1">Área de Cobertura:</span>
                Criciúma é região.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-yellow-400 border-l-4 border-yellow-400 pl-3">Fale Conosco</h4>
            <div className="space-y-4">
              <a href="https://wa.me/554896034285" className="text-slate-400 flex flex-col group">
                <span className="text-white text-[10px] uppercase tracking-widest font-black mb-1">WhatsApp Oficial</span>
                <span className="text-xl font-black text-blue-400 group-hover:text-white transition-colors">(48) 99603-4285</span>
              </a>
              <p className="text-slate-400 flex flex-col">
                <span className="text-white text-[10px] uppercase tracking-widest font-black mb-1">Contato Técnico</span>
                <span className="font-bold">Sr. Rocha</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-600 text-[10px] uppercase tracking-[0.2em] font-black">
          <p>© {new Date().getFullYear()} Eletro Rocha Climatização e Elétrica. CNPJ 29.575.586/0001-38</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
