import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect } from "react";

interface PurchaseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
  packageName: string;
  price: string;
  variantId: string | null;
}

export const PurchaseDialog = ({
  open,
  onOpenChange,
  productName,
  packageName,
  price,
  variantId,
}: PurchaseDialogProps) => {
  useEffect(() => {
    // Load SellHub script when dialog opens
    if (open) {
      const existingScript = document.querySelector('script[src*="sellhub"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://cdn.sellhub.cx/embed/v1/sellhub.js';
        script.async = true;
        script.onload = () => {
          console.log('SellHub script loaded successfully');
        };
        script.onerror = () => {
          console.error('Failed to load SellHub script');
        };
        document.body.appendChild(script);
      } else {
        // Script already exists, trigger a re-scan if SellHub is available
        if ((window as any).SellHub?.init) {
          (window as any).SellHub.init();
        }
      }
    }
  }, [open]);

  if (!variantId) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Purchase Information</DialogTitle>
          </DialogHeader>
          <div className="py-6 text-center">
            <p className="text-muted-foreground">
              This product is not yet available for purchase. Please contact support for more information.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
        </DialogHeader>
        <div className="py-6 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Product:</span>
              <span className="font-semibold">{productName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-semibold">{packageName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Price:</span>
              <span className="font-semibold text-primary text-lg">{price}</span>
            </div>
          </div>

          <div className="border-t pt-4 space-y-3">
            <button
              data-sellhub-variant={variantId}
              style={{
                borderRadius: "10px",
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "12px 24px",
                width: "100%",
                fontWeight: "600",
                cursor: "pointer",
                border: "none",
              }}
            >
              Buy Now
            </button>
            <button
              data-sellhub-cart-variant={variantId}
              style={{
                borderRadius: "10px",
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "12px 24px",
                width: "100%",
                fontWeight: "600",
                cursor: "pointer",
                border: "none",
              }}
            >
              Add to Cart
            </button>
            <button
              data-sellhub-open-cart-store-url="https://sgcheats.sellhub.cx"
              style={{
                borderRadius: "10px",
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "12px 24px",
                width: "100%",
                fontWeight: "600",
                cursor: "pointer",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1"/>
                <circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
              View Cart
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
