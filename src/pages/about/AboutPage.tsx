/*
 * ABOUT PAGE — "Digital Canvas" Bold Geometric Expressionism
 * Artist bio, skills, tools, and workspace showcase.
 */

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const WORKSPACE_IMG = "https://hisflareonart.carrd.co/assets/images/image02.jpg?v=3d99b561";

const stats = [
  { value: "500+", label: "Emotes Created" },
  { value: "200+", label: "Happy Clients" },
  { value: "50+", label: "Brand Packages" },
  { value: "4+", label: "Years Experience" },
];

const tools = [
  "Clip Studio Paint",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Procreate",
  "Figma",
  "After Effects",
];

const skills = [
  { name: "Emote Design", level: 95 },
  { name: "Character Art", level: 90 },
  { name: "Logo & Branding", level: 88 },
  { name: "Stream Overlays", level: 85 },
  { name: "Illustration", level: 92 },
  { name: "Animation", level: 75 },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                tag="About"
                title="The artist behind the pixels."
                accentColor="coral"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hey there! I'm a digital artist specializing in emote art and branding
                  for streamers and content creators. With over four years of experience
                  in the streaming space, I understand what makes great emotes — they need
                  to be expressive, readable at tiny sizes, and unmistakably <em>you</em>.
                </p>
                <p>
                  My journey started as a streamer myself, frustrated with generic emotes
                  that didn't capture my personality. I picked up a drawing tablet and
                  never looked back. Now I help creators build visual identities that
                  stand out in a crowded space.
                </p>
                <p>
                  Every project starts with understanding who you are and what your
                  community loves. Whether it's a single emote or a complete brand
                  overhaul, I bring the same level of care and bold creativity to
                  every piece.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-coral text-background font-[var(--font-display)] font-bold text-sm uppercase tracking-wider hover:bg-coral-light transition-colors duration-200 group"
                >
                  Work With Me
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground/20 text-foreground font-[var(--font-display)] font-bold text-sm uppercase tracking-wider hover:border-coral hover:text-coral transition-colors duration-200"
                >
                  See My Work
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-full border-6 border-[color-mix(in_oklab,var(--border)_70%,var(--amber)_30%)]">
                <img
                  src={WORKSPACE_IMG}
                  alt="Artist workspace"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-coral/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow/10 rotate-12 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="py-16 md:py-20 section-coral">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="font-[var(--font-display)] font-extrabold text-4xl md:text-5xl text-background">
                  {stat.value}
                </div>
                <div className="mt-2 text-background/70 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Skills & Tools */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Skills */}
            <div>
              <SectionHeading
                tag="Skills"
                title="What I bring."
                accentColor="yellow"
              />
              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-[var(--font-display)] font-semibold text-sm">
                        {skill.name}
                      </span>
                      {/* <span className="text-muted-foreground text-sm">
                        {skill.level}%
                      </span> */}
                    </div>
                    <div className="h-2 bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + 0.3, duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-coral"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <SectionHeading
                tag="Tools"
                title="My toolkit."
                accentColor="slate"
              />
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="p-5 bg-card border border-border"
                  >
                    <span className="font-[var(--font-display)] font-semibold text-sm">
                      {tool}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
