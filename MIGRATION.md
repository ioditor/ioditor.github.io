# Миграция iO v2 — 30 октября 2026

Локальная pre-push сборка.

## Source of truth

Последняя папка `io-ecosystem` из сборки One material, different forms; compatibility сохранена из предыдущего migration-ready пакета.

Source ZIP SHA256: `dfe99f4c0cf641a77470a41ff4dff3b39ed6f75b53076be90c04c7e7606afdef`.

## Точная замена root перед push (PowerShell)

Сначала сохранить Pages settings и предыдущий опубликованный artifact. Команды ниже — инструкция; в пользовательском репозитории они не выполнялись. Работать в новом чистом клоне, а не в папке с несохранённой работой.

```powershell
git clone https://github.com/ioditor/ioditor.github.io.git ioditor-pages-prepush
Set-Location ioditor-pages-prepush
git status --short
# STOP if not clean. If the safety tag exists, choose a new unique name.
git tag pre-io-ecosystem-migration
git switch -c io-ecosystem-migration-v2
# Removes tracked files only, preserving .git and the safety tag.
git rm -r -- .
$siteSource = 'C:\path\to\outputs\io-ecosystem'
Get-ChildItem -LiteralPath $siteSource -Force | Copy-Item -Destination . -Recurse -Force
git status
git diff --stat
git diff --cached --stat
# Optional preview; stop with Ctrl+C after testing.
python -m http.server 8000 --bind 127.0.0.1
# Confirm .github/workflows/pages.yml uploads path '.' and branch main is correct.
git add --all
git diff --cached --check
git diff --cached --stat
git commit -m "Prepare iO ecosystem migration v2"
git status
# STOP. Do not push in this task.
```

Заменить siteSource на абсолютный путь к подготовленной папке. Не копировать ZIP или releases template в root. Если remote использует другую default branch, согласовать `pages.yml` до commit. Единственный workflow загружает root `.`; Hugo не требуется. После отдельного решения о публикации проверить Settings → Pages → GitHub Actions. Push в main запускает публикацию.

Новый root проверяется первым. Старые Zero/Paper project Pages до этого не менять. Затем отдельно наложить legacy ZIP без удаления старых файлов; root compatibility folders могут уступать приоритет project Pages.

До push откатить подготовку можно переключением на safety tag в отдельной ветке (`git switch -c restore-pre-migration pre-io-ecosystem-migration`). Для локальной migration branch допустим reset к safety tag только после сохранения нужной работы; он удаляет изменения. После публикации предпочтителен `git revert <migration-commit>`, затем отдельное одобрение push. Восстановить прежние Pages settings при необходимости. Старые Zero/Paper repos не удалять.

## URL layout и переходы

| Старый URL | Новый URL |
|---|---|
| / | / — экосистема; iO ditor доступен на /ioditor/ |
| /ru/ | /ru/ — экосистема; редактор на /ru/ioditor/ |
| /zero.github.io/ | /zero/ |
| /zero.github.io/en/ | /zero/ |
| /zero.github.io/ru/ | /ru/zero/ |
| /paper.github.io/ | /paper/ |
| /paper.github.io/en/ | /paper/ |
| /paper.github.io/ru/ | /ru/paper/ |

В каждой строке legacy также обслуживается index.html. Paper prefix подтверждён canonical в исходных HTML. Zero prefix подтверждён предоставленным исходником и контекстом. Канонические страницы:

- https://ioditor.github.io/
- https://ioditor.github.io/ru/
- https://ioditor.github.io/zero/
- https://ioditor.github.io/ru/zero/
- https://ioditor.github.io/ioditor/
- https://ioditor.github.io/ru/ioditor/
- https://ioditor.github.io/journal/
- https://ioditor.github.io/ru/journal/
- https://ioditor.github.io/paper/
- https://ioditor.github.io/ru/paper/
- https://ioditor.github.io/downloads/
- https://ioditor.github.io/ru/downloads/

Journal: unresolved. README содержит только шаблон USERNAME/REPOSITORY, config.js — ссылку на iO ditor, а не адрес Journal. Публичный legacy URL не подтверждён. Пакет Journal не создан.

## Смена смысла корня и якоря

Весь корень не перенаправляется. В навигации и карточках обеих главных есть iO ditor. Пустые совместимые якоря ведут к началу содержимого главной: это сохранение адресуемости, а не восстановление старого раздела. #main сохраняет новый смысл. Полный список извлечённых старых IDs:

