import { useState, useEffect } from 'react';
import { spacing, typography, colors, radii } from '../design-system/tokens';
import { primitive } from '../design-system/tokens/colors';

interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      style={{
        position: 'sticky',
        top: spacing.scale[4],
        padding: spacing.scale[4],
        backgroundColor: colors.background.default,
        borderRadius: radii.borderRadius.lg,
        border: `1px solid ${colors.border.default}`,
        maxHeight: 'calc(100vh - 32px)',
        overflowY: 'auto',
      }}
      aria-label="目次"
    >
      <h2
        style={{
          margin: 0,
          marginBottom: spacing.scale[4],
          fontSize: typography.fontSize.lg,
          fontWeight: 600,
          color: primitive.gray[900],
        }}
      >
        目次
      </h2>
      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.scale[2],
        }}
      >
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.id);
                }}
                style={{
                  display: 'block',
                  padding: `${spacing.scale[2]} ${spacing.scale[3]}`,
                  fontSize: typography.fontSize.sm,
                  color: isActive ? primitive.blue[700] : primitive.gray[700],
                  textDecoration: 'none',
                  borderRadius: radii.borderRadius.base,
                  backgroundColor: isActive ? primitive.blue[50] : 'transparent',
                  borderLeft: isActive
                    ? `3px solid ${primitive.blue[500]}`
                    : `3px solid transparent`,
                  fontWeight: isActive ? 600 : 400,
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = primitive.gray[100];
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
