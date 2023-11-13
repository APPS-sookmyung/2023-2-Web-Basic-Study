// import "./App.css";

import React from "react";

import MyHeader from "./MyHeader";
import Counter from "./Counter";

function App() {
  let name = "주아정";

  /*
  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  const func = () => {
    return "func";
  };

  */

  const number = 5;

  return (
    <div>
      <MyHeader />
      <Counter />
    </div>
  );
}

export default App;
