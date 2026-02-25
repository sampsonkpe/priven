import ScrollReveal from "./ScrollReveal";

const WeddingContent = () => {
  return (
    <main className="min-h-screen px-6 pt-32 pb-16 max-w-lg mx-auto text-center">
      {/* We Are Getting Married */}
      <ScrollReveal>
        <p className="font-body text-[12px] sm:text-xs tracking-[0.45em] uppercase text-muted-foreground">
          We Are Getting Married
        </p>
      </ScrollReveal>

      {/* Divider */}
      <div className="h-20" />
      <ScrollReveal>
        <div className="gold-divider" />
      </ScrollReveal>
      <div className="h-20" />

      {/* Families Request */}
      <ScrollReveal>
        <p className="font-body text-[12px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground leading-relaxed max-w-xs mx-auto">
          The Families Of <span className="text-primary font-semibold">Arko</span> And <span className="text-primary font-semibold">Sam</span> Request The Pleasure Of Your Company At The Solemnisation Ceremony Between
        </p>
      </ScrollReveal>

      <div className="h-20" />

      {/* Names */}
      <ScrollReveal>
        <h1 className="font-serif text-3xl sm:text-4xl tracking-[0.12em] uppercase text-foreground leading-relaxed">
          Prince Charles Arko
        </h1>
      </ScrollReveal>

      <div className="h-8" />

      <ScrollReveal>
        <p className="text-primary text-2xl font-light">+</p>
      </ScrollReveal>

      <div className="h-8" />

      <ScrollReveal>
        <h1 className="font-serif text-3xl sm:text-4xl tracking-[0.12em] uppercase text-foreground leading-relaxed">
          Venissa Akyirefua Sam
        </h1>
      </ScrollReveal>

      <div className="h-20" />

      {/* Date & Time */}
      <ScrollReveal>
        <p className="font-serif text-lg sm:text-xl uppercase tracking-[0.1em] text-foreground">
          Saturday, April 11, 2026
        </p>
      </ScrollReveal>

      <div className="h-6" />

      <ScrollReveal>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
          At 12:00 PM • PROMPT
        </p>
      </ScrollReveal>

      {/* Divider */}
      <div className="h-20" />
      <ScrollReveal>
        <div className="gold-divider" />
      </ScrollReveal>
      <div className="h-20" />

      {/* Venue */}
      <ScrollReveal>
        <p className="font-serif text-lg uppercase tracking-[0.1em] text-foreground">
          Victory Presbyterian Church, Adenta
        </p>
      </ScrollReveal>

      <div className="h-10" />

      <ScrollReveal>
        <a
          href="https://maps.app.goo.gl/cjyPAb3yQmfYtmdL9?g_st=ic"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-2.5 border border-primary text-primary font-body text-[10px] tracking-[0.3em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Open In Maps
        </a>
      </ScrollReveal>

      {/* Divider */}
      <div className="h-20" />
      <ScrollReveal>
        <div className="gold-divider" />
      </ScrollReveal>
      <div className="h-20" />

      {/* Scripture */}
      <ScrollReveal>
        <p className="font-body text-[12px] tracking-[0.08em] uppercase text-muted-foreground italic leading-relaxed">
          "He Who Finds A Wife Finds A Good Thing,<br />
          And Obtains Favour From The Lord."
        </p>
      </ScrollReveal>

      <div className="h-6" />

      <ScrollReveal>
        <p className="font-body text-[12px] tracking-[0.35em] uppercase text-muted-foreground/60">
          Proverbs 18:22 · NKJV
        </p>
      </ScrollReveal>

      {/* Divider */}
      <div className="h-20" />
      <ScrollReveal>
        <div className="gold-divider" />
      </ScrollReveal>
    </main>
  );
};

export default WeddingContent;