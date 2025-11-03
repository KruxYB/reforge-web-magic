import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface StatusCardProps {
  category: string;
  name: string;
  price: string;
  lastDetection: string;
  week: string;
  month: string;
  os: string;
  status: string;
  features: string[];
  lastUpdate: string;
  link: string;
}

export const StatusCard = ({
  category,
  name,
  price,
  lastDetection,
  week,
  month,
  os,
  status,
  features,
  lastUpdate,
  link,
}: StatusCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "UNDETECTED":
        return "bg-accent";
      case "LAST 24 OWN RISK":
        return "bg-orange-500";
      case "TESTING":
        return "bg-yellow-500";
      case "UPDATING":
        return "bg-blue-500";
      case "OFFLINE":
        return "bg-destructive";
      default:
        return "bg-accent";
    }
  };

  return (
    <div>
      {/* Category Header */}
      <div className="bg-primary rounded-t-lg px-6 py-3">
        <h3 className="text-lg font-bold text-primary-foreground">{category}</h3>
      </div>

      {/* Content Card */}
      <Card className="rounded-t-none border-t-0 p-6 border-border/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Left Section */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold mb-1">{name}</h4>
                <p className="text-sm text-muted-foreground">Starting from <span className="text-primary font-semibold">{price}</span></p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
              <div>
                <span className="text-muted-foreground block mb-1">Last Detection</span>
                <span className="font-medium text-accent">{lastDetection}</span>
              </div>
              <div>
                <span className="text-muted-foreground block mb-1">Week</span>
                <span className="font-medium">{week}</span>
              </div>
              <div>
                <span className="text-muted-foreground block mb-1">Month</span>
                <span className="font-medium">{month}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {features.map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs border-primary/30 text-primary">
                  {feature}
                </Badge>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">Last updated: {lastUpdate}</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end gap-4">
            <div className="text-right">
              <span className="text-sm text-muted-foreground block mb-2">Supported OS:</span>
              <span className="text-sm font-medium text-primary">{os}</span>
            </div>

            <Badge className={`${getStatusColor(status)} text-white px-4 py-1`}>
              <span className="w-2 h-2 rounded-full bg-white mr-2" />
              {status}
            </Badge>

            <Link to={link}>
              <Button>
                Purchase Now
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};
