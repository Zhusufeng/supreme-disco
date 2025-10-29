"use client";
import { NUMBERS } from "./shared";

interface CalculatorProps {
  title: string;
  count: number;
  setCount: (val: number) => void;
  filterText: string;
  setFilterText: (val: string) => void;
  factorial: number;
}

const Calculator = (props: CalculatorProps) => {
  const { title, count, setCount, filterText, setFilterText, factorial } =
    props;

  const filtered = NUMBERS.filter(num => num.toString().includes(filterText));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h3 style={{ fontWeight: "bold" }}>{title}</h3>

      <label>
        Enter number (1-10):{" "}
        <input
          type="number"
          min={1}
          max={10}
          value={count}
          onChange={e => setCount(Number(e.target.value))}
          style={{ border: "1px solid gray", padding: "2px" }}
        />
      </label>

      <h3>Factorial: {factorial}</h3>

      <hr />

      <label>
        Enter number to filter:{" "}
        <input
          type="text"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          style={{ border: "1px solid gray", padding: "2px", width: "50px" }}
        />
      </label>

      <h3>Filtered Numbers: </h3>
      <ul>
        {filtered.map(num => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Calculator;
