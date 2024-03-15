// @ts-ignore
import ecaBrand from '@ecainternational/eca-design-tokens/tailwind/eca-brand.tailwind.js';

export default {
  theme: {
    ...ecaBrand,
    boxShadow: {
      'inner-button': 'inset 0 0 0 0.2rem rgba(0, 0, 0, 1)'
    },
    extend: {
      transitionDuration: {
        DEFAULT: '200ms'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      scale: {
        92: '0.92'
      }
    }
  }
};
