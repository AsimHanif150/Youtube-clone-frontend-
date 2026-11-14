import React, { useState, useEffect } from "react";

function App() {
  // Step 1: useState to store user input
  const [name, setName] = useState("");

  // Step 2: useEffect to react whenever name changes
  useEffect(() => {
    if (name !== "") {
      console.log(`Hello, ${name}! You just typed this.`);
    }
  }, [name]); // Dependency: run effect whenever 'name' changes

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Type your name:</h1>

      {/* Input updates state */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <h2>Your name is: {name}</h2>
    </div>
  );
}

export default App;
