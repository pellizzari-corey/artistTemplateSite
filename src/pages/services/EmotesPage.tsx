/*
 * EMOTES PAGE — "Digital Canvas" Bold Geometric Expressionism
 * Showcases emote art services, process, and pricing tiers.
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { ArrowRight, Check, Pencil, Layers, Send, MessageSquare } from "lucide-react";

const EMOTE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663500119311/Ho5ZmJC4o5Kb3xStbbSt7v/emote-showcase-RDUFExnvnnAj2PHrXvh92Z.webp";

const platforms = [
  { name: "Twitch", sizes: "28px, 56px, 112px" },
  { name: "Kick", sizes: "28px, 56px, 112px" },
  { name: "YouTube", sizes: "24px, 48px" },
  { name: "Discord", sizes: "32px, 64px, 128px" },
  { name: "7TV / BTTV / FFZ", sizes: "28px, 56px, 112px" },
];

const process = [
  { icon: MessageSquare, title: "Brief", desc: "Share your ideas, references, and personality. The more detail, the better the emotes." },
  { icon: Pencil, title: "Sketch", desc: "Rough sketches and concepts for your review. We iterate until the direction feels right." },
  { icon: Layers, title: "Refine", desc: "Full color rendering with clean linework. All sizes are tested for clarity at small scales." },
  { icon: Send, title: "Deliver", desc: "Final files in all required sizes and formats, ready to upload to your platform of choice." },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$25",
    per: "per emote",
    features: [
      "Simple expression emotes",
      "Up to 3 revisions",
      "All platform sizes included",
      "PNG format with transparency",
      "3-5 day turnaround",
    ],
    accent: "border-muted",
    buttonClass: "bg-muted text-foreground hover:bg-muted/80",
  },
  {
    name: "Standard",
    price: "$40",
    per: "per emote",
    features: [
      "Detailed character emotes",
      "Up to 5 revisions",
      "All platform sizes included",
      "PNG + GIF formats",
      "Sketch preview stage",
      "2-4 day turnaround",
    ],
    accent: "border-coral",
    buttonClass: "bg-coral text-background hover:bg-coral-light",
    popular: true,
  },
  {
    name: "Premium",
    price: "$60",
    per: "per emote",
    features: [
      "Complex/animated emotes",
      "Unlimited revisions",
      "All platform sizes included",
      "PNG + animated GIF/APNG",
      "Multiple sketch concepts",
      "Priority turnaround",
      "Source file included",
    ],
    accent: "border-yellow",
    buttonClass: "bg-yellow text-background hover:bg-yellow-light",
  },
];

export default function Emotes() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeading
                tag="Emote Art"
                title="Emotes that pop at every size."
                description="Custom emotes designed to be expressive, readable, and unmistakably yours — from 28px thumbnails to full-size displays."
              />
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-coral text-background font-[var(--font-display)] font-bold text-sm uppercase tracking-wider hover:bg-coral-light transition-colors duration-200 group"
                >
                  Commission Emotes
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={EMOTE_IMG}
                  alt="Custom emote art showcase"
                  className="w-full h-auto"
                />
              </div>
              {/* Geometric accent */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-coral/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow/10 rotate-12 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-16 md:py-20 section-surface">
        <div className="container">
          <SectionHeading
            tag="Platforms"
            title="Built for every platform."
            accentColor="yellow"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="p-5 bg-background border border-border"
              >
                <h4 className="font-[var(--font-display)] font-bold text-sm mb-1">
                  {platform.name}
                </h4>
                <p className="text-muted-foreground text-xs">{platform.sizes}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            tag="Process"
            title="From concept to chat."
            description="A streamlined process that keeps you in the loop at every stage."
            accentColor="coral"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-coral/10 flex items-center justify-center">
                    <step.icon size={18} className="text-coral" />
                  </div>
                  <span className="font-[var(--font-display)] font-extrabold text-3xl text-muted/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-[var(--font-display)] font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 md:py-32 section-surface">
        <div className="container">
          <SectionHeading
            tag="Pricing"
            title="Transparent pricing."
            description="Choose the tier that fits your needs. Bulk discounts available for packs of 5+."
            align="center"
            accentColor="yellow"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative p-6 md:p-8 bg-background border-2 ${tier.accent} flex flex-col`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-coral text-background font-[var(--font-display)] font-bold text-[10px] uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="font-[var(--font-display)] font-bold text-lg mb-1">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-[var(--font-display)] font-extrabold text-3xl">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground text-sm">{tier.per}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="text-coral mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex items-center justify-center px-6 py-3 font-[var(--font-display)] font-bold text-sm uppercase tracking-wider transition-colors duration-200 ${tier.buttonClass}`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
