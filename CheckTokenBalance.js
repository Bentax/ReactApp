
import Web3 from "web3";
import { toChecksumAddress } from "ethereumjs-util";
import ERC20_ABI from "./erc20abi.json";

const checkTokenBalance = async (tokenAddress, userAddress) => {
  const web3 = new Web3(window.ethereum);
  const tokenContract = new web3.eth.Contract(ERC20_ABI, tokenAddress);
  const userBalance = await tokenContract.methods.balanceOf(userAddress).call();
  return userBalance > 0;
};

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
