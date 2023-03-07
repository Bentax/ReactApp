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
npm init
```
Установим пакет `express`
```bash
npm i express
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
