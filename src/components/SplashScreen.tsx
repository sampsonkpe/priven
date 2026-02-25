import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const easeSilk: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SplashScreen = ({ onDismiss }: { onDismiss: () => void }) => {
  const [phase, setPhase] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [pushed, setPushed] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1200),
      setTimeout(() => setPhase(2), 2600),
      setTimeout(() => setPhase(3), 4000),
      setTimeout(() => {
        setPhase(4);
        setTimeout(() => setPushed(true), 900);
      }, 5600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleDismiss = useCallback(() => {
    if (phase >= 4 && !exiting) {
      setExiting(true);
      setTimeout(onDismiss, 1300);
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
      animate={
        exiting ? { opacity: 0, scale: 1.015 } : { opacity: 1, scale: 1 }
      }
      transition={{ duration: 1.2, ease: easeSilk }}
    >
      <div className="h-full w-full flex justify-start items-center">
        <div className="w-full pt-[20vh] sm:pt-[18vh] px-6 flex justify-center">
          <motion.div
            className="text-center w-full max-w-md flex flex-col items-center"
            animate={pushed ? { y: -32 } : { y: 0 }}
            transition={{ duration: 1.4, ease: easeSilk }}
          >
            {/* Priven monogram */}
            <motion.img
              src="/privenlogo.png"
              alt="Priven Monogram"
              draggable={false}
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={
                phase >= 1 ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
              }
              transition={{ duration: 1.6, ease: easeSilk }}
              className="mb-8 h-20 w-20 sm:h-20 sm:w-20 object-contain"
            />

            {/* Prince Charles */}
            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              animate={
                phase >= 1 ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
              }
              transition={{ duration: 1.6, ease: easeSilk }}
              className="font-serif text-3xl sm:text-4xl tracking-[0.12em] uppercase text-foreground leading-relaxed"
            >
              Prince Charles
            </motion.p>

            {/* Gold line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={phase >= 1 ? { scaleX: 1 } : {}}
              transition={{ duration: 1.6, delay: 0.4, ease: easeSilk }}
              className="w-16 h-px bg-primary origin-center mt-6"
            />

            {/* + symbol */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
              animate={
                phase >= 2
                  ? {
                      opacity: 1,
                      scale: [1.5, 1.2, 1],
                      rotate: 180,
                    }
                  : {}
              }
              transition={{ duration: 1.6, ease: easeSilk }}
              className="my-8"
            >
              <motion.span
                animate={
                  phase >= 2 && !exiting
                    ? { y: [0, -3, 0], opacity: [1, 0.85, 1] }
                    : {}
                }
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-primary text-3xl font-light"
              >
                +
              </motion.span>
            </motion.div>

            {/* Venissa */}
            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              animate={
                phase >= 3 ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
              }
              transition={{ duration: 1.6, ease: easeSilk }}
              className="font-serif text-3xl sm:text-4xl tracking-[0.12em] uppercase text-foreground leading-relaxed"
            >
              Venissa
            </motion.p>

            {/* Gold line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={phase >= 3 ? { scaleX: 1 } : {}}
              transition={{ duration: 1.6, delay: 0.4, ease: easeSilk }}
              className="w-16 h-px bg-primary origin-center mt-6"
            />

            {/* Scroll hint */}
            {phase >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: easeSilk }}
                className="mt-16"
              >
                <motion.p
                  animate={!exiting ? { y: [0, -5, 0] } : {}}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-[12px] font-body tracking-[0.4em] uppercase text-muted-foreground/60 cursor-pointer text-center"
                  onClick={handleDismiss}
                >
                  Scroll to open
                </motion.p>

                <motion.div
                  animate={
                    !exiting
                      ? { y: [0, 6, 0], opacity: [0.3, 0.6, 0.3] }
                      : {}
                  }
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
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