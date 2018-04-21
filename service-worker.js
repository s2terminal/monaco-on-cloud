importScripts('node_modules/workbox-sw/build/workbox-sw.js');
workbox.setConfig({ debug: false });

const strategy = workbox.strategies.networkFirst();
[
  '/$',
  '/(css|js|images)/.*',
  '/node_modules/monaco-editor/min/vs/.*\.(js|svg)',
  '/node_modules/office-ui-fabric-js/dist/(css|js)/fabric(.components)*.min.(css|js)',
].map(function(rp) {
  workbox.routing.registerRoute(new RegExp(rp), strategy);
});
