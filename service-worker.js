var cacheName = 'Monaco-On-Cloud-1-0-0';
var filesToCache = [
  '/',
  '/index.html',
  '/js/main.js',
  '/node_modules/monaco-editor/min/',
  '/node_modules/monaco-editor/min/vs/',
  '/node_modules/monaco-editor/min/vs/base',
  '/node_modules/monaco-editor/min/vs/base/worker',
  '/node_modules/monaco-editor/min/vs/base/worker/workerMain.js',
  '/node_modules/monaco-editor/min/vs/basic-languages',
  '/node_modules/monaco-editor/min/vs/basic-languages/bat',
  '/node_modules/monaco-editor/min/vs/basic-languages/bat/bat.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/coffee',
  '/node_modules/monaco-editor/min/vs/basic-languages/coffee/coffee.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/cpp',
  '/node_modules/monaco-editor/min/vs/basic-languages/cpp/cpp.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/csharp',
  '/node_modules/monaco-editor/min/vs/basic-languages/csharp/csharp.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/csp',
  '/node_modules/monaco-editor/min/vs/basic-languages/csp/csp.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/css',
  '/node_modules/monaco-editor/min/vs/basic-languages/css/css.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/dockerfile',
  '/node_modules/monaco-editor/min/vs/basic-languages/dockerfile/dockerfile.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/fsharp',
  '/node_modules/monaco-editor/min/vs/basic-languages/fsharp/fsharp.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/go',
  '/node_modules/monaco-editor/min/vs/basic-languages/go/go.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/handlebars',
  '/node_modules/monaco-editor/min/vs/basic-languages/handlebars/handlebars.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/html',
  '/node_modules/monaco-editor/min/vs/basic-languages/html/html.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/ini',
  '/node_modules/monaco-editor/min/vs/basic-languages/ini/ini.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/java',
  '/node_modules/monaco-editor/min/vs/basic-languages/java/java.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/less',
  '/node_modules/monaco-editor/min/vs/basic-languages/less/less.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/lua',
  '/node_modules/monaco-editor/min/vs/basic-languages/lua/lua.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/markdown',
  '/node_modules/monaco-editor/min/vs/basic-languages/markdown/markdown.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/msdax',
  '/node_modules/monaco-editor/min/vs/basic-languages/msdax/msdax.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/mysql',
  '/node_modules/monaco-editor/min/vs/basic-languages/mysql/mysql.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/objective-c',
  '/node_modules/monaco-editor/min/vs/basic-languages/objective-c/objective-c.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/pgsql',
  '/node_modules/monaco-editor/min/vs/basic-languages/pgsql/pgsql.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/php',
  '/node_modules/monaco-editor/min/vs/basic-languages/php/php.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/postiats',
  '/node_modules/monaco-editor/min/vs/basic-languages/postiats/postiats.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/powershell',
  '/node_modules/monaco-editor/min/vs/basic-languages/powershell/powershell.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/pug',
  '/node_modules/monaco-editor/min/vs/basic-languages/pug/pug.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/python',
  '/node_modules/monaco-editor/min/vs/basic-languages/python/python.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/r',
  '/node_modules/monaco-editor/min/vs/basic-languages/r/r.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/razor',
  '/node_modules/monaco-editor/min/vs/basic-languages/razor/razor.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/redis',
  '/node_modules/monaco-editor/min/vs/basic-languages/redis/redis.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/redshift',
  '/node_modules/monaco-editor/min/vs/basic-languages/redshift/redshift.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/ruby',
  '/node_modules/monaco-editor/min/vs/basic-languages/ruby/ruby.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/rust',
  '/node_modules/monaco-editor/min/vs/basic-languages/rust/rust.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/sb',
  '/node_modules/monaco-editor/min/vs/basic-languages/sb/sb.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/scss',
  '/node_modules/monaco-editor/min/vs/basic-languages/scss/scss.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/solidity',
  '/node_modules/monaco-editor/min/vs/basic-languages/solidity/solidity.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/sql',
  '/node_modules/monaco-editor/min/vs/basic-languages/sql/sql.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/swift',
  '/node_modules/monaco-editor/min/vs/basic-languages/swift/swift.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/vb',
  '/node_modules/monaco-editor/min/vs/basic-languages/vb/vb.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/xml',
  '/node_modules/monaco-editor/min/vs/basic-languages/xml/xml.js',
  '/node_modules/monaco-editor/min/vs/basic-languages/yaml',
  '/node_modules/monaco-editor/min/vs/basic-languages/yaml/yaml.js',
  '/node_modules/monaco-editor/min/vs/editor',
  '/node_modules/monaco-editor/min/vs/editor/contrib',
  '/node_modules/monaco-editor/min/vs/editor/contrib/suggest',
  '/node_modules/monaco-editor/min/vs/editor/contrib/suggest/media',
  '/node_modules/monaco-editor/min/vs/editor/contrib/suggest/media/String_16x.svg',
  '/node_modules/monaco-editor/min/vs/editor/contrib/suggest/media/String_inverse_16x.svg',
  '/node_modules/monaco-editor/min/vs/editor/editor.main.css',
  '/node_modules/monaco-editor/min/vs/editor/editor.main.js',
  '/node_modules/monaco-editor/min/vs/editor/editor.main.nls.de.js',
  '/node_modules/monaco-editor/min/vs/editor/editor.main.nls.es.js',
  '/node_modules/monaco-editor/min/vs/editor/editor.main.nls.fr.js',
  '/node_modules/monaco-editor/min/vs/editor/editor.main.nls.it.js',
  '/node_modules/monaco-editor/min/vs/editor/editor.main.nls.ja.js',
  '/node_modules/monaco-editor/min/vs/editor/editor.main.nls.js',
  '/node_modules/monaco-editor/min/vs/editor/editor.main.nls.ko.js',
  '/node_modules/monaco-editor/min/vs/editor/editor.main.nls.ru.js',
  '/node_modules/monaco-editor/min/vs/editor/editor.main.nls.zh-cn.js',
  '/node_modules/monaco-editor/min/vs/editor/editor.main.nls.zh-tw.js',
  '/node_modules/monaco-editor/min/vs/editor/standalone',
  '/node_modules/monaco-editor/min/vs/editor/standalone/browser',
  '/node_modules/monaco-editor/min/vs/editor/standalone/browser/quickOpen',
  '/node_modules/monaco-editor/min/vs/editor/standalone/browser/quickOpen/symbol-sprite.svg',
  '/node_modules/monaco-editor/min/vs/language',
  '/node_modules/monaco-editor/min/vs/language/css',
  '/node_modules/monaco-editor/min/vs/language/css/cssMode.js',
  '/node_modules/monaco-editor/min/vs/language/css/cssWorker.js',
  '/node_modules/monaco-editor/min/vs/language/html',
  '/node_modules/monaco-editor/min/vs/language/html/htmlMode.js',
  '/node_modules/monaco-editor/min/vs/language/html/htmlWorker.js',
  '/node_modules/monaco-editor/min/vs/language/json',
  '/node_modules/monaco-editor/min/vs/language/json/jsonMode.js',
  '/node_modules/monaco-editor/min/vs/language/json/jsonWorker.js',
  '/node_modules/monaco-editor/min/vs/language/typescript',
  '/node_modules/monaco-editor/min/vs/language/typescript/lib',
  '/node_modules/monaco-editor/min/vs/language/typescript/lib/typescriptServices.js',
  '/node_modules/monaco-editor/min/vs/language/typescript/tsMode.js',
  '/node_modules/monaco-editor/min/vs/language/typescript/tsWorker.js',
  '/node_modules/monaco-editor/min/vs/loader.js',
  '/css/main.css'
];

self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Installing');
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        console.log('[ServiceWorker] Removing old cache', key);
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('[ServiceWorker] cache fetch: ' + event.request.url);
        return response;
      }
      console.log('[ServiceWorker] request fetch: ' + event.request.url);
      return fetch(event.request);
    })
  );
});
