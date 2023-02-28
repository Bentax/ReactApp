import React, { Component } from 'react';
import { ethers } from "ethers";
import { JsonRpcProvider } from "ethers/providers";

class Metamask extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async connectToMetamask() {
    const provider = new JsonRpcProvider("https://goerli.infura.io/v3/9aea9f86abdb452c813400f0ef5338d7");
    //const provider = new ethers.providers.Web3Provider("goerli")
    const accounts = await provider.send("eth_requestAccounts", []);
    this.setState({ selectedAddress: accounts[0] })
  }
  
    renderMetamask() {
    if (!this.state.selectedAddress) {
      return (
        <button onClick={() => this.connectToMetamask()}>Connect to Metamask</button>
      )
    } else {
      return (
        <p>Welcome {this.state.selectedAddress}</p>
      );
    }
  }

  render() {
    return(
      <div>
      {this.renderMetamask()}
      </div>
    )
  }
}

export default Metamask;
