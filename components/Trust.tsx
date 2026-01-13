
import React from 'react';
import { ShieldCheck, Zap, UserCheck, Building2 } from 'lucide-react';

const Trust: React.FC = () => {
  const items = [
    {
      icon: <UserCheck className="w-10 h-10 text-blue-600" />,
      title: "Técnicos Especializados",
      desc: "Profissionais treinados pelos principais fabricantes."
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-600" />,
      title: "Atendimento Rápido",
      desc: "Sabemos que o calor não espera. Priorizamos sua urgência."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "Garantia Total",
      desc: "Todos os nossos serviços contam com nota e garantia técnica."
    },
    {
      icon: <Building2 className="w-10 h-10 text-blue-600" />,
      title: "Residencial & Comercial",
      desc: "Equipados para atender desde casas a grandes indústrias."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all rounded-2xl group">
              <div className="mb-4 bg-blue-50 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
