import { Shield, Users, CheckCircle2, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Badge variant="outline" className="px-6 py-2 text-sm border-primary/50 bg-primary/10">
            <Shield className="h-4 w-4 mr-2" />
            Trusted by 15,000+ Gamers
          </Badge>
          <Badge variant="outline" className="px-6 py-2 text-sm border-accent/50 bg-accent/10">
            <Users className="h-4 w-4 mr-2" />
            1247 Online Now
          </Badge>
          <Badge variant="outline" className="px-6 py-2 text-sm border-primary/50 bg-primary/10">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            100% Secure
          </Badge>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-6xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 leading-[1.05]">
            Turn Every Battle Into A Win
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how games are meant to be played and enjoyed with undetected, secure, and always updated gaming enhancements.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Undetected</h3>
            <p className="text-muted-foreground">Stay safe with our advanced protection</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Delivery</h3>
            <p className="text-muted-foreground">Get access immediately after purchase</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-muted-foreground">Always here to help you succeed</p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <Button size="lg" className="text-base px-8 shadow-glow-primary" asChild>
            <Link to="/products">View our Store</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 border-primary/50 hover:bg-primary/10" asChild>
            <Link to="/status">Check Status</Link>
          </Button>
        </div>

        {/* Stats row */}
        <div className="mt-14 border-t border-border/60 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">15,931</div>
              <div className="text-sm text-muted-foreground">Products Sold</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">4.98</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
