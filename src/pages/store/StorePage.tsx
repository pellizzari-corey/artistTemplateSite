import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import SectionHeading from "@/components/shared/SectionHeading";
import { ArrowRight, Flame, Sparkles, Star } from "lucide-react";

type StoreCategory = "all" | "emotes" | "overlays" | "bundles" | "adoptables";

interface Product {
  id: string;
  name: string;
  category: Exclude<StoreCategory, "all">;
  price: number;
  image: string;
  badge?: string;
  description: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Flare Chibi Emote Set",
    category: "emotes",
    price: 18,
    image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&h=800&fit=crop",
    badge: "Bestseller",
    description: "Soft, expressive emotes with a warm palette and playful energy.",
  },
  {
    id: "2",
    name: "Ember Stream Overlay Pack",
    category: "overlays",
    price: 26,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=800&fit=crop",
    badge: "Featured",
    description: "A polished overlay suite with cozy ember glows and clean panels.",
  },
  {
    id: "3",
    name: "Sunflare Creator Bundle",
    category: "bundles",
    price: 48,
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=800&fit=crop",
    badge: "Most Value",
    description: "A full creator identity pack for streamers, VTubers, and indie brands.",
  },
  {
    id: "4",
    name: "Foxfire Reaction Pack",
    category: "emotes",
    price: 24,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=800&fit=crop",
    badge: "New",
    description: "Cute reaction emotes tuned for Twitch, Discord, and YouTube.",
  },
  {
    id: "5",
    name: "Campfire Chatting Screen",
    category: "overlays",
    price: 22,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=800&fit=crop",
    description: "Warm just-chatting overlay layouts with subtle movement-friendly spacing.",
  },
  {
    id: "6",
    name: "Little Flame Adoptable",
    category: "adoptables",
    price: 35,
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=800&fit=crop",
    badge: "Limited",
    description: "One-off character design ready to adopt, name, and bring to life.",
  },
];

const categories: { value: StoreCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "emotes", label: "Emotes" },
  { value: "overlays", label: "Overlays" },
  { value: "bundles", label: "Bundles" },
  { value: "adoptables", label: "Adoptables" },
];

