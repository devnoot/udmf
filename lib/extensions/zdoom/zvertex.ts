import { Vertex, type VertexOpts } from '../../vertex';

export interface ZVertexOpts extends VertexOpts {
  zfloor?: number;
  zceiling?: number;
}

export class ZVertex extends Vertex {
  // Floor height at this vertex. Only applies to triangular sectors
  readonly zfloor?: number;
  // Ceiling height at this vertex. Only applies to triangular sectors
  readonly zceiling?: number;

  constructor({ x, y, zfloor = 0, zceiling = 0 }: ZVertexOpts) {
    super({ x, y });
    this.zfloor = zfloor;
    this.zceiling = zceiling;
  }
}
