import { assertEquals } from "@std/assert/equals";
import { gcdBruteForce, gcdEuclid } from "./gcd.ts";

const gcdTests = [
  { a: 1, b: 1, gcd: 1 },
  { a: 2, b: 3, gcd: 1 },
  { a: 12, b: 9, gcd: 3 },
  { a: 12, b: 8, gcd: 4 },
  { a: 18, b: 27, gcd: 9 },
  { a: 81, b: 54, gcd: 27 },
  { a: 81, b: 55, gcd: 1 },
];

Deno.test("gcd implementations: Brute Force and Euclid", () => {
  for (const { a, b, gcd } of gcdTests) {
    assertEquals(gcdBruteForce(a, b), gcd);
    assertEquals(gcdEuclid(a, b), gcd);
  }
});
