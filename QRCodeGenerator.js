import React, { useState } from "react";
import QRCode from "qrcode.react";

export default function QRCodeGenerator() {
  const [url, setUrl] = useState("");

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <div>
      <h1>Generate QR Code</h1>
      <input type="text" value={url} onChange={handleInputChange} />
      <p></p>
      {url && <QRCode value={url} />}
    </div>
  );
}
