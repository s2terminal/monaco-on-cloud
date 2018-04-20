importScripts('node_modules/workbox-sw/build/workbox-sw.js');
workbox.setConfig({ debug: false });

const strategy = workbox.strategies.networkFirst();
workbox.routing.registerRoute(new RegExp('/'), strategy);
workbox.routing.registerRoute(new RegExp('/(css|js|images)/.*'), strategy);
workbox.routing.registerRoute(new RegExp('/node_modules/monaco-editor/min/vs/.*\.(js|svg)'), strategy);
