import React from 'react';

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
  return (
    <li
      aria-current={isCurrent ? 'page' : undefined}
      className={`inline break-words text-oln-16N-100 ${className}`}
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
  return (
    <>
      <a
        href={href}
        className={`text-blue-1000 text-oln-16N-100 underline underline-offset-[calc(3/16*1rem)] hover:text-blue-900 hover:decoration-[calc(3/16*1rem)] active:text-orange-700 active:decoration-1 focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:text-blue-1000 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 ${className}`}
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
  return (
    <span className={`inline ${className}`} {...props}>
      <svg
        aria-hidden={true}
        className="mx-2 inline"
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
