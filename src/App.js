import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import ForumList from "./Components/Forum/ForumList";

function App() {
  const dummieRequest = () => {
    const dummieData = {
      nickname: "nickname",
      title: "First forum",
      forumBody: "Test purposes",
    };
    axios
      .post(
        "http://m6s3hmeie7hxjdhe4lwpb4jf7xwpjftm6ezbz5mfpiwj4w2fshj35uad.onion:81/api/forum",
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
      <header className="App-header"></header>
      <ForumList />
    </div>
  );
}

export default App;
