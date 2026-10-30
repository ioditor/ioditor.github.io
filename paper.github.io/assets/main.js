(() => {
  'use strict';
  const base = new URL('../', document.currentScript.src);
  const config = window.PAPER_CONFIG || {};
  const descriptions = {
    en: 'Compose books, articles and documentation in Paper. Design pages, manage images and export to PDF, EPUB 3.3, HTML and Markdown.',
    ru: 'Создавайте книги, статьи и документацию в Paper. Настраивайте страницы и изображения, экспортируйте в PDF, EPUB 3.3, HTML и Markdown.'
  };
  const titles = { en: 'Paper — From Markdown to publication.', ru: 'Paper — От Markdown к публикации.' };
  let lang = document.body.dataset.entryLang || 'en';
  // Explicit language paths override storage; the root remembers the last selection.
  if (!/\/(en|ru)\/(?:index\.html)?$/.test(location.pathname)) {
    try { const saved = localStorage.getItem('paper-language'); if (saved === 'en' || saved === 'ru') lang = saved; } catch (_) {}
  }
  function applyLanguage(next, announce = false) {
    lang = next;
    document.documentElement.lang = lang;
    document.title = titles[lang];
    document.querySelectorAll('[data-en][data-ru]').forEach(node => {
      const value = node.dataset[lang];
      node.replaceChildren(...value.split('<br>').flatMap((part, i) => i ? [document.createElement('br'), document.createTextNode(part)] : [document.createTextNode(part)]));
    });
    document.querySelectorAll('[data-label-en]').forEach(node => node.setAttribute('aria-label', node.dataset[lang === 'ru' ? 'labelRu' : 'labelEn']));
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    document.querySelector('meta[name="description"]').content = descriptions[lang];
    document.querySelector('meta[property="og:description"]').content = descriptions[lang];
    document.querySelector('meta[property="og:title"]').content = titles[lang];
    document.querySelector('meta[property="og:locale"]').content = lang === 'ru' ? 'ru_RU' : 'en_US';
    const canonical = document.querySelector('link[rel="canonical"]');
    canonical.href = canonical.href.replace(/\/(en|ru)\/$/, '/' + lang + '/');
    document.querySelector('meta[property="og:url"]').content = canonical.href;
    document.getElementById('paper-screenshot').alt = config.screenshotAlt?.[lang] || '';
    const screenshot = config.screenshots?.[lang] || config.screenshot;
    if (screenshot) {
      const img = document.getElementById('paper-screenshot');
      const url = new URL(screenshot, base).href;
      if (img.src !== url) img.src = url;
    }
    if (announce) document.getElementById('language-status').textContent = lang === 'ru' ? 'Выбран русский язык.' : 'English selected.';
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
    const next = button.dataset.lang;
    try { localStorage.setItem('paper-language', next); } catch (_) {}
    // Preserve the selected language on refresh even when storage is blocked.
    if (location.protocol !== 'file:') {
      try { history.replaceState(null, '', new URL(next + '/' + location.hash, base)); } catch (_) {}
    }
    applyLanguage(next, true);
  }));
  function https(value) { try { return new URL(value).protocol === 'https:'; } catch (_) { return false; } }
  const hasRelease = https(config.releasesUrl) && new URL(config.releasesUrl).hostname === 'github.com' && /^\/[^/]+\/[^/]+\/releases(?:\/|$)/.test(new URL(config.releasesUrl).pathname);
  if (config.version) document.getElementById('release-version').textContent = config.version;
  if (hasRelease) {
    const link = document.getElementById('releases-link'); link.href = config.releasesUrl; link.hidden = false;
    document.getElementById('release-unavailable').hidden = true;
    document.getElementById('release-note').hidden = true;
    if (https(config.downloadUrl) && config.version) { const zip = document.getElementById('download-link'); zip.href = config.downloadUrl; zip.hidden = false; }
  }
  if ((config.screenshots || config.screenshot) && config.screenshotAlt?.en && config.screenshotAlt?.ru) {
    const img = document.getElementById('paper-screenshot');
    img.addEventListener('load', () => {
      img.hidden = false;
      document.getElementById('screenshot-placeholder').hidden = true;
      const caption = document.querySelector('figcaption span');
      caption.dataset.en = 'Paper · Application screenshot'; caption.dataset.ru = 'Paper · Скриншот приложения';
      caption.textContent = caption.dataset[lang];
    });
    img.addEventListener('error', () => {
      img.hidden = true;
      document.getElementById('screenshot-placeholder').hidden = false;
      const caption = document.querySelector('figcaption span');
      caption.dataset.en = 'Screenshot unavailable. Please reload the page.';
      caption.dataset.ru = 'Скриншот недоступен. Обновите страницу.';
      caption.textContent = caption.dataset[lang];
    });
  }
  applyLanguage(lang);
})();
