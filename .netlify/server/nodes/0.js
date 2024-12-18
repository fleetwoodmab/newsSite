import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DSAe-EHo.js","_app/immutable/chunks/scheduler.CHqi8PZF.js","_app/immutable/chunks/index.C7oWLrXh.js","_app/immutable/chunks/i18n.D9Jz_Ffi.js","_app/immutable/chunks/index.5H4blI2N.js","_app/immutable/chunks/Wrapper.DHn30aCG.js","_app/immutable/chunks/entry.zzi4zyEk.js"];
export const stylesheets = ["_app/immutable/assets/0.CtWTv2uG.css"];
export const fonts = [];
