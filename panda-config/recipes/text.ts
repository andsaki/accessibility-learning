import type { RecipeConfig } from "@pandacss/dev";

const wcagTextColors = {
  A: {
    color: "primitive.gray[600]",
  },
  AA: {
    color: "contents.primary",
  },
  AAA: {
    color: "primitive.black",
  },
} as const;

export const text: RecipeConfig = {
  className: "text",
  description: "Text component typography styles",
  base: {
    margin: "0",
    color: "contents.primary",
    textDecoration: "none",
  },
  variants: {
    variant: {
      h1: {
        fontSize: "5xl",
        fontWeight: "bold",
        lineHeight: "tight",
        letterSpacing: "tight",
      },
      h2: {
        fontSize: "4xl",
        fontWeight: "bold",
        lineHeight: "tight",
        letterSpacing: "tight",
      },
      h3: {
        fontSize: "3xl",
        fontWeight: "semibold",
        lineHeight: "snug",
        letterSpacing: "normal",
      },
      h4: {
        fontSize: "2xl",
        fontWeight: "semibold",
        lineHeight: "snug",
        letterSpacing: "normal",
      },
      h5: {
        fontSize: "xl",
        fontWeight: "semibold",
        lineHeight: "normal",
        letterSpacing: "normal",
      },
      h6: {
        fontSize: "lg",
        fontWeight: "semibold",
        lineHeight: "normal",
        letterSpacing: "normal",
      },
      "body-large": {
        fontSize: "lg",
        fontWeight: "normal",
        lineHeight: "relaxed",
      },
      body: {
        fontSize: "base",
        fontWeight: "normal",
        lineHeight: "normal",
      },
      "body-small": {
        fontSize: "sm",
        fontWeight: "normal",
        lineHeight: "normal",
      },
      caption: {
        fontSize: "sm",
        fontWeight: "normal",
        lineHeight: "normal",
      },
      overline: {
        fontSize: "xs",
        fontWeight: "semibold",
        lineHeight: "normal",
        letterSpacing: "wider",
        textTransform: "uppercase",
      },
    },
    align: {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" },
      justify: { textAlign: "justify" },
    },
    wcagLevel: {
      A: wcagTextColors.A,
      AA: wcagTextColors.AA,
      AAA: wcagTextColors.AAA,
    },
  },
  defaultVariants: {
    variant: "body",
    align: "left",
    wcagLevel: "AA",
  },
};
