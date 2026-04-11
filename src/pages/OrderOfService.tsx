import ScrollReveal from "../components/ScrollReveal";
import PageNav from "../components/PageNav";
import SiteShell from "../components/SiteShell";

const programme = [
  { time: "12:00 PM - 12:45 PM", title: "Welcoming", note: "Seating of Guests" },
  { time: "12:45 PM - 12:55 PM", title: "Musical Interlude", note: "Dal & Rhoda" },
  { time: "12:55 PM - 1:00 PM", title: "Opening Prayer", note: "Ps. Eric Fosu" },
  { time: "1:00 PM - 1:10 PM", title: "Worship", note: "FAM Choir" },
  { time: "1:10 PM - 1:15 PM", title: "Groom's Procession", note: "DJ Reverend" },
  { time: "1:15 PM - 1:20 PM", title: "Bride's Procession", note: "Piano Interlude by Paa Joe" },
  { time: "1:20 PM - 1:35 PM", title: "Exchange of Vows", note: "Rev. Roderick Agyekum" },
  { time: "1:35 PM - 1:50 PM", title: "Clergy Prayers", note: "Prayers & Declaration of Marriage" },
  { time: "1:50 PM - 1:55 PM", title: "Song Ministration 01", note: "Rhoda" },
  { time: "1:55 PM - 2:00 PM", title: "Song Ministration 02", note: "Michael Ashitey" },
  { time: "2:00 PM - 2:35 PM", title: "Sermon & Altar Call", note: "Ps. Elton Afflu" },
  { time: "2:35 PM - 2:40 PM", title: "Couple's Communion" },
  { time: "2:40 PM - 2:50 PM", title: "Introduction of Couple", note: "FAM Choir" },
  { time: "2:50 PM - 3:00 PM", title: "Love Gift", note: "FAM Choir/Michael Ashitey" },
  { time: "3:00 PM - 3:05 PM", title: "Handing Over of Marriage Certificate", note: "Lady Harriet Fosu" },
  { time: "3:05 PM - 3:15 PM", title: "Vote of Thanks & Announcements", note: "Sika & Praise" },
  { time: "3:15 PM - 3:20 PM", title: "Closing Prayer", note: "Ps. Elton Afflu" },
  { time: "3:20 PM - 4:00 PM", title: "Order of Photography" },
  { time: "4:00 PM", title: "MC Praise takes over", note: "Couple Recesses, with Instrumentals from the band" },
];

const officiatingMinister = "Rev. Roderick Agyekum";

const clergy = [
  "Ps. Eric Fosu",
  "Ps. George Addai",
  "Ps. Elton Afflu",
  "Ps. Victoria Oliver",
  "Rev. Dr. Jewel Ewoade",
];

const bridalParty = {
  bestMan: "Blaise Quainoo",
  maidOfHonour: "Roseline Owusuaa Dartey",
  groomsman: "Sampson Kojo Kpe",
  bridesmaid: "Lily Araba Sackey",
};

const OrderofService = () => (
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

      {/* Programme */}
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

              {item.note && (
                <p className="font-body text-[11px] tracking-[0.16em] uppercase text-muted-foreground/70">
                  {item.note}
                </p>
              )}

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

      <div className="h-16" />

      {/* Officiating Minister */}
      <ScrollReveal>
        <h2 className="font-serif text-lg tracking-[0.15em] uppercase text-foreground">
          Officiating Minister
        </h2>
      </ScrollReveal>

      <div className="h-6" />

      <ScrollReveal>
        <p className="font-body text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
          {officiatingMinister}
        </p>
      </ScrollReveal>

      <div className="h-14" />
      <ScrollReveal>
        <div className="gold-divider" />
      </ScrollReveal>

      <div className="h-14" />

      {/* Clergy */}
      <ScrollReveal>
        <h2 className="font-serif text-lg tracking-[0.15em] uppercase text-foreground">
          Clergy
        </h2>
      </ScrollReveal>

      <div className="h-6" />

      <div className="max-w-xs mx-auto">
        {clergy.map((person, i) => (
          <ScrollReveal key={person} delay={i * 0.06}>
            <p className="py-2 font-body text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              {person}
            </p>
          </ScrollReveal>
        ))}
      </div>

      <div className="h-14" />
      <ScrollReveal>
        <div className="gold-divider" />
      </ScrollReveal>

      <div className="h-14" />

      {/* Bridal Party */}
      <ScrollReveal>
        <h2 className="font-serif text-lg tracking-[0.15em] uppercase text-foreground">
          Bridal Party
        </h2>
      </ScrollReveal>

      <div className="h-8" />

      <div className="max-w-xs mx-auto text-center">
        <ScrollReveal>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary/70">
            Best Man
          </p>
          <p className="py-2 font-body text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            {bridalParty.bestMan}
          </p>
        </ScrollReveal>

        <div className="h-6" />

        <ScrollReveal>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary/70">
            Maid of Honour
          </p>
          <p className="py-2 font-body text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            {bridalParty.maidOfHonour}
          </p>
        </ScrollReveal>

        <div className="h-8" />

        <ScrollReveal>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary/70">
            Groomsman
          </p>
          <p className="py-2 font-body text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            {bridalParty.groomsman}
          </p>
        </ScrollReveal>

        <div className="h-6" />

        <ScrollReveal>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary/70">
            Bridesmaid
          </p>
          <p className="py-2 font-body text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            {bridalParty.bridesmaid}
          </p>
        </ScrollReveal>
      </div>

      <div className="h-16" />

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

export default OrderofService;