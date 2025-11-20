import type { RecipeConfig } from "@pandacss/dev";

export const button: RecipeConfig = {
  className: "button",
  description: "Button component styles",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans",
    fontWeight: "semibold",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    borderRadius: "md",
    outline: "none",
    position: "relative",
    gap: "0.5rem",
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.6,
    },
  },
  variants: {
    size: {
      sm: {
        padding: "0.5rem 0.75rem",
        fontSize: "sm",
      },
      md: {
        padding: "1.25rem 1.75rem",
        fontSize: "base",
      },
      lg: {
        padding: "1.25rem 2rem",
        fontSize: "lg",
      },
    },
    variant: {
      primary: {
        borderWidth: "1px",
        borderStyle: "solid",
      },
      secondary: {
        borderWidth: "1px",
        borderStyle: "solid",
      },
      outline: {
        backgroundColor: "transparent",
        borderWidth: "2px",
        borderStyle: "solid",
      },
      danger: {
        borderWidth: "1px",
        borderStyle: "solid",
      },
    },
    wcagLevel: {
      A: {},
      AA: {},
      AAA: {},
    },
  },
  compoundVariants: [
    // Primary - Level A
    {
      variant: "primary",
      wcagLevel: "A",
      css: {
        backgroundColor: "blue.400",
        color: "white",
        borderColor: "blue.400",
        _hover: {
          _disabled: {
            backgroundColor: "blue.400",
          },
          backgroundColor: "blue.600",
          borderColor: "blue.600",
        },
        _disabled: {
          backgroundColor: "gray.300",
          borderColor: "gray.300",
          color: "gray.500",
        },
      },
    },
    // Primary - Level AA
    {
      variant: "primary",
      wcagLevel: "AA",
      css: {
        backgroundColor: "blue.500",
        color: "white",
        borderColor: "blue.500",
        _hover: {
          _disabled: {
            backgroundColor: "blue.500",
          },
          backgroundColor: "blue.600",
          borderColor: "blue.600",
        },
        _disabled: {
          backgroundColor: "gray.300",
          borderColor: "gray.300",
          color: "gray.500",
        },
      },
    },
    // Primary - Level AAA
    {
      variant: "primary",
      wcagLevel: "AAA",
      css: {
        backgroundColor: "blue.700",
        color: "white",
        borderColor: "blue.800",
        _hover: {
          _disabled: {
            backgroundColor: "blue.700",
          },
          backgroundColor: "blue.600",
          borderColor: "blue.600",
        },
        _disabled: {
          backgroundColor: "gray.300",
          borderColor: "gray.300",
          color: "gray.500",
        },
      },
    },
    // Secondary - Level A
    {
      variant: "secondary",
      wcagLevel: "A",
      css: {
        backgroundColor: "gray.200",
        color: "gray.700",
        borderColor: "gray.300",
        _hover: {
          _disabled: {
            backgroundColor: "gray.200",
          },
          backgroundColor: "gray.50",
          borderColor: "gray.400",
        },
        _disabled: {
          backgroundColor: "gray.100",
          borderColor: "gray.100",
          color: "gray.400",
        },
      },
    },
    // Secondary - Level AA
    {
      variant: "secondary",
      wcagLevel: "AA",
      css: {
        backgroundColor: "gray.100",
        color: "gray.900",
        borderColor: "gray.400",
        _hover: {
          _disabled: {
            backgroundColor: "gray.100",
          },
          backgroundColor: "gray.50",
          borderColor: "gray.400",
        },
        _disabled: {
          backgroundColor: "gray.100",
          borderColor: "gray.100",
          color: "gray.400",
        },
      },
    },
    // Secondary - Level AAA
    {
      variant: "secondary",
      wcagLevel: "AAA",
      css: {
        backgroundColor: "white",
        color: "gray.900",
        borderColor: "gray.600",
        _hover: {
          _disabled: {
            backgroundColor: "white",
          },
          backgroundColor: "gray.50",
          borderColor: "gray.400",
        },
        _disabled: {
          backgroundColor: "gray.100",
          borderColor: "gray.100",
          color: "gray.400",
        },
      },
    },
    // Outline - Level A
    {
      variant: "outline",
      wcagLevel: "A",
      css: {
        color: "blue.400",
        borderColor: "blue.400",
        _hover: {
          _disabled: {
            backgroundColor: "transparent",
          },
          backgroundColor: "blue.50",
          borderColor: "blue.600",
        },
        _disabled: {
          backgroundColor: "transparent",
          borderColor: "gray.300",
          color: "gray.400",
        },
      },
    },
    // Outline - Level AA
    {
      variant: "outline",
      wcagLevel: "AA",
      css: {
        color: "blue.500",
        borderColor: "blue.500",
        _hover: {
          _disabled: {
            backgroundColor: "transparent",
          },
          backgroundColor: "blue.50",
          borderColor: "blue.600",
        },
        _disabled: {
          backgroundColor: "transparent",
          borderColor: "gray.300",
          color: "gray.400",
        },
      },
    },
    // Outline - Level AAA
    {
      variant: "outline",
      wcagLevel: "AAA",
      css: {
        color: "blue.700",
        borderColor: "blue.700",
        _hover: {
          _disabled: {
            backgroundColor: "transparent",
          },
          backgroundColor: "blue.50",
          borderColor: "blue.600",
        },
        _disabled: {
          backgroundColor: "transparent",
          borderColor: "gray.300",
          color: "gray.400",
        },
      },
    },
    // Danger - Level A
    {
      variant: "danger",
      wcagLevel: "A",
      css: {
        backgroundColor: "red.400",
        color: "white",
        borderColor: "red.400",
        _hover: {
          _disabled: {
            backgroundColor: "red.400",
          },
          backgroundColor: "red.700",
          borderColor: "red.700",
        },
        _disabled: {
          backgroundColor: "gray.300",
          borderColor: "gray.300",
          color: "gray.500",
        },
      },
    },
    // Danger - Level AA
    {
      variant: "danger",
      wcagLevel: "AA",
      css: {
        backgroundColor: "red.600",
        color: "white",
        borderColor: "red.600",
        _hover: {
          _disabled: {
            backgroundColor: "red.600",
          },
          backgroundColor: "red.700",
          borderColor: "red.700",
        },
        _disabled: {
          backgroundColor: "gray.300",
          borderColor: "gray.300",
          color: "gray.500",
        },
      },
    },
    // Danger - Level AAA
    {
      variant: "danger",
      wcagLevel: "AAA",
      css: {
        backgroundColor: "red.700",
        color: "white",
        borderColor: "red.800",
        _hover: {
          _disabled: {
            backgroundColor: "red.700",
          },
          backgroundColor: "red.700",
          borderColor: "red.700",
        },
        _disabled: {
          backgroundColor: "gray.300",
          borderColor: "gray.300",
          color: "gray.500",
        },
      },
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "primary",
    wcagLevel: "AA",
  },
};
