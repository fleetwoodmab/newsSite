import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.D2nq4zBL.js","_app/immutable/chunks/scheduler.CHqi8PZF.js","_app/immutable/chunks/index.C7oWLrXh.js","_app/immutable/chunks/i18n.D9Jz_Ffi.js","_app/immutable/chunks/index.5H4blI2N.js","_app/immutable/chunks/AngleUpOutline.BF5ZsIlF.js"];
export const stylesheets = ["_app/immutable/assets/2.BHAqo-cc.css"];
export const fonts = [];
