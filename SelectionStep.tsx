
import React, { useState } from 'react';

interface SelectionStepProps {
  username: string;
  onSelect: (amount: number) => void;
}

const SelectionStep: React.FC<SelectionStepProps> = ({ username, onSelect }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const amounts = [800, 1600, 5000, 10000];

  const handleChoice = (amount: number) => {
    setSelected(amount);
    // Tiny delay to let the user see the "active/hover" state before moving on
    setTimeout(() => {
      onSelect(amount);
    }, 200);
  };

  return (
    <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
        </div>
        <div>
          <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Connected</p>
          <p className="text-lg font-bold text-slate-200">{username}</p>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
        How much Robux do you want to generate?
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => handleChoice(amount)}
            className={`
              group relative flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 transform
              ${selected === amount 
                ? 'bg-amber-400/20 border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.3)] scale-95' 
                : 'bg-white/5 border border-white/10 hover:bg-amber-400/10 hover:border-amber-400/60 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:-translate-y-1'
              }
            `}
          >
            <div className={`mb-2 transition-transform duration-300 ${selected === amount ? 'scale-110' : 'group-hover:scale-110'}`}>
              <img 
                src="https://i.imgur.com/mgLSBSR.png" 
                alt="Robux" 
                className="w-10 h-10 object-contain brightness-110"
              />
            </div>
            <span className={`text-2xl font-black transition-colors ${selected === amount ? 'text-amber-400' : 'text-white'}`}>
              {amount.toLocaleString()}
            </span>
            <span className={`text-xs font-bold uppercase transition-colors ${selected === amount ? 'text-amber-400/80' : 'text-slate-500 group-hover:text-amber-400/70'}`}>
              ROBUX
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectionStep;