- /#main: semantic change; existing ecosystem anchor retained.
- /#hero-title: compatibility anchor on ecosystem home; use /ioditor/#hero-title for product content.
- /#workspace-title: compatibility anchor on ecosystem home; use /ioditor/#workspace-title for product content.
- /#structure-title: compatibility anchor on ecosystem home; use /ioditor/ for product content.
- /#devices-title: compatibility anchor on ecosystem home; use /ioditor/#devices-title for product content.
- /#local-title: compatibility anchor on ecosystem home; use /ioditor/#local-title for product content.
- /#file-tools-title: compatibility anchor on ecosystem home; use /ioditor/#file-tools-title for product content.
- /#explore: compatibility anchor on ecosystem home; use /ioditor/ for product content.
- /#explore-title: compatibility anchor on ecosystem home; use /ioditor/ for product content.
- /#download: compatibility anchor on ecosystem home; use /ioditor/#download for product content.
- /#download-title: compatibility anchor on ecosystem home; use /ioditor/ for product content.
- /ru/#main: semantic change; existing ecosystem anchor retained.
- /ru/#hero-title: compatibility anchor on ecosystem home; use /ru/ioditor/#hero-title for product content.
- /ru/#workspace-title: compatibility anchor on ecosystem home; use /ru/ioditor/#workspace-title for product content.
- /ru/#structure-title: compatibility anchor on ecosystem home; use /ru/ioditor/ for product content.
- /ru/#devices-title: compatibility anchor on ecosystem home; use /ru/ioditor/#devices-title for product content.
- /ru/#local-title: compatibility anchor on ecosystem home; use /ru/ioditor/#local-title for product content.
- /ru/#file-tools-title: compatibility anchor on ecosystem home; use /ru/ioditor/#file-tools-title for product content.
- /ru/#explore: compatibility anchor on ecosystem home; use /ru/ioditor/ for product content.
- /ru/#explore-title: compatibility anchor on ecosystem home; use /ru/ioditor/ for product content.
- /ru/#download: compatibility anchor on ecosystem home; use /ru/ioditor/#download for product content.
- /ru/#download-title: compatibility anchor on ecosystem home; use /ru/ioditor/ for product content.

Paper #introduction и #workflow сохранены как пустые якоря у начала содержимого. Остальные hash сохраняются буквально, неизвестные hash не получают выдуманного смысла.

## Метод перехода

Статический HTML содержит canonical на конечный URL, JS location.replace с location.search и location.hash, meta refresh и обычную ссылку с noscript-пояснением. Это не HTTP 301: GitHub Pages не предоставляет серверный 301 через такой файл. Без JS meta refresh и ссылка ведут на основной URL без динамического query/hash. Конечные канонические страницы не перенаправляются, циклов нет.

## Старые файлы

В root compatibility directories и отдельных пакетах сохранены byte-for-byte 44 доступных файла Zero и 7 Paper из исходников, с исходными относительными путями. Включены assets: PDF, PNG, .zero, шрифты и другие доступные файлы. Новые assets/zero и assets/paper продолжают обслуживать новые страницы.

Старые project Pages могут иметь приоритет над папками корневого сайта. Поэтому root compatibility directories не заменяют отдельную миграцию project repos. Пакеты legacy-zero-redirect и legacy-paper-redirect накладываются на действующую публикационную папку БЕЗ удаления остальных файлов. Сохранять старые workflows и каталоги; неизвестные исторические файлы нельзя считать покрытыми этим архивом. Старые Pages оставлять работающими до завершения наблюдения за ссылками.

## Откат

Если root сломан, revert миграционный commit или восстановить сохранённый commit/tag вместе с прежним workflow и повторно запустить Pages. При смене механизма публикации вернуть сохранённые настройки Pages. Старые project Pages остаются доступны. Если их HTML уже заменены, восстановить предыдущий project commit/artifact. Не удалять legacy assets при откате.

## Checklist после развёртывания

- [ ] Все 12 canonical URLs отвечают 200, EN/RU пары точные.
- [ ] Root показывает экосистему и заметную ссылку на iO ditor.
- [ ] Legacy root/en/ru и index.html сохраняют ?test=1#features при включённом JS.
- [ ] PDF/.zero/PNG/WOFF2 по старым путям доступны, MIME и содержимое верны.
- [ ] robots и sitemap доступны; 404 неизвестного пути показывает навигацию без редиректа.
- [ ] Состояние реальных project Pages проверено отдельно от локальной сборки.
- [ ] Сохранены backup artifact, commit/tag и настройки Pages.

## Общие релизы

См. RELEASES-SETUP.md и data/downloads.json. Будущий target — `https://github.com/ioditor/io-releases`, не проверен и не создан.
