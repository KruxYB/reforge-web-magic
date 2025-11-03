import { Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sgLogo from "@/assets/sg-logo.png";

export const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{
             backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                               linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* Footer links */}
      <div className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={sgLogo} alt="SG Cheats" className="h-8 w-8" />
                <span className="text-xl font-bold">
                  SG <span className="text-primary">Cheats</span>
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                Premium gaming enhancements designed to elevate your experience with undetected,
                secure, and feature-rich solutions.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-primary">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/status" className="text-muted-foreground hover:text-primary transition-colors">
                    Status
                  </Link>
                </li>
                <li>
                  <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Popular Products */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-primary">Popular Products</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/valorant" className="text-muted-foreground hover:text-primary transition-colors">
                    Valorant
                  </Link>
                </li>
                <li>
                  <Link to="/hwid-spoofer" className="text-muted-foreground hover:text-primary transition-colors">
                    HWID Unban
                  </Link>
                </li>
                <li>
                  <Link to="/rust" className="text-muted-foreground hover:text-primary transition-colors">
                    Rust
                  </Link>
                </li>
                <li>
                  <Link to="/black-ops-6" className="text-muted-foreground hover:text-primary transition-colors">
                    BO6/WZ External
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-primary">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 SG Cheats. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Made with <span className="text-primary">💜</span> for gamers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
