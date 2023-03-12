Создаём папку проекта `backend`
```bash
mkdir backend
```
Переходим в папку проекта
```bash
cd backend
```
Создаём `package.json`
```bash
npm init -y
```
Установим нодемона
```bash
npm install --save-dev nodemon
```
Установим пакеты глобально, если надо
```bash
npm i -g express body-parser concurrently
```
Или неглобально
```bash
npm i express body-parser concurrently
```
Web3
```bash
npm install web3
```
CORS
```bash
npm i cors
```
Screen
```bash
apt install screen -y
```
Запуск screen <НАПРИМЕР НАЗВАНИЕ СЕССИИ> = test
```bash
screen -S backend
```
Создадим файл `server.js` 
```bash
//backend/server.js
const express = require('express');
const app = express();
const port = 8000;

require('./routes')(app);

app.listen(port, ()=>{
  console.log('work on '+port);
});
```
Запускаем приложение
```bash
node server.js
```
Создаём папку `routes` и в ней файлы:
`index.js`
```bash
//routes/index.js
const mainRoutes = require('./main');

module.exports = function (app) {
  mainRoutes(app);
}
```

`main.js`
```bash
//routes/main
module.exports = function (app) {
  app.get('/', (req, res) => {
    res.end('Hello World!');
  });
}
```

В браузере по адресу `localhost:8000` появится надпись:
'Hello World!`

First, you would want to know which process is using port 3000
```bash
sudo lsof -i :3000
```
```bash
sudo lsof -i :8000
```
this will list all PID listening on this port, once you have the PID you can terminate it with the following:
```bash
kill -9 <PID>
```
where you replace <PID> by the process ID, or the list of process IDs, the previous command output.
# Если вы хотите установить их все сразу, запустите следующий код в терминале:
```bash
npm install nodemon truffle-contract dotenv mongodb shortid express web3 --save && npm install truffle -g
```
Флаг `--save` предназначен для сохранения имени пакета в файле `package.json` . Флаг `-g` предназначен для глобального хранения этого конкретного пакета, чтобы мы могли использовать его в любом проекте, над которым собираемся работать.

Затем мы создаем файл `.env` , в котором мы можем хранить секретный URI нашей базы данных `MongoDB` для использования. Мы делаем это, запустив touch.env в Терминале. Если у вас еще нет учетной записи базы данных в `MongoDB`, сначала начните со страницы `MongoDB` .

Пакет `dotenv` экспортирует нашу сохраненную переменную в среду процесса `Node.js`. Пожалуйста, убедитесь, что вы не отправляете файл `.env` при отправке в общедоступные репозитории, чтобы избежать утечки ваших паролей и личных данных.
