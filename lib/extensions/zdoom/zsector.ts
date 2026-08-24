import { Sector, type SectorOpts } from '../../sector';

export interface ZSectorOpts extends SectorOpts {
  /** X texture offset of floor texture */
  xpanningfloor?: number;
  /** Y texture offset of floor texture */
  ypanningfloor?: number;
  /** X texture offset of ceiling texture */
  xpanningceiling?: number;
  /** Y texture offset of ceiling texture */
  ypanningceiling?: number;
  /** X texture scale of floor texture */
  xscalefloor?: number;
  /** Y texture scale of floor texture */
  yscalefloor?: number;
  /** X texture scale of ceiling texture */
  xscaleceiling?: number;
  /** Y texture scale of ceiling texture */
  yscaleceiling?: number;
  /** Rotation of floor texture in degrees */
  rotationfloor?: number;
  /** Rotation of ceiling texture in degrees */
  rotationceiling?: number;
  /** Ceiling plane equation coefficient a */
  ceilingplane_a?: number;
  /** Ceiling plane equation coefficient b */
  ceilingplane_b?: number;
  /** Ceiling plane equation coefficient c */
  ceilingplane_c?: number;
  /** Ceiling plane equation coefficient d */
  ceilingplane_d?: number;
  /** Floor plane equation coefficient a */
  floorplane_a?: number;
  /** Floor plane equation coefficient b */
  floorplane_b?: number;
  /** Floor plane equation coefficient c */
  floorplane_c?: number;
  /** Floor plane equation coefficient d */
  floorplane_d?: number;
  /** The floor's light level */
  lightfloor?: number;
  /** The ceiling's light level */
  lightceiling?: number;
  /** true = 'lightfloor' is an absolute value */
  lightfloorabsolute?: boolean;
  /** true = 'lightceiling' is an absolute value */
  lightceilingabsolute?: boolean;
  /** Translucency of floor plane */
  alphafloor?: number;
  /** Translucency of ceiling plane */
  alphaceiling?: number;
  /** Floor plane render style: "translucent" or "add" */
  renderstylefloor?: string;
  /** Ceiling plane render style: "translucent" or "add" */
  renderstyleceiling?: string;
  /** Sector's gravity */
  gravity?: number;
  /** Sector's light color as RRGGBB value */
  lightcolor?: number;
  /** Sector's fog color as RRGGBB value */
  fadecolor?: number;
  /** Color desaturation factor (0 = none, 1 = full) */
  desaturation?: number;
  /** Actors in this sector make no sound */
  silent?: boolean;
  /** Falling damage is disabled in this sector */
  nofallingdamage?: boolean;
  /** Blocks monster attacks in this sector */
  noattack?: boolean;
  /** Actors drop with instantly moving floors */
  dropactors?: boolean;
  /** Players can not respawn in this sector */
  norespawn?: boolean;
  /** Sound sequence to play when this sector moves */
  soundsequence?: string;
  /** Sector will not be drawn on the textured automap */
  hidden?: boolean;
  /** Sector is under water and swimmable */
  waterzone?: boolean;
  /** Additional sector IDs, space separated */
  moreids?: string;
  /** Amount of damage inflicted by this sector */
  damageamount?: number;
  /** Damage type for sector damage */
  damagetype?: string;
  /** Interval in tics between damage application */
  damageinterval?: number;
  /** Probability of leaking through radiation suit (0-256) */
  leakiness?: number;
  /** Spawn terrain splash when damage is inflicted */
  damageterraineffect?: boolean;
  /** Strife delayed damage model */
  damagehazard?: boolean;
  /** Non-players are hurt by sector damage */
  hurtmonsters?: boolean;
  /** Actors harmed by floor damage even when not touching */
  harminair?: boolean;
  /** Terrain for the sector's floor */
  floorterrain?: string;
  /** Terrain for the sector's ceiling */
  ceilingterrain?: string;
  /** Reflectiveness of floor (OpenGL only) */
  floor_reflect?: number;
  /** Reflectiveness of ceiling (OpenGL only) */
  ceiling_reflect?: number;
  /** Explicit fog density (0-510, OpenGL only) */
  fogdensity?: number;
  /** Floor glow color as RRGGBB, -1 to disable */
  floorglowcolor?: number;
  /** Height of floor glow */
  floorglowheight?: number;
  /** Ceiling glow color as RRGGBB, -1 to disable */
  ceilingglowcolor?: number;
  /** Height of ceiling glow */
  ceilingglowheight?: number;
  /** Material color of sector's floor */
  color_floor?: number;
  /** Material color of sector's ceiling */
  color_ceiling?: number;
  /** Material color of top of sector's sidedefs */
  color_walltop?: number;
  /** Material color of bottom of sector's sidedefs */
  color_wallbottom?: number;
  /** Material color of sprites in sector */
  color_sprites?: number;
  /** Additive material color for sector floor */
  coloradd_floor?: number;
  /** Additive material color for sector ceiling */
  coloradd_ceiling?: number;
  /** Additive material color for sprites */
  coloradd_sprites?: number;
  /** Additive material color for walls */
  coloradd_walls?: number;
  /** Colorization record for floor texture */
  colorization_floor?: number;
  /** Colorization record for ceiling texture */
  colorization_ceiling?: number;
  /** Do not draw skybox walls above/below this sector */
  noskywalls?: boolean;
  /** Ceiling portal blocks sound */
  portal_ceil_blocksound?: boolean;
  /** Ceiling portal disabled */
  portal_ceil_disabled?: boolean;
  /** Ceiling portal blocks movement */
  portal_ceil_nopass?: boolean;
  /** Ceiling portal not rendered */
  portal_ceil_norender?: boolean;
  /** Ceiling portal overlay style: "translucent" or "additive" */
  portal_ceil_overlaytype?: string;
  /** Floor portal blocks sound */
  portal_floor_blocksound?: boolean;
  /** Floor portal disabled */
  portal_floor_disabled?: boolean;
  /** Floor portal blocks movement */
  portal_floor_nopass?: boolean;
  /** Floor portal not rendered */
  portal_floor_norender?: boolean;
  /** Floor portal overlay style: "translucent" or "additive" */
  portal_floor_overlaytype?: string;
  /** Floor hitpoints (includes floor and bottom-outside linedef sides) */
  healthfloor?: number;
  /** Floor destructible sync group ID */
  healthfloorgroup?: number;
  /** Ceiling hitpoints (includes ceiling and top-outside linedef sides) */
  healthceiling?: number;
  /** Ceiling destructible sync group ID */
  healthceilinggroup?: number;
  /** 3D floor hitpoints */
  health3d?: number;
  /** 3D floor destructible sync group ID */
  health3dgroup?: number;
  /** X map units per frame to scroll the floor */
  xscrollfloor?: number;
  /** Y map units per frame to scroll the floor */
  yscrollfloor?: number;
  /** Floor scroll mode bitmask (1=tex, 2=static, 4=players, 8=monsters) */
  scrollfloormode?: number;
  /** X map units per frame to scroll the ceiling */
  xscrollceiling?: number;
  /** Y map units per frame to scroll the ceiling */
  yscrollceiling?: number;
  /** Ceiling scroll mode bitmask (1=tex, 2=static, 4=players, 8=monsters) */
  scrollceilingmode?: number;
  /** Sector's friction factor (0-1) */
  friction?: number;
  /** Sector's movement acceleration factor (must be > 0) */
  movefactor?: number;
  /** Lower sky for this sector */
  skyfloor?: string;
  /** Upper sky for this sector */
  skyceiling?: string;
  /** Secondary lower sky (for lightning or transparent layers) */
  skyfloor2?: string;
  /** Secondary upper sky */
  skyceiling2?: string;
  /** Colormap (backwards compatibility only) */
  colormap?: string;
  /** Actor thrust X magnitude */
  xthrust?: number;
  /** Actor thrust Y magnitude */
  ythrust?: number;
  /** Thrust target bitmask (1=static, 2=player, 4=monsters, 8=projectiles, 16=WINDTHRUST) */
  thrustgroup?: number;
  /** Thrust location bitmask (1=ground, 2=air, 4=ceiling) */
  thrustlocation?: number;
}

