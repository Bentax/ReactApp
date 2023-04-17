import React, { useState } from "react";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

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

  return (
    <div className="container p-5 my-5 bg-primary text-white">
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
            <table className="table table-striped">
              <thead>
                <tr>
                  {data[0] && data[0].map((cell, i) => <th key={i}>{cell}</th>)}
                </tr>
              </thead>
              <tbody>
                {data.slice(1).map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
