import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Timer,
  RotateCcw,
  Calendar,
  Lock,
  Smartphone,
  Info
} from 'lucide-react';

import truckAsset from './assets/truck-autoluce.svg';

const AutoluceTruckSpeedIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 60" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(0 0 14px rgba(0, 255, 102, 0.5))' }}
  >
    {/* Dynamic Motion Trails - Tapered & Aggressive */}
    <g stroke="#00FF66" strokeWidth="2.5" strokeLinecap="round">
      <path d="M2,24 H22" opacity="0.7" />
      <path d="M6,32 H26" opacity="0.5" />
      <path d="M10,40 H20" opacity="0.3" />
    </g>
    
    {/* Cyber-Logistics Sleek Body Silhouette */}
    <path 
      d="M32,18 C30,18 28,19 28,22 V46 C28,47 29,48 30,48 H94 C95.5,48 96,47 96.5,46 L97.5,43 C98,41 97,38 94,34 L80,21 C77,18 73,18 70,18 H32Z" 
      stroke="#00FF66" 
      strokeWidth="3.2" 
      strokeLinejoin="round" 
      strokeLinecap="round" 
      fill="none"
    />
    
    {/* Tech Accent / Window Gap */}
    <path 
      d="M74,22 L86,34 H68 L70,22 C71,22 73,22 74,22Z" 
      fill="#00FF66" 
      fillOpacity="0.2"
    />
    
    {/* Futuristic Hubless-style Wheels */}
    <circle cx="44" cy="49" r="6.5" stroke="#00FF66" strokeWidth="2.5" fill="none" />
    <circle cx="82" cy="49" r="6.5" stroke="#00FF66" strokeWidth="2.5" fill="none" />
  </svg>
);

const AutoluceTruckStaticIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 60" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(0 0 18px rgba(0, 255, 102, 0.35))' }}
  >
    {/* Centered Aggressive Silhouette Match */}
    <path 
      d="M18,18 C16,18 14,19 14,22 V46 C14,47 15,48 16,48 H80 C81.5,48 82,47 82.5,46 L83.5,43 C84,41 83,38 80,34 L66,21 C63,18 59,18 56,18 H18Z" 
      stroke="#00FF66" 
      strokeWidth="3.2" 
      strokeLinejoin="round" 
      strokeLinecap="round" 
      fill="none"
    />
    
    <circle cx="30" cy="49" r="6.5" stroke="#00FF66" strokeWidth="2.5" fill="none" />
    <circle cx="68" cy="49" r="6.5" stroke="#00FF66" strokeWidth="2.5" fill="none" />
  </svg>
);

import { BRANCHES, SHUTTLES, type Branch, type Shuttle } from './data/shuttleData';

const DAYS = [
  { id: 0, name: 'Lunedì' },
  { id: 1, name: 'Martedì' },
  { id: 2, name: 'Mercoledì' },
  { id: 3, name: 'Giovedì' },
  { id: 4, name: 'Venerdì' },
];

const HUB_ID = '60';

const getInitialDay = () => {
    const day = new Date().getDay();
    return day === 0 || day === 6 ? 4 : day - 1;
};

const getInitialTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
};

interface RouteOption {
    originId: string;
    departureDate: Date | null;
    arrivalDate: Date | null;
    orderDeadline: Date | null;
    firstLeg: Shuttle | null;
    secondLeg: Shuttle | null;
    isAvailable: boolean;
    isTripOvernight: boolean;
    isBestEta?: boolean;
    isEquivalent?: boolean;
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'autoluce24') {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 uppercase selection:bg-primary selection:text-black">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-12"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-6xl font-black tracking-tighter">
            SHUTTLE<span className="text-primary">SYNC</span>
          </h1>
          <div className="text-primary text-xl font-bold tracking-[0.3em] select-none">
            AUTOLUCE ACCESS
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <div className={`absolute -inset-1 bg-primary/20 blur opacity-0 group-hover:opacity-100 transition duration-1000 ${error ? 'bg-red-500/50 opacity-100' : ''}`}></div>
            <div className="relative bg-[#111111] border border-white/10 p-4 flex items-center gap-4">
              <Lock className={`w-6 h-6 ${error ? 'text-red-500' : 'text-primary'}`} />
              <input 
                type="password" 
                placeholder="PASSWORD INTERNA"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border-none text-xl font-black text-white focus:outline-none w-full placeholder:text-white/10 uppercase"
                autoFocus
              />
            </div>
          </div>
          <button 
            type="submit"
            className="w-full bg-primary py-5 text-black font-black text-xl tracking-[0.5em] hover:bg-white transition-colors active:scale-95 transform"
          >
            ENTRA
          </button>
        </form>

        <div className="text-center font-mono text-[10px] tracking-widest text-white/10">
          PROPRIETARY LOGISTICS SOFTWARE / ENCRYPTED
        </div>
      </motion.div>
    </div>
  );
}

function PWAInstallModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm uppercase">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#111111] border border-white/10 p-8 max-w-lg w-full space-y-8"
      >
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-black tracking-tight text-primary">INSTALLAZIONE APP</h2>
          <button onClick={onClose} className="text-white/20 hover:text-white">CHIUDI</button>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-black text-white/40 tracking-widest flex items-center gap-2">
              <Smartphone className="w-4 h-4" /> SU IPHONE (IOS)
            </h3>
            <p className="text-white/60 text-xs leading-relaxed tracking-wider">
              1. APRI IL SITO IN <span className="text-white">SAFARI</span>.<br />
              2. TOCCA L'ICONA <span className="text-white">CONDIVIDI</span> (IL QUADRATO CON LA FRECCIA).<br />
              3. SCORRI E SELEZIONA <span className="text-white">"AGGIUNGI ALLA SCHERMATA HOME"</span>.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <h3 className="text-sm font-black text-white/40 tracking-widest flex items-center gap-2">
              <Smartphone className="w-4 h-4" /> SU ANDROID
            </h3>
            <p className="text-white/60 text-xs leading-relaxed tracking-wider">
              1. APRI IL SITO IN <span className="text-white">CHROME</span>.<br />
              2. TOCCA I <span className="text-white">TRE PUNTINI</span> IN ALTO A DESTRA.<br />
              3. SELEZIONA <span className="text-white">"INSTALLA APP"</span>.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <h3 className="text-sm font-black text-white/40 tracking-widest flex items-center gap-2">
              <Smartphone className="w-4 h-4" /> SU PC
            </h3>
            <p className="text-white/60 text-xs leading-relaxed tracking-wider">
              1. APRI IL SITO IN <span className="text-white">CHROME / EDGE</span>.<br />
              2. CLICCA L'ICONA <span className="text-white">"INSTALLA"</span> NELLA BARRA DEGLI INDIRIZZI IN ALTO.
            </p>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="w-full bg-white/5 border border-white/10 py-4 text-white font-black hover:bg-primary hover:text-black transition-all tracking-[0.3em]"
        >
          HO CAPITO
        </button>
      </motion.div>
    </div>
  );
}

