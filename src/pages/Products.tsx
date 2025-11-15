import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Product Images
import rustExternalImg from "@/assets/RUST_External.png";
import mekRustImg from "@/assets/RUST_Mek.png";
import disconnectRustImg from "@/assets/RUST_Disconnect.png";
import bo6InternalImg from "@/assets/BO6_Internal.png";
import bo6ExternalImg from "@/assets/BO6_External.png";
import fortniteUltimateImg from "@/assets/Fortnite_Ultimate.png";
import disconnectFortniteImg from "@/assets/Fortnite_Disconnect.png";
import infernoR6Img from "@/assets/R6_Inferno.png";
import r6UnlockAllImg from "@/assets/R6_Unlock_All.png";
import exodusDeltaForceImg from "@/assets/delta_force_exodus.png";
import exodusApexImg from "@/assets/apex_legends_exodus.png";
import predatorMarvelRivalsImg from "@/assets/marvel_rivals_predator.png";
import predatorCs2Img from "@/assets/cs2_predator.png";
import permSpooferImg from "@/assets/HWID_Spoofer_Perm.png";
import valorantInternalImg from "@/assets/Valorant_Internal.png";
import exodusTempSpooferImg from "@/assets/Exodus_Temp_Spoofer.png";
import bo7UnlockAllImg from "@/assets/BO7_Unlock_All.png";

const Products = () => {
  const [selectedGame, setSelectedGame] = useState<string>("all");
  const products = [
    // Rust Products
    {
      title: "Rust External",
      category: "rust",
      image: rustExternalImg,
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "7 months ago",
      lastUpdate: "few days ago",
      price: "$14.99",
      link: "/rust-external",
    },
    {
      title: "Mek Rust",
      category: "rust",
      image: mekRustImg,
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "10 months ago",
      lastUpdate: "few days ago",
      price: "$7.99",
      link: "/mek-rust",
    },
    {
      title: "Disconnect Rust",
      category: "rust",
      image: disconnectRustImg,
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "9 months ago",
      lastUpdate: "few days ago",
      price: "$7.99",
      link: "/disconnect-rust",
    },
    // BO6 Products
    {
      title: "BO6 Internal",
      category: "bo6",
      image: bo6InternalImg,
      anticheat: "Ricochet",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "5 months ago",
      lastUpdate: "few days ago",
      price: "$5.99",
      link: "/bo6-internal",
    },
    {
      title: "BO6 External",
      category: "bo6",
      image: bo6ExternalImg,
      anticheat: "Ricochet",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "9 months ago",
      lastUpdate: "few days ago",
      price: "$5.99",
      link: "/bo6-external",
    },
    {
      title: "BO7 Unlock All",
      category: "bo7",
      image: bo7UnlockAllImg,
      anticheat: "Ricochet",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$4.99",
      link: "/bo7-unlock-all",
    },
    // Fortnite Products
    {
      title: "Fortnite Ultimate",
      category: "fortnite",
      image: fortniteUltimateImg,
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "6 months ago",
      lastUpdate: "few days ago",
      price: "$5.99",
      link: "/fortnite-ultimate",
    },
    {
      title: "Disconnect Fortnite",
      category: "fortnite",
      image: disconnectFortniteImg,
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "11 months ago",
      lastUpdate: "few days ago",
      price: "$8.99",
      link: "/disconnect-fortnite",
    },
    // R6 Products
    {
      title: "Inferno R6",
      category: "r6",
      image: infernoR6Img,
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "5 months ago",
      lastUpdate: "few days ago",
      price: "$5.99",
      link: "/inferno-r6",
    },
    {
      title: "R6 Unlock All",
      category: "r6",
      image: r6UnlockAllImg,
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "8 months ago",
      lastUpdate: "few days ago",
      price: "$4.99",
      link: "/r6-unlock-all",
    },
    {
      title: "Exodus Delta Force",
      category: "delta-force",
      image: exodusDeltaForceImg,
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "11 months ago",
      lastUpdate: "few days ago",
      price: "$4.99",
      link: "/exodus-delta-force",
    },
    // Other Products
    {
      title: "Exodus Apex",
      category: "apex",
      image: exodusApexImg,
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "8 months ago",
      lastUpdate: "few days ago",
      price: "$3.99",
      link: "/exodus-apex",
    },
    {
      title: "Predator Marvel Rivals",
      category: "marvel-rivals",
      image: predatorMarvelRivalsImg,
      anticheat: "Ricochet",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "6 months ago",
      lastUpdate: "few days ago",
      price: "$6.99",
      link: "/predator-marvel-rivals",
    },
    {
      title: "Predator CS2",
      category: "cs2",
      image: predatorCs2Img,
      anticheat: "VAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "7 months ago",
      lastUpdate: "few days ago",
      price: "$2.49",
      link: "/predator-cs2",
    },
    // Valorant Products
    {
      title: "Valorant Internal",
      category: "valorant",
      image: valorantInternalImg,
      anticheat: "Vanguard",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "9 months ago",
      lastUpdate: "few days ago",
      price: "$9.99",
      link: "/valorant-internal",
    },
    // Spoofer Products
    {
      title: "Perm Spoofer",
      category: "spoofer",
      image: permSpooferImg,
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
      image: exodusTempSpooferImg,
      anticheat: "ALL AC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "10 months ago",
      lastUpdate: "few days ago",
      price: "$3.99",
      link: "/exodus-temp-spoofer",
    },
  ];

  const gameCategories = [
    { id: "all", name: "All Products" },
    { id: "rust", name: "Rust" },
    { id: "bo6", name: "BO6" },
    { id: "bo7", name: "BO7" },
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
