import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Zap, Headphones, Star } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { PaymentMethodsSection } from "@/components/PaymentMethodsSection";
import { Footer } from "@/components/Footer";

const ProductDetail = () => {
  const [selectedPackage, setSelectedPackage] = useState("week");

  const packages = [
    { id: "week", name: "1 Week", validity: "Valid for 1 week", price: "$13.99" },
    { id: "month", name: "1 Month", validity: "Valid for 1 month", price: "$29.99" },
    { id: "lifetime", name: "Lifetime", validity: "One time payment", price: "$44.99" },
  ];

  const features = {
    aim: [
      "Aim", "Visible Check", "Draw FOV", "AimBot", "Recoil Control System",
      "RGB Fov", "Draw Recoil Crosshair", "Snapline Check", "Recoil Crosshair",
      "No Spread", "Aim Radius", "Smoothness", "Aim-Bone"
    ],
    visuals: [
      "ESP", "Skeleton", "Snapline", "Health", "Head", "Distance",
      "Health-Bar", "Esp Distance", "2D Box", "Player Name", "Corner Box",
      "3D Box", "Weapon Name", "Radar", "Dormant"
    ],
  };

  const relatedProducts = [
    {
      title: "Valorant",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      anticheat: "Vanguard",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "8+ months ago",
      lastUpdate: "few days ago",
      price: "$13.99",
      featured: true,
      link: "/valorant",
    },
    {
      title: "HWID Spoofer",
      image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&q=80",
      anticheat: "ALL AC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$19.99",
      featured: true,
      link: "/hwid-spoofer",
    },
    {
      title: "Black Ops 6",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      anticheat: "Ricochet",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "6+ months ago",
      lastUpdate: "few days ago",
      price: "$13.99",
      featured: true,
      link: "/black-ops-6",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Product Image */}
            <div className="relative">
              <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground">
                Undetected
              </Badge>
              <Card className="overflow-hidden border-border/50">
                <img
                  src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80"
                  alt="Rust"
                  className="w-full aspect-video object-cover"
                />
              </Card>
              <Badge variant="outline" className="mt-4 text-primary border-primary">
                Starting at $13.99
              </Badge>
            </div>

            {/* Product Info */}
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Premium Product
              </Badge>
              <h1 className="text-4xl font-bold mb-4">Rust</h1>
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">(125 reviews)</span>
              </div>
              <p className="text-muted-foreground mb-8">
                Get undetected Rust cheats featuring aimbot, wallhacks and more. Dominate your games safely and efficiently
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Choose your package</h3>
                <div className="space-y-3">
                  {packages.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                        selectedPackage === pkg.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{pkg.name}</div>
                          <div className="text-sm text-muted-foreground">{pkg.validity}</div>
                        </div>
                        <div className="text-xl font-bold text-primary">{pkg.price}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Instant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="h-4 w-4 text-primary" />
                  <span>24/7 Support</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 shadow-glow-primary">
                  Buy with card
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  Buy with crypto
                </Button>
              </div>
            </div>
          </div>

          {/* Product Features */}
          <Card className="p-8 mb-12 border-border/50">
            <h2 className="text-2xl font-bold mb-6 text-primary">Product Features</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">AIM</h3>
                <div className="space-y-2">
                  {features.aim.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">VISUALS</h3>
                <div className="space-y-2">
                  {features.visuals.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">GENERAL</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium">AC Supported: </span>
                    <span className="text-muted-foreground">We're completely undetected across any AC.</span>
                  </div>
                  <div>
                    <span className="font-medium">Windows Versions We Support: </span>
                    <span className="text-muted-foreground">We Support All Windows 10 and All Windows 11 Versions ranging from 1909 - 24h2</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Related Products */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <PaymentMethodsSection />
      <Footer />
    </div>
  );
};

export default ProductDetail;
