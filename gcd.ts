import { MockInterceptor } from "asset:///node/undici/mock-interceptor.d.ts";

export function gcdBruteForce(a: number, b: number): number {
  const min = a < b ? a : b;
  const n = Math.floor(min / 2);
  for (let i = n; n >= 1; i--) {
    if (a % i == 0 && b % i == 0) {
      return i;
    }
  }
  return 1;
}

export function gcdEuclid(a: number, b: number): number {
  if (a == b) {
    return a;
  }
  const c = (a > b ? a : b) - (a < b ? a : b);
  return gcdEuclid(a < b ? a : b, c);
}
