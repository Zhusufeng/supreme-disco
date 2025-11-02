import { FetchType } from "./shared";

interface FetchDisplayProps {
  data: string[];
  loading: boolean;
  duration: number;
  type: FetchType;
  fetchData: () => void;
}

const FetchDisplay = ({
  data,
  loading,
  duration,
  type,
  fetchData,
}: FetchDisplayProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        onClick={fetchData}
        disabled={loading}
        style={{
          border: "1px solid #000",
          borderRadius: "3px",
          padding: "5px",
        }}
      >
        {loading ? "Fetching..." : `Fetch ${type}ly`}
      </button>

      <h3>Results:</h3>
      <ul>
        {data.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {duration ? <div>Total Time: {duration}s</div> : null}
    </div>
  );
};

export default FetchDisplay;
