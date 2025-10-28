"use client";
import { useState, useMemo } from "react";
import { NUMBERS, slowFactorial } from "./shared";

const App = () => {
  const [count, setCount] = useState(5);
  const [filterText, setFilterText] = useState("");

  // 🧨 This is the expensive computation
  const factorial = useMemo(() => slowFactorial(count), [count]);

  const filtered = NUMBERS.filter(num => num.toString().includes(filterText));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h3>Memoized</h3>

      <label>
        Enter count (1-10):{" "}
        <input
          type="number"
          value={count}
          onChange={e => setCount(Number(e.target.value))}
          style={{ border: "1px solid gray" }}
        />
      </label>

      <h3>Factorial: {factorial}</h3>

      <hr />

      <label>
        Filter numbers:{" "}
        <input
          type="text"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          style={{ border: "1px solid gray" }}
        />
      </label>

      <ul>
        {filtered.map(num => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
