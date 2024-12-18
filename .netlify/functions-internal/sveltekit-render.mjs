import { init } from '../serverless.js';

export const handler = init((() => {
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
		client: {"start":"_app/immutable/entry/start.DV4Jg9Pr.js","app":"_app/immutable/entry/app.BxPu3bbH.js","imports":["_app/immutable/entry/start.DV4Jg9Pr.js","_app/immutable/chunks/entry.zzi4zyEk.js","_app/immutable/chunks/scheduler.CHqi8PZF.js","_app/immutable/chunks/index.5H4blI2N.js","_app/immutable/entry/app.BxPu3bbH.js","_app/immutable/chunks/scheduler.CHqi8PZF.js","_app/immutable/chunks/index.C7oWLrXh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
