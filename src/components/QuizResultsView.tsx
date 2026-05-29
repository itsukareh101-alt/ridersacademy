import { motion } from 'motion/react';
import { Award, RefreshCw, Home, AlertCircle } from 'lucide-react';
import { Question, QuizMode, AppView } from '../types';

interface QuizResultsViewProps {
  score: number;
  totalQuestions: number;
  mode: QuizMode;
  onRetake: () => void;
  onReturnToHub: () => void;
}

export default function QuizResultsView({ 
  score, 
  totalQuestions, 
  mode, 
  onRetake, 
  onReturnToHub 
}: QuizResultsViewProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isExam = mode === 'exam';
  const passed = score >= 32;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="bg-white border-2 border-slate-200 rounded-3xl p-6 md:p-8 text-center space-y-6 shadow-sm max-w-2xl mx-auto"
    >
      <div className="flex justify-center">
        <div className={`p-4 rounded-3xl shrink-0 ${
          isExam && !passed 
            ? 'bg-rose-50 text-rose-600 border border-rose-100' 
            : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
        }`}>
          <Award className="w-16 h-16 animate-bounce" />
        </div>
      </div>

      <div className="space-y-2">
        <span className="text-xs text-blue-700 font-mono uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          Summary Results Evaluated
        </span>
        <h3 className="text-2xl md:text-3xl font-display font-medium text-slate-800 font-bold">
          {isExam 
            ? (passed ? '🎉 You Passed the Mock Exam!' : '❌ Did Not Clear Testing Minimums') 
            : '📚 Session Study Complete!'}
        </h3>
        <p className="text-xs text-slate-500 max-w-lg mx-auto font-medium leading-relaxed">
          Your final motorcycle comprehension statistics are cataloged below. Standard licensing limits require scoring 80% or higher to pass.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto pt-4 text-center">
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <p className="text-[10px] text-slate-400 font-mono uppercase font-bold">Score</p>
          <p className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
            {score} / {totalQuestions}
          </p>
        </div>
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <p className="text-[10px] text-slate-400 font-mono uppercase font-bold">Accuracy</p>
          <p className={`text-xl md:text-2xl font-bold mt-1 ${
            percentage >= 80 ? 'text-emerald-600' : 'text-rose-600'
          }`}>
            {percentage}%
          </p>
        </div>
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col justify-center">
          <p className="text-[10px] text-slate-400 font-mono uppercase font-bold text-center">Evaluation</p>
          <p className={`text-xs font-bold uppercase mt-2 ${
            isExam 
              ? (passed ? 'text-emerald-700' : 'text-rose-700') 
              : 'text-blue-700'
          }`}>
            {isExam 
              ? (passed ? 'PASSED (80%+)' : 'FAILED') 
              : 'COMPLETED'}
          </p>
        </div>
      </div>

      {isExam && !passed && (
        <div className="max-w-md mx-auto p-4 bg-rose-50 rounded-2xl border border-rose-200 text-xs text-rose-900 leading-relaxed font-medium text-left flex gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <p>
            <strong className="text-rose-950 font-bold">Minnesota state DVS notice:</strong> To clear the motorcycle endorsement exam, you must answer a minimum of <strong>32 out of 40</strong> questions correctly. Focus your reviews on key riding controls and state laws!
          </p>
        </div>
      )}

      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
        <button
          onClick={onRetake}
          className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold font-display rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center gap-2 active:scale-98 text-sm"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Retake This Quiz</span>
        </button>
        <button
          onClick={onReturnToHub}
          className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-705 font-semibold font-display rounded-xl transition-all border border-slate-200 cursor-pointer flex items-center justify-center gap-2 active:scale-98 text-sm"
        >
          <Home className="w-4 h-4 text-slate-500" />
          <span>Return to Hub</span>
        </button>
      </div>

    </motion.div>
  );
}
