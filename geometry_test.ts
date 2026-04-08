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
