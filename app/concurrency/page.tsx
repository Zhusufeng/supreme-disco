"use client";
import { useState } from "react";

// Fake fetch that resolves after a delay
const fakeFetch = (endpoint: string, delay: number): Promise<string> => {
  console.log(`Fetching ${endpoint}...`);
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(`✅ Finished ${endpoint}`);
      resolve(`Data from ${endpoint}`);
    }, delay)
  );
};

const App = () => {
  const [data, setData] = useState<string[]>([]);
  const [serialLoading, setSerialLoading] = useState(false);
  const [concurrentLoading, setConcurrentLoading] = useState(false);

  const fetchSerially = async () => {
    setSerialLoading(true);
    setData([]);

    const start = performance.now();

    const res1 = await fakeFetch("endpoint-1", 2000);
    const res2 = await fakeFetch("endpoint-2", 2000);
    const res3 = await fakeFetch("endpoint-3", 2000);

    const end = performance.now();

    setData([res1, res2, res3]);
    setSerialLoading(false);

    console.log(`⏱ Total time (serial): ${(end - start) / 1000}s`);
  };

  const fetchConcurrently = async () => {
    setConcurrentLoading(true);
    setData([]);

    const start = performance.now();

    const results = await Promise.all([
      fakeFetch("endpoint-1", 2000),
      fakeFetch("endpoint-2", 2000),
      fakeFetch("endpoint-3", 2000),
    ]);

    const end = performance.now();

    setData(results);
    setConcurrentLoading(false);

    console.log(`⏱ Total time (serial): ${(end - start) / 1000}s`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      <h2 style={{ fontWeight: "bold" }}>Serial vs Concurrent Fetch Demo</h2>

      <p>This is a demo contrasting serial versus concurrent fetching.</p>
      <p>
        When you click &quot;Fetch Serially&quot;, one request will be fetched
        one at a time. The next request will be started after the previous
        finished.
      </p>
      <p>
        When you click &quot;Fetch Concurrently&quot;, all requests will be
        fetched at the same time.{" "}
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            onClick={fetchSerially}
            disabled={serialLoading}
            style={{
              border: "1px solid #000",
              borderRadius: "3px",
              padding: "5px",
            }}
          >
            {serialLoading ? "Fetching..." : "Fetch Serially"}
          </button>

          <h3>Results:</h3>
          <ul>
            {data.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            onClick={fetchConcurrently}
            disabled={serialLoading}
            style={{
              border: "1px solid #000",
              borderRadius: "3px",
              padding: "5px",
            }}
          >
            {concurrentLoading ? "Fetching..." : "Fetch Concurrently"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
