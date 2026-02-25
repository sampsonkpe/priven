import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";

const RSVPForm = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [numberAttending, setNumberAttending] = useState(1);
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    fullName.trim() !== "" && phone.trim() !== "" && numberAttending >= 1;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || submitting) return;

    setSubmitting(true);

    try {
      if (!GOOGLE_SCRIPT_URL) throw new Error("Missing Google Script URL");

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          phone,
          count: numberAttending,
          message: note,
          ua: navigator.userAgent,
        }),
      });

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);

      setFullName("");
      setPhone("");
      setNumberAttending(1);
      setNote("");
    } catch {
      // optional: show a subtle error message later
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-10 px-6">
      <ScrollReveal>
        <h2 className="font-serif text-xl sm:text-2xl tracking-[0.15em] uppercase text-center text-foreground mb-2">
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
        <ScrollReveal delay={0.1}>
          <label className="block">
            <span className="text-[12px] tracking-[0.3em] uppercase text-muted-foreground">Full Name</span>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="mt-1 w-full border-b border-border bg-transparent py-2 text-sm uppercase tracking-wider text-foreground placeholder:text-muted-foreground/40 placeholder:normal-case focus:border-primary focus:outline-none transition-colors"
              placeholder="Your full name"
            />
          </label>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <label className="block">
            <span className="text-[12px] tracking-[0.3em] uppercase text-muted-foreground">Phone Number</span>
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

        <ScrollReveal delay={0.2}>
          <label className="block">
            <span className="text-[12px] tracking-[0.3em] uppercase text-muted-foreground">Number Attending</span>
            <div className="flex items-center gap-4 mt-2">
              <button
                type="button"
                onClick={() => setNumberAttending(Math.max(1, numberAttending - 1))}
                className="w-9 h-9 rounded-full border border-border text-foreground flex items-center justify-center hover:border-primary transition-colors text-base"
              >
                −
              </button>
              <span className="text-lg font-medium text-foreground w-6 text-center">{numberAttending}</span>
              <button
                type="button"
                onClick={() => setNumberAttending(Math.min(10, numberAttending + 1))}
                className="w-9 h-9 rounded-full border border-border text-foreground flex items-center justify-center hover:border-primary transition-colors text-base"
              >
                +
              </button>
            </div>
          </label>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <label className="block">
            <span className="text-[12px] tracking-[0.3em] uppercase text-muted-foreground">Note For The Couple</span>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              className="mt-1 w-full border-b border-border bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground/40 placeholder:normal-case focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="A short message (optional)"
            />
          </label>
        </ScrollReveal>

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

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 max-w-sm mx-auto border border-primary/50 px-6 py-4 text-center"
          >
            <p className="font-serif text-sm uppercase tracking-[0.15em] text-foreground">Thank You</p>
            <p className="text-[12px] uppercase tracking-[0.1em] text-muted-foreground font-body mt-1">
              Your RSVP Has Been Received
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RSVPForm;