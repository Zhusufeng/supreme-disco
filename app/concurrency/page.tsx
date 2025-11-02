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

      <p>
        This is a demo contrasting serial versus concurrent fetching. When you
        click on a button, we will mock getting data from 3 endpoints. Each
        endpoint is mocked to return a result after 2 seconds.
      </p>
      <p>
        When you click &quot;Fetch Serially&quot;, the first request will be
        called; it will return a result. Then the second request will be called;
        it will return a result. Then the third request will be called; it will
        return a result. Since it waits for the previous call to resolve before
        it makes another, this serial process will take about 6 seconds.
      </p>
      <p>
        When you click &quot;Fetch Concurrently&quot;, all requests will be
        fetched starting at the same time. Thus, this concurrent process will
        take about 2 seconds.
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
