import { motion } from 'motion/react';
import { AlertTriangle } from 'lucide-react';

interface DisclaimerViewProps {
  onAccept: () => void;
}

export default function DisclaimerView({ onAccept }: DisclaimerViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="max-w-xl mx-auto space-y-4"
    >
      <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-5">
        
        {/* Alert Badge Header */}
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="p-2 w-10 h-10 bg-amber-50 text-amber-700 rounded-xl border border-amber-200 shrink-0 shadow-sm flex items-center justify-center">
            <AlertTriangle className="w-5.5 h-5.5" />
          </div>
          <div>
            <h2 className="text-base font-display font-bold text-slate-800">
              Legal Disclaimer & Rules
            </h2>
            <p className="text-[10px] text-slate-500 font-mono">
              MN-StudyBook Independent Practice Tool
            </p>
          </div>
        </div>

        {/* Warning box */}
        <div className="p-3.5 bg-amber-50/75 rounded-2xl border border-amber-200/80 space-y-1.5 text-slate-900 leading-relaxed">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-950 font-display flex items-center gap-1.5">
            <span>⚠️ Non-Affiliation Declaration</span>
          </h3>
          <p className="text-[11px] leading-relaxed text-amber-900">
            <strong>MN-StudyBook</strong> is an independent practice application. This helper tool is <strong>not</strong> operated, endorsed, or sponsored by, or affiliated with, the State of Minnesota, the Minnesota DVS, or any other government licensing agency.
          </p>
        </div>

        {/* Rules List */}
        <div className="space-y-3">
          <h4 className="text-[10px] font-bold uppercase tracking-wide text-slate-400 font-mono">
            Educational Terms &amp; Limitations:
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 bg-slate-50 hover:bg-slate-100/50 transition-all duration-300 rounded-xl border border-slate-200/70 space-y-1 group">
              <span className="text-blue-700 group-hover:text-blue-800 transition-colors font-bold text-[10px] uppercase font-mono block">1. Study Sandbox Only</span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Scores and practice tracking are for training only. Practice results do not guarantee state exam clearance.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 hover:bg-slate-100/50 transition-all duration-300 rounded-xl border border-slate-200/70 space-y-1 group">
              <span className="text-blue-700 group-hover:text-blue-800 transition-colors font-bold text-[10px] uppercase font-mono block">2. Information Scope</span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                We endeavor to align with state guides, but some laws or questions may be simplified or contain discrepancies.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 hover:bg-slate-100/50 transition-all duration-300 rounded-xl border border-slate-200/70 space-y-1 group">
              <span className="text-blue-700 group-hover:text-blue-800 transition-colors font-bold text-[10px] uppercase font-mono block">3. No Legal Standing</span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                This app provides no legal counsel. The developer bears no responsibility for any external real-life testing outcomes.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 hover:bg-slate-100/50 transition-all duration-300 rounded-xl border border-slate-200/70 space-y-1 group">
              <span className="text-blue-700 group-hover:text-blue-800 transition-colors font-bold text-[10px] uppercase font-mono block">4. Official Resources</span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                The official PDF Minnesota Motorcycle Manual is the absolute authority. Always consult DVS materials.
              </p>
            </div>
          </div>
        </div>

        {/* Action - Simplified inline layout for small screen compatibility */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-[10px] text-slate-500 leading-tight text-center sm:text-left">
            By using this simulator site, you accept these non-official practice conditions.
          </p>
          <button
            onClick={onAccept}
            className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold font-display rounded-xl tracking-wider uppercase text-[10.5px] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer inline-flex items-center justify-center gap-1 shrink-0 active:scale-98"
          >
            <span>Accept &amp; Study</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
}
