import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { motorcycleQuestions } from './data/questions';
import { driverQuestions } from './data/driverQuestions';
import { Question, AppView, QuizMode, ExamAttempt, PermitType } from './types';

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
  const [permitType, setPermitType] = useState<PermitType>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mn_moto_permit_type');
      if (saved === 'motorcycle' || saved === 'classD') {
        return saved as PermitType;
      }
    }
    return 'motorcycle';
  });

  const handleSetPermitType = (type: PermitType) => {
    setPermitType(type);
    if (typeof window !== 'undefined') {
      localStorage.setItem('mn_moto_permit_type', type);
    }
  };
  
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

  // Softened Speech Synthesis configurations
  const [voiceVolume, setVoiceVolumeState] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mn_permit_voice_volume');
      return saved ? parseFloat(saved) : 0.65; // Soft and comfortable default
    }
    return 0.65;
  });

  const voiceRate = 0.80;   // Calm, slower cadence (80% speed) to avoid rushing
  const voicePitch = 0.95;  // Warm, slightly deeper frequency (95% pitch)

  const setVoiceVolume = (v: number) => {
    setVoiceVolumeState(v);
    if (typeof window !== 'undefined') {
      localStorage.setItem('mn_permit_voice_volume', v.toString());
    }
  };

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

  // Attempt to render live PayPal Hosted Button components when the SDK finishes loading
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const interval = setInterval(() => {
      const paypal = (window as any).paypal;
      if (paypal && paypal.HostedButtons) {
        clearInterval(interval);
        try {
          const container = document.getElementById('paypal-container-MN_STUDY_DONATE');
          if (container) {
            // Render the hosted button if SDK is fully initialized
            paypal.HostedButtons({
              hostedButtonId: "MN_DONATION_BTN", // Custom/configurable identifier
            }).render("#paypal-container-MN_STUDY_DONATE")
              .catch((err: any) => {
                console.log("PayPal Hosted Button loaded, waiting for active configuration:", err);
              });
          }
        } catch (e) {
          console.warn("PayPal initialization fallback helper:", e);
        }
      }
    }, 1500);

    return () => clearInterval(interval);
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
        utterance.pitch = voicePitch;   // Adjusted pitch for softer tone
        utterance.rate = voiceRate;     // Adjusted speaking pace
        utterance.volume = voiceVolume; // Adjusted volume level
        
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
    
    const pool = permitType === 'motorcycle' ? motorcycleQuestions : driverQuestions;

    if (selectedMode === 'exam' || selectedMode === 'marathon') {
      // Full test has all questions directly
      filtered = [...pool];
    } else if (permitType === 'motorcycle') {
      if (selectedMode === 'controls') {
        // Filter: Controls & techniques
        filtered = pool.filter(q => 
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
        filtered = pool.filter(q => 
          q.question.toLowerCase().includes('lane') || 
          q.question.toLowerCase().includes('follow') || 
          q.question.toLowerCase().includes('group') ||
          q.question.toLowerCase().includes('position') ||
          q.question.toLowerCase().includes('behind') ||
          q.question.toLowerCase().includes('staggered')
        );
      } else if (selectedMode === 'laws') {
        // Filter: Minnesota Specific Laws, blood alcohol, helmet requirements, permits
        filtered = pool.filter(q => 
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
    } else {
      // Driver Class D filtered grills
      if (selectedMode === 'controls') {
        // Signs & signals
        filtered = pool.filter(q => 
          q.question.toLowerCase().includes('sign') || 
          q.question.toLowerCase().includes('signal') || 
          q.question.toLowerCase().includes('light') || 
          q.question.toLowerCase().includes('mark') || 
          q.question.toLowerCase().includes('shape') ||
          q.question.toLowerCase().includes('diamond') ||
          q.question.toLowerCase().includes('yellow circle') ||
          q.question.toLowerCase().includes('octagonal')
        );
      } else if (selectedMode === 'lanes') {
        // Speed & Right-of-way
        filtered = pool.filter(q => 
          q.question.toLowerCase().includes('speed') || 
          q.question.toLowerCase().includes('right-of-way') || 
          q.question.toLowerCase().includes('yield') || 
          q.question.toLowerCase().includes('uncontrolled') || 
          q.question.toLowerCase().includes('roundabout') || 
          q.question.toLowerCase().includes('follow') || 
          q.question.toLowerCase().includes('park') || 
          q.question.toLowerCase().includes('curb') ||
          q.question.toLowerCase().includes('alley')
        );
      } else if (selectedMode === 'laws') {
        // Laws, DWI & Safety (Implied Consent, Not a Drop, Vanessa's Law, Ted Foss, seatbelt)
        filtered = pool.filter(q => 
          q.question.toLowerCase().includes('law') || 
          q.question.toLowerCase().includes('alcohol') || 
          q.question.toLowerCase().includes('bac') || 
          q.question.toLowerCase().includes('consent') || 
          q.question.toLowerCase().includes('insurance') || 
          q.question.toLowerCase().includes('seat belt') || 
          q.question.toLowerCase().includes('vanessa') || 
          q.question.toLowerCase().includes('not a drop') ||
          q.question.toLowerCase().includes('drop') ||
          q.question.toLowerCase().includes('cell') ||
          q.question.toLowerCase().includes('mobile') ||
          q.question.toLowerCase().includes('hands-free') ||
          q.question.toLowerCase().includes('move over') ||
          q.question.toLowerCase().includes('report') ||
          q.question.toLowerCase().includes('flee')
        );
      }
    }

    // Safety fallback
    if (filtered.length === 0) {
      filtered = [...pool];
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
      status,
      permitType: permitType
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
      
      <Header view={view} setView={setView} permitType={permitType} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6 flex flex-col justify-start">
        
        {/* License Type Picker - Beautiful, responsive segment navigation selection */}
        {view !== 'quiz' && view !== 'disclaimer' && (
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="bg-white p-1 rounded-2xl border-2 border-slate-205/60 border-slate-200 shadow-sm flex items-center gap-1">
              <button
                id="opt-license-moto"
                onClick={() => handleSetPermitType('motorcycle')}
                className={`px-5 py-2.5 rounded-xl text-xs font-display font-medium tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 active:scale-97 ${
                  permitType === 'motorcycle'
                    ? 'bg-amber-600 text-white font-bold shadow-sm'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>🏍️ Class M Motorcycle</span>
              </button>
              <button
                id="opt-license-driver"
                onClick={() => handleSetPermitType('classD')}
                className={`px-5 py-2.5 rounded-xl text-xs font-display font-medium tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 active:scale-97 ${
                  permitType === 'classD'
                    ? 'bg-indigo-650 bg-indigo-600 text-white font-bold shadow-sm'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>🚗 Class D Driver</span>
              </button>
            </div>
          </div>
        )}

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
                permitType={permitType}
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
                  permitType={permitType}
                  voiceVolume={voiceVolume}
                  setVoiceVolume={setVoiceVolume}
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
                permitType={permitType}
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <p className="font-bold text-slate-800">MN-StudyBook — Minnesota Permit Practice Companion © 2026</p>
            <p className="max-w-2xl text-slate-400">
              Constructed strictly as a realistic studying helper based on safety guidelines cited from state public operator instruction manuals. This site is completely independent of the state driver licensing services division. Always practice safe driving techniques, pay full attention, and wear safety gear.
            </p>

            {/* PayPal & Venmo Support Area */}
            <div className="flex flex-col sm:flex-row items-center gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 max-w-md inline-flex">
              <div className="text-center sm:text-left">
                <p className="text-[11px] font-bold text-slate-700">Support MN-StudyBook development</p>
                <p className="text-[10px] text-slate-400 leading-tight">Keep study guides ad-free and updated for prospective drivers.</p>
              </div>
              <div id="paypal-container-MN_STUDY_DONATE" className="shrink-0 min-w-[130px] flex justify-center items-center">
                <a 
                  href="https://www.paypal.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-[#FFC439] hover:bg-[#F2B930] text-blue-900 font-bold font-sans rounded-xl text-[11px] shadow-xs hover:shadow-sm transition-all inline-flex items-center gap-1.5 cursor-pointer active:scale-95 text-center justify-center w-full"
                >
                  <span>PayPal / Venmo</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-4 shrink-0 font-mono text-[10px] font-semibold text-slate-500">
             <button onClick={() => setView('disclaimer')} className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer">
              Disclaimer &amp; Rules
             </button>
            <span>•</span>
            <a href="https://assets.dps.mn.gov/files/dvs/motorcycle-manual.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline text-blue-650">
              Class M Manual
            </a>
            <span>•</span>
            <a href="https://assets.dps.mn.gov/files/dvs/dvs-class-d-drivers-manual-english.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline text-blue-650">
              Class D Driver Manual
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
