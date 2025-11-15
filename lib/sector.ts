export interface SectorOpts {

  /* Sector tag / id */
  id?: number

  /* Floor height */
  heightfloor?: number

  /* Ceiling height */
  heightceiling?: number

  /* Floor flat */
  texturefloor: string

  /* Ceiling flat */
  textureceiling: string

  /* Light level */
  lightlevel?: number

  /* Sector sepcial */
  special?: number

  /* A comment */
  comment?: string

}

export class Sector {

  readonly id?: number
  readonly heightfloor?: number
  readonly heightceiling?: number
  readonly texturefloor?: string
  readonly textureceiling?: string
  readonly lightlevel?: number
  readonly special?: number
  readonly comment?: string

  constructor({
    id = 0,
    heightfloor = 0,
    heightceiling = 0,
    texturefloor,
    textureceiling,
    lightlevel = 160,
    special = 0,
    comment = ''
  }: SectorOpts) {
    this.heightfloor = heightfloor
    this.heightceiling = heightceiling
    this.texturefloor = texturefloor
    this.textureceiling = textureceiling
    this.lightlevel = lightlevel
    this.special = special
    this.id = id
    this.comment = comment
  }
}
