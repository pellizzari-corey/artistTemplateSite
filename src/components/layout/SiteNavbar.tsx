/*
 * NAVBAR — "Digital Canvas" Bold Geometric Expressionism
 * Persistent top bar with oversized brand mark, snappy hover interactions,
 * and mobile hamburger with full-screen overlay.
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { getNavPages } from "@/lib/pageRegistry";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navPages = getNavPages();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (page: { path: string; comingSoon?: boolean }) => {
    if (page.comingSoon) {
      toast("Coming soon!", {
        description: "This feature is currently under development.",
      });
      return false;
    }
    return true;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-[0_8px_30px_color-mix(in_oklab,var(--flame)_12%,transparent)]"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] bg-background border border-border px-3 py-2 text-sm font-semibold"
          >
            Skip to content
          </a>
          {/* Brand Mark */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 md:w-10 md:h-10">
              <div className="absolute inset-0 rounded-[0.9rem] rotate-6 group-hover:rotate-12 transition-transform duration-300 bg-[linear-gradient(135deg,var(--flame),var(--amber))] shadow-[0_0_20px_color-mix(in_oklab,var(--flame)_25%,transparent)]" />
              <div className="absolute inset-0 rounded-[0.9rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-85 bg-[linear-gradient(135deg,var(--amber),var(--gold))]" />
              <span className="absolute inset-0 flex items-center justify-center font-[var(--font-display)] font-extrabold text-background text-lg md:text-xl z-10">
                A
              </span>
            </div>
            <span className="font-[var(--font-display)] font-bold text-lg md:text-xl tracking-tight text-foreground">
              ATOUCHOFFLARE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navPages.map((page) => {
              const isActive = location === page.path;
              return (
                <Link
                  key={page.path}
                  to={page.comingSoon ? "#" : page.path}
                  onClick={(e) => {
                    if (!handleNavClick(page)) e.preventDefault();
                  }}
                  className={`relative px-4 py-2 font-[var(--font-display)] font-semibold text-sm tracking-wide uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-coral"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {page.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-[3px] bg-coral"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="fire-button inline-flex items-center px-6 py-2.5 font-[var(--font-display)] font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-foreground"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[radial-gradient(circle_at_top,rgba(255,180,71,0.12),transparent_26%),linear-gradient(180deg,var(--background),var(--surface-deep))] flex flex-col items-start justify-center px-8"
          >
            {/* Geometric accent */}
            <div className="absolute top-20 right-8 w-24 h-24 bg-coral/10 rounded-full blur-xl" />
            <div className="absolute bottom-20 left-8 w-16 h-16 bg-yellow/10 rotate-45 blur-md" />

            <nav id="mobile-nav-menu" className="flex flex-col gap-2 w-full">
              {navPages.map((page, i) => {
                const isActive = location === page.path;
                return (
                  <motion.div
                    key={page.path}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      to={page.comingSoon ? "#" : page.path}
                      onClick={(e) => {
                        if (!handleNavClick(page)) e.preventDefault();
                      }}
                      className={`block py-3 font-[var(--font-display)] font-bold text-4xl tracking-tight transition-colors duration-200 ${
                        isActive ? "text-coral" : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      {page.label}
                      {isActive && (
                        <span className="inline-block w-2 h-2 bg-coral rounded-full ml-3 align-middle" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="mt-10 w-full"
            >
              <Link
                to="/contact"
                className="fire-button inline-flex items-center px-8 py-4 font-[var(--font-display)] font-bold text-lg uppercase tracking-wider rounded-full transition-all duration-200"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
