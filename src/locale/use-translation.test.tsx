import { expect, it } from 'vitest';
import { useTranslation } from './use-translation.ts';
import { renderHook } from '@testing-library/react';

it('should return string as is', () => {
  const result = renderHook(useTranslation);

  expect(result.result.current.t('Hello')).toBe('Hello');
});
