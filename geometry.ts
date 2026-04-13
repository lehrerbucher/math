export interface Shape {
  circumference(): number;
  area(): number;
  encompasses(other: Shape): boolean;
}

export class Point2D {
  constructor(
    public x: number,
    public y: number,
  ) {}

  distanceTo(other: Point2D): number {
    return Math.sqrt(
      Math.abs(this.x - other.x) ** 2 + Math.abs(this.y - other.y) ** 2,
    );
  }

  isBetweenX(p: Point2D, q: Point2D): boolean {
    const l = p.x < q.x ? p : q;
    const r = p.x > q.x ? p : q;
    return l.x < this.x && this.x < r.x;
  }

  isBetweenY(p: Point2D, q: Point2D): boolean {
    const b = p.y < q.y ? p : q;
    const t = p.y > q.y ? p : q;
    return b.y < this.y && this.y < t.y;
  }
}

export class Circle implements Shape {
  constructor(
    private center: Point2D,
    private radius: number,
  ) {}

  circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  encompasses(other: Shape): boolean {
    return false;
  }

  diameter(): number {
    return 2 * this.radius;
  }

  north(): Point2D {
    return new Point2D(this.center.x, this.center.y + this.radius);
  }

  east(): Point2D {
    return new Point2D(this.center.x + this.radius, this.center.y);
  }

  south(): Point2D {
    return new Point2D(this.center.x, this.center.y - this.radius);
  }

  west(): Point2D {
    return new Point2D(this.center.x - this.radius, this.center.y);
  }
}

export class Rectangle implements Shape {
  constructor(
    private bottomLeft: Point2D,
    private topRight: Point2D,
  ) {}

  circumference(): number {
    return 2 * (this.width() + this.height());
  }

  area(): number {
    return this.width() * this.height();
  }

  encompasses(other: Shape): boolean {
    return false;
  }

  diagonal(): number {
    return this.bottomLeft.distanceTo(this.topRight);
  }

  private width(): number {
    return this.topRight.x - this.bottomLeft.x;
  }

  private height(): number {
    return this.topRight.y - this.bottomLeft.y;
  }
}
