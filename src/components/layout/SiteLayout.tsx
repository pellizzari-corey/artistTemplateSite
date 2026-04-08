/*
 * LAYOUT — Wraps all pages with Navbar + Footer.
 * Handles scroll-to-top on route change and page transition animations.
 */

import { useEffect, type ReactNode } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import Navbar from "./SiteNavbar";
import Footer from "./SiteFooter";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <motion.main
        id="main-content"
        key={location}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex-1 pt-16 md:pt-20"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
