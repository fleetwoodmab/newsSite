export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","flowbite-svelte-icon-logo.svg","GSAlogo.png","Inter.ttf","pic.png","tethysHome.png","tethysLogo.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.DjJqj8Gu.js","app":"_app/immutable/entry/app.xHKP2Z50.js","imports":["_app/immutable/entry/start.DjJqj8Gu.js","_app/immutable/chunks/entry.C2Zxd785.js","_app/immutable/chunks/scheduler.D2WwRDck.js","_app/immutable/chunks/index.DGKpnwbj.js","_app/immutable/entry/app.xHKP2Z50.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.D2WwRDck.js","_app/immutable/chunks/index.B-65el-e.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/posts/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
