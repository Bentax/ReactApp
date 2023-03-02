// Если вы хотите перенаправить пользователя на другую страницу вместо рендеринга защищенного содержимого в том же компоненте, 
// вы можете изменить компонент ProtectedPage, чтобы использовать компонент перенаправления React Router. Вот обновленная версия кода:

import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const ProtectedPage = ({ tokenAddress, redirectPath }) => {
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

  if (isAuthorized) {
    return <Redirect to={redirectPath} />;
  } else {
    return <div>Access denied</div>;
  }
};

export default ProtectedPage;

// В этой версии компонента мы импортируем компонент Redirect из React Router и добавляем два новых реквизита: 
// redirectPath и isAuthorized. Свойство redirectPath — это путь к странице, на которую пользователь должен быть перенаправлен, если он авторизован, 
// а isAuthorized — это логическая переменная, которая устанавливается в значение true, когда у пользователя есть требуемый токен ERC в кошельке.
// В функции рендеринга компонента мы проверяем, авторизован ли пользователь. Если они есть, мы используем компонент Redirect, 
// чтобы перенаправить их по указанному пути. Если они не авторизованы, мы просто отображаем сообщение «Отказано в доступе».
// Обратите внимание, что для правильной работы компонента Redirect компонент ProtectedPage должен отображаться внутри компонента Route, 
// который соответствует текущему пути URL. Например:

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/protected">
        <ProtectedPage tokenAddress="0x..." redirectPath="/authorized" />
      </Route>
      <Route path="/authorized">
        <AuthorizedPage />
      </Route>
    </Router>
  );
}

// In this example, we have two Route components: one for the ProtectedPage component (with path="/protected") 
// and one for the page the user should be redirected to if they are authorized (with path="/authorized"). 
// When the user navigates to the "/protected" path, the ProtectedPage component will be rendered inside the first Route component, 
// and the Redirect component will redirect them to the "/authorized" path if they are authorized.

