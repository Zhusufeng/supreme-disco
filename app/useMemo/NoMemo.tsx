"use client";
import { useState } from "react";
import { NUMBERS, slowFactorial } from "./shared";
import NumberInput from "./NumberInput";
import FilterInput from "./FilterInput";

const NoMemo = () => {
  const [count, setCount] = useState(5);
  const [filterText, setFilterText] = useState("");

  // 🧨 This is the expensive computation
  const factorial = slowFactorial(count);

  const filtered = NUMBERS.filter(num => num.toString().includes(filterText));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h3 style={{ fontWeight: "bold" }}>Non-memoized</h3>

      <NumberInput count={count} setCount={setCount} />

      <h3>Factorial: {factorial}</h3>

      <hr />

      <FilterInput filterText={filterText} setFilterText={setFilterText} />

      <ul>
        {filtered.map(num => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoMemo;
