# Базовый шаблон проекта на Grunt ver 7.0

Шаблоном для начала работ над проектами

## Перед началом работы

Для работы шаблона необходимо установить `nodejs` (вместе с `npm`)

- [Установка Nodejs](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager "Installing Node.js via package manager")

## Версии

Протестированно с версиями `Node.js - 6.9.2`, `npm - 4.0.5` и `yarn - 0.18.1`


## Установка шаблона

``` sh
$ git clone https://github.com/tsergeytovarov/grunt-project.git project-name
$ cd project-name
$ npm install --global yarn
$ yarn install
```

По окончанию выполнения будут установлены все необходимые пакеты.


### Задачи Grunt

 - `$ grunt` - запуск разработки с локальным сервером
 - `$ grunt build` - сборка проекта
 - `$ grunt lint` - линтинг по готовой сборке


## Общая концепция

- `src/` - каталог для размещения рабочих файлов (html, less, js, изображения)
- `build/` - каталог для размещения готовой верстки
- `design/` - каталог для локального хранения файлов макета.

Вся работа осуществляется в каталоге `src/`.
