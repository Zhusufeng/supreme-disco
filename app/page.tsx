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
          <div>Welcome to Lisa&apos;s Challenges!</div>

          <ol>
            <li>
              -{" "}
              <Link href="/button" style={{ textDecoration: "underline" }}>
                Button Challenge
              </Link>
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
