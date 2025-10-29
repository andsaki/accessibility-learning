import React from 'react';
import { colors, spacing, typography } from '../tokens';

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children,
  className = '',
  label = 'パンくずリスト',
  ...props
}) => {
  return (
    <nav aria-label={label} className={className} {...props}>
      {children}
    </nav>
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
  const itemStyles: React.CSSProperties = {
    display: 'inline',
    wordBreak: 'break-word',
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.normal,
    color: isCurrent ? colors.breadcrumbs.textCurrent : colors.breadcrumbs.text,
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
  const linkStyles: React.CSSProperties = {
    color: colors.breadcrumbs.link,
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
          e.currentTarget.style.color = colors.breadcrumbs.linkHover;
          e.currentTarget.style.textDecorationThickness = '0.1875rem';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = colors.breadcrumbs.link;
          e.currentTarget.style.textDecorationThickness = '';
        }}
        onFocus={(e) => {
          e.currentTarget.style.backgroundColor = colors.focus.background;
          e.currentTarget.style.color = colors.breadcrumbs.link;
          e.currentTarget.style.outline = `4px solid ${colors.focus.outline}`;
          e.currentTarget.style.outlineOffset = '0.125rem';
          e.currentTarget.style.borderRadius = '0.25rem';
        }}
        onBlur={(e) => {
          e.currentTarget.style.backgroundColor = '';
          e.currentTarget.style.color = colors.breadcrumbs.link;
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
  const separatorStyles: React.CSSProperties = {
    display: 'inline',
    color: colors.breadcrumbs.separator,
  };

  const svgStyles: React.CSSProperties = {
    display: 'inline',
    marginLeft: spacing.xs,
    marginRight: spacing.xs,
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
