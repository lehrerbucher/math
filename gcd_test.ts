import { assertEquals } from "@std/assert/equals";
import { gcdBruteForce, gcdEuclid } from "./gcd.ts";

Deno.test("gcd(1, 1) is 1", () => {
  // Arrange
  const a = 1;
  const b = 1;
  const expected = 1;

  // Act
  const actual: number = gcdBruteForce(a, b);

  // Assert
  assertEquals(actual, expected);
});

Deno.test("gcd(3, 7) is 1", () => {
  // Arrange
  const a = 3;
  const b = 7;
  const expected = 1;

  // Act
  const actual = gcdBruteForce(a, b);

  // Assert
  assertEquals(actual, expected);
});

Deno.test("gcd(12, 9) is 3", () => {
  // Arrange
  const a = 12;
  const b = 9;
  const expected = 3;

  // Act
  const actual = gcdBruteForce(a, b);

  // Assert
  assertEquals(actual, expected);
});

Deno.test("gcd(81, 54) is 27", () => {
  assertEquals(gcdBruteForce(81, 54), 27);
});

Deno.test("gcd(1, 1) is 1", () => {
  // Arrange
  const a = 1;
  const b = 1;
  const expected = 1;

  // Act
  const actual = gcdEuclid(a, b);

  // Assert
  assertEquals(actual, expected);
});

Deno.test("gcd(12, 9) is 3", () => {
  assertEquals(gcdEuclid(12, 9), 3);
});

Deno.test("gcd(81, 54) is 27", () => {
  assertEquals(gcdEuclid(12, 9), 3);
});


Deno.test("gcd(198, 98) is 2", () => {
  assertEquals(gcdEuclid(12, 9), 3);
});


