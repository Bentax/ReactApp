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
Установим пакет `express`
```bash
npm i -g express body-parser concurrently
```
Создадим файл `server.js` 
```bash
const express = require('express');
const app = express();
const port = 8000;

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
const mainRoutes = require('./main');
module.exports = function (app) {
  mainRoutes(app);
}
```

`main.js`
```bash
module.exports = function (app) {
  app.get('/', (req, res) => {
    res.end('main wow)');
  });
}
```

В браузере по адресу `localhost:8000` появится надпись:
`main wow)`

First, you would want to know which process is using port 3000
```bash
sudo lsof -i :3000
```
this will list all PID listening on this port, once you have the PID you can terminate it with the following:
```bash
kill -9 <PID>
```
where you replace <PID> by the process ID, or the list of process IDs, the previous command output.
