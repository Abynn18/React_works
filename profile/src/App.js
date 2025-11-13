import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState("Welcome, Guest!");

  const handleLogin = () => {
    setMessage("Welcome, Alice!");
  };

  useEffect(() => {
    if (message === "Welcome, Alice!") {
      console.log("User changed to Alice");
    }
  }, [message]);

  return (
    <div>
      <h2>{message}</h2>
      <div>
        <button onClick={handleLogin}>Login as Alice</button>
      </div>
    </div>
  );
}


export default App;