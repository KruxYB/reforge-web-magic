import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Status from "./pages/Status";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/status" element={<Status />} />
          <Route path="/rust" element={<ProductDetail />} />
          <Route path="/rust-external" element={<ProductDetail />} />
          <Route path="/mek-rust" element={<ProductDetail />} />
          <Route path="/disconnect-rust" element={<ProductDetail />} />
          <Route path="/bo6-internal" element={<ProductDetail />} />
          <Route path="/zeroaim-bo6" element={<ProductDetail />} />
          <Route path="/fortnite-ultimate" element={<ProductDetail />} />
          <Route path="/disconnect-fortnite" element={<ProductDetail />} />
          <Route path="/venom-fortnite" element={<ProductDetail />} />
          <Route path="/inferno-r6" element={<ProductDetail />} />
          <Route path="/r6-unlock-all" element={<ProductDetail />} />
          <Route path="/exodus-delta-force" element={<ProductDetail />} />
          <Route path="/exodus-apex" element={<ProductDetail />} />
          <Route path="/predator-marvel-rivals" element={<ProductDetail />} />
          <Route path="/predator-cs2" element={<ProductDetail />} />
          <Route path="/valorant-colorbot" element={<ProductDetail />} />
          <Route path="/perm-spoofer" element={<ProductDetail />} />
          <Route path="/exodus-temp-spoofer" element={<ProductDetail />} />
          <Route path="/valorant" element={<ProductDetail />} />
          <Route path="/hwid-spoofer" element={<ProductDetail />} />
          <Route path="/black-ops-6" element={<ProductDetail />} />
          <Route path="/delta-force" element={<ProductDetail />} />
          <Route path="/battlefield-2042" element={<ProductDetail />} />
          <Route path="/apex-legends" element={<ProductDetail />} />
          <Route path="/cs2" element={<ProductDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
