import { useState, useRef, createContext, ReactNode } from "react";
import FloatingPetals from "@/components/valentine/FloatingPetals";
import OpeningSection from "@/components/valentine/OpeningSection";
import ScenerySection from "@/components/valentine/ScenerySection";
import EmotionalCards from "@/components/valentine/EmotionalCards";
import SensualSection from "@/components/valentine/SensualSection";
import ProposalSection from "@/components/valentine/ProposalSection";
import ResponseSection from "@/components/valentine/ResponseSection";
import FinalScreen from "@/components/valentine/FinalScreen";

export const AudioContext = createContext<{
  stopAudio: () => void;
}>({
  stopAudio: () => {},
});

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    setShowIntro(false);
    // Start playing the song
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <AudioContext.Provider value={{ stopAudio }}>
      <div className="bg-midnight-deep min-h-screen">
        <audio
          ref={audioRef}
          src="/songL.mp3"
          loop
          preload="auto"
        />
        {showIntro && <OpeningSection onEnter={handleEnter} />}
        
        {!showIntro && <FloatingPetals count={12} />}

        <div className={showIntro ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-1000"}>
          <ScenerySection />
          <EmotionalCards />
          <SensualSection />
          <ProposalSection onAccept={() => setAccepted(true)} />
          {accepted && (
            <>
              <ResponseSection />
              <FinalScreen />
            </>
          )}
        </div>
      </div>
    </AudioContext.Provider>
  );
};

export default Index;
