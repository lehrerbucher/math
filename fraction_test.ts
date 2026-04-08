import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  const result = left.add(right);

  // Assert
  assertAlmostEquals(result.toFloat(0.01), 0.67);
});

Deno.test("2/3 - 1/3 = 1/3 is roughly 0.33", () => {
  // Arrange
  const left = new Fraction(2, 3);
  const right = new Fraction(1, 3);

  // Act
  const result = left.subtract(right);

  // Assert
  assertEquals(result.toFloat(0.01), 0.33);
});

Deno.test("2/3 * 1/2 = 2/6 is roughly 0.33", () => {
  // Arrange
  const left = new Fraction(2, 3);
  const right = new Fraction(1, 2);

  // Act
  const result = left.multiply(right);

  // Assert
  assertEquals(result.toFloat(0.01), 0.33);
});

Deno.test("2/3 : 1/2 = 4/3 is roughly 1.33", () => {
  // Arrange
  const left = new Fraction(2, 3);
  const right = new Fraction(1, 2);

  // Act
  const result = left.divide(right);

  // Assert
  assertEquals(result.toFloat(0.01), 1.33);
});

Deno.test("2/3 formats to string '2/3'", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const result = fraction.toString();

  // Assert
  assertEquals(result, "2/3");
});

Deno.test("'2/3' parses to the fraction 2/3", () => {
  // Arrange
  const raw = "2/3";

  // Act
  const fraction = Fraction.parse(raw);

  // Assert
  assertEquals(fraction.toString(), raw);
});

Deno.test("2/3/4 is not allowed (too many numbers)", () => {
  // Arrange
  const raw = "2/3/4";

  // Act & Assert
  assertThrows(() => {
    Fraction.parse(raw);
  }, `illegal syntax: "[numerator]/[denominator]" required`);
});

Deno.test("a/2 is not allowed ('a' not numeric)", () => {
  // Arrange
  const raw = "a/2";

  // Act & Assert
  assertThrows(() => {
    Fraction.parse(raw);
  }, "non-numeric numerator/denominator");
});

Deno.test("3/0 must not be allowed", () => {
  // Arrange/Act/Assert
  assertThrows(() => {
    new Fraction(3, 0);
  }, "division by zero is undefined");
});
