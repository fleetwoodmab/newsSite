

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.C5QntBjG.js","_app/immutable/chunks/scheduler.CHqi8PZF.js","_app/immutable/chunks/index.C7oWLrXh.js","_app/immutable/chunks/stores.c55xfiXa.js","_app/immutable/chunks/entry.zSskZQDI.js","_app/immutable/chunks/index.5H4blI2N.js"];
export const stylesheets = [];
export const fonts = [];