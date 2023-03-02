// Чтобы внедрить код авторизации для приложения React, которое проверяет наличие определенного токена ERC в кошельке, вы можете выполнить следующие шаги:
// Импортируйте необходимые библиотеки: web3.js, ethereumjs-util и ERC20 ABI.

import Web3 from "web3";
import { toChecksumAddress } from "ethereumjs-util";
import ERC20_ABI from "./erc20abi.json";

// Создайте функцию, которая будет проверять, есть ли у пользователя в кошельке требуемый токен ERC.

const checkTokenBalance = async (tokenAddress, userAddress) => {
  const web3 = new Web3(window.ethereum);
  const tokenContract = new web3.eth.Contract(ERC20_ABI, tokenAddress);
  const userBalance = await tokenContract.methods.balanceOf(userAddress).call();
  return userBalance > 0;
};

// Эта функция принимает два параметра: адрес контракта токена ERC и адрес кошелька пользователя. 
// Он использует библиотеку web3 для взаимодействия с кошельком пользователя и ERC20_ABI для взаимодействия с контрактом токена ERC. 
// Он вызывает метод balanceOf() контракта токена ERC, чтобы получить баланс токена пользователя, и возвращает логическое значение, указывающее, 
// есть ли у пользователя ненулевой баланс.
// Создайте компонент React, который будет отображать защищенную страницу, и используйте функцию checkTokenBalance() для авторизации доступа.

import React, { useEffect, useState } from "react";

const ProtectedPage = ({ tokenAddress }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const authorizeUser = async () => {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const userAddress = toChecksumAddress(accounts[0]);
        const hasToken = await checkTokenBalance(tokenAddress, userAddress);
        setIsAuthorized(hasToken);
      } catch (err) {
        console.error(err);
        setIsAuthorized(false);
      }
    };
    authorizeUser();
  }, [tokenAddress]);

  return isAuthorized ? <div>Protected content goes here</div> : <div>Access denied</div>;
};

export default ProtectedPage;

// Этот компонент принимает один реквизит: адрес контракта токена ERC, который пользователь должен иметь в своем кошельке для доступа к защищенной странице. 
// Он использует хук useEffect для вызова функции authorizeUser() при монтировании компонента. 
// Эта функция запрашивает доступ к кошельку пользователя с помощью метода eth_requestAccounts, 
// получает адрес пользователя и проверяет наличие у него необходимого токена ERC с помощью функции checkTokenBalance(). 
// Если пользователь авторизован, он устанавливает для переменной состояния isAuthorized значение true и отображает защищенный контент. 
// В противном случае он устанавливает для переменной состояния isAuthorized значение false и отображает сообщение «Отказано в доступе».
// Примечание. Этот код предполагает, что пользователь установил MetaMask или другое расширение кошелька Ethereum и дал приложению React 
// разрешение на взаимодействие со своим кошельком. 
// Если у пользователя не установлен кошелек или он не предоставляет разрешения, функция authorizeUser() выдаст ошибку, 
// а для переменной состояния isAuthorized будет установлено значение false.
  



