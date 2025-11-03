import { Shield, Users, CheckCircle2, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="container mx-auto px-4 pt-28 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Headline & CTAs */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="outline" className="px-4 py-1.5 border-primary/40 bg-primary/10">
                <Shield className="h-4 w-4 mr-2" /> Secure & Undetected
              </Badge>
              <Badge variant="outline" className="px-4 py-1.5 border-accent/40 bg-accent/10">
                <Users className="h-4 w-4 mr-2" /> 15K+ Customers
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-5">
              Dominate Every Match
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              Undetected, secure, and always updated enhancements. Instant delivery and 24/7 support for the best gaming experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base px-8" asChild>
                <Link to="/products">View our Store</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 border-primary/50 hover:bg-primary/10" asChild>
                <Link to="/status">Check Status</Link>
              </Button>
            </div>

            {/* Small stats under CTAs */}
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">15,931</div>
                <div className="text-sm text-muted-foreground">Products Sold</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right: Product mosaic grid (as per screenshot) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <Link to="/valorant" className="group block">
                <div className="relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80"
                    alt="Valorant product preview"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-semibold">Valorant</span>
                    <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10">Vanguard</Badge>
                  </div>
                </div>
              </Link>

              {/* Card 2 */}
              <Link to="/rust" className="group block">
                <div className="relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80"
                    alt="Rust product preview"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-semibold">Rust</span>
                    <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10">EAC</Badge>
                  </div>
                </div>
              </Link>

              {/* Card 3 */}
              <Link to="/black-ops-6" className="group block">
                <div className="relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80"
                    alt="Black Ops 6 product preview"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-semibold">Black Ops 6</span>
                    <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10">Ricochet</Badge>
                  </div>
                </div>
              </Link>

              {/* Card 4 */}
              <Link to="/apex-legends" className="group block">
                <div className="relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&q=80"
                    alt="Apex Legends product preview"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-semibold">Apex Legends</span>
                    <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10">EAC</Badge>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
