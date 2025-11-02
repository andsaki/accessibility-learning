import React from 'react';
import { colors, spacing, typography, primitive } from '../tokens';

export type WCAGLevel = 'A' | 'AA' | 'AAA';

// WCAGレベルに応じたカラーマッピング
const getWCAGColors = (level: WCAGLevel) => {
  switch (level) {
    case 'A':
      // Level A: 最小限のコントラスト（3:1程度）
      return {
        text: primitive.gray[500],      // 3.26:1
        textCurrent: primitive.gray[700], // 7.00:1
        link: primitive.blue[500],       // 3.46:1
        linkHover: primitive.blue[600],  // 4.77:1
        separator: primitive.gray[400],
        focusOutline: primitive.blue[300], // 薄い青のフォーカス
        focusBackground: primitive.blue[50],
      };
    case 'AA':
      // Level AA: 推奨レベル（4.5:1以上）
      return {
        text: primitive.gray[600],       // 4.55:1
        textCurrent: primitive.gray[900], // 12.63:1
        link: primitive.blue[700],        // 7.67:1
        linkHover: primitive.blue[800],   // 10.07:1
        separator: primitive.gray[400],
        focusOutline: primitive.blue[500], // 中程度の青のフォーカス
        focusBackground: primitive.blue[50],
      };
    case 'AAA':
      // Level AAA: 最高レベル（7:1以上）
      return {
        text: primitive.gray[700],        // 7.00:1
        textCurrent: primitive.gray[900], // 12.63:1
        link: primitive.blue[800],        // 10.07:1
        linkHover: primitive.blue[900],   // 13.05:1
        separator: primitive.gray[500],
        focusOutline: primitive.blue[700], // 濃い青のフォーカス
        focusBackground: primitive.blue[50],
      };
  }
};

// Context for passing WCAG level to child components
const BreadcrumbsContext = React.createContext<WCAGLevel>('AA');

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  label?: string;
  wcagLevel?: WCAGLevel;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children,
  className = '',
  label = 'パンくずリスト',
  wcagLevel = 'AA',
  ...props
}) => {
  // WCAGレベルに応じたセマンティック属性を追加
  const navProps = {
    'aria-label': label,
    'data-wcag-level': wcagLevel,
  };

  return (
    <BreadcrumbsContext.Provider value={wcagLevel}>
      <nav className={className} {...navProps} {...props}>
        {children}
      </nav>
    </BreadcrumbsContext.Provider>
  );
};

export interface BreadcrumbListProps extends React.OlHTMLAttributes<HTMLOListElement> {
  children: React.ReactNode;
  className?: string;
}

export const BreadcrumbList: React.FC<BreadcrumbListProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <ol className={`inline ${className}`} {...props}>
      {children}
    </ol>
  );
};

export interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  className?: string;
  isCurrent?: boolean;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  className = '',
  isCurrent = false,
  ...props
}) => {
  const wcagLevel = React.useContext(BreadcrumbsContext);
  const wcagColors = getWCAGColors(wcagLevel);

  const itemStyles: React.CSSProperties = {
    display: 'inline',
    wordBreak: 'break-word',
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.normal,
    color: isCurrent ? wcagColors.textCurrent : wcagColors.text,
  };

  return (
    <li
      aria-current={isCurrent ? 'page' : undefined}
      className={className}
      style={itemStyles}
      {...props}
    >
      {children}
    </li>
  );
};

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({
  children,
  className = '',
  href,
  ...props
}) => {
  const wcagLevel = React.useContext(BreadcrumbsContext);
  const wcagColors = getWCAGColors(wcagLevel);

  const linkStyles: React.CSSProperties = {
    color: wcagColors.link,
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.normal,
    textDecoration: 'underline',
    textUnderlineOffset: '0.1875rem',
  };

  return (
    <>
      <a
        href={href}
        className={className}
        style={linkStyles}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = wcagColors.linkHover;
          e.currentTarget.style.textDecorationThickness = '0.1875rem';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = wcagColors.link;
          e.currentTarget.style.textDecorationThickness = '';
        }}
        onFocus={(e) => {
          e.currentTarget.style.backgroundColor = wcagColors.focusBackground;
          e.currentTarget.style.color = wcagColors.link;
          e.currentTarget.style.outline = `4px solid ${wcagColors.focusOutline}`;
          e.currentTarget.style.outlineOffset = '0.125rem';
          e.currentTarget.style.borderRadius = '0.25rem';
        }}
        onBlur={(e) => {
          e.currentTarget.style.backgroundColor = '';
          e.currentTarget.style.color = wcagColors.link;
          e.currentTarget.style.outline = '';
          e.currentTarget.style.outlineOffset = '';
          e.currentTarget.style.borderRadius = '';
        }}
        {...props}
      >
        {children}
      </a>
      <BreadcrumbSeparator />
    </>
  );
};

export interface BreadcrumbSeparatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

export const BreadcrumbSeparator: React.FC<BreadcrumbSeparatorProps> = ({
  className = '',
  ...props
}) => {
  const wcagLevel = React.useContext(BreadcrumbsContext);
  const wcagColors = getWCAGColors(wcagLevel);

  const separatorStyles: React.CSSProperties = {
    display: 'inline',
    color: wcagColors.separator,
  };

  const svgStyles: React.CSSProperties = {
    display: 'inline',
    marginLeft: spacing.scale[1],
    marginRight: spacing.scale[1],
  };

  return (
    <span className={className} style={separatorStyles} {...props}>
      <svg
        aria-hidden={true}
        style={svgStyles}
        fill="none"
        height="12"
        viewBox="0 0 12 12"
        width="12"
      >
        <path
          d="M4.5 2.25L8.25 6L4.5 9.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
