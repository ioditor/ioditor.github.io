// Add only confirmed release details. Empty values intentionally keep downloads unavailable.
window.PAPER_CONFIG = {
  version: '',
  releasesUrl: '', // https://github.com/OWNER/REPOSITORY/releases
  downloadUrl: '', // Verified HTTPS URL of the Windows portable ZIP.
  screenshots: { en: 'assets/paper-screenshot-en.png', ru: 'assets/paper-screenshot-ru.png' },
  screenshotAlt: {
    en: 'Paper in English: book structure, Markdown source, PDF preview and A5 page settings in Split view.',
    ru: 'Paper на русском: структура книги, исходный Markdown, предпросмотр PDF и настройки страницы A5 в режиме Split.'
  }
};
