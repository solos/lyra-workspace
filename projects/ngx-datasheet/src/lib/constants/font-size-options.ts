const ALL_FONT_SIZE = [
  { pt: 8, px: 11 },
  { pt: 9, px: 12 },
  { pt: 10, px: 13 },
  { pt: 10.5, px: 14 },
  { pt: 11, px: 15 },
  { pt: 12, px: 16 },
  { pt: 14, px: 18.7 },
  { pt: 15, px: 20 },
  { pt: 16, px: 21.3 },
  { pt: 18, px: 24 },
  { pt: 22, px: 29.3 },
  { pt: 24, px: 32 },
  { pt: 26, px: 34.7 },
  { pt: 36, px: 48 },
  { pt: 42, px: 56 },
];

export const PT_PX_MAP: Map<number, number> = new Map(
  ALL_FONT_SIZE.map(({ pt, px }) => [pt, px]),
);
export const PX_PT_MAP: Map<number, number> = new Map(
  ALL_FONT_SIZE.map(({ pt, px }) => [px, pt]),
);
