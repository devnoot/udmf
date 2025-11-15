export interface ThingOpts {

  /* Thing id */
  id?: number // Thing ID. Default = 0. 

  /* X coordinate */
  x: number // X coordinate. No valid default.  

  /* Y coordinate */
  y: number // Y coordinate. No valid default. 

  /* Z height relative to floor */
  height?: number // Z height relative to floor. Default = 0 (Relative to ceiling for SPAWNCEILING items)

  /* Map angle of thing in degrees */
  angle?: number // Map angle of thing in degrees. Default = 0 (East). 

  /* Doomed Number */
  type: number // DoomedNum. No valid default. 

  // All flags default to false.

  /* Spawn in skill 1 */
  skill1?: boolean

  /* Spawn in skill 2 */
  skill2?: boolean

  /* Spawn in skill 3 */
  skill3?: boolean

  /* Spawn in skill 4 */
  skill4?: boolean

  /* Spawn in skill 5 */
  skill5?: boolean

  /* Thing is deaf */
  ambush?: boolean

  /* Spawn in single player mode */
  single?: boolean

  /* Spawn in deathmatch mode */
  dm?: boolean

  /* Spawn in coop mode */
  coop?: boolean

  // MBF friend flag not supported in Strife/Heretic/Hexen namespaces.

  /* MBF friend */
  friend?: boolean

  // Hexen flags; not supported in Doom/Strife/Heretic namespaces.

  /* Thing is dormant */
  dormant?: boolean

  /* Thing is present for pclass 1 */
  class1?: boolean

  /* Thing is present for pclass 2 */
  class2?: boolean

  /* Thing is present for pclass 3 */
  class3?: boolean

  // Strife specific flags. Support for other games is not defined by
  // default and these flags should be ignored when reading maps not for
  // the Strife namespace or maps for a port which supports these flags.

  /* Strife NPC flag */
  standing?: boolean

  /* Strife ally flag */
  strifeally?: boolean

  /* Strife translucency flag */
  translucent?: boolean

  /* Strife invisibility flag */
  invisible?: boolean

  // Note: suggested editor defaults for all skill, gamemode, and player
  // class flags is true rather than the UDMF default of false.

  // Thing special semantics are only defined for the Hexen namespace or
  // ports which implement this feature in their own namespace.

  /* Scripting special */
  special?: number // Scripting special. Default = 0;

  /* Special args */
  arg0?: number
  arg1?: number
  arg2?: number
  arg3?: number
  arg4?: number

  /* A comment */
  comment?: string
}


export class Thing {

  readonly id?: number
  readonly x: number
  readonly y: number
  readonly height?: number
  readonly angle?: number
  readonly type: number
  readonly skill1: boolean
  readonly skill2?: boolean
  readonly skill3?: boolean
  readonly skill4?: boolean
  readonly skill5?: boolean
  readonly ambush?: boolean
  readonly dm?: boolean
  readonly single?: boolean
  readonly coop?: boolean
  readonly friend?: boolean
  readonly dormant?: boolean
  readonly class1?: boolean
  readonly class2?: boolean
  readonly class3?: boolean
  readonly standing?: boolean
  readonly strifeally?: boolean
  readonly translucent?: boolean
  readonly invisible?: boolean
  readonly special?: number
  readonly arg0?: number
  readonly arg1?: number
  readonly arg2?: number
  readonly arg3?: number
  readonly arg4?: number
  readonly comment?: string

  constructor({
    id = 0,
    x,
    y,
    height = 0,
    angle = 0,
    type,
    skill1 = false,
    skill2 = false,
    skill3 = false,
    skill4 = false,
    skill5 = false,
    ambush = false,
    dm = false,
    single = false,
    coop = false,
    friend = false,
    dormant = false,
    class1 = false,
    class2 = false,
    class3 = false,
    standing = false,
    strifeally = false,
    translucent = false,
    invisible = false,
    special = 0,
    arg0 = 0,
    arg1 = 0,
    arg2 = 0,
    arg3 = 0,
    arg4 = 0,
    comment = ''
  }: ThingOpts) {

    this.id = id
    this.x = x
    this.y = y
    this.height = height
    this.angle = angle
    this.type = type
    this.skill1 = skill1
    this.skill2 = skill2
    this.skill3 = skill3
    this.skill4 = skill4
    this.skill5 = skill5
    this.ambush = ambush
    this.dm = dm
    this.single = single
    this.coop = coop
    this.friend = friend
    this.dormant = dormant
    this.class1 = class1
    this.class2 = class2
    this.class3 = class3
    this.standing = standing
    this.strifeally = strifeally
    this.translucent = translucent
    this.invisible = invisible
    this.special = special
    this.arg0 = arg0
    this.arg1 = arg1
    this.arg2 = arg2
    this.arg3 = arg3
    this.arg4 = arg4
    this.comment = comment
  }
}
