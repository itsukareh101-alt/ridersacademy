import { History, Trash2, ArrowRight } from 'lucide-react';
import { ExamAttempt, AppView } from '../types';

interface StatsHistoryViewProps {
  attempts: ExamAttempt[];
  onResetStats: () => void;
  setView: (view: AppView) => void;
}

export default function StatsHistoryView({ attempts, onResetStats, setView }: StatsHistoryViewProps) {
  // Compute metrics
  const totalAttempted = attempts.length;
  const examsTaken = attempts.filter(a => a.mode === 'Real Exam Simulator').length;
  const examsPassed = attempts.filter(a => a.mode === 'Real Exam Simulator' && a.status === 'PASSED').length;
  const passRate = examsTaken > 0 ? Math.round((examsPassed / examsTaken) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <span className="inline-block text-xs font-mono text-blue-700 uppercase tracking-wider px-2.5 py-1 bg-blue-100 rounded-full border border-blue-200 font-bold">
            Personal Record Book
          </span>
          <h2 className="text-2xl font-display text-slate-800 mt-2 font-bold">
            My Minnesota Practice Record
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Keep track of your mock exams, drills, and positioning practices stored locally.
          </p>
        </div>
        {attempts.length > 0 && (
          <button
            onClick={onResetStats}
            className="px-4 py-2 hover:bg-rose-50 text-rose-650 hover:text-rose-700 border border-rose-200 hover:border-rose-300 text-xs font-mono rounded-xl transition-all uppercase tracking-wider cursor-pointer font-bold bg-white flex items-center gap-1.5 active:scale-98"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Purge Local Record</span>
          </button>
        )}
      </div>

      {/* Mock stats overview dials */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 text-center space-y-1 shadow-sm hover:border-slate-300 transition-colors">
          <p className="text-xs text-slate-500 uppercase font-mono font-bold">Sessions Taken</p>
          <p className="text-3xl font-extrabold text-slate-800">{totalAttempted}</p>
          <p className="text-[10px] text-slate-400 font-medium">Practice, Drills, Exams</p>
        </div>
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 text-center space-y-1 shadow-sm hover:border-slate-300 transition-colors">
          <p className="text-xs text-slate-500 uppercase font-mono font-bold">Exam Simulator</p>
          <p className="text-3xl font-extrabold text-blue-700">{examsTaken}</p>
          <p className="text-[10px] text-slate-400 font-medium">40-Question static trials</p>
        </div>
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 text-center space-y-1 shadow-sm hover:border-slate-300 transition-colors">
          <p className="text-xs text-slate-500 uppercase font-mono font-bold">Exams Cleared</p>
          <p className="text-3xl font-extrabold text-emerald-600">{examsPassed}</p>
          <p className="text-[10px] text-slate-400 font-medium">Score of 32 or more (80%)</p>
        </div>
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 text-center space-y-1 shadow-sm hover:border-slate-300 transition-colors">
          <p className="text-xs text-slate-500 uppercase font-mono font-bold">Exams Clear Rate</p>
          <p className="text-3xl font-extrabold text-sky-600">{passRate}%</p>
          <p className="text-[10px] text-slate-400 font-medium">Average of simulator rounds</p>
        </div>
      </div>

      {/* Score logs list */}
      <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-sm">
        <h3 className="text-md font-display font-bold text-slate-800 mb-4 flex items-center gap-2">
          <History className="w-5 h-5 text-slate-500" />
          <span>Historical Attempts (Latest 30)</span>
        </h3>

        {attempts.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-sm space-y-2">
            <p className="font-semibold text-slate-650">No logged sessions found.</p>
            <p className="text-xs text-slate-400">Simulate a full mock exam or carry out drills to populate your progress records.</p>
            <div className="pt-4">
              <button
                onClick={() => setView('home')}
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl font-display transition-all cursor-pointer inline-flex items-center gap-1.5 uppercase tracking-wider"
              >
                <span>Go to Home Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs text-slate-600 border-collapse">
              <thead className="bg-slate-50/80 text-slate-500 uppercase font-mono text-[10px] border-b border-slate-200">
                <tr>
                  <th className="p-4 font-bold">Date</th>
                  <th className="p-4 font-bold">Mode</th>
                  <th className="p-4 text-center font-bold">Score</th>
                  <th className="p-4 text-center font-bold">Strikes Record</th>
                  <th className="p-4 text-center font-bold">Status Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {attempts.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-colors transition-all duration-150">
                    <td className="p-4 font-mono font-medium text-slate-450">{item.date}</td>
                    <td className="p-4">
                      <span className="font-bold text-slate-805">{item.mode}</span>
                    </td>
                    <td className="p-4 text-center font-bold text-slate-800">
                      {item.score} / {item.totalQuestions}
                    </td>
                    <td className="p-4 text-center font-mono text-slate-500">
                      {item.strikes} errors
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[9px] font-mono tracking-wider font-bold border ${
                        item.status === 'PASSED' || item.status === 'COMPLETED'
                          ? 'bg-emerald-50 text-emerald-750 border-emerald-200'
                          : 'bg-rose-50 text-rose-700 border-rose-200'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
