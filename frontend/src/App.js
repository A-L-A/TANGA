import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Dashboard</h1>
        <p>{data}</p>
        <div className="dashboard">
          <div className="metric">Total Trees: 0</div>
          <div className="metric">CO2 Offset: 0 tons</div>
          <div className="metric">Verified Projects: 0</div>
        </div>
      </header>
    </div>
  );
}

export default App;
