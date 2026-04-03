/*
 * BRANDING PAGE — "Digital Canvas" Bold Geometric Expressionism
 * Showcases branding services with case-study style layout and service breakdowns.
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { ArrowRight, Monitor, Palette, PenTool, Image, Layout, Type } from "lucide-react";

const BRANDING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663500119311/Ho5ZmJC4o5Kb3xStbbSt7v/branding-showcase-PVVBdQsYgzv2zzeLFeVHvS.webp";

const brandingServices = [
  {
    icon: PenTool,
    title: "Logo Design",
    desc: "Bold, memorable logos that work at any scale — from stream thumbnails to merchandise.",
  },
  {
    icon: Palette,
    title: "Color Systems",
    desc: "Strategic color palettes that convey your brand personality and ensure visual consistency.",
  },
  {
    icon: Type,
    title: "Typography",
    desc: "Custom type selections and hierarchy systems that give your brand a distinct voice.",
  },
  {
    icon: Monitor,
    title: "Stream Overlays",
    desc: "Full overlay packages — starting soon, BRB, offline screens, and webcam frames.",
  },
  {
    icon: Layout,
    title: "Panel Design",
    desc: "Twitch/Kick info panels that are both informative and on-brand.",
  },
  {
    icon: Image,
    title: "Social Media Kit",
    desc: "Banners, profile images, and templates for Twitter, Instagram, and Discord.",
  },
];

const packages = [
  {
    name: "Essentials",
    price: "$150",
    items: ["Logo design (2 concepts)", "Color palette", "2 Twitch panels", "Profile picture", "3 revisions per item"],
    accent: "border-muted",
  },
  {
    name: "Professional",
    price: "$350",
    items: ["Logo design (3 concepts)", "Full color system", "Stream overlay set", "6 Twitch panels", "Social media banners", "5 revisions per item", "Brand guidelines PDF"],
    accent: "border-coral",
    popular: true,
  },
  {
    name: "Complete",
    price: "$600",
    items: ["Logo design (5 concepts)", "Full color & type system", "Complete stream package", "All panels & alerts", "Social media kit", "Unlimited revisions", "Brand guidelines PDF", "Source files included", "Mascot character"],
    accent: "border-yellow",
  },
];

export default function Branding() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={BRANDING_IMG}
                  alt="Branding design showcase"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-yellow/10 -z-10" />
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-coral/10 rotate-45 -z-10" />
            </motion.div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                tag="Branding"
                title="Your brand, amplified."
                description="Complete visual identities for streamers and content creators. From logo to full stream package — every element designed to work together."
                accentColor="yellow"
              />
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-yellow text-background font-[var(--font-display)] font-bold text-sm uppercase tracking-wider hover:bg-yellow-light transition-colors duration-200 group"
                >
                  Start Your Brand
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 section-surface">
        <div className="container">
          <SectionHeading
            tag="Services"
            title="Everything your brand needs."
            description="Each service can be commissioned individually or as part of a complete brand package."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandingServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-6 md:p-8 bg-background border border-border hover:border-yellow/30 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-yellow/10 flex items-center justify-center mb-5">
                  <service.icon size={22} className="text-yellow" />
                </div>
                <h3 className="font-[var(--font-display)] font-bold text-lg mb-2 group-hover:text-yellow transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            tag="Packages"
            title="Brand packages."
            description="Save when you bundle services together. All packages include consultation and a brand guidelines document."
            align="center"
            accentColor="coral"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative p-6 md:p-8 bg-card border-2 ${pkg.accent} flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-coral text-background font-[var(--font-display)] font-bold text-[10px] uppercase tracking-wider">
                    Best Value
                  </div>
                )}
                <h3 className="font-[var(--font-display)] font-bold text-lg mb-1">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-[var(--font-display)] font-extrabold text-3xl">
                    {pkg.price}
                  </span>
                </div>
                <ul className="space-y-3 flex-1">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-yellow mt-1.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex items-center justify-center px-6 py-3 font-[var(--font-display)] font-bold text-sm uppercase tracking-wider transition-colors duration-200 ${
                    pkg.popular
                      ? "bg-coral text-background hover:bg-coral-light"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
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
