import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";
import { Toaster } from "sonner";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ThemeProvider } from "@/components/site/ThemeProvider";

import HomePage from "./routes/index";
import AboutPage from "./routes/about";
import AdmissionsPage from "./routes/admissions";
import ContactPage from "./routes/contact";
import GalleryPage from "./routes/gallery";
import PricingPage from "./routes/pricing";
import ProgramsPage from "./routes/programs";
import TestimonialsPage from "./routes/testimonials";
import DigitalPage from "./routes/programs.digital";
import GymPage from "./routes/programs.gymnastics";
import HomeschoolPage from "./routes/programs.homeschool";
import SoccerPage from "./routes/programs.soccer";

function Layout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppButton />
        <Toaster position="top-center" richColors />
      </div>
    </ThemeProvider>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/admissions", element: <AdmissionsPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/gallery", element: <GalleryPage /> },
      { path: "/pricing", element: <PricingPage /> },
      { path: "/programs", element: <ProgramsPage /> },
      { path: "/programs/digital", element: <DigitalPage /> },
      { path: "/programs/gymnastics", element: <GymPage /> },
      { path: "/programs/homeschool", element: <HomeschoolPage /> },
      { path: "/programs/soccer", element: <SoccerPage /> },
      { path: "/testimonials", element: <TestimonialsPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
  );
}
