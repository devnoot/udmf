import { Linedef, type LinedefOpts } from '../../linedef';

export interface ZLinedefOpts extends LinedefOpts {
  /** Translucency of this line, default is 1.0 */
  alpha?: number;
  /** Render style: "translucent" or "add" */
  renderstyle?: string;
  /** Player can use from back side */
  playeruseback?: boolean;
  /** Any non-projectile crossing triggers this line */
  anycross?: boolean;
  /** Monsters can trigger this line */
  monsteractivate?: boolean;
  /** Line blocks players' movement */
  blockplayers?: boolean;
  /** Line blocks everything */
  blockeverything?: boolean;
  /** Line can only be triggered from the front side */
  firstsideonly?: boolean;
  /** Line is a boundary for sound reverb zones */
  zoneboundary?: boolean;
  /** Line's mid textures are clipped to floor and ceiling */
  clipmidtex?: boolean;
  /** Line's mid textures are wrapped */
  wrapmidtex?: boolean;
  /** Actors can walk on mid texture */
  midtex3d?: boolean;
  /** Mid texture behaves like an impassable line */
  midtex3dimpassible?: boolean;
  /** Switches can only be activated when vertically reachable */
  checkswitchrange?: boolean;
  /** Crossing activation checks if creature is on the ground */
  walking?: boolean;
  /** Line blocks all projectiles */
  blockprojectiles?: boolean;
  /** Line blocks all use actions */
  blockuse?: boolean;
  /** Line blocks monster line of sight */
  blocksight?: boolean;
  /** Line blocks hitscan attacks */
  blockhitscan?: boolean;
  /** Line blocks floating monsters' movement */
  blockfloaters?: boolean;
  /** Line blocks walking monsters' movement */
  blocklandmonsters?: boolean;
  /** Line special is locked */
  locknumber?: number;
  /** Alternate string-based version of arg0 */
  arg0str?: string;
  /** Alternate string-based version of arg1 */
  arg1str?: string;
  /** Additional line IDs, space separated */
  moreids?: string;
  /** Explicit automap style (0-13) */
  automapstyle?: number;
  /** Line is initially visible on automap */
  revealed?: boolean;
  /** Skies are not drawn above or below this line */
  noskywalls?: boolean;
  /** Draw the maximum height instead of the minimum height */
  drawfullheight?: boolean;
  /** Amount of hitpoints for this line */
  health?: number;
  /** ID of destructible object to synchronize hitpoints */
  healthgroup?: number;
  /** Line calls special when receiving damage */
  damagespecial?: boolean;
  /** Line calls special when health reaches 0 */
  deathspecial?: boolean;
}

export class ZLinedef extends Linedef {
  readonly alpha?: number;
  readonly renderstyle?: string;
  readonly playeruseback?: boolean;
  readonly anycross?: boolean;
  readonly monsteractivate?: boolean;
  readonly blockplayers?: boolean;
  readonly blockeverything?: boolean;
  readonly firstsideonly?: boolean;
  readonly zoneboundary?: boolean;
  readonly clipmidtex?: boolean;
  readonly wrapmidtex?: boolean;
  readonly midtex3d?: boolean;
  readonly midtex3dimpassible?: boolean;
  readonly checkswitchrange?: boolean;
  readonly walking?: boolean;
  readonly blockprojectiles?: boolean;
  readonly blockuse?: boolean;
  readonly blocksight?: boolean;
  readonly blockhitscan?: boolean;
  readonly blockfloaters?: boolean;
  readonly blocklandmonsters?: boolean;
  readonly locknumber?: number;
  readonly arg0str?: string;
  readonly arg1str?: string;
  readonly moreids?: string;
  readonly automapstyle?: number;
  readonly revealed?: boolean;
  readonly noskywalls?: boolean;
  readonly drawfullheight?: boolean;
  readonly health?: number;
  readonly healthgroup?: number;
  readonly damagespecial?: boolean;
  readonly deathspecial?: boolean;

  constructor({
    // Base Linedef fields
    id,
    v1,
    v2,
    blocking,
    blockmonsters,
    twosided,
    dontpegtop,
    dontpegbottom,
    secret,
    blocksound,
    dontdraw,
    mapped,
    passuse,
    translucent,
    jumpover,
    blockfloaters: baseBlockfloaters,
    playeruse,
    playercross,
    monstercross,
    monsteruse,
    impact,
    playerpush,
    monsterpush,
    misslecross,
    repeatspecial,
    special,
    arg0,
    arg1,
    arg2,
    arg3,
    arg4,
    sidefront,
    sideback,
    comment,
    // ZDoom extension fields
    alpha = 1.0,
    renderstyle = 'translucent',
    playeruseback = false,
    anycross = false,
    monsteractivate = false,
    blockplayers = false,
    blockeverything = false,
    firstsideonly = false,
    zoneboundary = false,
    clipmidtex = false,
    wrapmidtex = false,
    midtex3d = false,
    midtex3dimpassible = false,
    checkswitchrange = false,
    walking = false,
    blockprojectiles = false,
    blockuse = false,
    blocksight = false,
    blockhitscan = false,
    blockfloaters = false,
    blocklandmonsters = false,
    locknumber = 0,
    arg0str = '',
    arg1str = '',
    moreids = '',
    automapstyle = 0,
    revealed = false,
    noskywalls = false,
    drawfullheight = false,
    health = 0,
    healthgroup = 0,
    damagespecial = false,
    deathspecial = false,
  }: ZLinedefOpts) {
    super({
      id,
      v1,
      v2,
      blocking,
      blockmonsters,
      twosided,
      dontpegtop,
      dontpegbottom,
      secret,
      blocksound,
      dontdraw,
      mapped,
      passuse,
      translucent,
      jumpover,
      blockfloaters: baseBlockfloaters,
      playeruse,
      playercross,
      monstercross,
      monsteruse,
      impact,
      playerpush,
      monsterpush,
      misslecross,
      repeatspecial,
      special,
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      sidefront,
      sideback,
      comment,
    });
    this.alpha = alpha;
    this.renderstyle = renderstyle;
    this.playeruseback = playeruseback;
    this.anycross = anycross;
    this.monsteractivate = monsteractivate;
    this.blockplayers = blockplayers;
    this.blockeverything = blockeverything;
    this.firstsideonly = firstsideonly;
    this.zoneboundary = zoneboundary;
    this.clipmidtex = clipmidtex;
    this.wrapmidtex = wrapmidtex;
    this.midtex3d = midtex3d;
    this.midtex3dimpassible = midtex3dimpassible;
    this.checkswitchrange = checkswitchrange;
    this.walking = walking;
    this.blockprojectiles = blockprojectiles;
    this.blockuse = blockuse;
    this.blocksight = blocksight;
    this.blockhitscan = blockhitscan;
    this.blockfloaters = blockfloaters;
    this.blocklandmonsters = blocklandmonsters;
    this.locknumber = locknumber;
    this.arg0str = arg0str;
    this.arg1str = arg1str;
    this.moreids = moreids;
    this.automapstyle = automapstyle;
    this.revealed = revealed;
    this.noskywalls = noskywalls;
    this.drawfullheight = drawfullheight;
    this.health = health;
    this.healthgroup = healthgroup;
    this.damagespecial = damagespecial;
    this.deathspecial = deathspecial;
  }
}
