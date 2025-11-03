// SellHub variant IDs mapping
// Format: [productSlug][packageId] = variantId

export const sellhubVariants: Record<string, Record<string, string>> = {
  "predator-cs2": {
    "1day": "9bc5e322-65cd-4c52-bb00-703857324534",
    "7day": "d1669f8a-2a2b-4afe-b4e7-1a2f263f6b84",
    "30day": "a659771f-e25f-4ee9-b5ad-153d2bb9c463",
    "365day": "9d323ef8-ce8c-40fb-a16c-b6bb1130031c",
  },
  // Add variant IDs for other products as needed
  // Example structure:
  // "rust-internal": {
  //   "3day": "variant-id-here",
  //   "7day": "variant-id-here",
  //   "30day": "variant-id-here",
  //   "lifetime": "variant-id-here",
  // },
};

export const getVariantId = (productSlug: string, packageId: string): string | null => {
  return sellhubVariants[productSlug]?.[packageId] || null;
};
