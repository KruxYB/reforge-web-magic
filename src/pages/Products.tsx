import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";

const Products = () => {
  const products = [
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
      title: "Rust",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "7+ months ago",
      lastUpdate: "few days ago",
      price: "$13.99",
      featured: true,
      link: "/rust",
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
    {
      title: "Delta Force",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "10+ months ago",
      lastUpdate: "few days ago",
      price: "$13.99",
      featured: true,
      link: "/delta-force",
    },
    {
      title: "Battlefield 2042",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80",
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "5+ months ago",
      lastUpdate: "few days ago",
      price: "$13.99",
      featured: true,
      link: "/battlefield-2042",
    },
    {
      title: "Apex Legends",
      image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&q=80",
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "4+ months ago",
      lastUpdate: "few days ago",
      price: "$13.99",
      featured: true,
      link: "/apex-legends",
    },
    {
      title: "CS2",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&q=80",
      anticheat: "VAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "9+ months ago",
      lastUpdate: "few days ago",
      price: "$13.99",
      featured: true,
      link: "/cs2",
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
    </div>
  );
};

export default Products;
