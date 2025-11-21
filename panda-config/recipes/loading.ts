import type { SlotRecipeConfig } from "@pandacss/dev";

const colorMap = {
  primary: "blue.500",
  secondary: "gray.600",
  white: "white",
} as const;

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
} as const;

export const loading: SlotRecipeConfig = {
  className: "loading",
  description: "Loading spinner styles",
  slots: ["root", "label", "spinner"],
  base: {
    root: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2",
    },
    label: {
      fontWeight: "medium",
      fontSize: "sm",
      color: "contents.primary",
    },
    spinner: {
      animation: "spin 1s linear infinite",
    },
  },
  variants: {
    size: {
      sm: { spinner: { width: sizeMap.sm, height: sizeMap.sm } },
      md: { spinner: { width: sizeMap.md, height: sizeMap.md } },
      lg: { spinner: { width: sizeMap.lg, height: sizeMap.lg } },
      xl: { spinner: { width: sizeMap.xl, height: sizeMap.xl } },
    },
    color: {
      primary: { spinner: { color: colorMap.primary } },
      secondary: { spinner: { color: colorMap.secondary } },
      white: { spinner: { color: colorMap.white } },
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
};
