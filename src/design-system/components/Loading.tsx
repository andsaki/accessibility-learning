import React from "react";
import { loading as loadingRecipe } from "../../../styled-system/recipes";
import { css, cx } from "@/styled-system/css";

const inlineSizeMap = {
  sm: 14,
  md: 18,
} as const;

export interface LoadingProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "white";
  label?: string;
  fullscreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  size = "md",
  color = "primary",
  label = "読み込み中",
  fullscreen = false,
}) => {
  const slots = loadingRecipe({ size, color });

  const spinner = (
    <div
      role="status"
      aria-label={label}
      aria-live="polite"
      className={slots.root}
    >
      <svg
        viewBox="0 0 24 24"
        className={slots.spinner}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="50 50"
          opacity="0.25"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="31.4 31.4"
          strokeDashoffset="0"
        />
      </svg>
      {label && (
        <span
          className={cx(
            slots.label,
            color === "white" && css({ color: "white" })
          )}
        >
          {label}
        </span>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <div
        className={css({
          position: "fixed",
          inset: 0,
          bg: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        })}
        aria-modal="true"
      >
        {spinner}
      </div>
    );
  }

  return spinner;
};

export const InlineLoading: React.FC<{
  size?: "sm" | "md";
  color?: "primary" | "secondary";
}> = ({ size = "sm", color = "primary" }) => {
  const spinnerSize = inlineSizeMap[size];

  return (
    <svg
      width={spinnerSize}
      height={spinnerSize}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={css({
        animation: "spin 1s linear infinite",
        display: "inline-block",
        verticalAlign: "middle",
        color: color === "primary" ? "blue.500" : "gray.600",
      })}
      role="status"
      aria-label="読み込み中"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="50 50"
        opacity="0.25"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="31.4 31.4"
        strokeDashoffset="0"
      />
    </svg>
  );
};
