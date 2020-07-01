import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const dummieRequest = () => {
    const dummieData = {
      nickname: "nickname",
      title: "First forum",
      forumBody: "Test purposes",
    };
    axios
      .post(
        "http://7ylxxzc3btuqec3iam7qgmokj6qljyaqwyvksa27t2e2jhauufa744id.onion/",
        dummieData,
        {
          // receive two    parameter endpoint url ,form data
        }
      )
      .then((res) => {
        console.log("dummie response", res);
      });
  };
  useEffect(() => {
    dummieRequest();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
