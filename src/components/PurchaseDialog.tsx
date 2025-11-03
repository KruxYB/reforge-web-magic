import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
    // Initialize SellHub (script loaded globally in index.html)
    if (open && (window as any).SellHub?.init) {
      try { (window as any).SellHub.init(); } catch {}
    }
  }, [open]);

  if (!variantId) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Purchase Information</DialogTitle>
            <DialogDescription>Checkout is handled securely via SellHub.</DialogDescription>
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
          <DialogDescription>Checkout is handled securely via SellHub.</DialogDescription>
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

          <div className="border-t pt-4">
            <button
              data-sellhub-variant={variantId}
              data-sellhub-store-url="https://sgcheats.sellhub.cx"
              onClick={() => {
                // Fallback to ensure embeds script catches dynamically rendered button
                try {
                  const tmp = document.createElement('button');
                  tmp.setAttribute('data-sellhub-variant', String(variantId));
                  tmp.setAttribute('data-sellhub-store-url', 'https://sgcheats.sellhub.cx');
                  tmp.style.display = 'none';
                  document.body.appendChild(tmp);
                  tmp.click();
                  setTimeout(() => tmp.remove(), 0);
                } catch (e) {
                  console.warn('SellHub fallback click failed', e);
                  window.open('https://sgcheats.sellhub.cx', '_blank', 'noopener,noreferrer');
                }
              }}
              style={{
                borderRadius: '10px',
                backgroundColor: '#ffffff',
                color: '#000000',
                padding: '12px 24px',
                width: '100%',
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