export class ZSector extends Sector {
  readonly xpanningfloor?: number;
  readonly ypanningfloor?: number;
  readonly xpanningceiling?: number;
  readonly ypanningceiling?: number;
  readonly xscalefloor?: number;
  readonly yscalefloor?: number;
  readonly xscaleceiling?: number;
  readonly yscaleceiling?: number;
  readonly rotationfloor?: number;
  readonly rotationceiling?: number;
  readonly ceilingplane_a?: number;
  readonly ceilingplane_b?: number;
  readonly ceilingplane_c?: number;
  readonly ceilingplane_d?: number;
  readonly floorplane_a?: number;
  readonly floorplane_b?: number;
  readonly floorplane_c?: number;
  readonly floorplane_d?: number;
  readonly lightfloor?: number;
  readonly lightceiling?: number;
  readonly lightfloorabsolute?: boolean;
  readonly lightceilingabsolute?: boolean;
  readonly alphafloor?: number;
  readonly alphaceiling?: number;
  readonly renderstylefloor?: string;
  readonly renderstyleceiling?: string;
  readonly gravity?: number;
  readonly lightcolor?: number;
  readonly fadecolor?: number;
  readonly desaturation?: number;
  readonly silent?: boolean;
  readonly nofallingdamage?: boolean;
  readonly noattack?: boolean;
  readonly dropactors?: boolean;
  readonly norespawn?: boolean;
  readonly soundsequence?: string;
  readonly hidden?: boolean;
  readonly waterzone?: boolean;
  readonly moreids?: string;
  readonly damageamount?: number;
  readonly damagetype?: string;
  readonly damageinterval?: number;
  readonly leakiness?: number;
  readonly damageterraineffect?: boolean;
  readonly damagehazard?: boolean;
  readonly hurtmonsters?: boolean;
  readonly harminair?: boolean;
  readonly floorterrain?: string;
  readonly ceilingterrain?: string;
  readonly floor_reflect?: number;
  readonly ceiling_reflect?: number;
  readonly fogdensity?: number;
  readonly floorglowcolor?: number;
  readonly floorglowheight?: number;
  readonly ceilingglowcolor?: number;
  readonly ceilingglowheight?: number;
  readonly color_floor?: number;
  readonly color_ceiling?: number;
  readonly color_walltop?: number;
  readonly color_wallbottom?: number;
  readonly color_sprites?: number;
  readonly coloradd_floor?: number;
  readonly coloradd_ceiling?: number;
  readonly coloradd_sprites?: number;
  readonly coloradd_walls?: number;
  readonly colorization_floor?: number;
  readonly colorization_ceiling?: number;
  readonly noskywalls?: boolean;
  readonly portal_ceil_blocksound?: boolean;
  readonly portal_ceil_disabled?: boolean;
  readonly portal_ceil_nopass?: boolean;
  readonly portal_ceil_norender?: boolean;
  readonly portal_ceil_overlaytype?: string;
  readonly portal_floor_blocksound?: boolean;
  readonly portal_floor_disabled?: boolean;
  readonly portal_floor_nopass?: boolean;
  readonly portal_floor_norender?: boolean;
  readonly portal_floor_overlaytype?: string;
  readonly healthfloor?: number;
  readonly healthfloorgroup?: number;
  readonly healthceiling?: number;
  readonly healthceilinggroup?: number;
  readonly health3d?: number;
  readonly health3dgroup?: number;
  readonly xscrollfloor?: number;
  readonly yscrollfloor?: number;
  readonly scrollfloormode?: number;
  readonly xscrollceiling?: number;
  readonly yscrollceiling?: number;
  readonly scrollceilingmode?: number;
  readonly friction?: number;
  readonly movefactor?: number;
  readonly skyfloor?: string;
  readonly skyceiling?: string;
  readonly skyfloor2?: string;
  readonly skyceiling2?: string;
  readonly colormap?: string;
  readonly xthrust?: number;
  readonly ythrust?: number;
  readonly thrustgroup?: number;
  readonly thrustlocation?: number;

