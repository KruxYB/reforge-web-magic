// SellHub variant IDs mapping
// Format: [productSlug][packageId] = variantId

export const sellhubVariants: Record<string, Record<string, string>> = {
  "predator-cs2": {
    "1day": "9bc5e322-65cd-4c52-bb00-703857324534",
    "7day": "d1669f8a-2a2b-4afe-b4e7-1a2f263f6b84",
    "30day": "a659771f-e25f-4ee9-b5ad-153d2bb9c463",
    "365day": "9d323ef8-ce8c-40fb-a16c-b6bb1130031c",
  },
  "valorant-colorbot": {
    "1day": "f8335af6-0c04-4625-8ecb-4c1d1ad2eeb5",
    "7day": "d27923f3-4c1e-4121-bd12-1fef9cfa90da",
    "30day": "a00344c2-a59f-4df6-85e9-a326124d3bb3",
    "lifetime": "c8d8da3c-94c6-4c00-8cba-08ee878ec884",
  },
  "fortnite-ultimate": {
    "1day": "11e9d4ea-11a6-457f-9794-6350bd23165a",
    "3day": "690381ff-182e-4013-8df7-44f772738ae9",
    "7day": "66fc8ca8-d8b1-4a44-9eac-1ecdc2932bef",
    "30day": "bb28ce9f-7af1-4277-9b9a-5d14b9d5efaa",
    "lifetime": "504f33a9-8494-4ea1-a35e-d04a65618085",
  },
  "r6-unlock-all": {
    "1day": "01b8486f-2ec8-46fb-8911-4aec58c5380d",
    "7day": "1eaf720d-678d-4688-b553-abd14ed6c8d4",
    "30day": "ddb7b7e4-b184-44ad-9082-2d4c1fb416d7",
  },
  "mek-rust": {
    "1day": "8574e218-2ca9-432a-9c04-735d92c2e367",
    "3day": "d9c89685-2348-4cff-a977-6b1ce14212eb",
    "7day": "a15b46b0-ae99-4c47-9c70-5d1329b00d24",
    "30day": "88f84551-2fe2-41b4-8b65-800f44b19087",
    "lifetime": "388cd120-6d09-418f-805b-9428368dd2ac",
  },
  "predator-marvel-rivals": {
    "1day": "6a51ee72-4aee-4782-82bc-44c1ae20d7b4",
    "7day": "0959c679-f2dd-4247-b684-bd96da3fc7a1",
    "30day": "c6fe5d49-2a23-49e3-9a38-1f57231ac59f",
    "365day": "3a434145-c83e-478e-99ba-2874892af7d0",
  },
  "exodus-delta-force": {
    "1day": "1bada38c-23d5-4454-985b-7ffd9b85403d",
    "3day": "159754ee-8cdf-42e4-b69c-30284799abc5",
    "7day": "49a4ef53-68ac-4c2d-afd0-e945b6280780",
    "30day": "ff21e703-5ede-4d98-944d-ff1d342b0676",
  },
  "rust-external": {
    "3day": "6bdc5a3c-1774-4097-8589-3748c5fb2870",
    "7day": "6493b08a-46a5-4543-ac93-d7f80d1f4c9e",
    "30day": "b3b52775-a852-4d03-b49c-0b62dc3db657",
    "lifetime": "7d1b006d-3185-4ff1-aa3f-8a1cc02e5cc7",
  },
  "exodus-apex": {
    "1day": "8688b0e6-38de-430e-adc4-dff2656768f7",
    "3day": "79efc5ad-65e6-49d5-9359-74c25922cad1",
    "7day": "4fe21dd5-b4c9-43a0-b546-036acb91aa7b",
    "30day": "d5805618-3c4c-4fa4-8fe7-d8eed2ad8d89",
  },
  "bo6-internal": {
    "1day": "e847f4e0-63b1-4e14-9ac2-172872f18f2d",
    "7day": "3b12746f-acce-4c22-ba7e-ef7cc6e76bcd",
    "30day": "38b84915-ee7f-4de3-aa5c-16a47c2f7d79",
  },
  "disconnect-rust": {
    "1day": "9d018465-ef0a-4294-8ebf-a6dd383fa99b",
    "3day": "f64ef5f6-4e32-4097-9bc5-765845dacd05",
    "7day": "d7a5b004-2809-445a-baf5-9bc21c792070",
    "30day": "9c3c0436-a6cc-4b38-98f9-b54ce5c15aa5",
    "lifetime": "ef45aa0a-8880-4c10-8ae5-c6d3f4b44b58",
  },
  "inferno-r6": {
    "1day": "fee55c14-f09e-464b-8c14-d0414e4787cf",
    "7day": "95d078c1-ed05-45ac-8a22-6a7f5cbddc91",
    "30day": "15aa3a16-258e-4fe0-b5de-d2a776c7e73b",
  },
};

export const getVariantId = (productSlug: string, packageId: string): string | null => {
  return sellhubVariants[productSlug]?.[packageId] || null;
};
