import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";

import { Footer } from "@/components/Footer";

const Products = () => {
  const products = [
    // Row 1
    {
      title: "Rust Internal",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$29.99",
      link: "/rust-internal",
    },
    {
      title: "Mek Rust",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$24.99",
      link: "/mek-rust",
    },
    {
      title: "Disconnect Rust",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$19.99",
      link: "/disconnect-rust",
    },
    // Row 2
    {
      title: "BO6 Internal",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      anticheat: "Ricochet",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$34.99",
      link: "/bo6-internal",
    },
    {
      title: "BO6 Unlock All",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      anticheat: "Ricochet",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$14.99",
      link: "/bo6-unlock-all",
    },
    {
      title: "ZeroAim BO6",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      anticheat: "Ricochet",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$29.99",
      link: "/zeroaim-bo6",
    },
    // Row 3
    {
      title: "Fortnite Ultimate",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$24.99",
      link: "/fortnite-ultimate",
    },
    {
      title: "Disconnect Fortnite",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$19.99",
      link: "/disconnect-fortnite",
    },
    {
      title: "Venom Fortnite",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$27.99",
      link: "/venom-fortnite",
    },
    // Row 4
    {
      title: "Inferno R6",
      image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&q=80",
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$22.99",
      link: "/inferno-r6",
    },
    {
      title: "R6 Unlock All",
      image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&q=80",
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$12.99",
      link: "/r6-unlock-all",
    },
    {
      title: "Exodus Delta Force",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$26.99",
      link: "/exodus-delta-force",
    },
    // Row 5
    {
      title: "Exodus Apex",
      image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&q=80",
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$28.99",
      link: "/exodus-apex",
    },
    {
      title: "Predator Marvel Rivals",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      anticheat: "Ricochet",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$32.99",
      link: "/predator-marvel-rivals",
    },
    {
      title: "Predator CS2",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&q=80",
      anticheat: "VAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$31.99",
      link: "/predator-cs2",
    },
    // Row 6
    {
      title: "Valorant Colorbot",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      anticheat: "Vanguard",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$18.99",
      link: "/valorant-colorbot",
    },
    {
      title: "Perm Spoofer V1",
      image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&q=80",
      anticheat: "ALL AC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$49.99",
      featured: true,
      featuredText: "CUSTOMER FAVORITE",
      link: "/perm-spoofer-v1",
    },
    {
      title: "Perm Spoofer V2",
      image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&q=80",
      anticheat: "ALL AC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$59.99",
      link: "/perm-spoofer-v2",
    },
    // Row 7
    {
      title: "Exodus Temp Spoofer",
      image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&q=80",
      anticheat: "ALL AC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$15.99",
      link: "/exodus-temp-spoofer",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Premium Products
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our selection of high-quality, undetected gaming products designed to enhance your experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
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
