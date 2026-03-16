export type NarrativeSection = {
  title: string;
  text: string;
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
    text:
      "It began in the most ordinary of ways — a moment neither of us planned. But God's timing is never ordinary. From the first conversation, there was a quiet knowing that something beautiful had begun.",
    image: "/images/couple-walking.png",
    imagePosition: "right",
  },
  {
    title: "The Proposal",
    text:
      "Under a sky painted with the colours of grace, the question was asked — and the answer was already written on both our hearts.",
    image: "/images/proposal.png",
    imagePosition: "left",
  },
  {
    title: "The Journey",
    text:
      "From friendship to forever — every prayer and quiet moment has led us here.",
    image: "/images/couple-together.png",
    imagePosition: "right",
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 1, src: "/images/gallery1.png", alt: "Moment", height: 320 },
  { id: 2, src: "/images/gallery2.png", alt: "Moment", height: 360 },
  { id: 3, src: "/images/gallery3.png", alt: "Moment", height: 280 },
  { id: 4, src: "/images/gallery4.png", alt: "Moment", height: 340 },
  { id: 5, src: "/images/gallery5.png", alt: "Moment", height: 300 },
  { id: 6, src: "/images/gallery6.png", alt: "Moment", height: 380 },
  { id: 7, src: "/images/gallery7.png", alt: "Moment", height: 260 },
  { id: 8, src: "/images/gallery8.png", alt: "Moment", height: 360 },
  { id: 9, src: "/images/gallery9.png", alt: "Moment", height: 300 },
  { id: 10, src: "/images/gallery10.png", alt: "Moment", height: 350 },
  { id: 11, src: "/images/gallery11.png", alt: "Moment", height: 290 },
  { id: 12, src: "/images/gallery12.png", alt: "Moment", height: 360 },
  { id: 13, src: "/images/gallery13.png", alt: "Moment", height: 320 },
  { id: 14, src: "/images/gallery14.png", alt: "Moment", height: 340 },
  { id: 15, src: "/images/gallery15.png", alt: "Moment", height: 280 },
  { id: 16, src: "/images/gallery16.png", alt: "Moment", height: 360 },
  { id: 17, src: "/images/gallery17.png", alt: "Moment", height: 310 },
  { id: 18, src: "/images/gallery18.png", alt: "Moment", height: 330 },
  { id: 19, src: "/images/gallery19.png", alt: "Moment", height: 300 },
  { id: 20, src: "/images/gallery20.png", alt: "Moment", height: 360 },
];