import { describe, expect, it } from 'vitest';
import React from 'react';
import { screen, render } from '@testing-library/react';
import { Button } from './Button.tsx';

describe(Button.name, () => {
  describe('variant = primary', () => {
    it('when isSubmitted is false does not have isSubmitted classNames', async () => {
      render(
        <Button name='name1' variant='primary'>
          Text1
        </Button>
      );

      const button1 = await screen.findByText('Text1');

      const classNames = button1.className.split(' ');
      expect(classNames).toContain('bg-primary-main');
      expect(classNames).not.toContain('bg-primary-pale');
      expect(classNames).not.toContain('pointer-events-none');
    });
    it('when isSubmitted is true does  have isSubmitted classNames', async () => {
      render(
        <Button name='name1' variant='primary' isSubmitting>
          Text1
        </Button>
      );

      const button1 = await screen.findByText('Text1');

      const classNames = button1.className.split(' ');
      expect(classNames).not.toContain('bg-primary-main');
      expect(classNames).toContain('bg-primary-pale');
      expect(classNames).toContain('pointer-events-none');
    });
  });
  describe('variant = outline', () => {
    it('when isSubmitted is false does not have isSubmitted classNames', async () => {
      render(
        <Button name='name1' variant='outline'>
          Text1
        </Button>
      );

      const button1 = await screen.findByText('Text1');

      const classNames = button1.className.split(' ');
      expect(classNames).toContain('border-neutral-detail-boldest');
      expect(classNames).not.toContain('border-neutral-detail-pale');
      expect(classNames).not.toContain('pointer-events-none');
    });
    it('when isSubmitted is true does  have isSubmitted classNames', async () => {
      render(
        <Button name='name1' variant='outline' isSubmitting>
          Text1
        </Button>
      );

      const button1 = await screen.findByText('Text1');

      const classNames = button1.className.split(' ');
      expect(classNames).not.toContain('border-neutral-detail-boldest');
      expect(classNames).toContain('border-neutral-detail-pale');
      expect(classNames).toContain('pointer-events-none');
    });
  });
});
