import type { SlotRecipeConfig } from "@pandacss/dev";

const focusStyles = {
  A: {
    backgroundColor: "blue.50",
    color: "blue.500",
    outlineColor: "blue.300",
  },
  AA: {
    backgroundColor: "blue.50",
    color: "blue.700",
    outlineColor: "blue.500",
  },
  AAA: {
    backgroundColor: "yellow",
    color: "blue.800",
    outlineColor: "black",
  },
} as const;

export const breadcrumbs: SlotRecipeConfig = {
  className: "breadcrumbs",
  description: "Breadcrumb navigation styles",
  slots: ["root", "list", "item", "link", "separator", "icon"],
  base: {
    root: {
      display: "block",
      width: "fit-content",
    },
    list: {
      display: "inline",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    item: {
      display: "inline",
      fontSize: "base",
      lineHeight: "normal",
    },
    link: {
      textDecoration: "underline",
      textUnderlineOffset: "0.1875rem",
      transitionProperty: "color, text-decoration-thickness, background-color, outline-color",
      transitionDuration: "normal",
      outline: "none",
    },
    separator: {
      display: "inline-flex",
      alignItems: "center",
      mx: "1",
      color: "gray.400",
    },
    icon: {
      width: "3",
      height: "3",
      color: "currentColor",
    },
  },
  variants: {
    wcagLevel: {
      A: {
        item: {
          color: "gray.500",
          "&[data-current='true']": {
            color: "gray.700",
          },
        },
        link: {
          color: "blue.500",
          _hover: {
            color: "blue.600",
            textDecorationThickness: "0.125rem",
          },
          _focusVisible: {
            ...focusStyles.A,
            outlineStyle: "solid",
            outlineWidth: "0.1875rem",
            outlineOffset: "0.125rem",
            borderRadius: "0.25rem",
          },
        },
        separator: {
          color: "gray.400",
        },
      },
      AA: {
        item: {
          color: "gray.600",
          "&[data-current='true']": {
            color: "gray.900",
          },
        },
        link: {
          color: "blue.700",
          _hover: {
            color: "blue.800",
            textDecorationThickness: "0.125rem",
          },
          _focusVisible: {
            ...focusStyles.AA,
            outlineStyle: "solid",
            outlineWidth: "0.1875rem",
            outlineOffset: "0.125rem",
            borderRadius: "0.25rem",
          },
        },
        separator: {
          color: "gray.400",
        },
      },
      AAA: {
        item: {
          color: "gray.700",
          "&[data-current='true']": {
            color: "gray.900",
          },
        },
        link: {
          color: "blue.800",
          _hover: {
            color: "blue.900",
            textDecorationThickness: "0.125rem",
          },
          _focusVisible: {
            ...focusStyles.AAA,
            outlineStyle: "solid",
            outlineWidth: "0.25rem",
            outlineOffset: "0.125rem",
            borderRadius: "0.25rem",
          },
        },
        separator: {
          color: "gray.500",
        },
      },
    },
  },
  defaultVariants: {
    wcagLevel: "AA",
  },
};
