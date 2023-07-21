import "./App.css";
import React from "react";

function App() {
  function useIncrement(addAmount) {
    const [count, setCount] = React.useState(0);

    let increase = () => {
      setCount((previousState) => addAmount + previousState);
    };

    return [count, increase];
  }

  const [count1, setCount1] = useIncrement(1);
  const [count2, setCount2] = useIncrement(2);
  return (
    <div>
      <h1>Count1 : {count1}</h1>
      <button onClick={setCount1}>Add 1</button>
      <h1>Count2 : {count2}</h1>
      <button onClick={setCount2}> Add 2</button>
    </div>
  );
}

export default App;
