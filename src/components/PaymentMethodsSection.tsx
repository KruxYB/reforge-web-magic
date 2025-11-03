import { CreditCard } from "lucide-react";

export const PaymentMethodsSection = () => {
  const paymentMethods = [
    { name: "Visa", icon: "💳" },
    { name: "Mastercard", icon: "💳" },
    { name: "PayPal", icon: "💰" },
    { name: "Google Pay", icon: "G" },
    { name: "Bitcoin", icon: "₿" },
    { name: "Ethereum", icon: "Ξ" },
    { name: "Litecoin", icon: "Ł" },
  ];

  return (
    <section className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-muted-foreground text-sm font-medium mb-8">
          Accepted Payment Methods
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-16 h-16 rounded-lg bg-muted/30"
            >
              <span className="text-2xl">{method.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
