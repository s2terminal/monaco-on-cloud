require.config({ paths: { 'vs': 'node_modules/monaco-editor/min/vs' }});
require(['vs/editor/editor.main'], function() {
  const storageKey = "monaco-on-cloud-saved";
  const editor = monaco.editor.create(document.getElementById('editor'), {
    value: localStorage.getItem(storageKey),
    theme: 'vs-dark',
    language: 'javascript'
  });
  if (editor.getValue() == "") {
    editor.setValue(
    [
      'function main() {',
      '  console.log("Hello world!");',
      '}',
      ''
    ].join('\n'));
  }

  document.getElementById("save").disabled = true;
  document.getElementById("save").onclick = function() {
    save();
  };
  document.getElementById("load").onclick = function() {
    load();
  };
  document.addEventListener("keydown", function(e) {
    // ctrl + s
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      e.preventDefault();
      save();
    }
  });
  editor.onDidChangeModelContent(function(e) {
    document.getElementById("save").disabled = false;
  });

  function save() {
    localStorage.setItem(storageKey, editor.getValue());
    document.getElementById("save").disabled = true;
  }
  function load() {
    if (window.confirm("Are you sure you want to load data?")) {
      editor.setValue(localStorage.getItem(storageKey));
      document.getElementById("save").disabled = true;
    }
  }

});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
