import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import PageNav from "../components/PageNav";

const easeSilk: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Blessings = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText("0550686035");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard may be blocked; silently ignore
    }
  };

  const categories = [
    {
      title: "Honeymoon Fund",
      desc: "Help us create unforgettable memories on our first journey together.",
    },
    {
      title: "New Home Fund",
      desc: "Contribute towards building our first home as one.",
    },
    {
      title: "Ministry & Vision Fund",
      desc: "Support the vision God has placed on our hearts.",
    },
    {
      title: "General Blessing",
      desc: "A gift of love, however it moves you.",
    },
  ] as const;

  return (
    <div className="grain-bg bg-background min-h-screen">
      <PageNav />

      <main className="px-6 pt-32 pb-24 max-w-lg mx-auto text-center">
        {/* Intro */}
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

        {/* Categories (no selection state) */}
        <ScrollReveal>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-10">
            Choose A Blessing
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {categories.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.45, ease: easeSilk }}
                className="w-full p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="font-serif text-sm tracking-[0.12em] text-foreground mb-2 uppercase">
                  {c.title}
                </h3>
                <p className="font-body text-[10px] tracking-[0.08em] uppercase text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="h-20" />
        <ScrollReveal>
          <div className="gold-divider" />
        </ScrollReveal>
        <div className="h-20" />

        {/* MoMo Details (centred) */}
        <ScrollReveal>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-10">
            Mobile Money Details
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="border border-border p-10 max-w-sm mx-auto space-y-8 text-center">
            <div>
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-2">
                Account Name
              </p>
              <p className="font-serif text-sm tracking-[0.12em] text-foreground uppercase">
                Venissa Akyirefua Sam
              </p>
            </div>

            <div className="w-8 h-px bg-primary/20 mx-auto" />

            <div>
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-2">
                Network
              </p>
              <p className="font-serif text-sm tracking-[0.12em] text-foreground uppercase">
                MTN
              </p>
            </div>

            <div className="w-8 h-px bg-primary/20 mx-auto" />

            <div>
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-2">
                Number
              </p>
              <p className="font-serif text-sm tracking-[0.18em] text-foreground uppercase">
                0550686035
              </p>

              <p className="mt-4 font-body text-[10px] tracking-[0.18em] uppercase text-muted-foreground/70 italic">
                Reference: <span className="text-foreground/80 not-italic">PRIVEN2026</span>
              </p>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={handleCopyNumber}
                  className="px-10 py-3 border border-primary text-primary font-body text-[10px] tracking-[0.3em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {copied ? "Copied" : "Copy Number"}
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="h-16" />

        <footer className="py-10 text-center flex flex-col items-center justify-center gap-6">
          <div className="gold-divider" />
          <p className="font-serif text-[10px] tracking-[0.4em] uppercase text-muted-foreground/40">
            With Love & Joy
          </p>
        </footer>
      </main>

      <AnimatePresence>{/* (kept empty intentionally) */}</AnimatePresence>
    </div>
  );
};

export default Blessings;