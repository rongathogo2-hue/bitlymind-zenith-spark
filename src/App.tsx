import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SoftwareEngineering from "./pages/SoftwareEngineering";
import Cybersecurity from "./pages/Cybersecurity";
import MobileWeb from "./pages/MobileWeb";
import Optimization from "./pages/Optimization";
import Enterprise from "./pages/Enterprise";
import MVP from "./pages/MVP";
import About from "./pages/About";
import CareersPage from "./pages/CareersPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Transformation from "./pages/Transformation";
import Fintech from "./pages/Fintech";
import Health from "./pages/Health";
import Eccomerce from "./pages/Eccomerce";
import Saas from "./pages/Saas";
import Team from "./pages/Team";
import Case from "./pages/Case";
import Blog from "./pages/Blog";
import Docs from "./pages/Docs";
import Support from "./pages/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Services Routes */}
          <Route path="/software-engineering" element={<SoftwareEngineering />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/mobile-web" element={<MobileWeb />} />
          <Route path="/optimization" element={<Optimization />} />
          
          {/* Solutions Routes */}
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/mvp" element={<MVP />} />
          <Route path="/transformation" element={<Transformation />} />
          <Route path="/consulting" element={<Contact />} />
          
          {/* Industries Routes */}
          <Route path="/fintech" element={<Fintech />} />
          <Route path="/healthcare" element={<Health />} />
          <Route path="/ecommerce" element={<Eccomerce />} />
          <Route path="/saas" element={<Saas />} />
          
          {/* Company Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/case-studies" element={<Case />} />
          
          {/* Resources Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
