# Установка Backend
Создаём папку проекта `backend` и переходим в папку проекта
```bash
mkdir backend && cd backend
```
Создаём `package.json`, если ввести `npm init -y` то имя файла для запуска будет по умолчанию `index.js`
```bash
npm init
```
# Установим нодемона
```bash
npm install --save-dev nodemon
```
```bash
npm install nodemon -g
```
Мы можем использовать `nodemon` для запуска скрипта `Node`. Например, если у нас имеется настройка сервера Express в файле `server.js`, мы можем запустить его и наблюдать за изменениями следующим образом:
```bash
nodemon server.js
```
Вы можете передавать аргументы точно так же, как если бы запускали скрипт с помощью Node:
```bash
nodemon server.js 3006
```
Процесс перезапускается каждый раз, когда вы вносите изменение в файл с одним из отслеживаемых по умолчанию расширений (.js, .mjs, .json, .coffee или .litcoffee) в текущем каталоге или подкаталоге.
```bash
// package.json
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js",
    "build": "node server.js"

  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "socket.io": "^2.3.0",
    "truffle-contract": "^4.0.31",
    "web3": "^1.3.0"
  }
}
```

# Установим пакеты глобально, если надо
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
AXIOS
```bash
npm i axios
```
Флаг `--save` предназначен для сохранения имени пакета в файле `package.json` . Флаг `-g` предназначен для глобального хранения этого конкретного пакета, чтобы мы могли использовать его в любом проекте, над которым собираемся работать.
```bash
npm i dotenv
```
Затем мы создаем файл `.env` , в котором мы можем хранить секретный `URI` нашей базы данных `MongoDB` для использования. Мы делаем это, запустив `touch.env` в Терминале. Если у вас еще нет учетной записи базы данных в MongoDB, сначала начните со страницы https://www.mongodb.com/

Пакет `dotenv` экспортирует нашу сохраненную переменную в среду процесса `Node.js`. Пожалуйста, убедитесь, что вы не отправляете файл `.env` при отправке в общедоступные репозитории, чтобы избежать утечки ваших паролей и личных данных.

Screen
```bash
apt install screen -y
```
Запуск screen <НАПРИМЕР НАЗВАНИЕ СЕССИИ> = backend
```bash
screen -S backend
```
Создадим файл `server.js` 
```bash
// получаем модуль Express
const express = require("express");
// создаем приложение
const app = express();
 
// устанавливаем обработчик для маршрута "/"
app.get("/", function(request, response){
 
    response.end("Hello from Express!");
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000);
```
Либо полноценный модуль с роутингом
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
## Для web3 проектов установим Алхимию
```bash
npm install alchemy-sdk
```
```bash
// Setup
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "80ePhmrc20QJbb_XxlY10pUVBDi3vzZ9",
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);

// Get the latest block
const latestBlock = alchemy.core.getBlockNumber();

// Get all outbound transfers for a provided address
alchemy.core
    .getTokenBalances('0x994b342dd87fc825f66e51ffa3ef71ad818b6893')
    .then(console.log);

// Get all the NFTs owned by an address
const nfts = alchemy.nft.getNftsForOwner("0xshah.eth");

// Listen to all new pending transactions
alchemy.ws.on(
    { method: "alchemy_pendingTransactions",
    fromAddress: "0xshah.eth" },
    (res) => console.log(res)
);
```
  
## Установка БД МангоДБ
`  https://youtu.be/Oa0pMn0tvU4`
```bash
npm i --save mongodb
```
```bash
npm i dotenv
```
create `.env`
```bash
DB_URI=
```
Этот скрипт соединяет с БД и считает кол-во `документов` в `коллекции`
```bash
const MongoClient = require("mongodb").MongoClient;
require("dotenv/config");
 
const mongoClient = new MongoClient(process.env.DB_URI);
 
async function run() {
    try {
        await mongoClient.connect();
        console.log("Connection...");
        const db = mongoClient.db("node_app");
        const collection = db.collection("users");
        const count = await collection.countDocuments();
        console.log(`In collection users ${count} documents`);
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
        console.log("Connection closed");
    }
}
run().catch(console.log);
```
Функция добавляет несколько users
```bash
async function run() {
    try {
        await mongoClient.connect();
        console.log("Connection...");
        const db = mongoClient.db("node_app");
        const collection = db.collection("users");
        const _users = [{name: "Bob", age: 35} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
        const result = await collection.insertMany(_users);
        console.log(result);
        console.log(_users);
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
        console.log("Connection closed");
    }
}
```
Найти всех:
```bash
const results = await collection.find().toArray();
console.log(results);
```
Можно по одному или нескольким параметрам 
`const results = await collection.find({name: "Tom", age: 28}).toArray();`  
Получение одного объекта
`const result = await collection.findOne({name: "Tom"});`
