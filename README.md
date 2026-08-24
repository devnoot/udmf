# UDMF

TypeScript library for the [Universal Doom Map Format](https://doomwiki.org/wiki/UDMF) (UDMF) specification, with support for [ZDoom](https://zdoom.org/) extensions.

## Features

- **Base UDMF types** — `Vertex`, `Linedef`, `Sidedef`, `Sector`, `Thing` per the [UDMF 1.1 spec](spec/udmf11.txt)
- **ZDoom extensions** — `ZVertex`, `ZLinedef`, `ZSidedef`, `ZSector`, `ZThing` per the [ZDoom UDMF spec](spec/udmf_zdoom.txt)
- Immutable (`readonly`) properties on all classes
- Options-object constructors with sensible defaults

## Project Structure

```
lib/
├── vertex.ts            # Base UDMF vertex
├── linedef.ts           # Base UDMF linedef
├── sidedef.ts           # Base UDMF sidedef
├── sector.ts            # Base UDMF sector
├── thing.ts             # Base UDMF thing
├── udmf.ts              # Barrel export for base types
└── extensions/
    └── zdoom/
        ├── zvertex.ts   # ZDoom vertex (zfloor, zceiling)
        ├── zlinedef.ts  # ZDoom linedef (alpha, block flags, health, ...)
        ├── zsidedef.ts  # ZDoom sidedef (per-tier scale/offset/light, gradients, ...)
        ├── zsector.ts   # ZDoom sector (plane equations, portals, damage, colors, ...)
        └── zthing.ts    # ZDoom thing (extended skills/classes, gravity, renderstyle, ...)
spec/
├── udmf11.txt           # UDMF 1.1 specification
└── udmf_zdoom.txt       # ZDoom UDMF extensions v1.33
```

## Usage

```typescript
import { Vertex, Linedef, Sector } from "./lib/udmf";
import { ZVertex } from "./lib/extensions/zdoom/zvertex";
import { ZSector } from "./lib/extensions/zdoom/zsector";

// Base UDMF vertex
const v = new Vertex({ x: 0, y: 0 });

// ZDoom vertex with slope heights
const zv = new ZVertex({ x: 128, y: 256, zfloor: 16, zceiling: 128 });

// ZDoom sector with sloped floor and custom lighting
const zs = new ZSector({
  texturefloor: "FLOOR4_8",
  textureceiling: "CEIL3_5",
  lightlevel: 192,
  gravity: 0.5,
  lightcolor: 0xff8800,
  floorplane_a: 0,
  floorplane_b: 0,
  floorplane_c: 1,
  floorplane_d: -64,
});
```

## Requirements

- Node.js v22.18.0+
- TypeScript 5.9+

## License

[GPL-3.0](LICENSE)
