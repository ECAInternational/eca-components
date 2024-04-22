// eslint-disable-next-line no-unused-vars
type func = (...args: any[]) => void;

export function callAll(...fns: (func | undefined)[]): func {
  return (...args: any[]) => fns.forEach((fn) => fn?.(...args));
}
