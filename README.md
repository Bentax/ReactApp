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
sudo apt-get update && sudo apt-get
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
create-react-app andreyex
```
Перейдите в папку проекта
```bash
cd my-project
```
## Установите стили Tailwind CSS

Установите tailwindcss через npm, а затем запустите команду init, чтобы сгенерировать файл `tailwind.config.js`.
```bash
npm install -D tailwindcss
npx tailwindcss init
```
Настройте пути к шаблону
Добавьте пути ко всем файлам вашего шаблона в файл `tailwind.config.js`.
```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Добавьте директивы @tailwind для каждого из слоев Tailwind в ваш файл `./src/index.css`.
`index.css app.css`
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Начните процесс сборки
Запустите процесс сборки с помощью `npm run start`.
```bash
npm run start
```
Начните использовать служебные классы Tailwind для оформления своего контента.
App.js
```
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```
Каждый раз для пересборки надо остановить node ^C и запустить заново `npm run start`
