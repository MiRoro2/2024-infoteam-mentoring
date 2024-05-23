import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const URL = "https://api.api-ninjas.com/v1/airports";
  const [search, setSearch] = useState(null);

  const inputRef = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!search) return;
    fetch(`${URL}?country=${search}`, {
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
  }, [search]);

  return (
    <div className="App">
      <input placeholder="Country name" type="text" ref={inputRef} />
      <button
        onClick={() => {
          setSearch(inputRef.current.value ?? "");
        }}
      >
        GO
      </button>
      {data && data.map((item) => <div>{item.name}</div>)}
    </div>
  );
}

export default App;
