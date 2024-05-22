// @ts-ignore
import ecaBrand from '@ecainternational/eca-design-tokens/tailwind/eca-brand.tailwind';
export default {
  theme: {
    ...ecaBrand,

    extend: {
      spacing: {
        '5.5': '1.375rem',
        '7.5': '1.875rem'
      },
      transitionDuration: {
        DEFAULT: '200ms'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      scale: {
        92: '0.92'
      },
      boxShadow: {
        'inner-button': 'inset 0 0 0 0.2rem rgba(0, 0, 0, 1)'
      },
      keyframes: {
        progress: {
          '50%': { width: '100%' },
          '100%': { right: 0, left: 'unset' }
        }
      },
      animation: {
        progress: 'progress 2s ease-in-out infinite'
      }
    }
  }
};
