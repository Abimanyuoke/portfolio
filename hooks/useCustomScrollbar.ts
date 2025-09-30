"use client";

import { useEffect } from 'react';

export type ScrollbarVariant = 'default' | 'thin' | 'thick' | 'glow' | 'invisible';

interface UseCustomScrollbarOptions {
    variant?: ScrollbarVariant;
    color?: 'orange' | 'blue' | 'green' | 'purple' | 'red';
    autoHide?: boolean;
}

export function useCustomScrollbar(options: UseCustomScrollbarOptions = {}) {
    const { variant = 'default', color = 'orange', autoHide = false } = options;

    useEffect(() => {
        const style = document.createElement('style');
        style.id = `custom-scrollbar-${variant}-${color}`;

        const colors = {
            orange: {
                primary: '#f97316',
                secondary: '#ea580c',
                hover: '#dc2626'
            },
            blue: {
                primary: '#3b82f6',
                secondary: '#2563eb',
                hover: '#1d4ed8'
            },
            green: {
                primary: '#10b981',
                secondary: '#059669',
                hover: '#047857'
            },
            purple: {
                primary: '#8b5cf6',
                secondary: '#7c3aed',
                hover: '#6d28d9'
            },
            red: {
                primary: '#ef4444',
                secondary: '#dc2626',
                hover: '#b91c1c'
            }
        };

        const selectedColor = colors[color];

        const scrollbarWidth = {
            default: '8px',
            thin: '4px',
            thick: '12px',
            glow: '8px',
            invisible: '0px'
        };

        const css = `
      .custom-scrollbar-${variant}::-webkit-scrollbar {
        width: ${scrollbarWidth[variant]};
        height: ${scrollbarWidth[variant]};
      }

      .custom-scrollbar-${variant}::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 10px;
      }

      .custom-scrollbar-${variant}::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, ${selectedColor.primary}, ${selectedColor.secondary});
        border-radius: 10px;
        border: 2px solid transparent;
        background-clip: content-box;
        transition: all 0.3s ease;
        ${autoHide ? 'opacity: 0;' : ''}
      }

      .custom-scrollbar-${variant}:hover::-webkit-scrollbar-thumb {
        opacity: 1;
      }

      .custom-scrollbar-${variant}::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, ${selectedColor.secondary}, ${selectedColor.hover});
        transform: scale(1.1);
        ${variant === 'glow' ? `box-shadow: 0 0 10px ${selectedColor.primary}40;` : ''}
      }

      .custom-scrollbar-${variant}::-webkit-scrollbar-corner {
        background: transparent;
      }

      /* Dark mode */
      .dark .custom-scrollbar-${variant}::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
      }

      .dark .custom-scrollbar-${variant}::-webkit-scrollbar-thumb:hover {
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
      }

      .dark .custom-scrollbar-${variant}::-webkit-scrollbar-track {
        background: rgba(31, 41, 55, 0.3);
        border-radius: 10px;
      }
    `;

        style.textContent = css;
        document.head.appendChild(style);

        return () => {
            const existingStyle = document.getElementById(`custom-scrollbar-${variant}-${color}`);
            if (existingStyle) {
                existingStyle.remove();
            }
        };
    }, [variant, color, autoHide]);

    return `custom-scrollbar-${variant}`;
}

// Utility function untuk mendapatkan class scrollbar
export function getScrollbarClass(variant: ScrollbarVariant = 'default'): string {
    return `custom-scrollbar-${variant}`;
}

// Hook untuk scrollbar yang responsive
export function useResponsiveScrollbar() {
    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            const scrollbarElements = document.querySelectorAll('[data-scrollbar="responsive"]');

            scrollbarElements.forEach((element) => {
                if (isMobile) {
                    element.classList.add('custom-scrollbar-thin');
                    element.classList.remove('custom-scrollbar-default');
                } else {
                    element.classList.add('custom-scrollbar-default');
                    element.classList.remove('custom-scrollbar-thin');
                }
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
}