import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";
import { Fraction } from "./fraction.ts";

Deno.test("distance between A(0,0) and B(3,4) is 5", () => {
  // Given
  const a = new Point2D(0, 0);
  const b = new Point2D(3, 4);

  // When
  const distance = a.distanceTo(b);

  // Then
  assertEquals(distance, 5.0);
});

Deno.test("circumference of a circle with radius 5 is roughly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("area of a circle with radius 5 is roughly 78.5", () => {
  // Given
  const circle = new Circle(new Point2D(0, 0), 5);

  // When
  const area = circle.area();

  // Then
  assertAlmostEquals(area, 78.5, 0.1);
});

Deno.test("diameter of circle with radius 5 is 10", () => {
  assertEquals(new Circle(new Point2D(0, 0), 5).diameter(), 10);
});

Deno.test("test radius circumference, area, and diagonal", () => {
  // Given
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(2, 3));

  // When
  const circumference = rect.circumference();
  const area = rect.area();
  const diagonal = rect.diagonal();

  // Then
  assertEquals(circumference, 2 * (2 + 3));
  assertEquals(area, 2 * 3);
  assertAlmostEquals(diagonal, 3.606, 0.001);
});

Deno.test("for M(5,5) and r=5, expect N(5,10)", () => {
  // Arrange
  const circle = new Circle(new Point2D(5, 5), 5);
  const expected = new Point2D(5, 10);

  // Act
  const actual = circle.north();

  // Assert
  assertEquals(actual.x, expected.x);
  assertEquals(actual.y, expected.y);
});

Deno.test("for M(5,5) and r=5, expect E(10,5)", () => {
  // Arrange
  const circle = new Circle(new Point2D(5, 5), 5);
  const expected = new Point2D(10, 5);

  // Act
  const actual = circle.east();

  // Assert
  assertEquals(actual.x, expected.x);
  assertEquals(actual.y, expected.y);
});

Deno.test("for M(5,5) and r=5, expect S(5,0)", () => {
  // Arrange
  const circle = new Circle(new Point2D(5, 5), 5);
  const expected = new Point2D(5, 0);

  // Act
  const actual = circle.south();

  // Assert
  assertEquals(actual.x, expected.x);
  assertEquals(actual.y, expected.y);
});

Deno.test("for M(5,5) and r=5, expect W(0,5)", () => {
  // Arrange
  const circle = new Circle(new Point2D(5, 5), 5);
  const expected = new Point2D(0, 5);

  // Act
  const actual = circle.west();

  // Assert
  assertEquals(actual.x, expected.x);
  assertEquals(actual.y, expected.y);
});

Deno.test("M(5,5) is between W(0,5) and E(10,5) on x-axis", () => {
  // Arrange
  const m = new Point2D(5, 5);
  const w = new Point2D(0, 5);
  const e = new Point2D(10, 5);

  // Act
  const b = m.isBetweenX(w, e);

  // Assert
  assertEquals(b, true);
});

Deno.test("M(5,5) is between N(5,10) and S(5,0) on y-axis", () => {
  // Arrange
  const m = new Point2D(5, 5);
  const n = new Point2D(5, 10);
  const s = new Point2D(5, 0);

  // Act
  const b = m.isBetweenY(s, n);

  // Assert
  assertEquals(b, true);
});

Deno.test("W(0,5) is not between M(5,5) and E(5,10) on x-axis", () => {
  // Arrange
  const m = new Point2D(5, 5);
  const w = new Point2D(0, 5);
  const e = new Point2D(5, 10);

  // Act
  const b = w.isBetweenY(m, e);

  // Assert
  assertEquals(b, false);
});

Deno.test("N(5,10) is not between M(5,5) and S(5,0) on y-axis", () => {
  // Arrange
  const m = new Point2D(5, 5);
  const n = new Point2D(5, 10);
  const s = new Point2D(5, 0);

  // Act
  const b = n.isBetweenY(m, s);

  // Assert
  assertEquals(b, false);
});

Deno.test("if M is between E and W, it also is between W and E", () => {
  // Arrange
  const m = new Point2D(5, 5);
  const e = new Point2D(10, 5);
  const w = new Point2D(0, 5);

  // Act
  const mBetweenEandWonX = m.isBetweenX(e, w);
  const mBetweenWandEonX = m.isBetweenX(w, e);

  // Assert
  assertEquals(mBetweenEandWonX, mBetweenWandEonX);
});

Deno.test("if M is between S and N, it also is between N and S", () => {
  // Arrange
  const m = new Point2D(5, 5);
  const n = new Point2D(5, 10);
  const s = new Point2D(5, 0);

  // Act
  const mBetweenNandSonY = m.isBetweenY(n, s);
  const mBetweenSandNonY = m.isBetweenY(s, n);

  // Assert
  assertEquals(mBetweenNandSonY, mBetweenSandNonY);
});
