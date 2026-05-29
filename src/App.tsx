import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { motorcycleQuestions, Question } from './data/questions';
import { AppView, QuizMode, ExamAttempt } from './types';

// Modular Subcomponents
import Header from './components/Header';
import DashboardView from './components/DashboardView';
import QuizActiveView from './components/QuizActiveView';
import QuizResultsView from './components/QuizResultsView';
import StatsHistoryView from './components/StatsHistoryView';
import DisclaimerView from './components/DisclaimerView';

export default function App() {
  const [view, setView] = useState<AppView>(() => {
    if (typeof window !== 'undefined') {
      const accepted = localStorage.getItem('mn_moto_disclaimer_accepted');
      if (accepted === 'true') {
        return 'home';
      }
    }
    return 'disclaimer';
  });
  
  const [mode, setMode] = useState<QuizMode>('marathon');
  
  const handleAcceptDisclaimer = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('mn_moto_disclaimer_accepted', 'true');
    }
    setView('home');
  };
  
  // Quiz state
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [autoRevocationTriggered, setAutoRevocationTriggered] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Pre-fetch SpeechSynthesis voices on startup to prevent latency on subsequent clicks
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
      const handleVoicesChanged = () => {
        window.speechSynthesis.getVoices();
      };
      window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
      return () => {
        window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      };
    }
  }, []);

  // Cancel speech on question change, view change, or quiz end
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [currentIndex, view, quizFinished]);

  const currentQuestion = activeQuestions[currentIndex];

  const toggleSpeakQuestion = () => {
    if (!currentQuestion) return;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        window.speechSynthesis.cancel();
        
        // Build clear speech text with deliberate natural punctuation for perfect breathing pauses 
        const questionText = currentQuestion.question;
        const optionA = currentQuestion.options[0];
        const optionB = currentQuestion.options[1];
        const optionC = currentQuestion.options[2];
        const optionD = currentQuestion.options[3] || '';
        
        const textToSpeak = `${questionText}, , A: ${optionA}, , B: ${optionB}, , C: ${optionC}${optionD ? `, , D: ${optionD}` : ''}`;

        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        
        // Inspect available voices on the browser to choose a premium, warm, friendly human voice
        const voices = window.speechSynthesis.getVoices();
        const enVoices = voices.filter(v => v.lang.toLowerCase().startsWith('en'));
        
        const preferredVoice = 
          enVoices.find(v => v.name.toLowerCase().includes('natural')) || // Edge Natural (unbeatable)
          enVoices.find(v => v.name.toLowerCase().includes('aria')) || // Soft Microsoft Online
          enVoices.find(v => v.name.toLowerCase().includes('jenny')) || // Jenny Natural voice
          enVoices.find(v => v.name.toLowerCase().includes('samantha')) || // macOS Soft Female
          enVoices.find(v => v.name.toLowerCase().includes('google')) || // Google Cloud high-quality TTS
          enVoices.find(v => v.name.toLowerCase().includes('zira')) || // Windows Soft Female
          enVoices.find(v => v.name.toLowerCase().includes('hazel')) ||
          enVoices.find(v => v.name.toLowerCase().includes('susan')) ||
          enVoices.find(v => v.lang.includes('US') || v.lang.includes('us') || v.lang.includes('GB')) ||
          enVoices[0]; // Base English fallback
          
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }
        
        // Fine-tuning elements to ensure a soft, warm, relaxed, and fully natural speaking pace
        utterance.pitch = 1.0;   // Perfect human pitch strictly at 1.0
        utterance.rate = 0.85;   // Gentle, slower, calmer speaking rhythm (0.85 so it doesn't rush)
        utterance.volume = 0.9;  // Slightly softer audio volume level
        
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        
        setIsSpeaking(true);
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  // Initialize stats history from localStorage
  useEffect(() => {
    const savedAttempts = localStorage.getItem('mn_moto_permit_attempts');
    if (savedAttempts) {
      try {
        setAttempts(JSON.parse(savedAttempts));
      } catch (e) {
        console.error("Could not load exam attempts:", e);
      }
    }
  }, []);

  // Filter and shuffle/prepare questions depending on selected mode
  const startQuiz = (selectedMode: QuizMode) => {
    setMode(selectedMode);
    let filtered: Question[] = [];
    
    if (selectedMode === 'exam' || selectedMode === 'marathon') {
      // Full test has all questions directly
      filtered = [...motorcycleQuestions];
    } else if (selectedMode === 'controls') {
      // Filter: Controls & techniques
      filtered = motorcycleQuestions.filter(q => 
        q.question.toLowerCase().includes('brake') || 
        q.question.toLowerCase().includes('turn') || 
        q.question.toLowerCase().includes('throttle') ||
        q.question.toLowerCase().includes('steer') ||
        q.question.toLowerCase().includes('stop') ||
        q.question.toLowerCase().includes('swerve') ||
        q.question.toLowerCase().includes('clutch')
      );
    } else if (selectedMode === 'lanes') {
      // Filter: Lane positioning, following, trucks, group riding
      filtered = motorcycleQuestions.filter(q => 
        q.question.toLowerCase().includes('lane') || 
        q.question.toLowerCase().includes('follow') || 
        q.question.toLowerCase().includes('group') ||
        q.question.toLowerCase().includes('position') ||
        q.question.toLowerCase().includes('behind') ||
        q.question.toLowerCase().includes('staggered')
      );
    } else if (selectedMode === 'laws') {
      // Filter: Minnesota Specific Laws, blood alcohol, helmet requirements, permits
      filtered = motorcycleQuestions.filter(q => 
        q.question.toLowerCase().includes('minnesota') || 
        q.question.toLowerCase().includes('law') || 
        q.question.toLowerCase().includes('helmet') ||
        q.question.toLowerCase().includes('permit') ||
        q.question.toLowerCase().includes('refusal') ||
        q.question.toLowerCase().includes('implied') ||
        q.question.toLowerCase().includes('bac') ||
        q.question.toLowerCase().includes('passenger') ||
        q.question.toLowerCase().includes('legal')
      );
    }

    // Ensure absolute uniqueness
    const uniqueQuestions: Question[] = [];
    const seenIds = new Set<number>();
    for (const q of filtered) {
      if (!seenIds.has(q.id)) {
        seenIds.add(q.id);
        uniqueQuestions.push(q);
      }
    }

    // Fisher-Yates shuffle algorithm for true, unbiased randomization
    const shuffled = [...uniqueQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }

    // Limit drills to 10 questions, exams to exactly 40 questions, else keep all (marathon)
    const finalQuestions = (selectedMode !== 'exam' && selectedMode !== 'marathon')
      ? shuffled.slice(0, 10)
      : (selectedMode === 'exam' ? shuffled.slice(0, 40) : shuffled);

    setActiveQuestions(finalQuestions);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setScore(0);
    setStrikes(0);
    setQuizFinished(false);
    setAutoRevocationTriggered(false);
    setView('quiz');
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked || !currentQuestion) return;
    setSelectedAnswer(idx);
    setIsAnswerChecked(true);

    const isCorrect = idx === currentQuestion.correctAnswerIndex;

    if (isCorrect) {
      setScore(prev => prev + 1);
    } else {
      const newStrikes = strikes + 1;
      setStrikes(newStrikes);
      
      // AUTO FAIL SECURITY CHECK FOR REAL EXAM STYLE
      // Fail on 8th strike
      if (mode === 'exam' && newStrikes >= 8) {
        setAutoRevocationTriggered(true);
        logAttempt(score, newStrikes, activeQuestions.length, 'FAILED');
      }
    }
  };

  const handleNextQuestion = () => {
    if (autoRevocationTriggered) {
      setView('home');
      return;
    }

    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
    } else {
      // Reached the end successfully!
      const finalStatus = (mode === 'exam' && score < 32) ? 'FAILED' : 'PASSED';
      setQuizFinished(true);
      logAttempt(score, strikes, activeQuestions.length, mode === 'exam' ? finalStatus : 'COMPLETED');
    }
  };

  const logAttempt = (finalScore: number, finalStrikes: number, total: number, status: 'PASSED' | 'FAILED' | 'COMPLETED') => {
    const newAttempt: ExamAttempt = {
      id: Math.random().toString(36).substring(2, 9),
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      mode: mode === 'exam' ? 'Real Exam Simulator' : mode === 'marathon' ? 'Practice Marathon' : `Drill (${mode})`,
      score: finalScore,
      totalQuestions: total,
      strikes: finalStrikes,
      status
    };

    const updatedAttempts = [newAttempt, ...attempts].slice(0, 30);
    setAttempts(updatedAttempts);
    localStorage.setItem('mn_moto_permit_attempts', JSON.stringify(updatedAttempts));
  };

  const resetAllStats = () => {
    if (confirm("Are you sure you want to purge your complete Minnesota Permit progress history?")) {
      setAttempts([]);
      localStorage.removeItem('mn_moto_permit_attempts');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-905">
      
      <Header view={view} setView={setView} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6 flex flex-col justify-start">
        
        <AnimatePresence mode="wait">
          
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <DashboardView 
                autoRevocationTriggered={autoRevocationTriggered}
                setAutoRevocationTriggered={setAutoRevocationTriggered}
                startQuiz={startQuiz}
              />
            </motion.div>
          )}

          {view === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-3xl mx-auto w-full"
            >
              {!quizFinished ? (
                <QuizActiveView 
                  currentIndex={currentIndex}
                  activeQuestions={activeQuestions}
                  mode={mode}
                  strikes={strikes}
                  selectedAnswer={selectedAnswer}
                  isAnswerChecked={isAnswerChecked}
                  isSpeaking={isSpeaking}
                  onQuit={() => {
                    if (confirm("Abandon your current session progress and exit back to test center?")) {
                      setView('home');
                    }
                  }}
                  toggleSpeakQuestion={toggleSpeakQuestion}
                  onSelectOption={handleSelectOption}
                  autoRevocationTriggered={autoRevocationTriggered}
                  onNextQuestion={handleNextQuestion}
                />
              ) : (
                <QuizResultsView 
                  score={score}
                  totalQuestions={activeQuestions.length}
                  mode={mode}
                  onRetake={() => startQuiz(mode)}
                  onReturnToHub={() => setView('home')}
                />
              )}
            </motion.div>
          )}

          {view === 'stats' && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <StatsHistoryView 
                attempts={attempts}
                onResetStats={resetAllStats}
                setView={setView}
              />
            </motion.div>
          )}

          {view === 'disclaimer' && (
            <DisclaimerView 
              onAccept={handleAcceptDisclaimer}
            />
          )}

        </AnimatePresence>

      </main>

      {/* Footer bar */}
      <footer id="footer" className="mt-12 bg-white border-t border-slate-200 p-6 text-xs text-slate-500 leading-relaxed text-center sm:text-left shadow-inner transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="font-bold text-slate-800">RiderAcademy — Minnesota Motorcycle Permit Practice Companion © 2026</p>
            <p className="max-w-2xl text-slate-400">
              Constructed strictly as a realistic studying helper based on safety guidelines cited from state public motorcycle operator instruction manual materials. This site is completely independent of the state driver licensing services division. Always practice safe riding techniques and wear DOT approved gear.
            </p>
          </div>
          <div className="flex gap-4 shrink-0 font-mono text-[10px] font-semibold text-slate-500">
             <button onClick={() => setView('disclaimer')} className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer">
              Disclaimer &amp; Rules
             </button>
            <span>•</span>
            <a href="https://assets.dps.mn.gov/files/dvs/motorcycle-manual.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
              Official PDF Manual Reference
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
