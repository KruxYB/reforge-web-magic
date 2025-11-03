import { Navbar } from "@/components/Navbar";
import { StatusCard } from "@/components/StatusCard";
import { Badge } from "@/components/ui/badge";
import { PaymentMethodsSection } from "@/components/PaymentMethodsSection";
import { Footer } from "@/components/Footer";

const Status = () => {
  const statusLegend = [
    { label: "UNDETECTED", color: "bg-accent" },
    { label: "LAST 24 OWN RISK", color: "bg-orange-500" },
    { label: "TESTING", color: "bg-yellow-500" },
    { label: "UPDATING", color: "bg-blue-500" },
    { label: "OFFLINE", color: "bg-destructive" },
  ];

  const products = [
    {
      category: "VALORANT",
      name: "GHOSTY Valorant",
      price: "$13.99",
      lastDetection: "8+ months ago",
      week: "24/7",
      month: "24/7",
      os: "Windows 10/11",
      status: "UNDETECTED",
      features: ["Undetected on Vanguard", "Tournament/Ranked", "Windows 10/11"],
      lastUpdate: "few days ago",
      link: "/valorant",
    },
    {
      category: "HWID SPOOFER",
      name: "GHOSTY HWID Spoofer",
      price: "$19.99",
      lastDetection: "Never",
      week: "24/7",
      month: "24/7",
      os: "Windows 10/11",
      status: "UNDETECTED",
      features: ["Undetected on ALL AC", "Universal Support", "Windows 10/11"],
      lastUpdate: "few days ago",
      link: "/hwid-spoofer",
    },
    {
      category: "RUST",
      name: "GHOSTY Rust",
      price: "$13.99",
      lastDetection: "7+ months ago",
      week: "24/7",
      month: "24/7",
      os: "Windows 10/11",
      status: "UNDETECTED",
      features: ["Undetected on EAC", "Tournament/Ranked", "Windows 10/11"],
      lastUpdate: "few days ago",
      link: "/rust",
    },
    {
      category: "BLACK OPS 6",
      name: "GHOSTY BO6",
      price: "$13.99",
      lastDetection: "6+ months ago",
      week: "24/7",
      month: "24/7",
      os: "Windows 10/11",
      status: "UNDETECTED",
      features: ["Undetected on Ricochet", "Tournament/Ranked", "Windows 10/11"],
      lastUpdate: "few days ago",
      link: "/black-ops-6",
    },
    {
      category: "DELTA FORCE",
      name: "GHOSTY Delta Force",
      price: "$13.99",
      lastDetection: "10+ months ago",
      week: "24/7",
      month: "24/7",
      os: "Windows 10/11",
      status: "UNDETECTED",
      features: ["Undetected on BattlEye", "Tournament/Ranked", "Windows 10/11"],
      lastUpdate: "few days ago",
      link: "/delta-force",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Live Status
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Status</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Stay up to date with the current status of all our software.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {statusLegend.map((item, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-xs font-medium border-border/50"
                >
                  <span className={`w-2 h-2 rounded-full ${item.color} mr-2`} />
                  {item.label}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <StatusCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <PaymentMethodsSection />
      <Footer />
    </div>
  );
};

export default Status;
