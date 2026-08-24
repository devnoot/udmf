import { Sidedef, type SidedefOpts } from '../../sidedef';

export interface ZSidedefOpts extends SidedefOpts {
  /** X scale for upper texture, default 1.0 */
  scalex_top?: number;
  /** Y scale for upper texture, default 1.0 */
  scaley_top?: number;
  /** X scale for mid texture, default 1.0 */
  scalex_mid?: number;
  /** Y scale for mid texture, default 1.0 */
  scaley_mid?: number;
  /** X scale for lower texture, default 1.0 */
  scalex_bottom?: number;
  /** Y scale for lower texture, default 1.0 */
  scaley_bottom?: number;
  /** X offset for upper texture, default 0.0 */
  offsetx_top?: number;
  /** Y offset for upper texture, default 0.0 */
  offsety_top?: number;
  /** X offset for mid texture, default 0.0 */
  offsetx_mid?: number;
  /** Y offset for mid texture, default 0.0 */
  offsety_mid?: number;
  /** X offset for lower texture, default 0.0 */
  offsetx_bottom?: number;
  /** Y offset for lower texture, default 0.0 */
  offsety_bottom?: number;
  /** This side's light level, default 0 */
  light?: number;
  /** true = 'light' is an absolute value */
  lightabsolute?: boolean;
  /** This side's top tier light level, default 0 */
  light_top?: number;
  /** true = 'light_top' is an absolute value */
  lightabsolute_top?: boolean;
  /** This side's mid tier light level, default 0 */
  light_mid?: number;
  /** true = 'light_mid' is an absolute value */
  lightabsolute_mid?: boolean;
  /** This side's bottom tier light level, default 0 */
  light_bottom?: number;
  /** true = 'light_bottom' is an absolute value */
  lightabsolute_bottom?: boolean;
  /** Relative lighting used even in foggy sectors */
  lightfog?: boolean;
  /** Disables use of fake contrast on this sidedef */
  nofakecontrast?: boolean;
  /** Use smooth fake contrast */
  smoothlighting?: boolean;
  /** Side's mid textures are clipped to floor and ceiling */
  clipmidtex?: boolean;
  /** Side's mid textures are wrapped */
  wrapmidtex?: boolean;
  /** Disables decals on the sidedef */
  nodecals?: boolean;
  /** Disables color gradient on upper tier */
  nogradient_top?: boolean;
  /** Flips gradient colors on upper tier */
  flipgradient_top?: boolean;
  /** Clamps gradient on upper tier to actual bounds */
  clampgradient_top?: boolean;
  /** Use sidedef colors for upper tier */
  useowncolors_top?: boolean;
  /** Material color of the top of the upper tier */
  uppercolor_top?: number;
  /** Material color of the bottom of the upper tier */
  lowercolor_top?: number;
  /** Disables color gradient on middle tier */
  nogradient_mid?: boolean;
  /** Flips gradient colors on middle tier */
  flipgradient_mid?: boolean;
  /** Clamps gradient on middle tier to actual bounds */
  clampgradient_mid?: boolean;
  /** Use sidedef colors for middle tier */
  useowncolors_mid?: boolean;
  /** Material color of the top of the middle tier */
  uppercolor_mid?: number;
  /** Material color of the bottom of the middle tier */
  lowercolor_mid?: number;
  /** Disables color gradient on lower tier */
  nogradient_bottom?: boolean;
  /** Flips gradient colors on lower tier */
  flipgradient_bottom?: boolean;
  /** Clamps gradient on lower tier to actual bounds */
  clampgradient_bottom?: boolean;
  /** Use sidedef colors for lower tier */
  useowncolors_bottom?: boolean;
  /** Material color of the top of the lower tier */
  uppercolor_bottom?: number;
  /** Material color of the bottom of the lower tier */
  lowercolor_bottom?: number;
  /** Additive colorization from sidedef (top) */
  useowncoloradd_top?: boolean;
  /** Additive colorization from sidedef (mid) */
  useowncoloradd_mid?: boolean;
  /** Additive colorization from sidedef (bottom) */
  useowncoloradd_bottom?: boolean;
  /** Additive material color for top section */
  coloradd_top?: number;
  /** Additive material color for middle section */
  coloradd_mid?: number;
  /** Additive material color for bottom section */
  coloradd_bottom?: number;
  /** Colorization record for upper texture */
  colorization_top?: number;
  /** Colorization record for middle texture */
  colorization_mid?: number;
  /** Colorization record for lower texture */
  colorization_bottom?: number;
  /** Top wall skewing (0-4) */
  skew_top?: number;
  /** Middle wall skewing (0-4) */
  skew_middle?: number;
  /** Bottom wall skewing (0-4) */
  skew_bottom?: number;
  /** Wall scrolling X speed in map units per tic */
  xscroll?: number;
  /** Wall scrolling Y speed in map units per tic */
  yscroll?: number;
  /** Upper wall scrolling X speed */
  xscrolltop?: number;
  /** Upper wall scrolling Y speed */
  yscrolltop?: number;
  /** Mid wall scrolling X speed */
  xscrollmid?: number;
  /** Mid wall scrolling Y speed */
  yscrollmid?: number;
  /** Lower wall scrolling X speed */
  xscrollbottom?: number;
  /** Lower wall scrolling Y speed */
  yscrollbottom?: number;
}

