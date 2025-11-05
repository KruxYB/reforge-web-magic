import { ProductCard } from "./ProductCard";
import fortniteUltimateImg from "@/assets/Fortnite_Ultimate.png";
import rustExternalImg from "@/assets/RUST_External.png";
import permSpooferImg from "@/assets/HWID_Spoofer_Perm.png";

export const ProductsSection = () => {
  const products = [
    {
      title: "Fortnite Ultimate",
      image: fortniteUltimateImg,
      anticheat: "BattlEye",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "6 months ago",
      lastUpdate: "few days ago",
      price: "$5.99",
      featured: false,
      link: "/fortnite-ultimate",
    },
    {
      title: "Rust External",
      image: rustExternalImg,
      anticheat: "EAC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "7 months ago",
      lastUpdate: "few days ago",
      price: "$14.99",
      featured: true,
      featuredText: "CUSTOMER FAVORITE",
      link: "/rust-external",
    },
    {
      title: "Perm Spoofer",
      image: permSpooferImg,
      anticheat: "ALL AC",
      features: ["Tournament/Ranked", "Windows 10/11"],
      lastDetection: "Never",
      lastUpdate: "few days ago",
      price: "$19.99",
      featured: false,
      link: "/perm-spoofer",
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            SG CHEATS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Undetected, Secure & Always Updated Gaming Cheats For Every Battle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
