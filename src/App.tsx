import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFoundPage from "@/pages/system/NotFoundPage";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteLayout from "./components/layout/SiteLayout";
import { pages } from "./lib/pageRegistry";

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex gap-2">
        <div className="w-3 h-3 bg-coral animate-bounce shadow-[0_0_18px_var(--flame)]" style={{ animationDelay: "0ms" }} />
        <div className="w-3 h-3 bg-yellow animate-bounce shadow-[0_0_18px_var(--amber)]" style={{ animationDelay: "150ms" }} />
        <div className="w-3 h-3 bg-slate-brand animate-bounce shadow-[0_0_18px_var(--ember)]" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}

function Router() {
  return (
    <SiteLayout>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          {pages.map((page) => (
            <Route key={page.path} path={page.path} component={page.component} />
          ))}
          <Route path="/404" component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </SiteLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <TooltipProvider>
          <Toaster
            theme="dark"
            toastOptions={{
              style: {
                background: "linear-gradient(180deg, var(--surface), var(--surface-deep))",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                boxShadow: "0 10px 28px color-mix(in oklab, var(--flame) 22%, transparent)",
              },
            }}
          />
          <Router />
      </TooltipProvider>
    </ErrorBoundary>
  );
}

export default App;
