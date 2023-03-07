Создаём папку проекта
```bash
mkdir backend
```
Переходим в папку проекта
```bash
cd backend
```
Создаём package.json
```bash
npm init
```
Установим пакет express
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
