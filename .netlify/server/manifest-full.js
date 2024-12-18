export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["facebook.svg","favicon.ico","flickr.svg","geosphereMaps.png","GSAlogo.png","GSALogo.svg","instagram.svg","Inter.ttf","linkedin.svg","pic.png","tethysHome.png","tethysLogo.svg","thesaurus.png","x.svg","youtube.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.BZns04NO.js","app":"_app/immutable/entry/app.DocRi187.js","imports":["_app/immutable/entry/start.BZns04NO.js","_app/immutable/chunks/entry.BfAKhfZx.js","_app/immutable/chunks/scheduler.CHqi8PZF.js","_app/immutable/chunks/index.5H4blI2N.js","_app/immutable/entry/app.DocRi187.js","_app/immutable/chunks/scheduler.CHqi8PZF.js","_app/immutable/chunks/index.C7oWLrXh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/geospheremaps",
				pattern: /^\/geospheremaps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/geothermieatlas",
				pattern: /^\/geothermieatlas\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/iris",
				pattern: /^\/iris\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/multithematischekarte",
				pattern: /^\/multithematischekarte\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/tethys",
				pattern: /^\/tethys\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/thesaurus",
				pattern: /^\/thesaurus\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
