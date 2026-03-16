import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import PageNav from "../components/PageNav";
import { narrativeSections, galleryImages } from "./MomentsData";

const easeSilk: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Moments = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // preload hero image
  useEffect(() => {
    const img = new Image();
    img.src = "/images/hero-couple.jpg";
  }, []);

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

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: easeSilk }}
        className="w-full min-h-[72vh] sm:min-h-[78vh] md:min-h-[84vh] relative overflow-hidden"
      >
        <img
          src="/images/hero-couple.jpg"
          alt="Prince Charles and Venissa"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ objectPosition: "50% 16%" }}
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.12)_35%,transparent_65%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/70" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: easeSilk }}
            className="font-serif text-4xl sm:text-5xl tracking-[0.26em] uppercase text-white text-center px-6"
            style={{
              textShadow:
                "0 4px 18px rgba(0,0,0,0.45), 0 1px 6px rgba(0,0,0,0.35)",
            }}
          >
            Moments
          </motion.h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
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
                  <p className="font-body text-[11px] tracking-[0.35em] uppercase text-primary/70 mb-3">
                    Chapter {i + 1}
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.12}>
                  <h2 className="font-serif text-lg sm:text-xl tracking-[0.15em] uppercase text-foreground mb-4">
                    {section.title}
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <p className="font-body text-[11px] sm:text-xs leading-[2] tracking-[0.12em] uppercase text-muted-foreground/80">
                    {section.text}
                  </p>
                </ScrollReveal>
              </div>

              <div className="flex-1 w-full">
                <ScrollReveal delay={0.15}>
                  <motion.button
                    type="button"
                    onClick={() => setLightboxImage(section.image)}
                    className="w-full aspect-[4/5] overflow-hidden"
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 120, damping: 16 }}
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                    />
                  </motion.button>
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

        {/* Gallery Title */}
        <ScrollReveal>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-12">
            Moments We Treasure
          </p>
        </ScrollReveal>

        {/* Masonry Grid */}
        <ScrollReveal>
          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {galleryImages.map((image) => (
              <motion.button
                key={image.id}
                type="button"
                className="break-inside-avoid overflow-hidden cursor-pointer w-full text-left"
                style={{ height: image.height }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
                onClick={() => setLightboxImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        <div className="h-16" />

        <footer className="py-10 text-center flex flex-col items-center justify-center gap-6">
          <div className="gold-divider" />
          <p className="font-serif text-[10px] tracking-[0.4em] uppercase">
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
            onKeyDown={(e) => {
              if (e.key === "Escape") setLightboxImage(null);
            }}
            tabIndex={0}
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
              onClick={(e) => e.stopPropagation()}
            />

            {/* Download icon */}
            <a
              href={lightboxImage!}
              download
              className="absolute top-6 right-20 w-10 h-10 rounded-full border border-primary text-primary bg-background/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              onClick={(e) => e.stopPropagation()}
              aria-label="Download"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                className="transition-colors duration-300 group-hover:stroke-current"
              >
                <path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17h16" />
              </svg>
            </a>

            {/* Close button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImage(null);
              }}
              aria-label="Close"
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-primary text-primary bg-background/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="transition-colors duration-300"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Moments;