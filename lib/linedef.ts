export interface LinedefOpts {

  /* Line id / tag */
  id: number

  /* Index of first vertex */
  v1: number

  /* Index of last vertex */
  v2: number

  /* Line blocks things */
  blocking?: boolean

  /* Line blocks monsters */
  blockmonsters?: boolean

  /* Lins is two-sided */
  twosided?: boolean

  /* Upper texture is unpegged */
  dontpegtop?: boolean

  /* Lower texture is unpegged */
  dontpegbottom?: boolean

  /* Drawn as a secret on map */
  secret?: boolean

  /* Blocks sound */
  blocksound?: boolean

  /* Line is never drawn on map */
  dontdraw?: boolean

  /* Line always appears on map */
  mapped?: boolean

  /* Passes use action */
  passuse?: boolean

  // Strife specific flags. Support for other games is not defined by
  // default and these flags should be ignored when reading maps not for
  // the Strife namespace or maps for a port which supports these flags.

  /* Line is a Strife translucent line */
  translucent?: boolean

  /* Line is a Strife railing */
  jumpover?: boolean

  /* Line is a Strife float-blocker */
  blockfloaters?: boolean

  // Note: SPAC flags should be set false in Doom/Heretic/Strife
  // namespace maps. Specials in those games do not support this
  // mechanism and instead imply activation parameters through the
  // special number. All flags default to false.

  /* Player can use */
  playeruse?: boolean

  /* Player can cross */
  playercross?: boolean

  /* Monster can cross */
  monstercross?: boolean

  /* Monster can use */
  monsteruse?: boolean

  /* Projective can activate */
  impact?: boolean

  /* Player can push */
  playerpush?: boolean

  /* Monster can push */
  monsterpush?: boolean

  /* Projectile can cross */
  misslecross?: boolean

  /* Special is repeatable */
  repeatspecial?: boolean

  /* Line special */
  special?: number

  /* Special args */
  arg0?: number
  arg1?: number
  arg2?: number
  arg3?: number
  arg4?: number

  /* Sidedef 1 (front) index */
  sidefront: number

  /* Sidedef 2 (back) index */
  sideback?: number

  /* A comment */
  comment?: string

}

export class Linedef {

  readonly id: number
  readonly v1: number
  readonly v2: number
  readonly blocking?: boolean
  readonly blockmonsters?: boolean
  readonly twosided?: boolean
  readonly dontpegtop?: boolean
  readonly dontpegbottom?: boolean
  readonly secret?: boolean
  readonly blocksound?: boolean
  readonly dontdraw?: boolean
  readonly mapped?: boolean
  readonly passuse?: boolean
  readonly translucent?: boolean
  readonly jumpover?: boolean
  readonly blockfloaters?: boolean
  readonly playeruse?: boolean
  readonly playercross?: boolean
  readonly monstercross?: boolean
  readonly monsteruse?: boolean
  readonly impact?: boolean
  readonly playerpush?: boolean
  readonly monsterpush?: boolean
  readonly misslecross?: boolean
  readonly repeatspecial?: boolean
  readonly special?: number
  readonly arg0?: number
  readonly arg1?: number
  readonly arg2?: number
  readonly arg3?: number
  readonly arg4?: number
  readonly sidefront: number
  readonly sideback?: number
  readonly comment?: string

  constructor({
    id,
    v1,
    v2,
    blocking = false,
    blockmonsters = false,
    twosided = false,
    dontpegtop = false,
    dontpegbottom = false,
    secret = false,
    blocksound = false,
    dontdraw = false,
    mapped = false,
    passuse = false,
    translucent = false,
    jumpover = false,
    blockfloaters = false,
    playeruse = false,
    playercross = false,
    monstercross = false,
    monsteruse = false,
    impact = false,
    playerpush = false,
    monsterpush = false,
    misslecross = false,
    repeatspecial = false,
    special = 0,
    arg0 = 0,
    arg1 = 0,
    arg2 = 0,
    arg3 = 0,
    arg4 = 0,
    sidefront,
    sideback = -1,
    comment = ""
  }: LinedefOpts) {
    this.id = id
    this.v1 = v1
    this.v2 = v2
    this.blocking = blocking
    this.blockmonsters = blockmonsters
    this.twosided = twosided
    this.dontpegtop = dontpegtop
    this.dontpegbottom = dontpegbottom
    this.secret = secret
    this.blocksound = blocksound
    this.dontdraw = dontdraw
    this.mapped = mapped
    this.passuse = passuse
    this.translucent = translucent
    this.jumpover = jumpover
    this.blockfloaters = blockfloaters
    this.playeruse = playeruse
    this.playercross = playercross
    this.monstercross = monstercross
    this.monsteruse = monsteruse
    this.impact = impact
    this.playerpush = playerpush
    this.monsterpush = monsterpush
    this.misslecross = misslecross
    this.repeatspecial = repeatspecial
    this.special = special
    this.arg0 = arg0
    this.arg1 = arg1
    this.arg2 = arg2
    this.arg3 = arg3
    this.arg4 = arg4
    this.sidefront = sidefront
    this.sideback = sideback
    this.comment = comment
  }

}
