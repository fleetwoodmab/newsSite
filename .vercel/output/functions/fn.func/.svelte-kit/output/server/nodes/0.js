import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.D3Oc3iDl.js","_app/immutable/chunks/scheduler.D2WwRDck.js","_app/immutable/chunks/index.B-65el-e.js","_app/immutable/chunks/Frame.DwuJy1MB.js","_app/immutable/chunks/index.DGKpnwbj.js","_app/immutable/chunks/Wrapper.utZmYZDg.js","_app/immutable/chunks/stores.CsP4aPRx.js","_app/immutable/chunks/entry.C2Zxd785.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js"];
export const stylesheets = ["_app/immutable/assets/0.Xky0iKW-.css"];
export const fonts = [];
