/**
 * PAGE REGISTRY — The single source of truth for all pages in the application.
 *
 * To add a new page:
 *   1. Create a component in src/pages/section/YourPage.tsx
 *   2. Add an entry to the `pages` array below
 *   3. That's it. The navbar, router, and footer will automatically pick it up.
 *
 * To remove a page:
 *   1. Remove its entry from the `pages` array
 *   2. Optionally delete the component file
 *
 * To reorder pages:
 *   1. Change the order in the `pages` array
 *
 * Page configuration options:
 *   - path: URL path (must start with /)
 *   - label: Display name in navigation
 *   - showInNav: Whether to show in the main navbar (default: true)
 *   - showInFooter: Whether to show in the footer nav (default: true)
 *   - isExternal: Whether the link opens in a new tab (default: false)
 *   - comingSoon: Shows a "coming soon" toast instead of navigating (default: false)
 *   - icon: Optional Lucide icon name for nav items
 *   - group: Optional grouping for footer organization
 */

import { lazy, type ComponentType, type LazyExoticComponent } from "react";

export interface PageConfig {
  path: string;
  label: string;
  component: LazyExoticComponent<ComponentType<unknown>>;
  showInNav?: boolean;
  showInFooter?: boolean;
  isExternal?: boolean;
  comingSoon?: boolean;
  icon?: string;
  group?: "main" | "services" | "legal" | "social";
}

export const pages: PageConfig[] = [
  {
    path: "/",
    label: "Home",
    component: lazy(() => import("@/pages/home/HomePage")),
    showInNav: true,
    showInFooter: false,
    group: "main",
  },
  {
    path: "/portfolio",
    label: "Portfolio",
    component: lazy(() => import("@/pages/portfolio/PortfolioPage")),
    showInNav: true,
    showInFooter: true,
    group: "main",
  },
  {
    path: "/emotes",
    label: "Emotes",
    component: lazy(() => import("@/pages/services/EmotesPage")),
    showInNav: true,
    showInFooter: true,
    group: "services",
  },
  {
    path: "/branding",
    label: "Branding",
    component: lazy(() => import("@/pages/services/BrandingPage")),
    showInNav: true,
    showInFooter: true,
    group: "services",
  },
  {
    path: "/about",
    label: "About",
    component: lazy(() => import("@/pages/about/AboutPage")),
    showInNav: true,
    showInFooter: true,
    group: "main",
  },
  {
    path: "/contact",
    label: "Contact",
    component: lazy(() => import("@/pages/contact/ContactPage")),
    showInNav: true,
    showInFooter: true,
    group: "main",
  },
  {
    path: "/store",
    label: "Store",
    component: lazy(() => import("@/pages/store/StorePage")),
    showInNav: true,
    showInFooter: true,
    comingSoon: false,
    group: "main",
  },
];

/** Get only pages that should appear in the navbar */
export const getNavPages = () => pages.filter((p) => p.showInNav !== false);

/** Get only pages that should appear in the footer */
export const getFooterPages = () => pages.filter((p) => p.showInFooter !== false);

/** Get pages by group for footer columns */
export const getPagesByGroup = (group: PageConfig["group"]) =>
  pages.filter((p) => p.group === group && p.showInFooter !== false);

/** Get a page config by its path */
export const getPageByPath = (path: string) => pages.find((p) => p.path === path);
