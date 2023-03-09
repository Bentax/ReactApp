## Install React.js on Ubuntu 20.04.
1. Keep the server Up to date
```bash
apt update -y
```
```bash
apt upgrade -y
```
2. Install build-essential
```bash
apt-get install build-essential
```
3. Install required package
```bash
apt install curl -y
```
4 . Install NodeJS and NPM
Add the latest stable release of NodeJS.
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
```
Вам предложат ввести следующую команду
```bash
sudo apt-get update && sudo apt-get install yarn
```
Install NodeJS.
```bash
sudo apt-get install nodejs
```
Install Git
```bash
apt install git
```
Verify the installations.
```bash
node -v
npm -v
```
5. Установить приложение create-react-app помогает настроить все инструменты, необходимые для создания приложений React.
Выполните следующую команду npm, чтобы установить утилиту create-response-app:
```bash
sudo npm -g install create-react-app
```
Проверьте, обновлена ли версия с помощью команды:
```bash
create-react-app --version
```
Процесс загрузки завершен. Теперь вы можете создать React-Application.

Мы даем название приложению «andreyex». Выполните указанную ниже команду, чтобы создать приложение:
```bash
npx create-react-app andreyex
```
```bash
Success! Created andreyex at /root/andreyex
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd andreyex
  npm start
```
Перейдите в папку проекта
```bash
cd andreyex
```
Начните процесс сборки
Запустите процесс сборки с помощью `npm start`.
```bash
npm start
```
Каждый раз для пересборки надо остановить `^C` и запустить заново `npm start`

## Дальнейшая работа

Может понадобится библиотека Ethers
```bash
npm install ethers@5.7.2 --save
```
Есть несколько вариантов как можно обращаться к файлам:
1: / - путь к корневой папке Пример:
```bash
import styles from '/dist/styles/main.min.css';
```
2: './' - путь относительно файла в котором мы находимся. Пример:
```bash
import store from './store.js';
```
3: '../' - выходим из папки в которой находимся, т.е. путь на уровень выше. Пример:
```bash
import store from '../store.js';
```
4: 'react' - путь к папке react в папке node_modules Пример:
```bash
import React from 'react'; 
```
# Команда screen 
Позволяет запустить процесс на сервере и не бояться что он прервется. Процессы, выполняемые внутри screen, не прерываются даже при обрыве соединения с сервером в терминал.
## Основные команды при работе со screen
Установка screen
```bash
apt install screen -y
```
Запуск screen <НАПРИМЕР НАЗВАНИЕ СЕССИИ> = test
```bash
screen -S test
```
Потом запустить `npm run start`

Выход из текущей сессии, не закрывая ее полностью. <br />
Сначала комбинация клавиш `Ctrl+a` и после нажать клавишу `d`<br />
Вывод на экран списка активных сессий
```bash
screen -list
```
Возврат к активной сессии
```bash
screen -r <НАЗВАНИЕ СЕССИИ>
```
Полностью закрыть текущую сессию, без возможности возврата к ней - комбинация клавиш `Ctrl+d` или `exit`

Для роутинга установим в папке проекта:
```bash
npm i -D react-router-dom
```
In React router v6, we have to replace the `Switch` component with `Routes`
Make sure your project is running the latest version by issuing the
```bash
npm install react-router-dom@latest
```
