# TODO App - Tooling и развертывание приложения
Ссылка Vercel - []()

Для этого этапа вам потребуются следующие пакеты:
- eslint
- eslint-config-airbnb
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-react
- eslint-plugin-react-hooks
- babel-eslint
- prettier
- husky
- lint-staged

# Конфиг 

* .prettierrc
* .eslintrc.json
* В настройке lint-staged должна быть сначала проверка eslint и только после этого форматирование через prettier

# Что нужно сделать

1. Установите eslint/prettier, установите все плагины, необходимые для работы airbnb конфига.
2. Добавьте в ваш package.json скрипты
    * lint - проверяет все файлы на ошибки
    * lint:fix - проверяет и исправляет те ошибки, которые может
    * format - форматирует все файлы с помощью prettier
3. Отформатируйте ваш проект и устраните все ошибки
4. Настройке husky + lint-staged
5. Выгрузите свое приложение на Vercel (ex now.sh) - [Инструкция по выгрузке](https://gist.github.com/didolf/48f51b2f891aceff35048334eb3a96c8)
