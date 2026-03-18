import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import PageNav from "../components/PageNav";
import { narrativeSections, galleryImages } from "./MomentsData";

const easeSilk: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Moments = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Lock scroll when lightbox is open
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
        transition={{ duration: 1.2, ease: easeSilk }}
        className="w-full min-h-[72vh] sm:min-h-[78vh] md:min-h-[84vh] relative overflow-hidden"
      >
        <img
          src="/images/hero-couple.webp"
          alt="Prince Charles and Venissa"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 16%" }}
          fetchPriority="high"
          decoding="async"
          onLoad={() => setHeroLoaded(true)}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.12)_35%,transparent_65%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/70" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.6, delay: 2.5, ease: easeSilk }}
            className="font-serif text-4xl sm:text-5xl tracking-[0.26em] uppercase text-white text-center px-6"
            style={{ willChange: "opacity, transform" }}
          >
            Moments
          </motion.h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      <main className="px-6 pt-24 pb-24 max-w-2xl mx-auto [will-change:transform]">

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
                  <h2 className="font-serif text-lg sm:text-xl tracking-[0.15em] uppercase text-foreground mb-6">
                    {section.title}
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="font-body text-[11px] sm:text-xs leading-relaxed tracking-[0.12em] text-muted-foreground/80 space-y-4 uppercase">
                    {section.text.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              <div className="flex-1 w-full">
                <ScrollReveal delay={0.15}>
                  <motion.button
                    type="button"
                    onClick={() => setLightboxImage(section.image)}
                    className="w-full aspect-[4/5] overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25, ease: easeSilk }}
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 100vw, 50vw"
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

        <div className="h-14" />
        <ScrollReveal>
          <div className="gold-divider" />
        </ScrollReveal>
        <div className="h-14" />

        {/* Gallery */}
        <ScrollReveal>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-12">
            Moments We Treasure
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="columns-2 md:columns-3 gap-3 space-y-3 [contain:layout_paint]">
            {galleryImages.map((image) => (
              <motion.button
                key={image.id}
                type="button"
                className="break-inside-avoid overflow-hidden rounded-2xl w-full shadow-sm hover:shadow-lg transition-shadow duration-300"
                style={{ height: image.height }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, ease: easeSilk }}
                onClick={() => setLightboxImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Footer */}
        <div className="h-14" />
        <ScrollReveal>
          <div className="gold-divider" />
        </ScrollReveal>
        <div className="h-10" />

        <ScrollReveal>
          <footer className="pb-20 text-center">
            <p className="font-serif text-[10px] tracking-[0.4em] uppercase">
              With Love & Joy
            </p>
          </footer>
        </ScrollReveal>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
            onClick={() => setLightboxImage(null)}
          >
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: easeSilk }}
              src={lightboxImage}
              alt="Moment"
              className="max-w-full max-h-[85vh] object-contain"
              style={{ willChange: "transform, opacity" }}
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