"use client";
import { useState } from "react";
import { slowFactorial } from "./shared";
import Calculator from "./Calculator";

const NoMemo = () => {
  const [count, setCount] = useState(5);
  const [filterText, setFilterText] = useState("");

  // 🧨 This is the expensive computation
  const factorial = slowFactorial(count);

  return (
    <Calculator
      title="Non-memoized"
      count={count}
      setCount={setCount}
      filterText={filterText}
      setFilterText={setFilterText}
      factorial={factorial}
    />
  );
};

export default NoMemo;
