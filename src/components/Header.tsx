import { Compass } from 'lucide-react';
import { AppView } from '../types';

interface HeaderProps {
  view: AppView;
  setView: (view: AppView) => void;
}

export default function Header({ view, setView }: HeaderProps) {
  return (
    <header id="header" className="bg-blue-900 text-white shadow-md sticky top-0 z-50 px-4 py-3.5 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group active:scale-98 transition-transform" 
          onClick={() => setView('home')}
        >
          <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-blue-900 font-bold shadow-sm group-hover:bg-blue-50 transition-colors">
            <Compass className="w-5.5 h-5.5 text-blue-900 transition-transform duration-700 ease-out group-hover:rotate-180" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm md:text-md font-display font-medium uppercase tracking-wider text-white font-bold">
                RiderAcademy
              </h1>
              <span className="text-[10px] bg-blue-800 text-blue-200 font-mono font-semibold px-2 py-0.5 rounded border border-blue-700 uppercase">
                Manual v2026
              </span>
            </div>
            <p className="text-[10px] md:text-xs text-blue-200">Minnesota License Practice Study Companion</p>
          </div>
        </div>

        <nav className="flex items-center gap-1 md:gap-3">
          <button
            onClick={() => setView('home')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
              view === 'home' 
                ? 'bg-blue-950 text-white border border-blue-800 shadow-inner' 
                : 'text-blue-100 hover:text-white hover:bg-blue-805/80 hover:bg-opacity-80'
            }`}
          >
            Test Center
          </button>
          <button
            onClick={() => setView('stats')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
              view === 'stats' 
                ? 'bg-blue-950 text-white border border-blue-800 shadow-inner' 
                : 'text-blue-100 hover:text-white hover:bg-blue-805/80 hover:bg-opacity-80'
            }`}
          >
            My Record
          </button>
          <button
            onClick={() => setView('disclaimer')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
              view === 'disclaimer' 
                ? 'bg-blue-950 text-white border border-blue-800 shadow-inner' 
                : 'text-blue-100 hover:text-white hover:bg-blue-805/80 hover:bg-opacity-80'
            }`}
          >
            Legal & Rules
          </button>
        </nav>
      </div>
    </header>
  );
}
