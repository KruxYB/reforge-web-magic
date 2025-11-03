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
          console.error('Failed to load SellHub script (primary host)');
          const alt = document.createElement('script');
          alt.src = 'https://sellhub.cx/embed/v1/sellhub.js';
          alt.async = true;
          alt.onload = () => console.log('SellHub script loaded from backup host');
          alt.onerror = () => console.error('Failed to load SellHub script (backup host)');
          document.body.appendChild(alt);
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
              onClick={(e) => {
                const sh = (window as any).SellHub;
                if (sh?.init) {
                  try { sh.init(); } catch {}
                  // In case listeners aren't attached yet, trigger a synthetic click on a temporary element
                  const tmp = document.createElement('button');
                  tmp.setAttribute('data-sellhub-variant', String(variantId));
                  document.body.appendChild(tmp);
                  setTimeout(() => { try { tmp.click(); } catch {} tmp.remove(); }, 0);
                } else {
                  // Fallback: open store in new tab
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
