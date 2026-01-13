
import React from 'react';
import { MessageSquare, ClipboardList, CalendarCheck, CheckCircle2 } from 'lucide-react';

const Steps: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare size={32} />,
      title: "Contato",
      desc: "Você nos chama pelo WhatsApp e explica sua necessidade."
    },
    {
      icon: <ClipboardList size={32} />,
      title: "Orçamento",
      desc: "Recebe orientação técnica e uma proposta justa sem compromisso."
    },
    {
      icon: <CalendarCheck size={32} />,
      title: "Agendamento",
      desc: "Marcamos o serviço no horário que for melhor para você."
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "Entrega",
      desc: "Serviço executado com limpeza, nota fiscal e garantia total."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">Como Funciona Nosso Atendimento</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-8 z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.desc}</p>
              {/* Step indicator for mobile */}
              <div className="md:hidden mt-4 w-0.5 h-8 bg-slate-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
