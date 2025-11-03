import { Home, Package, BookOpen, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import sgLogo from "@/assets/sg-logo.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <img src={sgLogo} alt="SG Cheats" className="h-8 w-8" />
            <span className="text-xl font-bold">
              SG <span className="text-primary">Cheats</span>
            </span>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <a href="/" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
              Home
            </a>
            <a href="/products" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              <Package className="h-4 w-4" />
              Products
            </a>
            <a href="#manuals" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              <BookOpen className="h-4 w-4" />
              Manuals
            </a>
            <a href="/status" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              <Activity className="h-4 w-4" />
              Status
            </a>
          </div>

          {/* Right: Discord Button */}
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Discord
          </Button>
        </div>
      </div>
    </nav>
  );
};
