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
    image: "/images/couple-walking.jpg",
    imagePosition: "right",
  },
  {
    title: "The Proposal",
    text:
      "Under a sky painted with the colours of grace, the question was asked — and the answer was already written on both our hearts.",
    image: "/images/proposal.jpg",
    imagePosition: "left",
  },
  {
    title: "The Journey",
    text:
      "From friendship to forever — every prayer and quiet moment has led us here.",
    image: "/images/couple-together.jpg",
    imagePosition: "right",
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 1, src: "/images/gallery1.jpg", alt: "Moment", height: 320 },
  { id: 2, src: "/images/gallery2.jpg", alt: "Moment", height: 360 },
  { id: 3, src: "/images/gallery3.jpg", alt: "Moment", height: 280 },
  { id: 4, src: "/images/gallery4.jpg", alt: "Moment", height: 340 },
  { id: 5, src: "/images/gallery5.jpg", alt: "Moment", height: 300 },
  { id: 6, src: "/images/gallery6.jpg", alt: "Moment", height: 380 },
  { id: 8, src: "/images/gallery8.jpg", alt: "Moment", height: 360 },
  { id: 9, src: "/images/gallery9.jpg", alt: "Moment", height: 300 },
  { id: 10, src: "/images/gallery10.jpg", alt: "Moment", height: 350 },
  { id: 11, src: "/images/gallery11.jpg", alt: "Moment", height: 290 },
  { id: 12, src: "/images/gallery12.jpg", alt: "Moment", height: 360 },
  { id: 13, src: "/images/gallery13.jpg", alt: "Moment", height: 320 },
  { id: 14, src: "/images/gallery14.jpg", alt: "Moment", height: 340 },
  { id: 15, src: "/images/gallery15.jpg", alt: "Moment", height: 280 },
  { id: 16, src: "/images/gallery16.jpg", alt: "Moment", height: 360 },
  { id: 17, src: "/images/gallery17.jpg", alt: "Moment", height: 310 },
  { id: 18, src: "/images/gallery18.jpg", alt: "Moment", height: 330 },
  { id: 19, src: "/images/gallery19.jpg", alt: "Moment", height: 300 },
];