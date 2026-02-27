import ScrollReveal from "../components/ScrollReveal";
import PageNav from "../components/PageNav";

const programme = [
  { time: "11:00 AM", title: "Processional", note: "Entrance of the bridal party" },
  { time: "11:15 AM", title: "Opening Prayer", note: "Invocation and welcome" },
  { time: "11:25 AM", title: "Scripture Reading", note: "The Word of God" },
  { time: "11:35 AM", title: "Celebrations", note: "Songs of praise and adoration" },
  { time: "11:55 AM", title: "Message", note: "The wedding sermon" },
  { time: "12:20 PM", title: "Exchange of Vows", note: "The covenant of marriage" },
  { time: "12:35 PM", title: "Signing of Register", note: "Making it official" },
  { time: "12:45 PM", title: "Recessional", note: "Exit of the married couple" },
  { time: "1:00 PM", title: "Reception", note: "Celebration and fellowship" },
];

const Programme = () => (
  <div className="grain-bg bg-background min-h-screen">
    <PageNav />

    <main className="px-6 pt-32 pb-24 max-w-lg mx-auto text-center">
      {/* Header */}
      <ScrollReveal>
        <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.15em] uppercase text-foreground">
          Order of Service
        </h1>
      </ScrollReveal>

      <div className="h-6" />

      <ScrollReveal delay={0.1}>
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Saturday, April 11, 2026
        </p>
      </ScrollReveal>

      <div className="h-4" />

      <ScrollReveal delay={0.15}>
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60">
          Victory Presbyterian Church, Adenta
        </p>
      </ScrollReveal>

      <div className="h-16" />
      <ScrollReveal>
        <div className="gold-divider" />
      </ScrollReveal>
      <div className="h-16" />

      <ScrollReveal>
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src="/images/hero-couple.png"
            alt="Prince Charles and Venissa"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <div className="h-16" />

      {/* Timeline */}
      <div className="max-w-sm mx-auto text-center">
        {programme.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.06}>
            <div className="py-4">
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-primary/70 mb-2">
                {item.time}
              </p>

              <h2 className="font-serif text-base sm:text-lg tracking-[0.12em] uppercase text-foreground mb-1">
                {item.title}
              </h2>

              <p className="font-body text-[11px] tracking-[0.16em] uppercase text-muted-foreground/70">
                {item.note}
              </p>

              {i < programme.length - 1 && (
                <div className="mt-5 mx-auto w-6 h-px bg-primary/20" />
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="h-8" />

      <footer className="py-10 text-center flex flex-col items-center justify-center gap-6">
        <div className="gold-divider" />
        <p className="font-serif text-[10px] tracking-[0.4em] uppercase">
          With Love & Joy
        </p>
      </footer>
    </main>
  </div>
);

export default Programme;