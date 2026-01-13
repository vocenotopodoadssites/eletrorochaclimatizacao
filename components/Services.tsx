
import React from 'react';
import { Snowflake, Droplets, Zap, Shield, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 uppercase tracking-tight">Excelência em Serviços Técnicos</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium">Soluções completas com o padrão de qualidade Eletro Rocha para seu conforto e segurança.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Service: AC Installation & Maintenance */}
          <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 group hover:shadow-2xl transition-all">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 overflow-hidden">
                <img 
                  src="https://i.imgur.com/F0BuVke.png" 
                  alt="Instalação de Ar Condicionado Eletro Rocha" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 text-blue-900">
                  <Snowflake size={32} className="text-blue-600" />
                  <span className="font-black text-sm tracking-widest uppercase">Destaque Eletro Rocha</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">Instalação e Manutenção de Ar-Condicionado</h3>
                <ul className="space-y-3 mb-8 text-slate-600 font-medium">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Instalação de Split e Inverter
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Carga de Gás e Reparos Técnicos
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Contratos de Manutenção PMOC
                  </li>
                </ul>
                <a 
                  href="https://wa.me/554896034285" 
                  className="inline-flex items-center gap-2 bg-[#001A4D] text-white px-6 py-3 rounded-xl font-bold group/btn hover:bg-blue-800 transition-all self-start"
                >
                  Orçamento Imediato <ChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Side Services Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Hygiene */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex-1 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Droplets size={28} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">Higienização Profunda</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed font-medium">Limpeza técnica completa com bactericida para garantir a saúde da sua família.</p>
              <a href="https://wa.me/554896034285" className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">Saber mais <ChevronRight size={16} /></a>
            </div>

            {/* Electrical */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex-1 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-400 group-hover:text-white transition-all">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">Serviços Elétricos</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed font-medium">Instalações elétricas residenciais e comerciais com segurança e normas técnicas.</p>
              <a href="https://wa.me/554896034285" className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">Chamar Eletricista <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
