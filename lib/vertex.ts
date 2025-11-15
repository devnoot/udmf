export interface VertexOpts {
  x: number
  y: number
}

export class Vertex {
  readonly x: number
  readonly y: number
  constructor({ x, y }: VertexOpts) {
    this.x = x
    this.y = y
  }
}
