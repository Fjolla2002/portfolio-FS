export interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}
