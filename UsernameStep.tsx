
import React, { useState } from 'react';

interface UsernameStepProps {
  onSubmit: (username: string) => void;
}

const UsernameStep: React.FC<UsernameStepProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim().length >= 3) {
      onSubmit(username.trim());
    }
  };

  return (
    <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl border-white/10 animate-in fade-in zoom-in duration-300">
      <div className="flex justify-center mb-10">
        <div className="w-24 h-24 flex items-center justify-center">
          <img 
            src="https://i.imgur.com/mgLSBSR.png" 
            alt="Robux" 
            className="w-20 h-20 object-contain brightness-110"
          />
        </div>
      </div>

      <p className="text-slate-400 text-center mb-10 font-medium">Connect your Roblox account to start</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">
            Roblox Username
          </label>
          <input
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all placeholder:text-slate-600 text-white"
            required
          />
        </div>

        <button
          type="submit"
          disabled={username.trim().length < 3}
          className="w-full robux-gradient text-slate-950 font-bold text-xl py-4 rounded-2xl hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-400/20"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UsernameStep;
