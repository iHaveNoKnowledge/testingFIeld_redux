import React from "react";
import Album from "./components/testTemplate";

import CounterDisplay from "./components/CounterDisplay";
import CounterButton from "./components/CounterButton";
import store from "./store";

const App = () => {
  return (
    <>
      <div>
        <CounterDisplay />
        <CounterButton />
        {/* <Album /> */}
      </div>
    </>
  );
};

export default App;
