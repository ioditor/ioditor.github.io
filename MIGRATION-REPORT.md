# MIGRATION REPORT v2 — 30 октября 2026

Подготовлено локально. Push, публикация, создание репозиториев и GitHub Releases не выполнялись.

## Результат проверок

- Source: последняя локальная сборка iO-ecosystem-material-forms; compatibility folders, legacy assets и workflow byte-for-byte сохранены относительно migration-ready v1.
- 12 canonical страниц, 24 проверки Edge (375×1000 и 1440×1000): HTTP 200, нет горизонтального overflow, все изображения загружены, включая иллюстрацию One material, different forms на EN/RU. Проверка выполнена автоматически по DOM; ручной визуальный осмотр не выполнялся.
- 19 HTML, 350 локальных ссылок: файлы и якоря существуют. Точные canonical и EN/RU/x-default пары проверены для всех 12 страниц. Sitemap XML содержит ровно 12 canonical адресов; robots ссылается на него. 404 сохранена с навигацией без redirect.
- 6 legacy HTML сохранены; directory и index.html обслуживаются одним файлом. Все 6 redirect scripts исполнены из HTML в изолированном JS runtime: конечный адрес, query и hash корректны. Canonical, meta refresh, ссылка и noscript сохранены. Конечные страницы не перенаправляются.
- Файлы compatibility Zero/Paper сравнены byte-for-byte с предыдущим migration-ready пакетом. Отдельные legacy ZIP скопированы без изменений. Неизвестные исторические assets сохранять наложением, без удаления.
- Workflow YAML разобран YAML parser; main push и upload path '.' проверены. Один workflow, .nojekyll присутствует. Workflow на GitHub не запускался.
- Zero booklet section отсутствует в canonical HTML; новые SVG и hero сохранены. Hugo build/config отсутствует. Pricing/trial/license marketing copy не добавлялась. ASSET-NOTICES сохранён.
- Manifest содержит null versions/URLs и coming-soon. Статические кнопки остаются Coming soon / Скоро. В публичном HTML нет ссылок на неподтверждённый io-releases и нет releases/latest. Будущий адрес документирован только для сопровождающих.
- Releases template не содержит бинарников или application source. Политика требует продуктовые теги, точные URLs и SHA256SUMS.txt; хеши релизов не выдумывались.

## Ограничения

Браузерная навигация legacy localhost → внешний ioditor.github.io не завершилась во всех 12 попытках (directory/index.html). Проверка назначения выполнена отдельно исполнением исходных scripts; live переходы, no-JS meta refresh и приоритет project Pages необходимо проверить после отдельной публикации. Это ограничение также было в v1.

Существование io-releases и опубликованные релизы не проверялись; никаких live ссылок не включено. Полнота неизвестных исторических asset URLs не гарантируется. Journal legacy URL не подтверждён. Старые Zero/Paper repos оставлять работающими. Реальный Pages deployment и rollback требуют отдельного решения пользователя.

## Перед push

Следовать MIGRATION.md и PRE-PUSH-CHECKLIST.md. Сохранить safety tag, artifact и настройки Pages; заменить root в чистом клоне, проверить staged diff и создать локальный commit. STOP перед push. После будущего root rollout проверить сайт, затем отдельно наложить legacy packages. RELEASES-SETUP.md описывает подключение общего hub позднее.
