import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const SplashScreen = ({ onDismiss }: { onDismiss: () => void }) => {
  const [phase, setPhase] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [pushed, setPushed] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3400),
      setTimeout(() => {
        setPhase(4);
        // After scroll hint appears, push names up after 0.5s
        setTimeout(() => setPushed(true), 500);
      }, 4800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleDismiss = useCallback(() => {
    if (phase >= 4 && !exiting) {
      setExiting(true);
      setTimeout(onDismiss, 900);
    }
  }, [phase, exiting, onDismiss]);

  useEffect(() => {
    if (phase < 4) return;

    const handleWheel = () => handleDismiss();
    const handleTouch = () => handleDismiss();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") handleDismiss();
    };

    window.addEventListener("wheel", handleWheel, { once: true });
    window.addEventListener("touchstart", handleTouch, { once: true });
    window.addEventListener("keydown", handleKey, { once: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("keydown", handleKey);
    };
  }, [phase, handleDismiss]);

  return (
    <motion.div
      onClick={phase >= 4 ? handleDismiss : undefined}
      className="fixed inset-0 z-40 bg-background grain-bg overflow-hidden"
      animate={exiting ? { opacity: 0, scale: 1.02 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* This wrapper pushes the whole block down into the middle of the viewport */}
      <div className="h-full w-full flex justify-start items-center">
        <div className="w-full pt-[28vh] sm:pt-[30vh] px-6 flex justify-center">
          <motion.div
            className="text-center w-full max-w-md flex flex-col items-center"
            animate={pushed ? { y: -28 } : { y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Prince Charles */}
            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={phase >= 1 ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-2xl sm:text-3xl tracking-[0.15em] uppercase text-foreground"
            >
              Prince Charles
            </motion.p>

            {/* Gold line under Prince Charles */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={phase >= 1 ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="w-16 h-px bg-primary origin-center mt-6"
            />

            {/* + symbol */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={phase >= 2 ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="my-6"
            >
              <span className="text-primary text-3xl font-light">+</span>
            </motion.div>

            {/* Venissa */}
            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={phase >= 3 ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-2xl sm:text-3xl tracking-[0.15em] uppercase text-foreground"
            >
              Venissa
            </motion.p>

            {/* Gold line under Venissa */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={phase >= 3 ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="w-16 h-px bg-primary origin-center mt-6"
            />

            {/* Scroll hint (appears under names, pushes block up slightly) */}
            {phase >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="mt-14"
              >
                <motion.p
                  animate={!exiting ? { y: [0, -6, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[12px] font-body tracking-[0.4em] uppercase text-muted-foreground/60 cursor-pointer text-center"
                  onClick={handleDismiss}
                >
                  Scroll to open
                </motion.p>

                <motion.div
                  animate={!exiting ? { y: [0, 4, 0], opacity: [0.3, 0.6, 0.3] } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mx-auto mt-3 w-px h-8 bg-primary/40"
                />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;