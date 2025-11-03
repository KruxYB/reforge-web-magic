import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Zap, Headphones, Star } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const [selectedPackage, setSelectedPackage] = useState("week");
  const location = useLocation();
  const slug = location.pathname.replace("/", "");

  const productMap = {
    rust: {
      name: "Rust",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80",
      anticheat: "EAC",
      prices: { week: "$13.99", month: "$29.99", lifetime: "$44.99" },
      starting: "$13.99",
    },
    valorant: {
      name: "Valorant",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
      anticheat: "Vanguard",
      prices: { week: "$13.99", month: "$29.99", lifetime: "$44.99" },
      starting: "$13.99",
    },
    "hwid-spoofer": {
      name: "HWID Unban",
      image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&q=80",
      anticheat: "ALL AC",
      prices: { week: "$19.99", month: "$29.99", lifetime: "$44.99" },
      starting: "$19.99",
    },
    "black-ops-6": {
      name: "Black Ops 6",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80",
      anticheat: "Ricochet",
      prices: { week: "$13.99", month: "$29.99", lifetime: "$44.99" },
      starting: "$13.99",
    },
    "delta-force": {
      name: "Delta Force",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&q=80",
      anticheat: "BattlEye",
      prices: { week: "$13.99", month: "$29.99", lifetime: "$44.99" },
      starting: "$13.99",
    },
    "battlefield-2042": {
      name: "Battlefield 2042",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&q=80",
      anticheat: "EAC",
      prices: { week: "$13.99", month: "$29.99", lifetime: "$44.99" },
      starting: "$13.99",
    },
    "apex-legends": {
      name: "Apex Legends",
      image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1200&q=80",
      anticheat: "EAC",
      prices: { week: "$13.99", month: "$29.99", lifetime: "$44.99" },
      starting: "$13.99",
    },
    cs2: {
      name: "CS2",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200&q=80",
      anticheat: "VAC",
      prices: { week: "$13.99", month: "$29.99", lifetime: "$44.99" },
      starting: "$13.99",
    },
  } as const;

  const current = productMap[slug as keyof typeof productMap] ?? productMap["rust"];

  const packages = [
    { id: "week", name: "1 Week", validity: "Valid for 1 week", price: current.prices.week },
    { id: "month", name: "1 Month", validity: "Valid for 1 month", price: current.prices.month },
    { id: "lifetime", name: "Lifetime", validity: "One time payment", price: current.prices.lifetime },
  ];

  const featureSections = {
    TESTED_ON: ["Works for all games."],
    SERVICES: [
      "Instant Delivery",
      "HWID Unban Guide for All Games",
      "VPK Bypass – TPM / Secure Boot / HVCI",
      "Customer Community Chat",
      "24/7 Customer Support",
      "One Click Unban – Automated",
      "E Plan Fix",
      "Customer HWID Reset Tool",
    ],
    SUPPORTED_MOTHERBOARDS: ["All motherboards are supported."],
  };

  const supportedGames = [
    "Fortnite",
    "Call of Duty: Black Ops 6",
    "Apex Legends",
    "Rust",
    "Delta Force",
    "Call of Duty: Warzone",
    "Valorant",
    "Rainbow Six Siege",
    "CS2",
    "Battlefield 2042",
  ];

  const relatedProducts = Object.entries(productMap)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, p]) => ({
      title: p.name,
      image: p.image,
      anticheat: p.anticheat,
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "6+ months ago",
      lastUpdate: "few days ago",
      price: p.prices.week,
      featured: true,
      link: `/${key}`,
    }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Product Image and left column content */}
            <div className="relative">
              <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground">
                Undetected
              </Badge>
              <Card className="overflow-hidden border-border/50">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full aspect-video object-cover"
                />
              </Card>
              <Badge variant="outline" className="mt-4 text-primary border-primary">
                Starting at {current.starting}
              </Badge>

              {/* Product Features below the image (top-to-bottom) */}
              <Card className="p-6 mt-6 border-border/50">
                <h2 className="text-xl font-semibold mb-4 text-primary">Product Features</h2>
                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">TESTED ON</h3>
                    <div className="space-y-2">
                      {featureSections.TESTED_ON.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">SERVICES</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {featureSections.SERVICES.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">SUPPORTED MOTHERBOARDS</h3>
                    <div className="space-y-2">
                      {featureSections.SUPPORTED_MOTHERBOARDS.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Supported Games */}
              <Card className="p-6 mt-6 border-border/50">
                <h2 className="text-xl font-semibold mb-4 text-primary">Supported Games</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {supportedGames.map((game, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{game}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Product Info */}
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Premium Product
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{current.name}</h1>
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

          {/* Features moved into left column below the image */}
          {/* ... keep existing code */}

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
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
