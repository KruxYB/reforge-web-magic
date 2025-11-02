import { Activity, Package, Star, Headphones } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    { icon: Activity, value: "99.9%", label: "Uptime", color: "text-primary" },
    { icon: Package, value: "15,931", label: "Products Sold", color: "text-primary" },
    { icon: Star, value: "4.98", label: "Average Rating", color: "text-primary" },
    { icon: Headphones, value: "24/7", label: "Support", color: "text-primary" },
  ];

  return (
    <section className="py-20 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
