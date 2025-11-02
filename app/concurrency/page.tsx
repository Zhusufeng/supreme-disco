import Serial from "./Serial";
import Concurrent from "./Concurrent";

const ConcurrencyExample = () => {
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
        When you click &quot;Fetch Serially&quot;, the first request will be
        fetched. When that request has finished, the next request will be
        started and so on.
      </p>
      <p>
        When you click &quot;Fetch Concurrently&quot;, all requests will be
        fetched starting at the same time.{" "}
      </p>
      <p>
        You will see that the concurrent fetch finishes in a shorter amount of
        time than the serial fetch.
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <Serial />
        <Concurrent />
      </div>
    </div>
  );
};

export default ConcurrencyExample;
