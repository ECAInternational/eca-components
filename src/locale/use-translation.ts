import { useMemo } from 'react';

export type TranslatorFunction = (key: string) => string;

export function useTranslation(): { t: TranslatorFunction } {
  return useMemo(
    () => ({
      t: (key: string) => key
    }),
    []
  );
}
