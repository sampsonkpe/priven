export type NarrativeSection = {
  title: string;
  text: string[];
  image: string;
  imagePosition: "left" | "right";
};

export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  height: number;
};

export const narrativeSections: NarrativeSection[] = [
  {
    title: "How We Met",
    text: [
      "Our story began in a simple but beautiful way. Some time ago, my brother was going out for an outreach with the man who would later become my husband. The plan was simple — he was supposed to convince me to attend Ahavah. He came knocking on the door, and when I opened it, he warmly invited me to join the fellowship.",
      "What seemed like a small invitation turned out to be the beginning of something very special. I decided to come for fellowship, and from that moment, our paths became connected.",
      "What started as a simple invitation soon grew into friendship, laughter, and a deep bond that neither of us expected. Looking back, we realise that what felt like a normal day was actually the beginning of our beautiful love story."
    ],
    image: "/images/couple-walking.webp",
    imagePosition: "right",
  },
  {
    title: "The Proposal",
    text: [
      "After years of friendship, growth, and building a strong bond together, we both knew that our story was leading to something greater.",
      "With love, intention, and excitement for the future, he asked the question that would begin our next chapter together. In that beautiful moment, surrounded by joy and gratitude, the answer was an easy and heartfelt “Yes.”",
      "The proposal was not just about a question being asked, but about two people choosing each other, choosing love, and choosing to walk through life together.",
      "Now we look forward to forever, grateful for where our story began and excited for everything that lies ahead."
    ],
    image: "/images/proposal.webp",
    imagePosition: "left",
  },
  {
    title: "The Journey",
    text: [
      "Our relationship began with friendship. Over time, that friendship grew stronger as we spent more time together, shared conversations, supported each other, and built a deeper understanding of one another.",
      "Through the years, we have grown not only in love but also in faith. We have learned the value of patience, encouragement, and standing by each other through every season of life.",
      "From fellowship meetings to shared moments and countless memories, our journey has been filled with laughter, growth, and God’s guidance. What started as a simple friendship slowly blossomed into a love that we both knew was meant to last a lifetime.",
      "Today, we are grateful for every step that brought us here and are excited to begin this new chapter together as husband and wife."
    ],
    image: "/images/couple-together.webp",
    imagePosition: "right",
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 1, src: "/images/gallery1.webp", alt: "Moment", height: 320 },
  { id: 2, src: "/images/gallery2.webp", alt: "Moment", height: 340 },
  { id: 3, src: "/images/gallery3.webp", alt: "Moment", height: 330 },
  { id: 4, src: "/images/gallery4.webp", alt: "Moment", height: 300 },
  { id: 5, src: "/images/gallery5.webp", alt: "Moment", height: 300 },
  { id: 6, src: "/images/gallery6.webp", alt: "Moment", height: 380 },
  { id: 7, src: "/images/gallery7.webp", alt: "Moment", height: 310 },
  { id: 8, src: "/images/gallery8.webp", alt: "Moment", height: 360 },
  { id: 9, src: "/images/gallery9.webp", alt: "Moment", height: 310 },
];