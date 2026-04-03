/*
 * 404 PAGE — "Digital Canvas" Bold Geometric Expressionism
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute top-20 left-[10%] w-16 h-16 bg-coral/10 rotate-12" />
      <div className="absolute bottom-20 right-[15%] w-24 h-24 bg-yellow/5 rounded-full" />
      <div className="absolute top-1/3 right-[20%] w-3 h-20 bg-slate-brand/10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <div className="font-[var(--font-display)] font-extrabold text-[8rem] md:text-[12rem] leading-none text-muted/20">
          404
        </div>
        <h1 className="font-[var(--font-display)] font-bold text-2xl md:text-3xl -mt-6 mb-4">
          Page not found
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-coral text-background font-[var(--font-display)] font-bold text-sm uppercase tracking-wider hover:bg-coral-light transition-colors duration-200 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
