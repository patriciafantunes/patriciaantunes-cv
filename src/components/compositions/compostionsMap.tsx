import { ColorPalette } from "@/components/compositions/ColorPalette"

const COMPOSITIONS = {
  colorPalette: <ColorPalette colors={[]} />

};

export type CompositionKeys = keyof typeof COMPOSITIONS;