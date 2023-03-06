async sendDaiTo(to, amountInEther) {
  // Validate Ethereum wallet address
  if (!/^0x[a-fA-F0-9]{40}$/.test(to)) {
    throw new Error('Invalid Ethereum address');
  }
  
  // Rest of the function code...
}