  constructor({
    // Base Sector fields
    id,
    heightfloor,
    heightceiling,
    texturefloor,
    textureceiling,
    lightlevel,
    special,
    comment,
    // ZDoom extension fields
    xpanningfloor = 0.0,
    ypanningfloor = 0.0,
    xpanningceiling = 0.0,
    ypanningceiling = 0.0,
    xscalefloor = 1.0,
    yscalefloor = 1.0,
    xscaleceiling = 1.0,
    yscaleceiling = 1.0,
    rotationfloor = 0.0,
    rotationceiling = 0.0,
    ceilingplane_a = 0.0,
    ceilingplane_b = 0.0,
    ceilingplane_c = 0.0,
    ceilingplane_d = 0.0,
    floorplane_a = 0.0,
    floorplane_b = 0.0,
    floorplane_c = 0.0,
    floorplane_d = 0.0,
    lightfloor = 0,
    lightceiling = 0,
    lightfloorabsolute = false,
    lightceilingabsolute = false,
    alphafloor = 1.0,
    alphaceiling = 1.0,
    renderstylefloor = 'translucent',
    renderstyleceiling = 'translucent',
    gravity = 1.0,
    lightcolor = 0xffffff,
    fadecolor = 0x000000,
    desaturation = 0,
    silent = false,
    nofallingdamage = false,
    noattack = false,
    dropactors = false,
    norespawn = false,
    soundsequence = '',
    hidden = false,
    waterzone = false,
    moreids = '',
    damageamount = 0,
    damagetype = 'None',
    damageinterval = 32,
    leakiness = 0,
    damageterraineffect = false,
    damagehazard = false,
    hurtmonsters = false,
    harminair = false,
    floorterrain = '',
    ceilingterrain = '',
    floor_reflect = 0,
    ceiling_reflect = 0,
    fogdensity = 0,
    floorglowcolor = 0,
    floorglowheight = 0,
    ceilingglowcolor = 0,
    ceilingglowheight = 0,
    color_floor = 0xffffff,
    color_ceiling = 0xffffff,
    color_walltop = 0xffffff,
    color_wallbottom = 0xffffff,
    color_sprites = 0xffffff,
    coloradd_floor = 0x000000,
    coloradd_ceiling = 0x000000,
    coloradd_sprites = 0x000000,
    coloradd_walls = 0x000000,
    colorization_floor = 0,
    colorization_ceiling = 0,
    noskywalls = false,
    portal_ceil_blocksound = false,
    portal_ceil_disabled = false,
    portal_ceil_nopass = false,
    portal_ceil_norender = false,
    portal_ceil_overlaytype = 'translucent',
    portal_floor_blocksound = false,
    portal_floor_disabled = false,
    portal_floor_nopass = false,
    portal_floor_norender = false,
    portal_floor_overlaytype = 'translucent',
    healthfloor = 0,
    healthfloorgroup = 0,
    healthceiling = 0,
    healthceilinggroup = 0,
    health3d = 0,
    health3dgroup = 0,
    xscrollfloor = 0,
    yscrollfloor = 0,
    scrollfloormode = 0,
    xscrollceiling = 0,
    yscrollceiling = 0,
    scrollceilingmode = 0,
    friction = 0,
    movefactor = 0,
    skyfloor = '',
    skyceiling = '',
    skyfloor2 = '',
    skyceiling2 = '',
    colormap = '',
    xthrust = 0,
    ythrust = 0,
    thrustgroup = 0,
    thrustlocation = 0,
  }: ZSectorOpts) {
    super({
      id,
      heightfloor,
      heightceiling,
      texturefloor,
      textureceiling,
      lightlevel,
      special,
      comment,
    });
    this.xpanningfloor = xpanningfloor;
    this.ypanningfloor = ypanningfloor;
    this.xpanningceiling = xpanningceiling;
    this.ypanningceiling = ypanningceiling;
    this.xscalefloor = xscalefloor;
    this.yscalefloor = yscalefloor;
    this.xscaleceiling = xscaleceiling;
    this.yscaleceiling = yscaleceiling;
    this.rotationfloor = rotationfloor;
    this.rotationceiling = rotationceiling;
    this.ceilingplane_a = ceilingplane_a;
    this.ceilingplane_b = ceilingplane_b;
    this.ceilingplane_c = ceilingplane_c;
    this.ceilingplane_d = ceilingplane_d;
    this.floorplane_a = floorplane_a;
    this.floorplane_b = floorplane_b;
    this.floorplane_c = floorplane_c;
    this.floorplane_d = floorplane_d;
    this.lightfloor = lightfloor;
    this.lightceiling = lightceiling;
    this.lightfloorabsolute = lightfloorabsolute;
    this.lightceilingabsolute = lightceilingabsolute;
    this.alphafloor = alphafloor;
    this.alphaceiling = alphaceiling;
    this.renderstylefloor = renderstylefloor;
    this.renderstyleceiling = renderstyleceiling;
    this.gravity = gravity;
    this.lightcolor = lightcolor;
    this.fadecolor = fadecolor;
    this.desaturation = desaturation;
    this.silent = silent;
    this.nofallingdamage = nofallingdamage;
    this.noattack = noattack;
    this.dropactors = dropactors;
    this.norespawn = norespawn;
    this.soundsequence = soundsequence;
    this.hidden = hidden;
    this.waterzone = waterzone;
    this.moreids = moreids;
    this.damageamount = damageamount;
    this.damagetype = damagetype;
    this.damageinterval = damageinterval;
    this.leakiness = leakiness;
    this.damageterraineffect = damageterraineffect;
    this.damagehazard = damagehazard;
    this.hurtmonsters = hurtmonsters;
    this.harminair = harminair;
    this.floorterrain = floorterrain;
    this.ceilingterrain = ceilingterrain;
    this.floor_reflect = floor_reflect;
    this.ceiling_reflect = ceiling_reflect;
    this.fogdensity = fogdensity;
    this.floorglowcolor = floorglowcolor;
    this.floorglowheight = floorglowheight;
    this.ceilingglowcolor = ceilingglowcolor;
    this.ceilingglowheight = ceilingglowheight;
    this.color_floor = color_floor;
    this.color_ceiling = color_ceiling;
    this.color_walltop = color_walltop;
    this.color_wallbottom = color_wallbottom;
    this.color_sprites = color_sprites;
    this.coloradd_floor = coloradd_floor;
    this.coloradd_ceiling = coloradd_ceiling;
    this.coloradd_sprites = coloradd_sprites;
    this.coloradd_walls = coloradd_walls;
    this.colorization_floor = colorization_floor;
    this.colorization_ceiling = colorization_ceiling;
    this.noskywalls = noskywalls;
    this.portal_ceil_blocksound = portal_ceil_blocksound;
    this.portal_ceil_disabled = portal_ceil_disabled;
    this.portal_ceil_nopass = portal_ceil_nopass;
    this.portal_ceil_norender = portal_ceil_norender;
    this.portal_ceil_overlaytype = portal_ceil_overlaytype;
    this.portal_floor_blocksound = portal_floor_blocksound;
    this.portal_floor_disabled = portal_floor_disabled;
    this.portal_floor_nopass = portal_floor_nopass;
    this.portal_floor_norender = portal_floor_norender;
    this.portal_floor_overlaytype = portal_floor_overlaytype;
    this.healthfloor = healthfloor;
    this.healthfloorgroup = healthfloorgroup;
    this.healthceiling = healthceiling;
    this.healthceilinggroup = healthceilinggroup;
    this.health3d = health3d;
    this.health3dgroup = health3dgroup;
    this.xscrollfloor = xscrollfloor;
    this.yscrollfloor = yscrollfloor;
    this.scrollfloormode = scrollfloormode;
    this.xscrollceiling = xscrollceiling;
    this.yscrollceiling = yscrollceiling;
    this.scrollceilingmode = scrollceilingmode;
    this.friction = friction;
    this.movefactor = movefactor;
    this.skyfloor = skyfloor;
    this.skyceiling = skyceiling;
    this.skyfloor2 = skyfloor2;
    this.skyceiling2 = skyceiling2;
    this.colormap = colormap;
    this.xthrust = xthrust;
    this.ythrust = ythrust;
    this.thrustgroup = thrustgroup;
    this.thrustlocation = thrustlocation;
  }
}