export class ZSidedef extends Sidedef {
  readonly scalex_top?: number;
  readonly scaley_top?: number;
  readonly scalex_mid?: number;
  readonly scaley_mid?: number;
  readonly scalex_bottom?: number;
  readonly scaley_bottom?: number;
  readonly offsetx_top?: number;
  readonly offsety_top?: number;
  readonly offsetx_mid?: number;
  readonly offsety_mid?: number;
  readonly offsetx_bottom?: number;
  readonly offsety_bottom?: number;
  readonly light?: number;
  readonly lightabsolute?: boolean;
  readonly light_top?: number;
  readonly lightabsolute_top?: boolean;
  readonly light_mid?: number;
  readonly lightabsolute_mid?: boolean;
  readonly light_bottom?: number;
  readonly lightabsolute_bottom?: boolean;
  readonly lightfog?: boolean;
  readonly nofakecontrast?: boolean;
  readonly smoothlighting?: boolean;
  readonly clipmidtex?: boolean;
  readonly wrapmidtex?: boolean;
  readonly nodecals?: boolean;
  readonly nogradient_top?: boolean;
  readonly flipgradient_top?: boolean;
  readonly clampgradient_top?: boolean;
  readonly useowncolors_top?: boolean;
  readonly uppercolor_top?: number;
  readonly lowercolor_top?: number;
  readonly nogradient_mid?: boolean;
  readonly flipgradient_mid?: boolean;
  readonly clampgradient_mid?: boolean;
  readonly useowncolors_mid?: boolean;
  readonly uppercolor_mid?: number;
  readonly lowercolor_mid?: number;
  readonly nogradient_bottom?: boolean;
  readonly flipgradient_bottom?: boolean;
  readonly clampgradient_bottom?: boolean;
  readonly useowncolors_bottom?: boolean;
  readonly uppercolor_bottom?: number;
  readonly lowercolor_bottom?: number;
  readonly useowncoloradd_top?: boolean;
  readonly useowncoloradd_mid?: boolean;
  readonly useowncoloradd_bottom?: boolean;
  readonly coloradd_top?: number;
  readonly coloradd_mid?: number;
  readonly coloradd_bottom?: number;
  readonly colorization_top?: number;
  readonly colorization_mid?: number;
  readonly colorization_bottom?: number;
  readonly skew_top?: number;
  readonly skew_middle?: number;
  readonly skew_bottom?: number;
  readonly xscroll?: number;
  readonly yscroll?: number;
  readonly xscrolltop?: number;
  readonly yscrolltop?: number;
  readonly xscrollmid?: number;
  readonly yscrollmid?: number;
  readonly xscrollbottom?: number;
  readonly yscrollbottom?: number;

