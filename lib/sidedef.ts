export interface SidedefOpts {

  /* X Offset */
  offsetx?: number

  /* Y Offset */
  offsety?: number

  /* Upper texture */
  texturetop?: string

  /* Lower texture */
  texturebottom?: string

  /* Middle texture */
  texturemiddle?: string

  /* Sector index */
  sector: number

  /* A comment */
  comment?: string

}

export class Sidedef {

  readonly offsetx?: number
  readonly offsety?: number
  readonly texturetop?: string
  readonly texturebottom?: string
  readonly texturemiddle?: string
  readonly sector: number
  readonly comment?: string

  constructor({
    offsetx = 0,
    offsety = 0,
    texturetop = "-",
    texturebottom = "-",
    texturemiddle = "-",
    sector,
    comment = ""
  }: SidedefOpts) {
    this.offsetx = offsetx
    this.offsety = offsety
    this.texturetop = texturetop
    this.texturebottom = texturebottom
    this.texturemiddle = texturemiddle
    this.sector = sector
    this.comment = comment
  }
}
