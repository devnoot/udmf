export interface Vertex {
  x: number // x coordinate
  y: number // y coordinate
}

export interface Linedef {
  id: number // ID of line. Interpreted as tag or scripting id.
  v1: number // Index of first vertex.  
  v2: number // Index of second vertex.  

  // All flags default to false.

  blocking: boolean      // true = line blocks things.
  blockmonsters: boolean // true = line blocks monsters.
  twosided: boolean      // true = line is 2S.
  dontpegtop: boolean    // true = upper texture unpegged.
  dontpegbottom: boolean // true = lower texture unpegged.
  secret: boolean        // true = drawn as 1S on map.
  blocksound: boolean    // true = blocks sound.
  dontdraw: boolean      // true = line never drawn on map.
  mapped: boolean        // true = always appears on map.

  // BOOM passuse flag not supported in Strife/Heretic/Hexen namespaces.

  passuse: boolean // true = passes use action. 

  // Strife specific flags. Support for other games is not defined by
  // default and these flags should be ignored when reading maps not for
  // the Strife namespace or maps for a port which supports these flags.

  translucent: boolean   // true = line is a Strife translucent line.
  jumpover: boolean      // true = line is a Strife railing.
  blockfloaters: boolean // true = line is a Strife float-blocker.

  // Note: SPAC flags should be set false in Doom/Heretic/Strife
  // namespace maps. Specials in those games do not support this
  // mechanism and instead imply activation parameters through the
  // special number. All flags default to false.

  playeruse: boolean     // true = player can use.
  playercross: boolean   // true = player can cross. 
  monstercross: boolean  // true = monster can cross.
  monsteruse: boolean    // true = monster can use.
  impact: boolean        // true = projectile can activate.
  playerpush: boolean    // true = player can push.
  monsterpush: boolean   // true = monster can push.
  misslecross: boolean   // true = projectile can cross.
  repeatspecial: boolean // true = repeatable special.

  special: number // Special. Default = 0.
  arg0: number    // Argument 0. Default = 0.
  arg1: number    // Argument 1. Default = 0.
  arg2: number    // Argument 2. Default = 0.
  arg3: number    // Argument 3. Default = 0.
  arg4: number    // Argument 4. Default = 0.

  sidefront: number // Sidedef 1 index. No valid default.
  sideback: number  // Sidedef 2 index. Default = -1.

  comment: string // A comment. Implementors should attach no special semantic meaning to this field.
}

export interface Sidedef {
  offsetx: number // X Offset. Default = 0.  
  offsety: number // Y Offset. Default = 0. 

  texturetop: string    // Upper texture. Default = "-".   
  texturebottom: string // Lower texture. Default = "-".  
  texturemiddle: string // Middle texture. Default = "-". 

  sector: number  // Sector index. No valid default. 
  comment: string // A comment. Implementors should attach no special semantic meaning to this field.                  
}

export interface Sector {
  heightfloor: number   // Floor height. Default = 0.     
  heightceiling: number // Ceiling height. Default = 0.  

  texturefloor: string   // Floor flat. No valid default.    
  textureceiling: string // Ceiling flat. No valid default. 

  lightlevel: number // Light level. Default = 160. 

  special: number // Sector special. Default = 0.  

  id: number // Sector tag/id. Default = 0.  

  comment: string
}

export interface Thing {
  id: number // Thing ID. Default = 0. 

  x: number // X coordinate. No valid default.  
  y: number // Y coordinate. No valid default. 

  height: number // Z height relative to floor. Default = 0 (Relative to ceiling for SPAWNCEILING items)

  angle: number // Map angle of thing in degrees. Default = 0 (East). 

  type: number // DoomedNum. No valid default. 

  // All flags default to false.

  skill1: boolean // true = in skill 1.
  skill2: boolean // true = in skill 2.
  skill3: boolean // true = in skill 3.
  skill4: boolean // true = in skill 4.
  skill5: boolean // true = in skill 5.
  ambush: boolean // true = thing is deaf.
  single: boolean // true = in SP mode.
  dm: boolean     // true = in DM mode.
  coop: boolean   // true = in Coop.

  // MBF friend flag not supported in Strife/Heretic/Hexen namespaces.

  friend: boolean // true = MBF friend.

  // Hexen flags; not supported in Doom/Strife/Heretic namespaces.

  dormant: boolean // true = dormant thing.
  class1: boolean  // true = Present for pclass 1.
  class2: boolean  // true = Present for pclass 2.
  class3: boolean  // true = Present for pclass 3.

  // Strife specific flags. Support for other games is not defined by
  // default and these flags should be ignored when reading maps not for
  // the Strife namespace or maps for a port which supports these flags.
  standing: boolean    // true = Strife NPC flag.
  strifeally: boolean  // true = Strife ally flag.
  translucent: boolean // true = Strife translucency flag. 
  invisible: boolean   // true = Strife invisibility flag.

  // Note: suggested editor defaults for all skill, gamemode, and player
  // class flags is true rather than the UDMF default of false.

  // Thing special semantics are only defined for the Hexen namespace or
  // ports which implement this feature in their own namespace.
  special: number // Scripting special. Default = 0;
  arg0: number    // Argument 0. Default = 0.
  arg1: number    // Argument 1. Default = 0.
  arg2: number    // Argument 2. Default = 0.
  arg3: number    // Argument 3. Default = 0.
  arg4: number    // Argument 4. Default = 0.

  comment: string
}
