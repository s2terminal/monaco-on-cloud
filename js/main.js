require.config({ paths: { 'vs': 'node_modules/monaco-editor/min/vs' }});
require(['vs/editor/editor.main'], function() {
  var editor = monaco.editor.create(document.getElementById('container'), {
    value: [
      'function x() {',
      '\tconsole.log("Hello world!");',
      '}'
    ].join('\n'),
    theme: 'vs-dark',
    language: 'javascript'
  });
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
    console.log('ServiceWorker registration successful');
  });
}
