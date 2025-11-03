import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { FAQSection } from "@/components/FAQSection";
// removed PaymentMethodsSection per request
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      <ProductsSection />
      <FAQSection />
      
      <Footer />
    </div>
  );
};

export default Index;
