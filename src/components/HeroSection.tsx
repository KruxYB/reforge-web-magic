import { Shield, Users, CheckCircle2, Zap, Clock, Activity, Package, Star, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,hsl(var(--primary)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.08)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Badge variant="outline" className="px-6 py-2 text-sm border-primary/50 bg-primary/10">
            <Shield className="h-4 w-4 mr-2" />
            Trusted by 15,000+ Gamers
          </Badge>
          <Badge variant="outline" className="px-6 py-2 text-sm border-accent/50 bg-accent/10">
            <Users className="h-4 w-4 mr-2" />
            1252 Online Now
          </Badge>
          <Badge variant="outline" className="px-6 py-2 text-sm border-primary/50 bg-primary/10">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            100% Secure
          </Badge>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-6xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.05]">
            Turn Every Battle Into A Win
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how games are meant to be played and enjoyed with undetected, secure, and always updated gaming enhancements.
          </p>
        </div>

        {/* Feature highlights in bordered boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 p-6 rounded-lg border border-primary/20 bg-primary/5">
            <Shield className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Undetected</h3>
              <p className="text-sm text-muted-foreground">Stay safe with our advanced protection</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 rounded-lg border border-primary/20 bg-primary/5">
            <Zap className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Instant Delivery</h3>
              <p className="text-sm text-muted-foreground">Get access immediately after purchase</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 rounded-lg border border-primary/20 bg-primary/5">
            <Clock className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Always here to help you succeed</p>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="text-base px-8" asChild>
            <Link to="/products">View our Store →</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 border-primary/50 hover:bg-primary/10" asChild>
            <Link to="/status">Check Status</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
