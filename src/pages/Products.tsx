import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [selectedGame, setSelectedGame] = useState<string>("all");
  const products = [
    // Rust Products
    {
      title: "Rust Internal",
      category: "rust",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$14.99",
      link: "/rust-internal",
    },
    {
      title: "Mek Rust",
      category: "rust",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$7.99",
      link: "/mek-rust",
    },
    {
      title: "Disconnect Rust",
      category: "rust",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$7.99",
      link: "/disconnect-rust",
    },
    // BO6 Products
    {
      title: "BO6 Internal",
      category: "bo6",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      anticheat: "Ricochet",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$5.99",
      link: "/bo6-internal",
    },
    {
      title: "BO6 Unlock All",
      category: "bo6",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      anticheat: "Ricochet",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$14.99",
      link: "/bo6-unlock-all",
    },
    // Fortnite Products
    {
      title: "Fortnite Ultimate",
      category: "fortnite",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$5.99",
      link: "/fortnite-ultimate",
    },
    {
      title: "Disconnect Fortnite",
      category: "fortnite",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$8.99",
      link: "/disconnect-fortnite",
    },
    // R6 Products
    {
      title: "Inferno R6",
      category: "r6",
      image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&q=80",
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$5.99",
      link: "/inferno-r6",
    },
    {
      title: "R6 Unlock All",
      category: "r6",
      image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&q=80",
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$4.99",
      link: "/r6-unlock-all",
    },
    {
      title: "Exodus Delta Force",
      category: "delta-force",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$4.99",
      link: "/exodus-delta-force",
    },
    // Other Products
    {
      title: "Exodus Apex",
      category: "apex",
      image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&q=80",
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$3.99",
      link: "/exodus-apex",
    },
    {
      title: "Predator Marvel Rivals",
      category: "marvel-rivals",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      anticheat: "Ricochet",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$6.99",
      link: "/predator-marvel-rivals",
    },
    {
      title: "Predator CS2",
      category: "cs2",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&q=80",
      anticheat: "VAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$2.49",
      link: "/predator-cs2",
    },
    // Valorant Products
    {
      title: "Valorant Colorbot",
      category: "valorant",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      anticheat: "Vanguard",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$5.99",
      link: "/valorant-colorbot",
    },
    // Spoofer Products
    {
      title: "Perm Spoofer",
      category: "spoofer",
      image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&q=80",
      anticheat: "ALL AC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$19.99",
      featured: true,
      featuredText: "CUSTOMER FAVORITE",
      link: "/perm-spoofer",
    },
    {
      title: "Exodus Temp Spoofer",
      category: "spoofer",
      image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&q=80",
      anticheat: "ALL AC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$3.99",
      link: "/exodus-temp-spoofer",
    },
  ];

  const gameCategories = [
    { id: "all", name: "All Products" },
    { id: "rust", name: "Rust" },
    { id: "bo6", name: "BO6" },
    { id: "fortnite", name: "Fortnite" },
    { id: "r6", name: "Rainbow Six" },
    { id: "delta-force", name: "Delta Force" },
    { id: "apex", name: "Apex" },
    { id: "marvel-rivals", name: "Marvel Rivals" },
    { id: "cs2", name: "CS2" },
    { id: "valorant", name: "Valorant" },
    { id: "spoofer", name: "Spoofers" },
  ];

  const filteredProducts = selectedGame === "all" 
    ? products 
    : products.filter(p => p.category === selectedGame);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Premium Products
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our selection of high-quality, undetected gaming products designed to enhance your experience.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {gameCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedGame === category.id ? "default" : "outline"}
                onClick={() => setSelectedGame(category.id)}
                className="transition-all"
              >
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
