import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  image: string;
  anticheat: string;
  features: string[];
  lastDetection: string;
  lastUpdate: string;
  price: string;
  featured?: boolean;
  link?: string;
}

export const ProductCard = ({
  title,
  image,
  anticheat,
  features,
  lastDetection,
  lastUpdate,
  price,
  featured = false,
  link = "#",
}: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary">
      {featured && (
        <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">
          FEATURED
        </Badge>
      )}
      
      <div className="absolute top-4 left-4 z-10">
        <Badge variant="outline" className="border-accent/50 bg-accent/20 text-accent">
          <ShieldCheck className="h-3 w-3 mr-1" />
          Undetected
        </Badge>
      </div>

      <div className="aspect-video relative overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Undetected on</span>
            <span className="font-medium">{anticheat}</span>
          </div>
          {features.map((feature, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-4 mb-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Last Detection:</span>
            <span className="text-accent font-medium">{lastDetection}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Last Update:</span>
            <span className="text-primary font-medium">{lastUpdate}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border mb-4">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Starting from</div>
            <div className="text-2xl font-bold text-primary">{price}</div>
          </div>
          <Button className="shadow-glow-primary">
            GET ACCESS
          </Button>
        </div>
        
        <Link to={link} className="text-sm text-muted-foreground hover:text-primary transition-colors block text-center">
          More information
        </Link>
      </div>
    </Card>
  );
};
