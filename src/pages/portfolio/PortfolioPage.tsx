/*
 * PORTFOLIO PAGE — "Digital Canvas" Bold Geometric Expressionism
 * Bento-grid gallery with category filtering, bold scale shifts,
 * and hover interactions.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { ExternalLink } from "lucide-react";

const EMOTE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663500119311/Ho5ZmJC4o5Kb3xStbbSt7v/emote-showcase-RDUFExnvnnAj2PHrXvh92Z.webp";
const BRANDING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663500119311/Ho5ZmJC4o5Kb3xStbbSt7v/branding-showcase-PVVBdQsYgzv2zzeLFeVHvS.webp";
const WORKSPACE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663500119311/Ho5ZmJC4o5Kb3xStbbSt7v/artist-workspace-hpMrV4xhM4A4mWVThyVLaV.webp";
const EMOTE_IMG1 = "https://emotesgallery.carrd.co/assets/images/gallery01/d5559c0d.png?v=7681a59d";
const EMOTE_IMG2 = "https://emotesgallery.carrd.co/assets/images/gallery01/2e8b1e62.png?v=7681a59d";
const EMOTE_IMG3 = "https://emotesgallery.carrd.co/assets/images/gallery01/5b8b5d2c.png?v=7681a59d";
const EMOTE_IMG4 = "https://emotesgallery.carrd.co/assets/images/gallery01/924566cf.png?v=7681a59d";

type Category = "all" | "emotes" 
// | "branding" | "overlays" | "illustrations";

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  featured?: boolean;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "FreeRod Single Emote",
    category: "emotes",
    image: EMOTE_IMG1,
    description: "Single emote for Twitch.Tv/Freerod",
    featured: false,
  },
  {
    id: 2,
    title: "ImHannahG Emote Set",
    category: "emotes",
    image: EMOTE_IMG2,
    description: "Emote Set for Twitch.Tv/ImHannahG",
    featured: false,
  },
  {
    id: 3,
    title: "Yoozaccc Emote Set",
    category: "emotes",
    image: EMOTE_IMG3,
    description: "Emote Set for Twitch.Tv/Yoozacc",
    featured: false,
  },
  {
    id: 4,
    title: "TakikageDetriot Emote Set",
    category: "emotes",
    image: EMOTE_IMG4,
    description: "Emote Set for Twitch.Tv/TakikageDetriot",
    featured: false,
  },

  // {
  //   id: 1,
  //   title: "Chibi Emote Pack",
  //   category: "emotes",
  //   image: EMOTE_IMG,
  //   description: "Set of 8 custom chibi emotes for a Twitch partner",
  //   featured: true,
  // },
  // {
  //   id: 2,
  //   title: "CY Brand Identity",
  //   category: "branding",
  //   image: BRANDING_IMG,
  //   description: "Full brand package including logo, overlays, and social media kit",
  //   featured: true,
  // },
  // {
  //   id: 3,
  //   title: "Creative Workspace",
  //   category: "illustrations",
  //   image: WORKSPACE_IMG,
  //   description: "Digital illustration of the creative process",
  // },
  // {
  //   id: 4,
  //   title: "Stream Overlay Pack",
  //   category: "overlays",
  //   image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=400&fit=crop",
  //   description: "Complete stream overlay set with alerts and transitions",
  // },
  // {
  //   id: 5,
  //   title: "Kawaii Emote Set",
  //   category: "emotes",
  //   image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=600&h=400&fit=crop",
  //   description: "Cute kawaii-style emotes for a variety streamer",
  // },
  // {
  //   id: 6,
  //   title: "Esports Logo",
  //   category: "branding",
  //   image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
  //   description: "Bold esports team logo and jersey design",
  // },
  // {
  //   id: 7,
  //   title: "Mascot Character",
  //   category: "illustrations",
  //   image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
  //   description: "Custom mascot character for a gaming community",
  // },
  // {
  //   id: 8,
  //   title: "Minimal Stream Pack",
  //   category: "overlays",
  //   image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
  //   description: "Clean, minimal stream overlay package",
  // },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Work" },
  { value: "emotes", label: "Emotes" },
  // { value: "branding", label: "Branding" },
  // { value: "overlays", label: "Overlays" },
  // { value: "illustrations", label: "Illustrations" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <section className="pt-12 md:pt-20 pb-8 md:pb-12">
        <div className="container">
          <SectionHeading
            tag="Portfolio"
            title="Bold work, bolder results."
            description="Every project is a collaboration. Here's a selection of recent work across emotes, branding, overlays, and custom illustrations."
            accentColor="coral"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 font-[var(--font-display)] font-semibold text-xs uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat.value
                    ? "bg-coral text-background"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className={`${item.featured ? "md:col-span-2 md:row-span-1" : ""}`}
                >
                  <div className="relative overflow-hidden group cursor-pointer bg-card border border-border hover:border-coral/30 transition-colors duration-300">
                    <div className={`relative overflow-hidden`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 bg-coral flex items-center justify-center">
                            <ExternalLink size={20} className="text-background" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-2 h-2 ${
                          item.category === "emotes" ? "bg-coral" :
                          // item.category === "branding" ? "bg-yellow" :
                          // item.category === "overlays" ? "bg-slate-brand" :
                          "bg-coral-light"
                        }`} />
                        <span className="text-muted-foreground font-[var(--font-display)] text-xs font-semibold uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-[var(--font-display)] font-bold text-base group-hover:text-coral transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
