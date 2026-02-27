import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import PageNav from "../components/PageNav";
import { narrativeSections, galleryImages } from "./MomentsData";

const easeSilk: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Moments = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // lock scroll when lightbox is open
  useEffect(() => {
    if (!lightboxImage) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lightboxImage]);

  return (
    <div className="grain-bg bg-background min-h-screen">
      <PageNav />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: easeSilk }}
        className="w-full h-[70vh] relative overflow-hidden"
      >
        <img
          src="/images/hero-couple.jpg"
          alt="Prince Charles and Venissa"
          className="w-full h-full object-cover"
        />

        {/* soft veil */}
        <div className="absolute inset-0 bg-background/35" />

        {/* title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.35, ease: easeSilk }}
            className="font-serif text-3xl sm:text-4xl tracking-[0.2em] uppercase text-foreground drop-shadow-sm text-center px-6"
          >
            Moments
          </motion.h1>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      <main className="px-6 pt-24 pb-24 max-w-2xl mx-auto">
        {/* Narrative Sections */}
        {narrativeSections.map((section, i) => (
          <div key={section.title}>
            <div
              className={`flex flex-col ${
                section.imagePosition === "left"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              } gap-8 md:gap-12 items-center`}
            >
              <div className="flex-1 text-center md:text-left">
                <ScrollReveal delay={0.05}>
                  <p className="font-body text-[10px] tracking-[0.35em] uppercase text-primary/70 mb-3">
                    Chapter {i + 1}
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.12}>
                  <h2 className="font-serif text-lg sm:text-xl tracking-[0.15em] uppercase text-foreground mb-4">
                    {section.title}
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <p className="font-body text-[11px] sm:text-xs leading-[2] tracking-[0.04em] text-muted-foreground">
                    {section.text}
                  </p>
                </ScrollReveal>
              </div>

              <div className="flex-1 w-full">
                <ScrollReveal delay={0.15}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {i < narrativeSections.length - 1 && (
              <>
                <div className="h-20" />
                <ScrollReveal>
                  <div className="gold-divider" />
                </ScrollReveal>
                <div className="h-20" />
              </>
            )}
          </div>
        ))}

        <div className="h-24" />
        <ScrollReveal>
          <div className="gold-divider" />
        </ScrollReveal>
        <div className="h-24" />

        {/* Masonry Grid */}
        <ScrollReveal>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-12">
            Moments We Treasure
          </p>
        </ScrollReveal>

        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {galleryImages.map((image, i) => (
            <ScrollReveal key={image.id} delay={i * 0.04}>
              <motion.button
                type="button"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.35, ease: easeSilk }}
                className="break-inside-avoid overflow-hidden cursor-pointer w-full text-left"
                style={{ height: image.height }}
                onClick={() => setLightboxImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.button>
            </ScrollReveal>
          ))}
        </div>

        <div className="h-16" />

        <footer className="py-10 text-center flex flex-col items-center justify-center gap-6">
          <div className="gold-divider" />
          <p className="font-serif text-[10px] tracking-[0.4em] uppercase text-muted-foreground/40">
            With Love & Joy
          </p>
        </footer>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: easeSilk }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
            onClick={() => setLightboxImage(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.img
              initial={{ scale: 0.96, opacity: 0, filter: "blur(6px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.96, opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.55, ease: easeSilk }}
              src={lightboxImage}
              alt="Moment"
              className="max-w-full max-h-[85vh] object-contain cursor-zoom-out"
              onClick={() => setLightboxImage(null)}
            />

            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Moments;