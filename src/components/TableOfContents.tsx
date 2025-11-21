import { spacing, typography, radii } from '../design-system/tokens';
import { useTheme } from '../design-system/theme';

interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
  activeId?: string;
  onNavigate?: (id: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items, activeId, onNavigate }) => {
  const { colors } = useTheme();
  const primitive = colors.primitive;

  const handleNavigate = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      window.history.pushState(null, '', `#${id}`);
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
          color: colors.contents.primary,
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
                  handleNavigate(item.id);
                }}
                style={{
                  display: 'block',
                  padding: `${spacing.scale[2]} ${spacing.scale[3]}`,
                  fontSize: typography.fontSize.sm,
                  color: isActive ? colors.contents.link : colors.contents.primary,
                  textDecoration: 'none',
                  borderRadius: radii.borderRadius.base,
                  backgroundColor: isActive ? colors.background.active : 'transparent',
                  borderLeft: isActive
                    ? `3px solid ${primitive.blue[500]}`
                    : `3px solid transparent`,
                  fontWeight: isActive ? 600 : 400,
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = colors.background.hover;
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
