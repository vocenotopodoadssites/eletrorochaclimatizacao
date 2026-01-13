
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Ricardo Silva",
      role: "Empresário",
      comment: "A Eletro Rocha instalou os ares da minha loja com perfeição. O acabamento ficou impecável e o atendimento do Sr. Rocha foi excelente.",
      rating: 5
    },
    {
      name: "Ana Oliveira",
      role: "Moradora do Centro",
      comment: "Sempre chamo para a higienização anual. São pontuais, organizados e deixam tudo limpinho. O ar parece novo toda vez!",
      rating: 5
    },
    {
      name: "Marcos Paulo",
      role: "Condomínio Solar",
      comment: "Melhor custo-benefício que encontramos para a manutenção do prédio. Atendimento técnico de verdade, sem enrolação.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Quem Contratou a Eletro Rocha, Recomenda</h2>
            <p className="text-slate-600 font-medium italic">Confiança conquistada através de serviços bem executados.</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-slate-50 px-8 py-4 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-1">
              <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              <span className="font-black text-slate-900 text-lg tracking-tight">Google Reviews</span>
            </div>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Nota 5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 relative group hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-6 right-8 text-blue-200 group-hover:text-blue-400 transition-colors">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.887z"/></svg>
              </div>
              <p className="text-slate-700 font-medium mb-8 leading-relaxed relative z-10">"{rev.comment}"</p>
              <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                <div className="w-12 h-12 bg-[#001A4D] text-yellow-400 rounded-full flex items-center justify-center font-black">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 leading-none mb-1 uppercase text-sm tracking-wide">{rev.name}</h4>
                  <p className="text-xs text-slate-500 font-bold">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
