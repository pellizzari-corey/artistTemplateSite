/*
 * FOOTER — "Digital Canvas" Bold Geometric Expressionism
 * Hard-edge color block footer with geometric accents,
 * organized by page registry groups.
 */

import { Link } from "wouter";
import { getPagesByGroup } from "@/lib/pageRegistry";
import { X, Mail, Instagram } from "lucide-react";

export default function Footer() {
  const mainPages = getPagesByGroup("main");
  const servicePages = getPagesByGroup("services");

  return (
    <footer className="relative bg-[linear-gradient(180deg,var(--surface-deep),color-mix(in_oklab,var(--surface-deep)_85%,black))] border-t border-border overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-coral/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-20 w-20 h-20 bg-yellow/10 rotate-45 blur-md" />

      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-[0.75rem] rotate-6 bg-[linear-gradient(135deg,var(--flame),var(--amber))]" />
                <div className="absolute inset-0 rounded-[0.75rem] -rotate-3 opacity-80 bg-[linear-gradient(135deg,var(--amber),var(--gold))]" />
                <span className="absolute inset-0 flex items-center justify-center font-[var(--font-display)] font-extrabold text-background text-base z-10">
                  A
                </span>
              </div>
              <span className="font-[var(--font-display)] font-bold text-lg tracking-tight">
                ATOUCHOFFLARE
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Custom emotes, branding, and digital art for streamers and creators.
              Bringing your vision to life with a warm ember glow and playful flare.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-[var(--font-display)] font-bold text-sm uppercase tracking-wider text-coral mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {mainPages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200 link-underline"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-[var(--font-display)] font-bold text-sm uppercase tracking-wider text-yellow mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {servicePages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200 link-underline"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-[var(--font-display)] font-bold text-sm uppercase tracking-wider text-slate-brand-light mb-5">
              Connect
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-muted hover:bg-coral text-muted-foreground hover:text-background transition-all duration-200"
                aria-label="X"
              >
                <X size={18} />
              </a>
              <a
                href="https://www.instagram.com/atouchofflare/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-muted hover:bg-coral text-muted-foreground hover:text-background transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:contact@atouchofflare.com"
                className="w-10 h-10 flex items-center justify-center bg-muted hover:bg-coral text-muted-foreground hover:text-background transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              contact@atouchofflare.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} ATouchOfFlare. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-xs">
              Crafted with warm flare
            </span>
            {/* Geometric accent */}
            <div className="flex gap-1.5">
              <div className="w-2 h-2 bg-coral" />
              <div className="w-2 h-2 bg-yellow" />
              <div className="w-2 h-2 bg-slate-brand" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
