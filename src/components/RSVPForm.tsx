import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";

const easeSilk: [number, number, number, number] = [0.22, 1, 0.36, 1];

const RSVPForm = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [plusOne, setPlusOne] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    fullName.trim() !== "" &&
    phone.trim() !== "" &&
    (!plusOne || guestName.trim() !== "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || submitting) return;

    setSubmitting(true);

    try {
      if (!GOOGLE_SCRIPT_URL) throw new Error("Missing Google Script URL");

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams ({
          fullName,
          phone,
          guestName,
          numberAttending: String(plusOne ? 2 : 1),
          note,
          ua: navigator.userAgent,
        }),
      });

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 10000);

      setFullName("");
      setPhone("");
      setPlusOne(false);
      setGuestName("");
      setNote("");
    } catch {
      // silently handle
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-10 px-6">
      <ScrollReveal>
        <h2 className="font-serif text-xl sm:text-2xl tracking-[0.15em] uppercase text-center text-foreground mb-6">
          Will You Join Us?
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-center text-[12px] tracking-[0.15em] uppercase text-muted-foreground font-body mb-6">
          Kindly Respond By{" "}
          <span className="text-foreground font-medium">March 20, 2026</span>
        </p>
      </ScrollReveal>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4 font-body">
        {/* FULL NAME */}
        <ScrollReveal delay={0.1}>
          <label className="block">
            <span className="text-[12px] tracking-[0.3em] uppercase text-muted-foreground">
              Full Name
            </span>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="mt-1 w-full border-b border-border bg-transparent py-2 text-sm tracking-wider text-foreground placeholder:text-muted-foreground/40 placeholder:normal-case focus:border-primary focus:outline-none transition-colors"
              placeholder="Your full name"
            />
          </label>
        </ScrollReveal>

        {/* PHONE */}
        <ScrollReveal delay={0.15}>
          <label className="block">
            <span className="text-[12px] tracking-[0.3em] uppercase text-muted-foreground">
              Phone Number
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 w-full border-b border-border bg-transparent py-2 text-sm tracking-wider text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors"
              placeholder="Your phone number"
            />
          </label>
        </ScrollReveal>

        {/* TOGGLE */}
        <ScrollReveal delay={0.2}>
          <div className="block">
            <span className="text-[12px] tracking-[0.3em] uppercase text-muted-foreground">
              Attending
            </span>

            <button
              type="button"
              onClick={() => setPlusOne((v) => !v)}
              className="mt-2 flex items-center gap-3 group cursor-pointer"
              aria-pressed={plusOne}
            >
              {/* Pill */}
              <motion.div
                className="w-10 h-[22px] rounded-full border relative overflow-hidden"
                animate={{
                  backgroundColor: plusOne ? "hsl(var(--primary))" : "transparent",
                  borderColor: plusOne ? "hsl(var(--primary))" : "hsl(var(--border))",
                }}
                transition={{ duration: 0.85, ease: easeSilk }}
              >
                {/* Knob */}
                <motion.div
                  className="absolute top-[3px] w-3.5 h-3.5 rounded-full"
                  style={{ left: 3 }}
                  animate={{
                    x: plusOne ? 18 : 0,
                    backgroundColor: plusOne
                      ? "hsl(var(--primary-foreground))"
                      : "hsl(var(--muted-foreground) / 0.4)",
                  }}
                  transition={{ duration: 0.85, ease: easeSilk }}
                />
              </motion.div>

              {/* Text */}
              <span className="relative h-[14px] overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={plusOne ? "with-guest" : "just-me"}
                    initial={{ opacity: 0, y: 6, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -6, filter: "blur(2px)" }}
                    transition={{ duration: 0.6, ease: easeSilk }}
                    className="block text-[12px] tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    {plusOne ? "Attending With A Guest" : "Just Me"}
                  </motion.span>
                </AnimatePresence>
              </span>
            </button>
          </div>
        </ScrollReveal>

        {/* PLUS ONE FIELD */}
        <AnimatePresence>
          {plusOne && (
            <ScrollReveal delay={0.22}>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.6, ease: easeSilk }}
              >
                <label className="block">
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="mt-1 w-full border-b border-border bg-transparent py-2 text-sm tracking-wider text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Guest's name"
                  />
                </label>
              </motion.div>
            </ScrollReveal>
          )}
        </AnimatePresence>

        {/* NOTE */}
        <ScrollReveal delay={0.25}>
          <label className="block">
            <span className="text-[12px] tracking-[0.3em] uppercase text-muted-foreground">
              Note For The Couple
            </span>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              className="mt-1 w-full border-b border-border bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground/40 placeholder:normal-case focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="A short message (optional)"
            />
          </label>
        </ScrollReveal>

        {/* SUBMIT */}
        <ScrollReveal delay={0.3}>
          <div className="pt-4 text-center">
            <button
              type="submit"
              disabled={!isValid || submitting}
              className="px-12 py-3 border border-primary text-primary font-body text-[12px] tracking-[0.3em] uppercase hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
            >
              {submitting ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                  Sending…
                </span>
              ) : (
                "Send RSVP"
              )}
            </button>
          </div>
        </ScrollReveal>
      </form>

      {/* SUCCESS */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 1, ease: easeSilk }}
            className="mt-6 max-w-sm mx-auto border border-primary/50 px-6 py-4 text-center"
          >
            <p className="text-[12px] uppercase tracking-[0.1em] text-muted-foreground font-body">
              Thank You. Your RSVP Has Been Received.
              <br />
              We Look Forward To Celebrating With You!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RSVPForm;