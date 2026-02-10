import { useState } from "react";
import FloatingPetals from "@/components/valentine/FloatingPetals";
import OpeningSection from "@/components/valentine/OpeningSection";
import ScenerySection from "@/components/valentine/ScenerySection";
import EmotionalCards from "@/components/valentine/EmotionalCards";
import SensualSection from "@/components/valentine/SensualSection";
import ProposalSection from "@/components/valentine/ProposalSection";
import ResponseSection from "@/components/valentine/ResponseSection";
import FinalScreen from "@/components/valentine/FinalScreen";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="bg-midnight-deep min-h-screen">
      {showIntro && <OpeningSection onEnter={() => setShowIntro(false)} />}
      
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
  );
};

export default Index;
