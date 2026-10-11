# iOditor Website v0.3 — Git + Documentation

Русский сайт Hugo + Hextra на основе архива v0.2. Адрес: https://ioditor.github.io/.
ZIP содержит только сайт, документацию и зависимости сайта.

## Что добавлено

Краткое оглавление и страницы о Markdown Visual/Split/Source, файлах и вкладках,
PDF и аннотациях, формулах, рисунках, Thought Map, поиске, импорте/экспорте,
печати и локальном чате. Описания сверены с локальными исходниками и встроенным
руководством MD Editor 0.3.20. Приложение при подготовке не запускалось.
Ограничения и неподтверждённые возможности отмечены отдельно.

Hextra 0.13.0, FlexSearch, оформление, места скриншотов и Pages workflow сохранены.
Расширен .gitignore. Исходники приложения в результат не включены.

## Запуск и сборка

Откройте PowerShell в ioditor-site рядом с hugo.yaml:

```powershell
hugo version
hugo server --disableFastRender
```

Откройте http://localhost:1313/. Остановка: Ctrl+C.
Проверено с Hugo 0.167.0 Extended. После установки Hugo Extended откройте новый
PowerShell, если команда не найдена. Тема и поисковая библиотека включены в архив.

```powershell
hugo --gc --minify --panicOnWarning
```

## Git

В локальной папке результата уже создан отдельный репозиторий, ветка main,
origin https://github.com/ioditor/ioditor.github.io.git.
Коммит не создан: имя и email автора Git не настроены. Глобальные настройки не менялись.
Отправка на GitHub не выполнялась.

ZIP не включает .git. После распаковки настройте новую копию:

```powershell
powershell -ExecutionPolicy Bypass -File .\setup-git.ps1
git branch --show-current
git remote -v
```

Скрипт не создаёт коммит и не публикует сайт. Если существующие main или origin
не совпадают с ожидаемыми, он останавливается, сохраняя вашу настройку.
Для обновления существующего сайта переносите содержимое ioditor-site, включая скрытые
.github и .gitignore, в корень его репозитория. Сохраняйте его .git и свои изменения.

## Коммит и git push — после решения о публикации

Задайте свои реальные имя и email локально в папке сайта:

```powershell
git config user.name "Ваше имя"
git config user.email "Ваш email или GitHub noreply"
git add .
git diff --cached --stat
git diff --cached --check
git commit -m "Prepare iOditor website v0.3 and Russian documentation"
```

Перед коммитом просмотрите список файлов. Нужны content, assets, static, layouts,
data, i18n, archetypes, licenses, _vendor, настройки Hugo/Go и .github.
public, resources, временные файлы и исходники приложения не нужны.

В репозитории организации выберите Settings → Pages → Build and deployment →
Source → GitHub Actions. Эта удалённая настройка здесь не менялась.

**Следующая команда отправляет сайт и запускает автоматическую публикацию:**

```powershell
git push -u origin main
```

Выполняйте её только после явного решения публиковать. Авторизуйтесь своей
учётной записью с правами записи в репозиторий организации. После отправки
проверьте build/deploy на вкладке Actions. Если удалённая ветка уже содержит
коммиты, сначала сверьте истории; не используйте force push.

Workflow .github/workflows/pages.yaml запускается при push в main и вручную.
Hugo Extended 0.167.0, Go 1.25.7, checkout@v7, setup-go@v7, configure-pages@v6,
upload-pages-artifact@v5 и deploy-pages@v5. Deploy имеет pages:write и id-token:write,
среду github-pages. Реальный workflow не запускался; локальная сборка не проверяет
права организации и настройки удалённого Pages.

Справка: [GitHub Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages),
[Hugo на GitHub Pages](https://gohugo.io/host-and-deploy/deploy-to-github-pages/).

## Редактирование

Оглавление: content/docs/_index.md. Обзор: content/docs/features.md.
Основа и пределы проверки: content/docs/verification.md.
Редакторский реестр: DOCUMENTATION-SOURCES.md. Новые страницы связывайте через
relref и проверяйте сборку. Версия сайта не равна версии приложения.
На странице загрузки добавляйте только реальные ссылки и подтверждённые требования.

Скриншоты: собственные изображения в static/images/screenshots/, src/alt в
data/screenshots.yaml. Пустое src показывает подписанное место.

## Лицензии и проверки

Hextra — MIT (licenses/HEXTRA-LICENSE.txt), FlexSearch — Apache-2.0
(assets/vendor/FLEXSEARCH-LICENSE.txt). Это не лицензии приложения.
Результаты сборки и проверки ссылок — BUILD-CHECK.md.
