// All editable website content lives here.

export const site = {
  name: "House of Interio",
  tagline: "Interior Design Studio · Jaipur",
  city: "Jaipur, Rajasthan, India",
  owner: "Anjali Goyal",
  phone: "+91 85600 48350",
  phoneHref: "tel:+918560048350",
  whatsapp: "918560048350",
  email: "anjaligoyal3456@gmail.com",
  instagram: "https://www.instagram.com/house_of_interio/",
  instagramHandle: "@house_of_interio",
};

export const nav = [
  { href: "#story", label: "My Story" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export const heroSlides = [
  { src: "/images/hero-dining.jpg", alt: "Dining room with marble table, sculpted chairs and soft panelled walls" },
  { src: "/images/hero-living.jpg", alt: "Calm ivory living room with a floating TV console and textured glass wall" },
  { src: "/images/hero-villa.jpg", alt: "Double-height villa lounge with marble floors and timber panelling" },
];

export const services = [
  {
    no: "01",
    title: "Residential Interiors",
    text: "Complete homes, apartments and villas: space planning, finishes, lighting and furniture, all planned together.",
    img: "/images/kanak-tv.jpg",
  },
  {
    no: "02",
    title: "Commercial & Hospitality",
    text: "Restaurants, cafés and offices designed around how people gather, work and come back.",
    img: "/images/dosaka-1.jpg",
  },
  {
    no: "03",
    title: "Retail & Boutiques",
    text: "Stores that feel like part of the brand, with the merchandise given room to shine.",
    img: "/images/unimoda-poster.jpg",
  },
  {
    no: "04",
    title: "3D Visualisation",
    text: "Photoreal 3D views, so you can walk through your space before any work begins.",
    img: "/images/villa-dining.jpg",
  },
  {
    no: "05",
    title: "Turnkey Execution",
    text: "One accountable team from civil work to final styling: carpenters, artisans, timelines and quality checks.",
    img: "/images/kanak-wardrobe.jpg",
  },
  {
    no: "06",
    title: "Bespoke Furniture & Styling",
    text: "Custom pieces, upholstery, art and décor chosen so the room feels finished and personal.",
    img: "/images/mat-bench.jpg",
  },
];

export type Project = {
  title: string;
  place: string;
  category: string;
  text: string;
  palette: string;
  main: { src: string; alt: string };
  side: { src: string; alt: string };
  video?: string;
  feature?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title: "Kanakshree Residence",
    place: "Jaipur",
    category: "Residential · Full home",
    text: "A full-home interior where soft ivory panelling, warm walnut and Italian marble set a calm backdrop. Fluted timber feature walls anchor the bedrooms, a floating console keeps the living room light, and a blush-toned daughter's room with a hand-drawn botanical panel adds a personal note. Every room was planned around how the family spends its day.",
    palette: "Palette: ivory, walnut, Italian marble and dusty rose.",
    main: { src: "/images/kanak-master.jpg", alt: "Kanakshree master bedroom with grey upholstered bed and timber feature panel" },
    side: { src: "/images/kanak-daughter.jpg", alt: "Daughter's bedroom with botanical wall panel and blush furniture" },
    feature: {
      label: "Featured on Re-thinking The Future",
      href: "https://www.re-thinkingthefuture.com/residential/12803-kanakshree-by-house-of-interio/",
    },
  },
  {
    title: "The Arc House",
    place: "Jaipur",
    category: "Residential · Apartment",
    text: "Soft arches, cove lighting and pale timber turn a compact apartment into a calm, light-filled retreat.",
    palette: "Palette: warm white, oak, linen and brass.",
    main: { src: "/images/arc-living.jpg", alt: "Living and dining area with curved ceiling coves and globe pendants" },
    side: { src: "/images/arc-shelf.jpg", alt: "Arched display shelf above a set dining table" },
  },
  {
    title: "Unimoda Boutique",
    place: "Jaipur",
    category: "Retail · Fashion boutique",
    text: "A boutique designed as part of the brand itself, balancing individuality, elegance and expression.",
    palette: "Palette: blush plaster, pale wood and sculpted arches.",
    main: { src: "/images/unimoda-poster.jpg", alt: "Unimoda boutique with 'Dress to Impress' signage and curated garment display" },
    side: { src: "/images/unimoda-racks.jpg", alt: "Garment rails with curated monochrome pieces at Unimoda" },
    video: "/images/unimoda.mp4",
  },
  {
    title: "Dosaka",
    place: "Mansarovar, Jaipur",
    category: "Hospitality · South Indian restaurant",
    text: "A lively South Indian restaurant brought to life by a large hand-painted mural of coastal street scenes. Cascading white florals overhead soften a grey textured wall, while teak tables, mustard-cushioned chairs and warm pendant lights keep it casual and welcoming for families and friends.",
    palette: "Palette: teak, mustard, slate grey and folk-art colour.",
    main: { src: "/images/dosaka-1.jpg", alt: "Dosaka restaurant with colourful mural wall, floral ceiling installation and teak dining furniture" },
    side: { src: "/images/dosaka-mural.jpg", alt: "Detail of the hand-painted mural and floral canopy at Dosaka" },
  },
  {
    title: "Villa Concept",
    place: "Rajasthan",
    category: "3D Visualisation · Villa",
    text: "A double-height villa concept in sage panelling, book-matched marble and bronze details, refined in 3D before construction.",
    palette: "Palette: sage, statuario marble, walnut and bronze.",
    main: { src: "/images/villa-lounge.jpg", alt: "3D render of a villa lounge with stone feature wall" },
    side: { src: "/images/villa-dining.jpg", alt: "3D render of a sage panelled dining room" },
  },
];

export const process = [
  { no: "01", title: "Discover", text: "We start with a conversation and a site visit to understand how you live, what you love and what the space needs." },
  { no: "02", title: "Concept", text: "Mood boards, layouts and a material palette, refined with you until the direction feels right." },
  { no: "03", title: "Visualise", text: "Detailed 3D views and working drawings, so every corner is decided before work starts." },
  { no: "04", title: "Craft", text: "Our carpenters, artisans and site team build the design, with regular updates and quality checks." },
  { no: "05", title: "Reveal", text: "Final styling, a detailed walkthrough and handover of a home ready to live in." },
];

// TODO(owner): replace these SAMPLE testimonials with real client words before going live.
export const testimonials = [
  {
    quote: "Anjali understood exactly how our family lives. Every room feels like us, only calmer and more beautiful.",
    who: "Homeowner",
    where: "Residential project, Jaipur",
  },
  {
    quote: "The 3D views meant there were no surprises. What we saw on screen is exactly what we walked into.",
    who: "Villa client",
    where: "Rajasthan",
  },
  {
    quote: "Our boutique finally feels like our brand. Customers comment on the space before they look at the clothes.",
    who: "Founder",
    where: "Retail project, Jaipur",
  },
];

// Instagram strip: studio work, each tile links to the Instagram profile.
export const instaPosts = [
  { src: "/images/kanak-tv.jpg", alt: "Kanakshree living room" },
  { src: "/images/arc-shelf.jpg", alt: "Arched display shelf" },
  { src: "/images/dosaka-1.jpg", alt: "Dosaka restaurant mural" },
  { src: "/images/anjali-studio.jpg", alt: "Anjali sketching in the studio" },
  { src: "/images/kanak-daughter.jpg", alt: "Blush daughter's bedroom" },
  { src: "/images/unimoda-racks.jpg", alt: "Unimoda boutique rails" },
  { src: "/images/hero-living.jpg", alt: "Ivory living room" },
  { src: "/images/kanak-foyer.jpg", alt: "Fluted timber foyer" },
  { src: "/images/villa-dining.jpg", alt: "Sage dining room render" },
  { src: "/images/arc-arch.jpg", alt: "Arched timber doorway" },
  { src: "/images/kanak-wardrobe.jpg", alt: "Walk-in wardrobe" },
  { src: "/images/hero-dining.jpg", alt: "Marble dining room" },
];
