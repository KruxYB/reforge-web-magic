import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Zap, Headphones, Star, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const [selectedPackage, setSelectedPackage] = useState("week");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();
  const slug = location.pathname.replace("/", "");

  const productMap = {
    rust: {
      name: "Rust",
      images: ["https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80", "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80"],
      anticheat: "EAC",
      prices: { week: "$13.99", month: "$29.99", lifetime: "$44.99" },
      starting: "$13.99",
    },
    "rust-internal": {
      name: "Rust Internal",
      images: ["https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80", "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80"],
      anticheat: "EAC",
      prices: { week: "$29.99", month: "$49.99", lifetime: "$89.99" },
      starting: "$29.99",
    },
    "mek-rust": {
      name: "Mek Rust",
      images: ["https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80", "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80"],
      anticheat: "EAC",
      prices: { week: "$24.99", month: "$44.99", lifetime: "$79.99" },
      starting: "$24.99",
    },
    "disconnect-rust": {
      name: "Disconnect Rust",
      images: ["https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80", "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80"],
      anticheat: "EAC",
      prices: { week: "$19.99", month: "$39.99", lifetime: "$69.99" },
      starting: "$19.99",
    },
    "bo6-internal": {
      name: "BO6 Internal",
      images: ["https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80", "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80"],
      anticheat: "Ricochet",
      prices: { week: "$34.99", month: "$54.99", lifetime: "$99.99" },
      starting: "$34.99",
    },
    "bo6-unlock-all": {
      name: "BO6 Unlock All",
      images: ["https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80", "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80"],
      anticheat: "Ricochet",
      prices: { week: "$14.99", month: "$24.99", lifetime: "$44.99" },
      starting: "$14.99",
    },
    "zeroaim-bo6": {
      name: "ZeroAim BO6",
      images: ["https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80", "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80"],
      anticheat: "Ricochet",
      prices: { week: "$29.99", month: "$49.99", lifetime: "$89.99" },
      starting: "$29.99",
    },
    "fortnite-ultimate": {
      name: "Fortnite Ultimate",
      images: ["https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80", "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80"],
      anticheat: "BattlEye",
      prices: { week: "$24.99", month: "$44.99", lifetime: "$79.99" },
      starting: "$24.99",
    },
    "disconnect-fortnite": {
      name: "Disconnect Fortnite",
      images: ["https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80", "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80"],
      anticheat: "BattlEye",
      prices: { week: "$19.99", month: "$39.99", lifetime: "$69.99" },
      starting: "$19.99",
    },
    "venom-fortnite": {
      name: "Venom Fortnite",
      images: ["https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80", "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80"],
      anticheat: "BattlEye",
      prices: { week: "$27.99", month: "$47.99", lifetime: "$84.99" },
      starting: "$27.99",
    },
    "inferno-r6": {
      name: "Inferno R6",
      images: ["https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1200&q=80", "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1200&q=80"],
      anticheat: "BattlEye",
      prices: { week: "$22.99", month: "$42.99", lifetime: "$74.99" },
      starting: "$22.99",
    },
    "r6-unlock-all": {
      name: "R6 Unlock All",
      images: ["https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1200&q=80", "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1200&q=80"],
      anticheat: "BattlEye",
      prices: { week: "$12.99", month: "$22.99", lifetime: "$39.99" },
      starting: "$12.99",
    },
    "exodus-delta-force": {
      name: "Exodus Delta Force",
      images: ["https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&q=80", "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&q=80"],
      anticheat: "BattlEye",
      prices: { week: "$26.99", month: "$46.99", lifetime: "$82.99" },
      starting: "$26.99",
    },
    "exodus-apex": {
      name: "Exodus Apex",
      images: ["https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1200&q=80", "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1200&q=80"],
      anticheat: "EAC",
      prices: { week: "$28.99", month: "$48.99", lifetime: "$86.99" },
      starting: "$28.99",
    },
    "predator-marvel-rivals": {
      name: "Predator Marvel Rivals",
      images: ["https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80", "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80"],
      anticheat: "Ricochet",
      prices: { week: "$32.99", month: "$52.99", lifetime: "$94.99" },
      starting: "$32.99",
    },
    "predator-cs2": {
      name: "Predator CS2",
      images: ["https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200&q=80", "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200&q=80"],
      anticheat: "VAC",
      prices: { week: "$31.99", month: "$51.99", lifetime: "$92.99" },
      starting: "$31.99",
    },
    "valorant-colorbot": {
      name: "Valorant Colorbot",
      images: ["https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80", "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80"],
      anticheat: "Vanguard",
      prices: { week: "$18.99", month: "$38.99", lifetime: "$68.99" },
      starting: "$18.99",
    },
    "perm-spoofer-v1": {
      name: "Perm Spoofer V1",
      images: ["https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&q=80", "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&q=80"],
      anticheat: "ALL AC",
      prices: { week: "$49.99", month: "$69.99", lifetime: "$119.99" },
      starting: "$49.99",
    },
    "perm-spoofer-v2": {
      name: "Perm Spoofer V2",
      images: ["https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&q=80", "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&q=80"],
      anticheat: "ALL AC",
      prices: { week: "$59.99", month: "$79.99", lifetime: "$139.99" },
      starting: "$59.99",
    },
    "exodus-temp-spoofer": {
      name: "Exodus Temp Spoofer",
      images: ["https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&q=80", "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&q=80"],
      anticheat: "ALL AC",
      prices: { week: "$15.99", month: "$29.99", lifetime: "$49.99" },
      starting: "$15.99",
    },
    valorant: {
      name: "Valorant",
      images: ["https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80", "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80"],
      anticheat: "Vanguard",
      prices: { week: "$13.99", month: "$29.99", lifetime: "$44.99" },
      starting: "$13.99",
    },
    "hwid-spoofer": {
      name: "HWID Unban",
      images: ["https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&q=80", "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&q=80"],
      anticheat: "ALL AC",
      prices: { week: "$19.99", month: "$29.99", lifetime: "$44.99" },
      starting: "$19.99",
    },
    "black-ops-6": {
      name: "Black Ops 6",
      images: ["https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80", "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80"],
      anticheat: "Ricochet",
      prices: { week: "$13.99", month: "$29.99", lifetime: "$44.99" },
      starting: "$13.99",
    },
    "delta-force": {
      name: "Delta Force",
      images: ["https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&q=80", "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&q=80"],
      anticheat: "BattlEye",
      prices: { week: "$13.99", month: "$29.99", lifetime: "$44.99" },
      starting: "$13.99",
    },
    "battlefield-2042": {
      name: "Battlefield 2042",
      images: ["https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&q=80", "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&q=80"],
      anticheat: "EAC",
      prices: { week: "$13.99", month: "$29.99", lifetime: "$44.99" },
      starting: "$13.99",
    },
    "apex-legends": {
      name: "Apex Legends",
      images: ["https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1200&q=80", "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1200&q=80"],
      anticheat: "EAC",
      prices: { week: "$13.99", month: "$29.99", lifetime: "$44.99" },
      starting: "$13.99",
    },
    cs2: {
      name: "CS2",
      images: ["https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200&q=80", "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200&q=80"],
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
              <Card className="overflow-hidden border-border/50 relative group">
                <img
                  src={current.images[currentImageIndex]}
                  alt={current.name}
                  className="w-full aspect-video object-cover"
                />
                {current.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? current.images.length - 1 : prev - 1))}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === current.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {current.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex ? "bg-primary w-8" : "bg-background/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
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
                    <div className="space-y-2">
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

              <Button size="lg" className="w-full">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Purchase
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
