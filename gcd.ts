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