function badgeClasses(badge?: string) {
  switch (badge) {
    case "Bestseller":
      return "bg-[color-mix(in_oklab,var(--flame)_88%,black)] text-background";
    case "Featured":
      return "bg-[color-mix(in_oklab,var(--amber)_92%,white)] text-background";
    case "Most Value":
      return "bg-[color-mix(in_oklab,var(--ember-plum)_78%,black)] text-foreground";
    case "New":
      return "bg-[color-mix(in_oklab,var(--gold)_88%,white)] text-background";
    case "Limited":
      return "bg-[color-mix(in_oklab,var(--ember)_85%,black)] text-foreground";
    default:
      return "bg-secondary text-foreground";
  }
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.97 }}
      transition={{ duration: 0.28 }}
      className="fire-card overflow-hidden rounded-[1.6rem] group"
    >
      <div className="relative aspect-[1/1] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,color-mix(in_oklab,var(--surface-deep)_82%,black)_100%)]" />
        {product.badge && (
          <div className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-[var(--font-display)] font-bold uppercase tracking-[0.18em] ${badgeClasses(product.badge)}`}>
            {product.badge}
          </div>
        )}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/65">
              {product.category}
            </p>
            <h3 className="mt-1 text-lg font-bold text-foreground">
              {product.name}
            </h3>
          </div>
          <div className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm font-[var(--font-display)] font-bold text-foreground backdrop-blur-sm">
            ${product.price}
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-6 text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/60">
            <Flame size={14} />
            Ready to list on Etsy
          </span>
          <button
            type="button"
            className="fire-button rounded-full px-5 py-2.5 text-xs font-[var(--font-display)] font-bold uppercase tracking-[0.16em] transition-transform duration-200 hover:-translate-y-0.5"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState<StoreCategory>("all");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-12 md:pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[6%] top-10 h-36 w-36 rounded-full bg-[color-mix(in_oklab,var(--flame)_22%,transparent)] blur-3xl" />
          <div className="absolute right-[8%] top-0 h-44 w-44 rounded-full bg-[color-mix(in_oklab,var(--amber)_20%,transparent)] blur-3xl" />
          <div className="absolute left-1/2 top-32 h-28 w-28 -translate-x-1/2 rounded-full bg-[color-mix(in_oklab,var(--ember)_16%,transparent)] blur-2xl" />
        </div>

        <div className="container relative">
          <SectionHeading
            tag="Shop"
            title="A cozy ember-lit storefront."
            description="A warmer, more boutique-style store page for emotes, overlays, bundles, and future Etsy-ready listings."
            accentColor="yellow"
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_0.9fr]">
            <div className="fire-card rounded-[1.8rem] p-6 md:p-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-foreground/75">
                <Sparkles size={14} />
                Featured collection
              </div>
              <h2 className="max-w-xl text-3xl md:text-5xl text-foreground">
                Soft flame colors, cozy cards, and a storefront that feels like your brand.
              </h2>
              <p className="mt-4 max-w-2xl text-sm md:text-base leading-7 text-muted-foreground">
                This pass focuses on presentation first: warmer surfaces, softer glow, boutique product cards,
                and better hierarchy so the eventual Etsy integration feels native instead of bolted on.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="fire-button rounded-full px-6 py-3 text-sm font-[var(--font-display)] font-bold uppercase tracking-[0.16em]"
                >
                  Ask About Custom Work
                </Link>
                <button
                  type="button"
                  className="rounded-full border border-[color-mix(in_oklab,var(--border)_70%,var(--amber)_30%)] bg-black/15 px-6 py-3 text-sm font-[var(--font-display)] font-bold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-black/25"
                >
                  Etsy integration next
                </button>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <div className="fire-card rounded-[1.8rem] p-6">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--flame),var(--amber))] text-background shadow-[0_10px_24px_color-mix(in_oklab,var(--flame)_35%,transparent)]">
                  <Star size={18} />
                </div>
                <h3 className="text-2xl text-foreground">Curated feel</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  More “fire-lit boutique” and less generic storefront placeholder.
                </p>
              </div>

              <div className="fire-card rounded-[1.8rem] p-6">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--ember),var(--gold))] text-background shadow-[0_10px_24px_color-mix(in_oklab,var(--amber)_28%,transparent)]">
                  <Flame size={18} />
                </div>
                <h3 className="text-2xl text-foreground">Etsy-ready path</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  The layout is now a better foundation for product cards that later link straight to Etsy listings.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((category) => {
              const active = activeCategory === category.value;
              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setActiveCategory(category.value)}
                  className={
                    active
                      ? "rounded-full bg-[linear-gradient(135deg,var(--flame),var(--amber))] px-4 py-2.5 text-xs font-[var(--font-display)] font-bold uppercase tracking-[0.16em] text-background shadow-[0_10px_20px_color-mix(in_oklab,var(--flame)_28%,transparent)]"
                      : "rounded-full border border-border bg-[color-mix(in_oklab,var(--surface)_85%,black)] px-4 py-2.5 text-xs font-[var(--font-display)] font-bold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                  }
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container">
          <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42 }}
            className="mt-16 rounded-[2rem] border border-[color-mix(in_oklab,var(--border)_72%,var(--amber)_28%)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--surface)_88%,white)_0%,var(--surface-deep)_100%)] p-8 md:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/15 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-foreground/70">
                  <Sparkles size={13} />
                  Next step ready
                </p>
                <h3 className="text-3xl md:text-4xl text-foreground">
                  Want this wired to Etsy next?
                </h3>
                <p className="mt-4 max-w-2xl text-sm md:text-base leading-7 text-muted-foreground">
                  The page is now visually aligned with the ember theme. The next pass can swap the placeholder buttons
                  for real “Buy on Etsy” links, featured collections, and shop sections once your storefront details are ready.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="fire-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-[var(--font-display)] font-bold uppercase tracking-[0.16em]"
                >
                  Discuss custom listing art
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
