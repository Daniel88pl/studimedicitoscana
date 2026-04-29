import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServiceDetail from "./pages/ServiceDetail";
import DoctorDetail from "./pages/DoctorDetail";
import GrossetoPage from "./pages/GrossetoPage";
import MedicinaDelLavoroPage from "./pages/MedicinaDelLavoroPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiePage from "./pages/CookiePage";
import TerminiPage from "./pages/TerminiPage";
import NoteLegaliPage from "./pages/NoteLegaliPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-natural-bg">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servizi/medicina-del-lavoro" element={<MedicinaDelLavoroPage />} />
            <Route path="/servizi/:id" element={<ServiceDetail />} />
            <Route path="/staff/:id" element={<DoctorDetail />} />
            <Route path="/grosseto" element={<GrossetoPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/cookie" element={<CookiePage />} />
            <Route path="/termini" element={<TerminiPage />} />
            <Route path="/note-legali" element={<NoteLegaliPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
