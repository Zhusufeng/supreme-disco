import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main style={{ display: "flex", padding: "20px" }}>
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div>
            <h1>Welcome to Lisa&apos;s demos!</h1>
          </div>

          <div>
            <h2>Component</h2>
          </div>
          <div>
            <ol>
              <li>
                - <Link href="/button">Button Challenge</Link>
              </li>
            </ol>
          </div>

          <div>
            <h2>React</h2>
          </div>
          <div>
            <ol>
              <li>
                - <Link href="/useMemo">useMemo Demo</Link>
              </li>
            </ol>
          </div>

          <div>
            <h2>JavaScript</h2>
          </div>
          <div>
            <ol>
              <li>
                -{" "}
                <Link href="/concurrency">Serial vs Concurrent Fetch Demo</Link>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}
