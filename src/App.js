import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const URL = "https://api.api-ninjas.com/v1/facts";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "tM/6wxBaSOQGsSquBDWq7w==Yg2Pb9H39eUpPGXl",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return <div className="App">{data[0] && data[0].fact}</div>;
}

export default App;
