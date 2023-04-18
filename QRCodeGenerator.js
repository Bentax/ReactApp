import React, { useState } from "react";
import QRCode from "qrcode.react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App1() {
  const [url, setUrl] = useState("");

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <div className="container p-5 my-5 border">
      <h1>Generate QR Code</h1>
      <input type="text" value={url} onChange={handleInputChange} />
      <p></p>
      {url && <QRCode value={url} />}
    </div>
  );
}
