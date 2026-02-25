import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "../components/SplashScreen";
import WeddingContent from "../components/WeddingContent";
import RSVPForm from "../components/RSVPForm";
import ScrollReveal from "../components/ScrollReveal";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="grain-bg bg-background min-h-screen">
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onDismiss={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          <WeddingContent />
          <RSVPForm />
          <div className="h-4" />
          <ScrollReveal>
            <div className="gold-divider" />
          </ScrollReveal>

          <div className="h-10" />
          
          <ScrollReveal>
            <footer className="pb-20 text-center">
              <p className="font-serif text-[10px] tracking-[0.4em] uppercase text-muted-foreground/40">
                With Love & Joy
              </p>
            </footer>
          </ScrollReveal>
        </motion.div>
      )}
    </div>
  );
};

export default Home;