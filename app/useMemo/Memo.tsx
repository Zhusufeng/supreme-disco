"use client";
import { useMemo, useState } from "react";
import { slowFactorial } from "./shared";
import Calculator from "./Calculator";

const Memo = () => {
  const [count, setCount] = useState(5);
  const [filterText, setFilterText] = useState("");

  // useMemo memoizes calculated values
  const factorial = useMemo(() => slowFactorial(count), [count]);

  return (
    <Calculator
      title="Memoized"
      count={count}
      setCount={setCount}
      filterText={filterText}
      setFilterText={setFilterText}
      factorial={factorial}
    />
  );
};

export default Memo;
