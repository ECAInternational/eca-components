import { useEffect, useLayoutEffect } from 'react';

const isClient = () => typeof window !== 'undefined';
const useIsomorphicLayoutEffect = isClient() ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
