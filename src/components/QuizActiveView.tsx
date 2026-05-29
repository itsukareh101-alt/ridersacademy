import { motion, AnimatePresence } from 'motion/react';
import { 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  XCircle 
} from 'lucide-react';
import { Question, QuizMode } from '../types';

interface QuizActiveViewProps {
  currentIndex: number;
  activeQuestions: Question[];
  mode: QuizMode;
  strikes: number;
  selectedAnswer: number | null;
  isAnswerChecked: boolean;
  isSpeaking: boolean;
  onQuit: () => void;
  toggleSpeakQuestion: () => void;
  onSelectOption: (idx: number) => void;
  autoRevocationTriggered: boolean;
  onNextQuestion: () => void;
}

export default function QuizActiveView({
  currentIndex,
  activeQuestions,
  mode,
  strikes,
  selectedAnswer,
  isAnswerChecked,
  isSpeaking,
  onQuit,
  toggleSpeakQuestion,
  onSelectOption,
  autoRevocationTriggered,
  onNextQuestion
}: QuizActiveViewProps) {
  const currentQuestion = activeQuestions[currentIndex];
  if (!currentQuestion) return null;

  const totalQuestions = activeQuestions.length;
  const progressPercent = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="space-y-4">
      {/* Progress Header */}
      <div className="flex items-center justify-between px-2 text-xs">
        <div>
          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
            {mode === 'exam' ? '🚨 PRACTICE EXAM' : mode === 'marathon' ? '📚 STUDY MARATHON' : '🎯 SKILL DRILL'}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-slate-600 font-bold bg-slate-100 px-3 py-1 rounded-xl border border-slate-200">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <button
            onClick={onQuit}
            className="p-1.5 px-3 bg-rose-50 hover:bg-rose-100 border border-rose-100 hover:border-rose-200 rounded-xl text-[10px] uppercase font-mono tracking-wider text-rose-600 font-bold transition-all cursor-pointer active:scale-97"
          >
            Quit
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-2">
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* EXAM STRIKES (Only active for Real Exam) */}
      {mode === 'exam' && strikes > 0 && (
        <div className="px-4 py-2 flex items-center justify-between text-xs bg-rose-50 border border-rose-100/70 text-rose-700 rounded-2xl animate-fade-in">
          <span className="font-mono font-bold uppercase text-[10px]">Strike Warning:</span>
          <span className="font-mono font-bold">{strikes} of 8 errors fail threshold</span>
        </div>
      )}

      {/* Active Question Box */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
        className="bg-white border-2 border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
      >
        
        {/* Header line */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono uppercase bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100 font-bold">
            Topic: {mode === 'exam' ? 'Exam Pool' : mode.toUpperCase()}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          <span className="text-[11px] text-slate-500 font-mono font-medium">Minnesota Safety Code</span>
        </div>

        {/* Question text */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg md:text-xl font-display text-slate-805 leading-snug flex-1 font-bold">
            {currentIndex + 1}. {currentQuestion.question}
          </h3>
          <button
            onClick={toggleSpeakQuestion}
            className={`p-2.5 rounded-xl border flex items-center justify-center transition-all cursor-pointer shrink-0 active:scale-95 ${
              isSpeaking 
                ? 'bg-blue-100 border-blue-300 text-blue-700 animate-pulse' 
                : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600'
            }`}
            title={isSpeaking ? "Stop reading" : "Read question aloud"}
          >
            {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 animate-pulse" />}
          </button>
        </div>

        {/* Multi choice options */}
        <div className="space-y-3 pt-1">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrectAnswer = idx === currentQuestion.correctAnswerIndex;
            
            let optStyle = 'bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/50';
            
            if (isAnswerChecked) {
              if (isCorrectAnswer) {
                optStyle = 'bg-emerald-50/80 border-emerald-500 text-emerald-950 font-medium scale-[1.01] transition-transform';
              } else if (isSelected) {
                optStyle = 'bg-rose-50/80 border-rose-500 text-rose-950';
              } else {
                optStyle = 'bg-slate-50/30 border-slate-100 opacity-50 text-slate-400 pointer-events-none';
              }
            } else if (isSelected) {
              optStyle = 'bg-blue-50/60 border-blue-600 text-slate-800 font-medium';
            }

            return (
              <button
                key={idx}
                id={`opt-btn-${idx}`}
                onClick={() => onSelectOption(idx)}
                disabled={isAnswerChecked}
                className={`w-full text-left p-4 rounded-xl border text-sm transition-all duration-200 flex items-start gap-3 cursor-pointer ${optStyle}`}
              >
                <span className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 border transition-colors ${
                  isSelected 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'bg-slate-100 border-slate-250 text-slate-600'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1 pt-0.5 leading-snug font-medium text-slate-750">{option}</span>
                
                {/* Icon validation check indicators if checked */}
                {isAnswerChecked && isCorrectAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 self-center" />
                )}
                {isAnswerChecked && isSelected && !isCorrectAnswer && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 self-center" />
                )}
              </button>
            );
          })}
        </div>

        {/* Answer explanation CITATION */}
        <AnimatePresence>
          {isAnswerChecked && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-4.5 space-y-2 overflow-hidden text-sm"
            >
              <div className="flex items-center gap-1.5 text-xs text-blue-700 font-mono font-bold uppercase">
                <ShieldCheck className="w-4.5 h-4.5 text-blue-700" />
                <span>Minnesota Safety Rule Citation</span>
              </div>
              <p className="text-xs text-slate-650 leading-relaxed font-semibold">
                {currentQuestion.explanation}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next Buttons actions */}
        <div className="pt-4 border-t border-slate-200 flex justify-between items-center gap-3">
          <div>
            {!isAnswerChecked && (
              <span className="text-xs text-slate-400 font-medium">Step through options and select to lock-in your answer</span>
            )}
          </div>
          
          {isAnswerChecked && (
            <button
              id="btn-next-question"
              onClick={onNextQuestion}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold font-display rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ml-auto active:scale-97 hover:shadow"
            >
              <span>{autoRevocationTriggered ? "Fail & Quit" : (currentIndex + 1 === totalQuestions ? "Finish Test" : "Next Question")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </motion.div>
    </div>
  );
}
