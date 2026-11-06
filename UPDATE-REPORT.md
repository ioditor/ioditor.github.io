Обновление iO ecosystem

Исходники: C:/Users/Murta/Documents/Codex/2026-10-30/referenced-chatgpt-conversation-this-is-an-6/outputs/io-ecosystem
Архив iO-ecosystem-migration-ready-v2.zip идентичен исходной папке. Все 12 EN/RU страниц и CSS совпали с опубликованным сайтом после нормализации пробелов.

Убраны Linux и Coming soon из загрузок, оставлен Windows. Структура, CSS, изображения и относительные пути сохранены.

Общая ссылка: https://github.com/ioditor/ioditor.github.io/releases/tag/io
GitHub API подтвердил публичный релиз и четыре Windows ZIP для iO ditor 0.4.1, Journal 0.3.1, Paper 0.4B и Zero 0.2.13.2. Обе страницы Downloads используют эту ссылку.
Настройка: RELEASES_URL в releases.config.json; синхронизация: node scripts/update-releases.cjs.

Проверено 19 HTML и 416 внутренних ссылок/ресурсов/якорей: ошибок нет. Compatibility redirects Zero/Paper проверены. Статическая сборка не требуется. Визуальные скриншоты не снимались; CSS сохранён побайтно. Ничего не опубликовано и git push не выполнялся.

## Структура опубликованного эталона

На всех страницах шапка и подвал: Zero / iO ditor / Journal / Paper / Downloads и переключатель EN/RU. Главная: umbrella iO, схема пути материала, четыре карточки приложений. Продуктовые страницы содержат текущие описания, иллюстрации и секции загрузки. Downloads: таблица Application / Platform / Status; в исходном эталоне Windows и Coming soon, у iO ditor также Linux. Заголовки секций зафиксированы ниже.

### /

Tools for writing, thinking and publishing. → Zero → iO ditor → Journal → Paper

### /zero/

Thoughts find their form. → A page with more possibilities. → Seven ways to begin with a page. → Text with a character of its own → Continue in Zero.

### /ioditor/

Write. Read. Connect. → One workspace. Different ways to think. → Work across your devices → Your workspace is made from ordinary files. → Built around your files → Continue in iO ditor.

### /journal/

Every day has its own story. → Notice. Write. Do. → Your notes. Your space. → Continue in Journal.

### /paper/

From Markdown to publication. → Markdown → Layout → Export → The tools behind the page. → Continue in Paper.

### /downloads/

Downloads

### /ru/

Инструменты для письма, мышления и публикации. → Zero → iO ditor → Journal → Paper

### /ru/zero/

Мысли обретают свою форму. → Лист, на котором можно больше. → Семь способов начать с листа. → Текст со своим характером → Продолжите в Zero.

### /ru/ioditor/

Пишите. Читайте. Связывайте. → Одно рабочее пространство. Разные способы думать. → Работа между устройствами → Ваше рабочее пространство состоит из обычных файлов. → Инструменты вокруг ваших файлов → Продолжите в iO ditor.

### /ru/journal/

Каждый день — своя история. → Замечать. Записывать. Делать. → Ваши записи. Ваше пространство. → Продолжите в Journal.

### /ru/paper/

От Markdown к публикации. → Markdown → Макет → Экспорт → Инструменты для вашей публикации. → Продолжите в Paper.

### /ru/downloads/

Загрузки
