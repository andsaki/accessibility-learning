import { useState, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import { spacing, colors } from '../design-system/tokens';
import { primitive } from '../design-system/tokens/colors';

interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  delay = 300,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);
  const tooltipId = useRef<string>(`tooltip-${Math.random().toString(36).substring(2, 11)}`);

  useEffect(() => {
    const handleMouseDown = () => setIsFocusVisible(false);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') setIsFocusVisible(true);
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const showTooltip = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const getTooltipPosition = () => {
    const offset = 8;
    switch (position) {
      case 'top':
        return {
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: `${offset}px`,
        };
      case 'bottom':
        return {
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: `${offset}px`,
        };
      case 'left':
        return {
          right: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          marginRight: `${offset}px`,
        };
      case 'right':
        return {
          left: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          marginLeft: `${offset}px`,
        };
    }
  };

  const getArrowPosition = () => {
    const arrowSize = 6;
    switch (position) {
      case 'top':
        return {
          bottom: `-${arrowSize}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          borderLeft: `${arrowSize}px solid transparent`,
          borderRight: `${arrowSize}px solid transparent`,
          borderTop: `${arrowSize}px solid ${primitive.gray[900]}`,
        };
      case 'bottom':
        return {
          top: `-${arrowSize}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          borderLeft: `${arrowSize}px solid transparent`,
          borderRight: `${arrowSize}px solid transparent`,
          borderBottom: `${arrowSize}px solid ${primitive.gray[900]}`,
        };
      case 'left':
        return {
          right: `-${arrowSize}px`,
          top: '50%',
          transform: 'translateY(-50%)',
          borderTop: `${arrowSize}px solid transparent`,
          borderBottom: `${arrowSize}px solid transparent`,
          borderLeft: `${arrowSize}px solid ${primitive.gray[900]}`,
        };
      case 'right':
        return {
          left: `-${arrowSize}px`,
          top: '50%',
          transform: 'translateY(-50%)',
          borderTop: `${arrowSize}px solid transparent`,
          borderBottom: `${arrowSize}px solid transparent`,
          borderRight: `${arrowSize}px solid ${primitive.gray[900]}`,
        };
    }
  };

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        aria-describedby={isVisible ? tooltipId.current : undefined}
        style={{
          outline: isFocusVisible ? `2px solid ${colors.border.focus}` : 'none',
          outlineOffset: '2px',
          borderRadius: '4px',
        }}
      >
        {children}
      </span>
      {isVisible && (
        <span
          role="tooltip"
          id={tooltipId.current}
          style={{
            position: 'absolute',
            ...getTooltipPosition(),
            backgroundColor: primitive.gray[900],
            color: '#ffffff',
            padding: `${spacing.scale[2]} ${spacing.scale[3]}`,
            borderRadius: '6px',
            fontSize: '14px',
            whiteSpace: 'nowrap',
            zIndex: 1000,
            pointerEvents: 'none',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          {content}
          <span
            style={{
              position: 'absolute',
              width: 0,
              height: 0,
              ...getArrowPosition(),
            }}
          />
        </span>
      )}
    </span>
  );
};
