import { useState } from "react";
import React from 'react';

function App() {

  const [num, setNum] = useState(0); // when we want to show the changes in the UI, we need to use useState hook
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>Count: {num}</h2>
      <button onClick={() => setNum(num + 1)}>Increment</button>
      <button onClick={() => setNum(num - 1)}>Decrement</button>
      
    </div>
  );
}

export default App;
