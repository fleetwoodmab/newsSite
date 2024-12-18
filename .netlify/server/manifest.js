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
		client: {"start":"_app/immutable/entry/start.D6RI8CMc.js","app":"_app/immutable/entry/app.DrW3ez-b.js","imports":["_app/immutable/entry/start.D6RI8CMc.js","_app/immutable/chunks/entry.zSskZQDI.js","_app/immutable/chunks/scheduler.CHqi8PZF.js","_app/immutable/chunks/index.5H4blI2N.js","_app/immutable/entry/app.DrW3ez-b.js","_app/immutable/chunks/scheduler.CHqi8PZF.js","_app/immutable/chunks/index.C7oWLrXh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
