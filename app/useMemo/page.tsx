"use client";
import NoMemo from "./NoMemo";
import Memo from "./Memo";

const UseMemoDemo = () => {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2>Memoization Example</h2>
      <div>
        This is an example use case for React&apos;s <code>useMemo</code>. We
        have 2 factorial calculators: the left is non-memoized; the right is
        memoized. Whenever either calculator calculates the factorial of a
        number, it is purposefully slow. However, when you enter a number to
        filter, the non-memoized calculator will calculate the factorial again,
        which will lag the UX whereas the memoized calculator will use the
        memoized value, and the UX will be fast.
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <NoMemo />
        <Memo />
      </div>
    </main>
  );
};

export default UseMemoDemo;
