import { Activity, Package, Star, Headphones } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    { icon: Activity, value: "99.9%", label: "Uptime", color: "text-primary" },
    { icon: Package, value: "2,256", label: "Products Sold", color: "text-primary" },
    { icon: Star, value: "4.99", label: "Average Rating", color: "text-primary" },
    { icon: Headphones, value: "24/7", label: "Support", color: "text-primary" },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto border-t border-border/60 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
