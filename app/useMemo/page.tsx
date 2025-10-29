"use client";
import NoMemo from "./NoMemo";
import Memo from "./Memo";

const UseMemoDemo = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      <h2 style={{ fontWeight: "bold" }}>Memoization Example</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <p>
          This is an example use case for React&apos;s <code>useMemo</code>. We
          have 2 factorial calculators: the left is non-memoized; the right is
          memoized.
        </p>
        <p>
          Whenever either calculator calculates the factorial, it is
          purposefully slow.
        </p>
        <p>
          However, when you enter a number to filter, the non-memoized
          calculator lags because it has to calculate the factorial again. The
          memoized calculator will be fast because it uses the memoized
          factorial; it does not need to calculate it again.
        </p>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <NoMemo />
        <Memo />
      </div>
    </main>
  );
};

export default UseMemoDemo;
