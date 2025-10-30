import { spacing, colors } from '../design-system/tokens';
import { primitive } from '../design-system/tokens/colors';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? '目次を閉じる' : '目次を開く'}
      aria-expanded={isOpen}
      style={{
        position: 'fixed',
        top: spacing.scale[4],
        right: spacing.scale[4],
        zIndex: 1001,
        width: '48px',
        height: '48px',
        padding: 0,
        backgroundColor: colors.background.default,
        border: `2px solid ${colors.border.default}`,
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '24px',
          height: '18px',
          margin: 'auto',
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: isOpen ? '8px' : '0',
            width: '24px',
            height: '2px',
            backgroundColor: primitive.gray[900],
            transition: 'all 0.3s ease',
            transform: isOpen ? 'rotate(45deg)' : 'none',
          }}
        />
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: '8px',
            width: '24px',
            height: '2px',
            backgroundColor: primitive.gray[900],
            transition: 'all 0.3s ease',
            opacity: isOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: isOpen ? '8px' : '16px',
            width: '24px',
            height: '2px',
            backgroundColor: primitive.gray[900],
            transition: 'all 0.3s ease',
            transform: isOpen ? 'rotate(-45deg)' : 'none',
          }}
        />
      </div>
    </button>
  );
};
