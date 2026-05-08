import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { SiteProvider } from "@/contexts/SiteContext";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Auth from "./pages/Auth.tsx";
import AdminLayout from "./pages/admin/AdminLayout.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import HeroEdit from "./pages/admin/HeroEdit.tsx";
import BenefitsEdit from "./pages/admin/BenefitsEdit.tsx";
import ProgramsEdit from "./pages/admin/ProgramsEdit.tsx";
import GalleryEdit from "./pages/admin/GalleryEdit.tsx";
import TestimonialsEdit from "./pages/admin/TestimonialsEdit.tsx";
import FAQEdit from "./pages/admin/FAQEdit.tsx";
import CTAEdit from "./pages/admin/CTAEdit.tsx";
import FooterEdit from "./pages/admin/FooterEdit.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <SiteProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Dashboard />} />
                  <Route path="hero" element={<HeroEdit />} />
                  <Route path="benefits" element={<BenefitsEdit />} />
                  <Route path="programs" element={<ProgramsEdit />} />
                  <Route path="gallery" element={<GalleryEdit />} />
                  <Route path="testimonials" element={<TestimonialsEdit />} />
                  <Route path="faq" element={<FAQEdit />} />
                  <Route path="cta" element={<CTAEdit />} />
                  <Route path="footer" element={<FooterEdit />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </SiteProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
