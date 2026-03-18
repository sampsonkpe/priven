import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import PageNav from "../components/PageNav";
import SiteShell from "../components/SiteShell";

const easeSilk: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Blessings = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopyNumber = async (number: string) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(number);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {}
  };

  return (
    <SiteShell>
      <PageNav />

      <main className="px-6 pt-32 pb-24 max-w-lg mx-auto text-center">
        <ScrollReveal>
          <p className="font-body text-[12px] sm:text-xs tracking-[0.12em] uppercase text-muted-foreground leading-relaxed max-w-sm mx-auto">
            Your presence is the greatest gift. Should you wish to bless us further…
          </p>
        </ScrollReveal>

        <div className="h-20" />
        <ScrollReveal>
          <div className="gold-divider" />
        </ScrollReveal>
        <div className="h-20" />

        {/* Single Blessings Card */}
        <ScrollReveal>
          <section className="max-w-md mx-auto text-center">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-10">
              Blessings
            </p>

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.45, ease: easeSilk }}
              className="border border-border/60 rounded-2xl px-8 py-10 flex flex-col gap-10"
            >
              {/* Account Name */}
              <div className="text-center">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-2">
                  Account Name
                </p>
                <p className="font-serif text-sm tracking-[0.12em] text-foreground uppercase">
                  Venissa Akyirefua Sam
                </p>
              </div>

              {/* MTN */}
              <div className="text-center space-y-3">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground/60">
                  MTN
                </p>

                <p className="font-serif text-sm tracking-[0.18em] text-foreground uppercase">
                  055 068 6035
                </p>

                <button
                  type="button"
                  onClick={() => handleCopyNumber("0550686035")}
                  className="px-8 py-2 border border-primary text-primary font-body text-[10px] tracking-[0.3em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {copied === "0550686035" ? "Copied" : "Copy Number"}
                </button>
              </div>

              {/* Divider */}
              <div className="w-8 h-px bg-primary/20 mx-auto" />

              {/* Telecel */}
              <div className="text-center space-y-3">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground/60">
                  Telecel Cash
                </p>

                <p className="font-serif text-sm tracking-[0.18em] text-foreground uppercase">
                  020 955 0277
                </p>

                <button
                  type="button"
                  onClick={() => handleCopyNumber("0209550277")}
                  className="px-8 py-2 border border-primary text-primary font-body text-[10px] tracking-[0.3em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {copied === "0209550277" ? "Copied" : "Copy Number"}
                </button>
              </div>

              {/* Reference */}
              <div className="text-center pt-2">
                <p className="font-body text-[10px] tracking-[0.18em] uppercase text-muted-foreground/70 italic">
                  Reference:{" "}
                  <span className="text-foreground/80 not-italic">
                    PRIVEN2026
                  </span>
                </p>
              </div>
            </motion.div>
          </section>
        </ScrollReveal>

        <div className="h-20" />
        <ScrollReveal>
          <div className="gold-divider" />
        </ScrollReveal>

        <div className="h-16" />

        <footer className="py-10 text-center flex flex-col items-center justify-center gap-6">
          <div className="gold-divider" />
          <p className="font-serif text-[10px] tracking-[0.4em] uppercase">
            With Love & Joy
          </p>
        </footer>
      </main>

      <AnimatePresence>{/* intentionally empty */}</AnimatePresence>
    </SiteShell>
  );
};

export default Blessings;