import ScrollReveal from "../components/ScrollReveal";
import PageNav from "../components/PageNav";
import SiteShell from "../components/SiteShell";

const programme = [
  { time: "12:00 PM", title: "Processional", note: "Entrance of the bridal party" },
  { time: "12:15 PM", title: "Opening Prayer", note: "Invocation and welcome" },
  { time: "12:25 PM", title: "Scripture Reading", note: "The Word of God" },
  { time: "12:35 PM", title: "Celebrations", note: "Songs of praise and adoration" },
  { time: "12:55 PM", title: "Message", note: "The wedding sermon" },
  { time: "1:20 PM", title: "Exchange of Vows", note: "The covenant of marriage" },
  { time: "1:35 PM", title: "Signing of Register", note: "Making it official" },
  { time: "1:45 PM", title: "Recessional", note: "Exit of the married couple" },
  { time: "2:00 PM", title: "Reception", note: "Celebration and fellowship" },
];

const Programme = () => (
  <SiteShell>
    <PageNav />

    <main className="px-6 pt-32 pb-24 max-w-lg mx-auto text-center">
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
      <div className="h-10" />

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

      <div className="h-10" />
      <ScrollReveal>
        <div className="gold-divider" />
      </ScrollReveal>

      <div className="h-10" />

      <ScrollReveal>
        <footer className="pb-20 text-center">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
            With Love & Joy
          </p>
        </footer>
      </ScrollReveal>
    </main>
  </SiteShell>
);

export default Programme;