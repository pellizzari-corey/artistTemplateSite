/*
 * HOME PAGE — "Digital Canvas" Bold Geometric Expressionism
 * Full-viewport hero with oversized typography, services overview,
 * featured work bento grid, and CTA section.
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Smile, Sparkles } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663500119311/Ho5ZmJC4o5Kb3xStbbSt7v/hero-bg-X7yBgNdvzGduBNDDLvvkuF.webp";
const EMOTE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663500119311/Ho5ZmJC4o5Kb3xStbbSt7v/emote-showcase-RDUFExnvnnAj2PHrXvh92Z.webp";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const services = [
  {
    icon: Smile,
    title: "Emote Art",
    desc: "Custom Twitch, Kick & YouTube emotes that capture personality and boost engagement.",
    color: "coral",
    link: "/emotes",
  },
  {
    icon: Sparkles,
    title: "Custom Art",
    desc: "Unique illustrations, mascots, and character designs tailored to your vision.",
    color: "coral",
    link: "/portfolio",
  },
];

const colorMap: Record<string, { bg: string; text: string; icon: string }> = {
  coral: { bg: "bg-coral/10", text: "text-coral", icon: "text-coral" },
  yellow: { bg: "bg-yellow/10", text: "text-yellow", icon: "text-yellow" },
  slate: { bg: "bg-slate-brand/10", text: "text-slate-brand-light", icon: "text-slate-brand-light" },
};

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>

        {/* Geometric accents */}
        <div className="absolute top-32 right-[15%] w-4 h-4 bg-coral opacity-60 rotate-45 hidden lg:block" />
        <div className="absolute bottom-40 right-[25%] w-6 h-6 bg-yellow opacity-40 rounded-full hidden lg:block" />
        <div className="absolute top-1/2 right-[10%] w-3 h-12 bg-slate-brand opacity-30 hidden lg:block" />

        <div className="container relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-coral" />
              <span className="font-[var(--font-display)] font-semibold text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Emote & Branding Artist
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95]"
            >
              Art that
              <br />
              <span className="text-coral">speaks</span>{" "}
              <span className="text-yellow">loud.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 md:mt-8 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg"
            >
              Custom emotes and digital art for streamers and content
              creators who refuse to blend in.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 md:mt-10 flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-coral text-background font-[var(--font-display)] font-bold text-sm uppercase tracking-wider hover:bg-coral-light transition-colors duration-200 group"
              >
                View Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground/20 text-foreground font-[var(--font-display)] font-bold text-sm uppercase tracking-wider hover:border-coral hover:text-coral transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICES SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 section-surface">
        <div className="container">
          <SectionHeading
            tag="What I Do"
            title="Services"
            description="From tiny emotes to full brand identities — every pixel is placed with intention."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const colors = colorMap[service.color];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    to={service.link}
                    className="block p-6 md:p-8 bg-background border border-border hover:border-coral/40 transition-all duration-300 group h-full"
                  >
                    <div className={`w-12 h-12 ${colors.bg} flex items-center justify-center mb-5`}>
                      <service.icon size={22} className={colors.icon} />
                    </div>
                    <h3 className="font-[var(--font-display)] font-bold text-lg mb-3 group-hover:text-coral transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FEATURED WORK — Bento Grid
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            tag="Featured"
            title="Recent Work"
            description="A glimpse at some of the latest projects."
            accentColor="yellow"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Large emote showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/emotes"
                className="block relative overflow-hidden group aspect-[4/3]"
              >
                <img
                  src={EMOTE_IMG}
                  alt="Custom emote art showcase"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-coral" />
                    <span className="text-coral font-[var(--font-display)] text-xs font-semibold uppercase tracking-wider">
                      Emote Art
                    </span>
                  </div>
                  <h3 className="font-[var(--font-display)] font-bold text-xl md:text-2xl text-foreground">
                    Custom Emote Packs
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Expressive emotes for Twitch, Kick & more
                  </p>
                </div>
              </Link>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-[var(--font-display)] font-bold text-sm uppercase tracking-wider text-coral hover:text-coral-light transition-colors group"
            >
              View All Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="section-coral py-20 md:py-28 relative overflow-hidden">
        {/* Geometric accents */}
        <div className="absolute top-8 left-[10%] w-16 h-16 border-4 border-background/20 rotate-12 hidden md:block" />
        <div className="absolute bottom-8 right-[15%] w-10 h-10 bg-yellow/30 rounded-full hidden md:block" />

        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-background">
              Ready to stand out?
            </h2>
            <p className="mt-4 text-background/70 text-lg md:text-xl max-w-lg mx-auto">
              Let's create something bold together. Your brand deserves art that demands attention.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-coral font-[var(--font-display)] font-bold text-sm uppercase tracking-wider hover:bg-foreground transition-colors duration-200 group"
              >
                Start a Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-background/30 text-background font-[var(--font-display)] font-bold text-sm uppercase tracking-wider hover:border-background hover:bg-background/10 transition-colors duration-200"
              >
                Browse Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
