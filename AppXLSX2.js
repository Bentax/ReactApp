import React, { useState } from "react";
import * as XLSX from "xlsx";
import QRCode from "qrcode.react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const handleFile = (event) => {
    const file = event.target.files[0];
    const fileType = file.type;
    if (
      fileType === "application/vnd.ms-excel" ||
      fileType ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const workbook = XLSX.read(e.target.result, { type: "binary" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        setData(rows);
        setSelectedRows([]);
      };
      reader.readAsBinaryString(file);
      setError("");
    } else {
      setData([]);
      setError(
        "Invalid file type. Please select an Excel file (.xls or .xlsx)"
      );
    }
  };

  const handleRowSelect = (rowIndex) => {
    if (selectedRows.includes(rowIndex)) {
      setSelectedRows(selectedRows.filter((row) => row !== rowIndex));
    } else {
      setSelectedRows([...selectedRows, rowIndex]);
    }
  };

  const generateQrCode = () => {
    const qrData = selectedRows.map((rowIndex) => data[rowIndex]).join("\n");
    return <QRCode value={qrData} />;
  };

  return (
    <div className="container p-5 my-5">
      <h1>CucinaSalvaApp</h1>
      <div className="row">
        <div className="col-12">
          <input
            type="file"
            className="form-control mb-3"
            accept=".xls,.xlsx"
            onChange={handleFile}
          />
          {error && <div className="alert alert-danger">{error}</div>}
          {data.length > 0 && (
            <div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    {data[0] &&
                      data[0].map((cell, i) => <th key={i}>{cell}</th>)}
                    <th>QR Code</th>
                  </tr>
                </thead>
                <tbody>
                  {data.slice(1).map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                      <td>
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => handleRowSelect(i + 2)}
                        >
                          {selectedRows.includes(i + 2) ? "Deselect" : "Select"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {selectedRows.length > 0 && (
                <div className="my-3">
                  <h5>Selected Rows:</h5>
                  <pre>
                    {selectedRows
                      .map((rowIndex) => JSON.stringify(data[rowIndex - 1]))
                      .join("\n")}
                  </pre>
                  <h5>QR Code:</h5>
                  <div style={{ maxWidth: "300px", margin: "auto" }}>
                    {generateQrCode()}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
