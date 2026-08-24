import { Thing, type ThingOpts } from '../../thing';

export interface ZThingOpts extends ThingOpts {
  /** Spawn in skill 6 */
  skill6?: boolean;
  /** Spawn in skill 7 */
  skill7?: boolean;
  /** Spawn in skill 8 */
  skill8?: boolean;
  /** Spawn in skill 9 */
  skill9?: boolean;
  /** Spawn in skill 10 */
  skill10?: boolean;
  /** Spawn in skill 11 */
  skill11?: boolean;
  /** Spawn in skill 12 */
  skill12?: boolean;
  /** Spawn in skill 13 */
  skill13?: boolean;
  /** Spawn in skill 14 */
  skill14?: boolean;
  /** Spawn in skill 15 */
  skill15?: boolean;
  /** Spawn in skill 16 */
  skill16?: boolean;
  /** Thing is present for pclass 4 */
  class4?: boolean;
  /** Thing is present for pclass 5 */
  class5?: boolean;
  /** Thing is present for pclass 6 */
  class6?: boolean;
  /** Thing is present for pclass 7 */
  class7?: boolean;
  /** Thing is present for pclass 8 */
  class8?: boolean;
  /** Thing is present for pclass 9 */
  class9?: boolean;
  /** Thing is present for pclass 10 */
  class10?: boolean;
  /** Thing is present for pclass 11 */
  class11?: boolean;
  /** Thing is present for pclass 12 */
  class12?: boolean;
  /** Thing is present for pclass 13 */
  class13?: boolean;
  /** Thing is present for pclass 14 */
  class14?: boolean;
  /** Thing is present for pclass 15 */
  class15?: boolean;
  /** Thing is present for pclass 16 */
  class16?: boolean;
  /** Conversation dialogue ID, 0 = none */
  conversation?: number;
  /** Picking up this actor counts as a secret */
  countsecret?: boolean;
  /** Object does not count toward kills or items */
  nocount?: boolean;
  /** Alternate string-based version of arg0 */
  arg0str?: string;
  /** Alternate string-based version of arg1 */
  arg1str?: string;
  /** Per-actor gravity. Positive = multiplied, negative = absolute */
  gravity?: number;
  /** Per-actor health. Positive = multiplied, negative = absolute */
  health?: number;
  /** Per-actor render style override */
  renderstyle?: string;
  /** Fill color for stencil render styles (RRGGBB) */
  fillcolor?: number;
  /** Translucency of this actor */
  alpha?: number;
  /** Score value of this actor */
  score?: number;
  /** Pitch in degrees */
  pitch?: number;
  /** Roll in degrees */
  roll?: number;
  /** Horizontal scaling, 0 = ignored */
  scalex?: number;
  /** Vertical scaling, 0 = ignored */
  scaley?: number;
  /** Uniform scaling, 0 = ignored */
  scale?: number;
  /** Float bob phase (0-63), -1 = use class default */
  floatbobphase?: number;
  /** Friendly monster sight range in block units */
  friendlyseeblocks?: number;
}

export class ZThing extends Thing {
  readonly skill6?: boolean;
  readonly skill7?: boolean;
  readonly skill8?: boolean;
  readonly skill9?: boolean;
  readonly skill10?: boolean;
  readonly skill11?: boolean;
  readonly skill12?: boolean;
  readonly skill13?: boolean;
  readonly skill14?: boolean;
  readonly skill15?: boolean;
  readonly skill16?: boolean;
  readonly class4?: boolean;
  readonly class5?: boolean;
  readonly class6?: boolean;
  readonly class7?: boolean;
  readonly class8?: boolean;
  readonly class9?: boolean;
  readonly class10?: boolean;
  readonly class11?: boolean;
  readonly class12?: boolean;
  readonly class13?: boolean;
  readonly class14?: boolean;
  readonly class15?: boolean;
  readonly class16?: boolean;
  readonly conversation?: number;
  readonly countsecret?: boolean;
  readonly nocount?: boolean;
  readonly arg0str?: string;
  readonly arg1str?: string;
  readonly gravity?: number;
  readonly health?: number;
  readonly renderstyle?: string;
  readonly fillcolor?: number;
  readonly alpha?: number;
  readonly score?: number;
  readonly pitch?: number;
  readonly roll?: number;
  readonly scalex?: number;
  readonly scaley?: number;
  readonly scale?: number;
  readonly floatbobphase?: number;
  readonly friendlyseeblocks?: number;

  constructor({
    // Base Thing fields
    id,
    x,
    y,
    height,
    angle,
    type,
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    ambush,
    single,
    dm,
    coop,
    friend,
    dormant,
    class1,
    class2,
    class3,
    standing,
    strifeally,
    translucent,
    invisible,
    special,
    arg0,
    arg1,
    arg2,
    arg3,
    arg4,
    comment,
    // ZDoom extension fields
    skill6 = false,
    skill7 = false,
    skill8 = false,
    skill9 = false,
    skill10 = false,
    skill11 = false,
    skill12 = false,
    skill13 = false,
    skill14 = false,
    skill15 = false,
    skill16 = false,
    class4 = false,
    class5 = false,
    class6 = false,
    class7 = false,
    class8 = false,
    class9 = false,
    class10 = false,
    class11 = false,
    class12 = false,
    class13 = false,
    class14 = false,
    class15 = false,
    class16 = false,
    conversation = 0,
    countsecret = false,
    nocount = false,
    arg0str = '',
    arg1str = '',
    gravity = 1.0,
    health = 1.0,
    renderstyle = '',
    fillcolor = 0x000000,
    alpha = 1.0,
    score = 0,
    pitch = 0,
    roll = 0,
    scalex = 0,
    scaley = 0,
    scale = 0,
    floatbobphase = -1,
    friendlyseeblocks = 10,
  }: ZThingOpts) {
    super({
      id,
      x,
      y,
      height,
      angle,
      type,
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      ambush,
      single,
      dm,
      coop,
      friend,
      dormant,
      class1,
      class2,
      class3,
      standing,
      strifeally,
      translucent,
      invisible,
      special,
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      comment,
    });
    this.skill6 = skill6;
    this.skill7 = skill7;
    this.skill8 = skill8;
    this.skill9 = skill9;
    this.skill10 = skill10;
    this.skill11 = skill11;
    this.skill12 = skill12;
    this.skill13 = skill13;
    this.skill14 = skill14;
    this.skill15 = skill15;
    this.skill16 = skill16;
    this.class4 = class4;
    this.class5 = class5;
    this.class6 = class6;
    this.class7 = class7;
    this.class8 = class8;
    this.class9 = class9;
    this.class10 = class10;
    this.class11 = class11;
    this.class12 = class12;
    this.class13 = class13;
    this.class14 = class14;
    this.class15 = class15;
    this.class16 = class16;
    this.conversation = conversation;
    this.countsecret = countsecret;
    this.nocount = nocount;
    this.arg0str = arg0str;
    this.arg1str = arg1str;
    this.gravity = gravity;
    this.health = health;
    this.renderstyle = renderstyle;
    this.fillcolor = fillcolor;
    this.alpha = alpha;
    this.score = score;
    this.pitch = pitch;
    this.roll = roll;
    this.scalex = scalex;
    this.scaley = scaley;
    this.scale = scale;
    this.floatbobphase = floatbobphase;
    this.friendlyseeblocks = friendlyseeblocks;
  }
}
