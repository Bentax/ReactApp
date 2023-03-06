import React, { Component } from 'react';
import ERC20_ABI from "./ERC20_ABI.json";
import { ethers } from "ethers";

class Metamask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }

  async connectToMetamask() {
    // ... previous code to connect to Metamask and get wallet data
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const filter = {
      address: this.state.selectedAddress,
    };
    provider.getLogs(filter).then((logs) => {
      const transactions = logs.map((log) => {
        return {
          from: ethers.utils.getAddress(log.topics[1]),
          to: ethers.utils.getAddress(log.topics[2]),
          value: ethers.utils.formatEther(log.data),
        };
      });
      this.setState({ transactions });
    });
  }

  async sendDaiTo(to, amountInEther) {
    // ... previous code to send tokens
    this.setState({ transactions: [] });
  }

  renderMetamask() {
    // ... previous code to render Metamask component
    return (
      <div>
        {/* Display transactions */}
        <h2>Transactions</h2>
        {this.state.transactions.map((tx, index) => {
          return (
            <div key={index}>
              <p>From: {tx.from}</p>
              <p>To: {tx.to}</p>
              <p>Value: {tx.value}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Metamask;
