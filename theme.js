// Manual theme switch: one attribute on <html>, style.css does the rest.
// ponytail: localStorage only; no sync across tabs, no reset to "system" (clear the key for that).
try {
  var saved = localStorage.getItem('theme');
  if (saved) document.documentElement.dataset.theme = saved;
} catch (e) {}
addEventListener('click', function (e) {
  if (!e.target.closest('#theme')) return;
  var html = document.documentElement;
  var current = html.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  html.dataset.theme = current === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('theme', html.dataset.theme); } catch (e) {}
});
