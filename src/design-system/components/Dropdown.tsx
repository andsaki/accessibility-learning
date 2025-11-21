import React, { useState, useRef, useEffect } from 'react';
import { css, cx } from '@/styled-system/css';
import { accessibilityLevels } from '../constants/accessibility';
import type { WCAGLevel } from '../constants/accessibility';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  label: string;
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  wcagLevel?: WCAGLevel;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  placeholder = '選択してください',
  onChange,
  error,
  helperText,
  disabled = false,
  required = false,
  wcagLevel = 'AA',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const levelFocus = accessibilityLevels.focus[wcagLevel];
  const selectedOption = options.find(opt => opt.value === selectedValue);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  const autoId = React.useId();
  const buttonId = `dropdown-button-${autoId}`;
  const listId = `dropdown-list-${autoId}`;
  const errorId = `dropdown-error-${autoId}`;
  const helperId = `dropdown-helper-${autoId}`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(options.findIndex(opt => opt.value === selectedValue));
        } else if (focusedIndex >= 0) {
          handleSelect(options[focusedIndex].value);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex(prev => (prev < options.length - 1 ? prev + 1 : prev));
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev => (prev > 0 ? prev - 1 : prev));
        }
        break;
    }
  };

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    onChange?.(optionValue);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const toggleOpen = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setFocusedIndex(options.findIndex(opt => opt.value === selectedValue));
      }
    }
  };

  const focusVarsClass = css({
    '--dropdown-focus-bg': levelFocus.background,
    '--dropdown-focus-text': levelFocus.text,
    '--dropdown-focus-outline': levelFocus.outline,
    '--dropdown-focus-outline-width': levelFocus.outlineWidth,
    '--dropdown-focus-outline-offset': levelFocus.outlineOffset,
  });

  const rootClass = css({
    width: '100%',
    mb: 4,
  });

  const labelClass = css({
    display: 'block',
    mb: 2,
    fontSize: 'sm',
    fontWeight: 'medium',
    color: 'contents.primary',
  });

  const requiredMarkClass = css({
    color: 'contents.error',
    ml: 1,
  });

  const triggerWrapperClass = css({
    position: 'relative',
  });

  const triggerClass = css({
    width: '100%',
    textAlign: 'left',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'border.default',
    borderRadius: 'md',
    backgroundColor: 'bg.paper',
    color: 'contents.primary',
    px: 4,
    py: 3,
    pr: 10,
    fontSize: 'base',
    transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
    cursor: 'pointer',
    _hover: {
      backgroundColor: 'bg.hover',
    },
    _focusVisible: {
      backgroundColor: 'var(--dropdown-focus-bg)',
      color: 'var(--dropdown-focus-text)',
      outline: 'var(--dropdown-focus-outline-width) solid var(--dropdown-focus-outline)',
      outlineOffset: 'var(--dropdown-focus-outline-offset)',
    },
    _disabled: {
      cursor: 'not-allowed',
      backgroundColor: 'bg.disabled',
      color: 'contents.disabled',
    },
  });

  const triggerErrorClass = css({
    borderColor: 'border.error',
  });

  const triggerPlaceholderClass = css({
    color: 'contents.secondary',
  });

  const arrowClass = css({
    position: 'absolute',
    right: '3',
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'transform 0.2s',
    pointerEvents: 'none',
    color: 'inherit',
  });

  const arrowOpenClass = css({
    transform: 'translateY(-50%) rotate(180deg)',
  });

  const menuClass = css({
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    mt: 1,
    listStyle: 'none',
    p: 1,
    bg: 'bg.paper',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'border.default',
    borderRadius: 'md',
    boxShadow: 'lg',
    maxH: '15rem',
    overflowY: 'auto',
    zIndex: 10,
  });

  const optionClass = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: 3,
    py: 2,
    fontSize: 'base',
    color: 'contents.primary',
    borderRadius: 'sm',
    cursor: 'pointer',
    transition: 'background-color 0.15s, color 0.15s',
    _hover: {
      backgroundColor: 'bg.hover',
    },
    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'border.focus',
      outlineOffset: '2px',
    },
  });

  const optionFocusedClass = css({
    backgroundColor: 'blue.50',
  });

  const optionSelectedClass = css({
    backgroundColor: 'blue.100',
    fontWeight: 'semibold',
  });

  const optionDisabledClass = css({
    color: 'contents.disabled',
    cursor: 'not-allowed',
    _hover: { backgroundColor: 'transparent' },
  });

  const checkMarkClass = css({
    ml: 2,
    color: 'blue.600',
  });

  const errorTextClass = css({
    mt: 1,
    fontSize: 'sm',
    color: 'contents.error',
  });

  const helperTextClass = css({
    mt: 1,
    fontSize: 'sm',
    color: 'contents.secondary',
  });

  return (
    <div className={rootClass} ref={dropdownRef}>
      <label htmlFor={buttonId} className={labelClass}>
        {label}
        {required && (
          <span className={requiredMarkClass} aria-label="必須">
            *
          </span>
        )}
      </label>

      <div className={triggerWrapperClass}>
        <button
          ref={buttonRef}
          id={buttonId}
          type="button"
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={buttonId}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          onClick={toggleOpen}
          onKeyDown={handleKeyDown}
          className={cx(
            triggerClass,
            focusVarsClass,
            error && triggerErrorClass,
            !selectedValue && triggerPlaceholderClass
          )}
        >
          {displayText}
          <span className={cx(arrowClass, isOpen && arrowOpenClass)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </button>

        {isOpen && (
          <ul
            ref={listRef}
            id={listId}
            role="listbox"
            aria-labelledby={buttonId}
            className={menuClass}
          >
            {options.map((option, index) => (
              <li
                key={option.value}
                role="option"
                aria-selected={selectedValue === option.value}
                onClick={() => !option.disabled && handleSelect(option.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (!option.disabled) {
                      handleSelect(option.value);
                    }
                  }
                }}
                onMouseEnter={() => !option.disabled && setFocusedIndex(index)}
                className={cx(
                  optionClass,
                  focusedIndex === index && optionFocusedClass,
                  selectedValue === option.value && optionSelectedClass,
                  option.disabled && optionDisabledClass
                )}
              >
                {option.label}
                {selectedValue === option.value && <span className={checkMarkClass}>✓</span>}
              </li>
            ))}
          </ul>
        )}
      </div>

      {error && (
        <p id={errorId} role="alert" className={errorTextClass}>
          {error}
        </p>
      )}

      {helperText && !error && (
        <p id={helperId} className={helperTextClass}>
          {helperText}
        </p>
      )}
    </div>
  );
};
