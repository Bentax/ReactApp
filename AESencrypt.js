import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function App() {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');

  const handleEncrypt = () => {
    const encrypted = CryptoJS.AES.encrypt(message, key).toString();
    setEncryptedMessage(encrypted);
    setDecryptedMessage(''); // Clear the decrypted message
  };

  const handleDecrypt = () => {
    try {
      const decrypted = CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);
      setDecryptedMessage(decrypted);
    } catch (error) {
      console.log(error);
      setDecryptedMessage('Error: Invalid key or encrypted message');
    }
  };

  return (
    <div>
      <h1>AES Encryption and Decryption</h1>
      <label>Message:</label>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <label>Key:</label>
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <button onClick={handleEncrypt}>Encrypt</button>
      <button onClick={handleDecrypt}>Decrypt</button>
      <p>Encrypted Message: {encryptedMessage}</p>
      <p>Decrypted Message: {decryptedMessage}</p>
    </div>
  );
}

export default App;