export default function App() {
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showPWAInfo, setShowPWAInfo] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);
  const [destination, setDestination] = useState<string>('60'); 
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number>(getInitialDay());
  const [departureTime, setDepartureTime] = useState<string>(getInitialTime());
  const [results, setResults] = useState<RouteOption[] | null>(null);

  useEffect(() => {
    const session = localStorage.getItem('autoluce_session');
    if (session === 'active') {
      setIsLoggedIn(true);
    }

    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } else {
      setShowPWAInfo(true);
    }
  };

  const handleLogin = () => {
    localStorage.setItem('autoluce_session', 'active');
    setIsLoggedIn(true);
  };

  // Skip rendering the rest if not logged in
  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const syncToCurrentTime = () => {
    const now = new Date();
    setSelectedDay(getInitialDay());
    setDepartureTime(getInitialTime());
  };

  const markInteraction = () => {
    if (!hasUserInteracted) {
      syncToCurrentTime();
      setHasUserInteracted(true);
    }
  };

  const toggleOrigin = (branchId: string) => {
    markInteraction();
    setSelectedOrigins(prev => {
      if (prev.includes(branchId)) {
        return prev.filter(id => id !== branchId);
      }
      return [...prev, branchId];
    });
  };

  const timeToMinutes = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const handleReset = () => {
    setHasUserInteracted(false);
    setSelectedOrigins([]);
    setDestination('60');
    syncToCurrentTime();
    setResults(null);
  };

  const calculateResults = () => {
    markInteraction();
    if (selectedOrigins.length === 0) {
      setResults(null);
      return;
    }

    // Dynamic reference: Get Monday of the current week
    const getBaseDate = (dayIndex: number, timeStr: string) => {
      const today = new Date();
      const currentDay = today.getDay(); // 0 is Sunday, 1 is Monday
      const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay;
      
      const monday = new Date(today);
      monday.setDate(today.getDate() + diffToMonday);
      monday.setHours(0, 0, 0, 0);
      
      const targetDate = new Date(monday);
      targetDate.setDate(monday.getDate() + dayIndex);
      
      const [h, m] = timeStr.split(':').map(Number);
      targetDate.setHours(h, m, 0, 0);
      return targetDate;
    };

    const referenceDate = getBaseDate(selectedDay, departureTime);
    const HUB_TRANSFER_GRACE_PERIOD_MS = 120 * 60 * 1000; // 120 minutes grace for hub connections (e.g. 19:30 catching 18:30)

    const initialResults = selectedOrigins.map(originId => {
      const options: RouteOption[] = [];

      const calculateArrivalDate = (shuttle: Shuttle, departureDate: Date) => {
        const arrival = new Date(departureDate);
        const [h, m] = shuttle.arrivalTime.split(':').map(Number);
        arrival.setHours(h, m, 0, 0);

        const depMins = timeToMinutes(shuttle.departureTime);
        const arrMins = timeToMinutes(shuttle.arrivalTime);
        
        if (shuttle.isEveningOvernight || arrMins < depMins) {
          arrival.setTime(arrival.getTime() + 24 * 60 * 60 * 1000);
        }

        const isFriday = departureDate.getDay() === 5;
        if (isFriday && shuttle.fridayArrivalOverride) {
          const [oh, om] = shuttle.fridayArrivalOverride.split(':').map(Number);
          arrival.setDate(departureDate.getDate() + (shuttle.fridayArrivalDayOffset || 1));
          arrival.setHours(oh, om, 0, 0);
        }
        
        return arrival;
      };

      const calculateDeadline = (shuttle: Shuttle, departureDate: Date) => {
        const deadline = new Date(departureDate);
        if (shuttle.requiresPreviousDayOrder) {
          deadline.setDate(deadline.getDate() - 1);
          deadline.setHours(18, 30, 0, 0);
        } else {
          deadline.setMinutes(deadline.getMinutes() - 5);
        }
        return deadline;
      };

      // Search window: check instances starting from selectedDay up to 4 days ahead
      const searchEnd = new Date(referenceDate.getTime() + 96 * 60 * 60 * 1000);

      // 1. Direct Routes
      const directShuttles = SHUTTLES.filter(s => s.fromId === originId && s.toId === destination);
      directShuttles.forEach(s => {
        const baseDate = getBaseDate(selectedDay, s.departureTime);
        for (let i = 0; i < 4; i++) {
          const depDate = new Date(baseDate.getTime() + i * 24 * 60 * 60 * 1000);
          const deadline = calculateDeadline(s, depDate);
          
          if (deadline >= referenceDate && deadline <= searchEnd) {
            const arrDate = calculateArrivalDate(s, depDate);
            options.push({
              originId,
              departureDate: depDate,
              arrivalDate: arrDate,
              orderDeadline: deadline,
              firstLeg: s,
              secondLeg: null,
              isAvailable: true,
              isTripOvernight: s.isEveningOvernight || (arrDate.getTime() - depDate.getTime() > 14 * 60 * 60 * 1000)
            });
          }
        }
      });

      // 2. Hub Routes
      if (originId !== HUB_ID && destination !== HUB_ID) {
        const toHub = SHUTTLES.filter(s => s.fromId === originId && s.toId === HUB_ID);
        const fromHub = SHUTTLES.filter(s => s.fromId === HUB_ID && s.toId === destination);

        toHub.forEach(s1 => {
          const baseDate1 = getBaseDate(selectedDay, s1.departureTime);
          for (let i = 0; i < 4; i++) {
            const depDate1 = new Date(baseDate1.getTime() + i * 24 * 60 * 60 * 1000);
            const deadline = calculateDeadline(s1, depDate1);
            
            if (deadline >= referenceDate && deadline <= searchEnd) {
              const arrDate1 = calculateArrivalDate(s1, depDate1);

              fromHub.forEach(s2 => {
                const baseDate2 = getBaseDate(selectedDay, s2.departureTime);
                for (let j = 0; j < 4; j++) {
                  const depDate2 = new Date(baseDate2.getTime() + (i + j - 1) * 24 * 60 * 60 * 1000);
                  
                  const canConnect = s2.isEveningOvernight 
                    ? (depDate2.getTime() >= arrDate1.getTime() - HUB_TRANSFER_GRACE_PERIOD_MS && depDate2.getDate() === arrDate1.getDate())
                    : (depDate2.getTime() >= arrDate1.getTime());

                  if (canConnect && depDate2 <= searchEnd) {
                    const finalArrival = calculateArrivalDate(s2, depDate2);
                    options.push({
                      originId,
                      departureDate: depDate1,
                      arrivalDate: finalArrival,
                      orderDeadline: deadline,
                      firstLeg: s1,
                      secondLeg: s2,
                      isAvailable: true,
                      isTripOvernight: s1.isEveningOvernight || s2.isEveningOvernight || (finalArrival.getTime() - depDate1.getTime() > 14 * 60 * 60 * 1000)
                    });
                  }
                }
              });
            }
          }
        });
      }

      const validOptions = options.filter(o =>
        o.isAvailable &&
        o.arrivalDate !== null &&
        o.orderDeadline !== null
      );

      if (validOptions.length === 0) {
        return { 
          originId, 
          isAvailable: false,
          departureDate: null,
          arrivalDate: null,
          orderDeadline: null,
          firstLeg: null,
          secondLeg: null,
          isTripOvernight: false
        } as RouteOption;
      }

      const bestOption = validOptions.sort((a, b) => {
        // Priority 1: Arrival Date (Earliest first)
        const arrivalA = Math.floor(a.arrivalDate!.getTime() / 60000);
        const arrivalB = Math.floor(b.arrivalDate!.getTime() / 60000);

        if (arrivalA !== arrivalB) {
          return arrivalA - arrivalB;
        }

        // Priority 2: Order Deadline (Latest first)
        const deadlineA = Math.floor(a.orderDeadline!.getTime() / 60000);
        const deadlineB = Math.floor(b.orderDeadline!.getTime() / 60000);

        return deadlineB - deadlineA;
      })[0];

      return bestOption;
    });

    // 3. Global Optimization across all origins for the Badge
    const availableResults = initialResults.filter(r => r.isAvailable);
    
    if (availableResults.length > 0) {
      // Find the absolute best criteria across all available options
      const minArrival = Math.min(...availableResults.map(r => Math.floor(r.arrivalDate!.getTime() / 60000)));
      const bestEtaOptions = availableResults.filter(r => Math.floor(r.arrivalDate!.getTime() / 60000) === minArrival);
      const maxDeadlineMins = Math.max(...bestEtaOptions.map(r => Math.floor(r.orderDeadline!.getTime() / 60000)));

      // Identify candidates for Best ETA
      const bestCandidates = availableResults.filter(r => 
        Math.floor(r.arrivalDate!.getTime() / 60000) === minArrival && 
        Math.floor(r.orderDeadline!.getTime() / 60000) === maxDeadlineMins
      );

      const isMultipleBest = bestCandidates.length > 1;

      availableResults.forEach(r => {
        const currentArrivalMins = Math.floor(r.arrivalDate!.getTime() / 60000);
        const currentDeadlineMins = Math.floor(r.orderDeadline!.getTime() / 60000);
        
        const isThisBest = currentArrivalMins === minArrival && currentDeadlineMins === maxDeadlineMins;

        if (isThisBest) {
          if (isMultipleBest) {
            r.isEquivalent = true; // Use this to trigger the EQUIVALENTE badge
            r.isBestEta = true;    // Still keep highlighted style
          } else {
            r.isBestEta = true;    // Only winner gets BEST ETA
          }
        } else {
          // Check for other equivalent groups (not best)
          const duplicates = availableResults.filter(other => 
            Math.floor(other.arrivalDate!.getTime() / 60000) === currentArrivalMins &&
            Math.floor(other.orderDeadline!.getTime() / 60000) === currentDeadlineMins
          ).length;

          if (duplicates > 1) {
            r.isEquivalent = true;
          }
        }
      });
    }

    setResults(initialResults.sort((a, b) => {
      if (a.isAvailable !== b.isAvailable) return a.isAvailable ? -1 : 1;
      if (!a.isAvailable) return 0;
      
      const arrivalA = Math.floor(a.arrivalDate!.getTime() / 60000);
      const arrivalB = Math.floor(b.arrivalDate!.getTime() / 60000);
      if (arrivalA !== arrivalB) {
        return arrivalA - arrivalB;
      }
      
      const deadlineA = Math.floor(a.orderDeadline!.getTime() / 60000);
      const deadlineB = Math.floor(b.orderDeadline!.getTime() / 60000);
      return deadlineB - deadlineA;
    }));

    // Scroll to results
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const time = date.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
    
    // Dynamic reference for today
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dateDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const diffMs = dateDay.getTime() - today.getTime();
    const diffDays = Math.round(diffMs / (24 * 60 * 60 * 1000));

    if (diffDays === 0) return time;
    if (diffDays === 1) return `DOMANI ${time}`;
    if (date.getDay() === 6) return `SABATO ${time}`;
    if (date.getDay() === 0) return `DOMENICA ${time}`;
    if (date.getDay() === 1) return `LUNEDÌ ${time}`;
    
    return `${date.toLocaleDateString('it-IT', { weekday: 'short' }).toUpperCase()} ${time}`;
  };

  const destinationName = BRANCHES.find(b => b.id === destination)?.name;

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans flex flex-col p-4 sm:p-6 lg:p-8 overflow-x-hidden uppercase">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start border-b border-[#222222] pb-6 mb-8 max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <h1 className="text-5xl sm:text-6xl lg:text-[7rem] font-black tracking-tighter leading-none select-none">
            SHUTTLE<span className="text-primary">SYNC</span>
          </h1>
          <div className="flex items-center gap-4 mt-2">
            <div className="text-primary text-base sm:text-xl font-bold tracking-[0.2em] select-none">
              AUTOLUCE
            </div>
            <button 
              onClick={handleInstallClick}
              className="bg-primary/10 text-primary border border-primary/20 p-1 px-2 rounded flex items-center gap-2 hover:bg-primary hover:text-black transition-all group"
            >
              <Smartphone className="w-3 h-3" />
              <span className="text-[10px] font-black tracking-widest uppercase">{deferredPrompt ? 'INSTALLA APP' : 'GUIDA APP'}</span>
            </button>
          </div>
        </div>
        <div className="text-left sm:text-right font-mono text-[10px] tracking-[0.3em] text-white/20 mt-4 sm:mt-2 select-none">
          LOGISTIC IQ / V.4.2
        </div>
      </header>

      <AnimatePresence>
        {showPWAInfo && <PWAInstallModal onClose={() => setShowPWAInfo(false)} />}
      </AnimatePresence>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1600px] mx-auto w-full flex-grow pb-12 px-4 sm:px-6 lg:px-8">
        {/* Sidebar: Ordina Da - Col 1 (3/12) */}
        <section className="lg:col-span-3 space-y-6">
          <h2 className="text-lg font-black tracking-widest text-white mb-6 select-none">ORDINA DA</h2>
          <div className="flex flex-col gap-2">
            {BRANCHES.map((branch) => {
              const isSelected = selectedOrigins.includes(branch.id);
              if (branch.id === destination) return null;
              return (
                <button
                  key={branch.id}
                  onClick={() => toggleOrigin(branch.id)}
                  className={`
                    flex items-center justify-between p-4 transition-all duration-200 border cursor-pointer select-none
                    ${isSelected 
                      ? 'bg-primary/5 border-primary text-primary shadow-[inset_0_0_10px_rgba(204,255,0,0.05)]' 
                      : 'bg-[#111111] border-[#222222] text-white/40 hover:border-[#333333]'}
                  `}
                >
                  <span className="font-bold text-xs tracking-widest">{branch.name}</span>
                  <div className={`w-4 h-4 border ${isSelected ? 'bg-primary border-primary' : 'border-[#333333]'}`} />
                </button>
              );
            })}
          </div>
        </section>

        {/* Center Column: Destination + Time + Actions - Col 2 (4/12) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Destinazione */}
          <div className="bg-[#111111] p-6 lg:p-8 border-l-4 border-primary flex flex-col justify-between min-h-[160px]">
            <h2 className="text-xs font-black tracking-widest text-white/40 mb-4 select-none">DESTINAZIONE</h2>
            <div className="relative group">
              <select 
                value={destination}
                onChange={(e) => {
                  markInteraction();
                  const newDest = e.target.value;
                  setDestination(newDest);
                  if (selectedOrigins.includes(newDest)) {
                    toggleOrigin(newDest);
                  }
                }}
                className="w-full bg-transparent border-none py-2 text-3xl lg:text-4xl font-black tracking-tighter text-primary focus:outline-none appearance-none cursor-pointer uppercase relative z-10"
              >
                {BRANCHES.map(b => (
                  <option key={b.id} value={b.id} className="bg-black text-white">{b.name}</option>
                ))}
              </select>
              <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-primary w-8 h-8 lg:w-10 lg:h-10 pointer-events-none group-hover:translate-x-1 transition-transform" />
              <div className="h-[1px] bg-[#222222] mt-4" />
            </div>
          </div>

          {/* Giorno / Orario */}
          <div className="bg-[#111111] p-6 lg:p-8 border-l-4 border-[#333333] flex flex-col justify-between min-h-[160px]">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="flex flex-col justify-center space-y-3">
                <div className="flex items-center gap-2 text-white/30">
                  <Calendar className="w-4 h-4" />
                  <span className="text-[10px] font-black tracking-widest select-none">GIORNO</span>
                </div>
                <select 
                  value={selectedDay}
                  onChange={(e) => {
                    markInteraction();
                    setSelectedDay(Number(e.target.value));
                  }}
                  className="w-full bg-transparent border-none py-1 text-xl lg:text-2xl font-black text-white focus:outline-none appearance-none cursor-pointer uppercase"
                >
                  {DAYS.map(day => (
                    <option key={day.id} value={day.id} className="bg-black text-white">{day.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex flex-col justify-center text-right space-y-3">
                <div className="flex items-center justify-end gap-2 text-white/30">
                  <span className="text-[10px] font-black tracking-widest uppercase select-none">ORARIO</span>
                  <Timer className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-end gap-3">
                  <input 
                    type="time" 
                    value={departureTime}
                    onFocus={markInteraction}
                    onChange={(e) => {
                      setHasUserInteracted(true);
                      setDepartureTime(e.target.value);
                    }}
                    className="bg-transparent border-none text-xl lg:text-2xl font-black text-white focus:outline-none appearance-none cursor-pointer uppercase w-full text-right"
                  />
                  <button 
                    onClick={syncToCurrentTime}
                    className="text-white/20 hover:text-primary transition-colors shrink-0"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[1px] bg-[#222222] mt-4" />
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={calculateResults}
              disabled={selectedOrigins.length === 0}
              className={`
                aspect-square sm:aspect-auto py-6 transition-all flex items-center justify-center border-2
                ${selectedOrigins.length > 0 
                  ? 'bg-black border-primary text-primary hover:bg-primary/5 cursor-pointer shadow-[0_0_30px_rgba(204,255,0,0.15)] active:scale-95' 
                  : 'bg-[#111111] text-white/5 cursor-not-allowed border-[#222222]'}
              `}
            >
              <AutoluceTruckSpeedIcon className={`w-12 h-12 lg:w-20 lg:h-20 transition-transform ${selectedOrigins.length > 0 ? 'hover:scale-105' : ''}`} />
            </button>

            <button 
              onClick={handleReset}
              className="bg-black border border-[#222222] py-6 flex items-center justify-center gap-4 transition-all hover:bg-[#111111] group active:scale-95 shadow-[inset_0_0_20px_rgba(255,255,255,0.01)]"
            >
              <RotateCcw className="w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity" />
              <span className="text-sm font-black tracking-[0.4em] opacity-40 group-hover:opacity-100 uppercase">RESET</span>
            </button>
          </div>
        </div>

        {/* Column 3: Results Panel - Col 3 (5/12) */}
        <section ref={resultsRef} className="lg:col-span-5 flex flex-col gap-6 scroll-mt-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-black tracking-widest text-white select-none">PIANO DI CONSEGNA</h2>
            <div className="bg-[#111111] border border-[#222222] p-2 text-white/20 select-none">...</div>
          </div>

          <div className="flex-1 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {results && results.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {results.map((route) => {
                    const isBest = route.isBestEta;
                    const origin = BRANCHES.find(b => b.id === route.originId);
                    
                    if (!route.isAvailable) {
                      return (
                        <div key={route.originId} className="p-4 bg-[#111111]/30 border-l-4 border-white/5 opacity-30 flex justify-between items-center select-none">
                          <span className="font-bold tracking-widest text-sm">{origin?.name}</span>
                          <span className="text-[10px] font-black">NON DISPONIBILE</span>
                        </div>
                      );
                    }

                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        key={route.originId}
                        className={`
                          p-6 border-l-4 flex flex-col gap-5 relative group overflow-hidden
                          ${isBest ? 'border-primary bg-black shadow-[0_10px_40px_rgba(0,0,0,0.5)]' : 'border-[#222222] bg-[#111111]'}
                        `}
                      >
                        {isBest && (
                          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[40px] pointer-events-none" />
                        )}
                        
                        <div className="flex justify-between items-start relative z-10">
                          <div className="space-y-5 flex-1">
                             <h3 className={`text-xl lg:text-3xl font-black tracking-tight ${isBest ? 'text-primary' : 'text-white'}`}>
                               {origin?.name}
                             </h3>
                             <div className="space-y-1">
                                <p className="text-[10px] font-black text-white/30 tracking-widest">ORDINA ENTRO</p>
                                <p className="text-xl lg:text-2xl font-black font-mono">{formatDate(route.orderDeadline)}</p>
                             </div>
                          </div>

                          <div className="flex flex-col items-end gap-10 flex-1">
                            <div className="flex gap-2">
                               {route.isEquivalent && (
                                  <span className="bg-white/10 text-white/60 text-[9px] font-black px-2 py-1 border border-white/10 tracking-widest select-none">EQUIVALENTE</span>
                               )}
                               {isBest && !route.isEquivalent && (
                                  <span className="bg-primary text-black text-[9px] font-black px-2 py-1 tracking-widest select-none">BEST ETA</span>
                               )}
                            </div>
                            <div className="space-y-1 text-right">
                               <p className="text-[10px] font-black text-white/30 tracking-widest">ARRIVO</p>
                               <p className={`text-2xl lg:text-5xl font-black font-mono tracking-tighter ${isBest ? 'text-primary' : 'text-white'}`}>
                                 {formatDate(route.arrivalDate)}
                               </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-[#222222] bg-[#0c0c0c] relative overflow-hidden group py-24 sm:py-32">
                  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ccff00_1px,transparent_1px),linear-gradient(to_bottom,#ccff00_1px,transparent_1px)] bg-[size:30px_30px]" />
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <AutoluceTruckStaticIcon className="w-24 h-24 sm:w-32 sm:h-32 mb-8 text-primary group-hover:scale-105 transition-transform duration-700 relative z-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-[0.2em] text-primary relative z-10 select-none">PRONTO AL CALCOLO</h3>
                  <p className="text-[10px] text-white/20 mt-6 max-w-[280px] text-center leading-relaxed tracking-widest relative z-10 select-none">
                    SELEZIONA I PUNTI DI PARTENZA PER CONOSCERE I TEMPI DI CONSEGNA.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
}
