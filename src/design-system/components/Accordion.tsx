import React from 'react';

export interface AccordionProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
  children: React.ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ children, className = '', ...props }) => {
  return (
    <details
      className={`group/accordion border border-solid-grey-420 [--icon-size:calc(20/16*1rem)] desktop:[--icon-size:calc(32/16*1rem)] ${className}`}
      {...props}
    >
      {children}
    </details>
  );
};

export interface AccordionSummaryProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export const AccordionSummary: React.FC<AccordionSummaryProps> = ({
  children,
  className = '',
  id,
  ...props
}) => {
  return (
    <summary
      id={id}
      className={`group/summary relative flex cursor-default items-center gap-4 bg-solid-grey-50 px-4 py-2.5 text-std-16N-170 text-blue-1000 hover:bg-blue-100 focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black [&::marker]:content-[''] [&::-webkit-details-marker]:hidden desktop:gap-6 desktop:px-6 desktop:py-3.5 desktop:text-std-18N-160 ${className}`}
      {...props}
    >
      <span className="inline-flex size-[var(--icon-size)] shrink-0 items-center justify-center rounded-full border border-current bg-white transition-transform duration-300 group-open/accordion:rotate-180 group-hover/summary:outline group-hover/summary:outline-2 group-hover/summary:outline-current">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none size-4"
          aria-hidden="true"
        >
          <path
            d="M8 11L3 6L4.41 4.59L8 8.17L11.59 4.59L13 6L8 11Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="flex-1">{children}</span>
    </summary>
  );
};

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`px-4 py-4 desktop:px-6 desktop:py-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export interface AccordionBackLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

export const AccordionBackLink: React.FC<AccordionBackLinkProps> = ({
  children,
  className = '',
  href = '#',
  ...props
}) => {
  return (
    <a
      href={href}
      className={`mt-4 inline-flex items-center gap-2 text-std-16N-170 text-blue-1000 underline hover:no-underline focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black ${className}`}
      {...props}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none size-4"
        aria-hidden="true"
      >
        <path
          d="M8 5L13 10L11.59 11.41L8 7.83L4.41 11.41L3 10L8 5Z"
          fill="currentColor"
        />
      </svg>
      {children}
    </a>
  );
};