  constructor({
    // Base Sidedef fields
    offsetx,
    offsety,
    texturetop,
    texturebottom,
    texturemiddle,
    sector,
    comment,
    // ZDoom extension fields
    scalex_top = 1.0,
    scaley_top = 1.0,
    scalex_mid = 1.0,
    scaley_mid = 1.0,
    scalex_bottom = 1.0,
    scaley_bottom = 1.0,
    offsetx_top = 0.0,
    offsety_top = 0.0,
    offsetx_mid = 0.0,
    offsety_mid = 0.0,
    offsetx_bottom = 0.0,
    offsety_bottom = 0.0,
    light = 0,
    lightabsolute = false,
    light_top = 0,
    lightabsolute_top = false,
    light_mid = 0,
    lightabsolute_mid = false,
    light_bottom = 0,
    lightabsolute_bottom = false,
    lightfog = false,
    nofakecontrast = false,
    smoothlighting = false,
    clipmidtex = false,
    wrapmidtex = false,
    nodecals = false,
    nogradient_top = false,
    flipgradient_top = false,
    clampgradient_top = false,
    useowncolors_top = false,
    uppercolor_top = 0,
    lowercolor_top = 0,
    nogradient_mid = false,
    flipgradient_mid = false,
    clampgradient_mid = false,
    useowncolors_mid = false,
    uppercolor_mid = 0,
    lowercolor_mid = 0,
    nogradient_bottom = false,
    flipgradient_bottom = false,
    clampgradient_bottom = false,
    useowncolors_bottom = false,
    uppercolor_bottom = 0,
    lowercolor_bottom = 0,
    useowncoloradd_top = false,
    useowncoloradd_mid = false,
    useowncoloradd_bottom = false,
    coloradd_top = 0x000000,
    coloradd_mid = 0x000000,
    coloradd_bottom = 0x000000,
    colorization_top = 0,
    colorization_mid = 0,
    colorization_bottom = 0,
    skew_top = 0,
    skew_middle = 0,
    skew_bottom = 0,
    xscroll = 0,
    yscroll = 0,
    xscrolltop = 0,
    yscrolltop = 0,
    xscrollmid = 0,
    yscrollmid = 0,
    xscrollbottom = 0,
    yscrollbottom = 0,
  }: ZSidedefOpts) {
    super({
      offsetx,
      offsety,
      texturetop,
      texturebottom,
      texturemiddle,
      sector,
      comment,
    });
    this.scalex_top = scalex_top;
    this.scaley_top = scaley_top;
    this.scalex_mid = scalex_mid;
    this.scaley_mid = scaley_mid;
    this.scalex_bottom = scalex_bottom;
    this.scaley_bottom = scaley_bottom;
    this.offsetx_top = offsetx_top;
    this.offsety_top = offsety_top;
    this.offsetx_mid = offsetx_mid;
    this.offsety_mid = offsety_mid;
    this.offsetx_bottom = offsetx_bottom;
    this.offsety_bottom = offsety_bottom;
    this.light = light;
    this.lightabsolute = lightabsolute;
    this.light_top = light_top;
    this.lightabsolute_top = lightabsolute_top;
    this.light_mid = light_mid;
    this.lightabsolute_mid = lightabsolute_mid;
    this.light_bottom = light_bottom;
    this.lightabsolute_bottom = lightabsolute_bottom;
    this.lightfog = lightfog;
    this.nofakecontrast = nofakecontrast;
    this.smoothlighting = smoothlighting;
    this.clipmidtex = clipmidtex;
    this.wrapmidtex = wrapmidtex;
    this.nodecals = nodecals;
    this.nogradient_top = nogradient_top;
    this.flipgradient_top = flipgradient_top;
    this.clampgradient_top = clampgradient_top;
    this.useowncolors_top = useowncolors_top;
    this.uppercolor_top = uppercolor_top;
    this.lowercolor_top = lowercolor_top;
    this.nogradient_mid = nogradient_mid;
    this.flipgradient_mid = flipgradient_mid;
    this.clampgradient_mid = clampgradient_mid;
    this.useowncolors_mid = useowncolors_mid;
    this.uppercolor_mid = uppercolor_mid;
    this.lowercolor_mid = lowercolor_mid;
    this.nogradient_bottom = nogradient_bottom;
    this.flipgradient_bottom = flipgradient_bottom;
    this.clampgradient_bottom = clampgradient_bottom;
    this.useowncolors_bottom = useowncolors_bottom;
    this.uppercolor_bottom = uppercolor_bottom;
    this.lowercolor_bottom = lowercolor_bottom;
    this.useowncoloradd_top = useowncoloradd_top;
    this.useowncoloradd_mid = useowncoloradd_mid;
    this.useowncoloradd_bottom = useowncoloradd_bottom;
    this.coloradd_top = coloradd_top;
    this.coloradd_mid = coloradd_mid;
    this.coloradd_bottom = coloradd_bottom;
    this.colorization_top = colorization_top;
    this.colorization_mid = colorization_mid;
    this.colorization_bottom = colorization_bottom;
    this.skew_top = skew_top;
    this.skew_middle = skew_middle;
    this.skew_bottom = skew_bottom;
    this.xscroll = xscroll;
    this.yscroll = yscroll;
    this.xscrolltop = xscrolltop;
    this.yscrolltop = yscrolltop;
    this.xscrollmid = xscrollmid;
    this.yscrollmid = yscrollmid;
    this.xscrollbottom = xscrollbottom;
    this.yscrollbottom = yscrollbottom;
  }
}
