"use client";
import CustomButton from "../../components/CustomButton";
import Link from "next/link";

export default function Home() {
  const DEMO_COLORS = [
    {
      key: "row-1",
      color: "#ffffff",
      backgroundColor: "#4338ca",
      border: "none",
      mimicText: false,
    },
    {
      key: "row-2",
      color: "#000000",
      backgroundColor: "#ffffff",
      border: "1px solid #a3a3a3",
      mimicText: false,
    },
    {
      key: "row-3",
      color: "#4338ca",
      backgroundColor: "#ffffff",
      border: "none",
      mimicText: false,
    },
    {
      key: "row-4",
      color: "#4338ca",
      backgroundColor: "#ffffff",
      border: "none",
      mimicText: true,
    },
    {
      key: "row-5",
      color: "#000000",
      backgroundColor: "#ffffff",
      border: "none",
      mimicText: true,
    },
    {
      key: "row-6",
      color: "#ffffff",
      backgroundColor: "#dc2626",
      border: "none",
      mimicText: false,
    },
  ];

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
          <div>Welcome to the Button Demo!</div>

          <div
            style={{
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {DEMO_COLORS.map(demoColor => {
              const { key, color, backgroundColor, border, mimicText } =
                demoColor;
              return (
                <div
                  key={key}
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                  }}
                >
                  <CustomButton
                    size="xs"
                    text="Button CTA"
                    color={color}
                    backgroundColor={backgroundColor}
                    border={border}
                    mimicText={mimicText}
                  />
                  <CustomButton
                    size="sm"
                    text="Button CTA"
                    color={color}
                    backgroundColor={backgroundColor}
                    icon="&#9734;"
                    iconPlacement="right"
                    border={border}
                    mimicText={mimicText}
                  />
                  <CustomButton
                    size="md"
                    text="Button CTA"
                    color={color}
                    backgroundColor={backgroundColor}
                    icon="&#9734;"
                    iconPlacement="left"
                    border={border}
                    mimicText={mimicText}
                  />
                  <CustomButton
                    size="lg"
                    text="Button CTA"
                    color={color}
                    backgroundColor={backgroundColor}
                    border={border}
                    mimicText={mimicText}
                  />
                  <CustomButton
                    size="lg"
                    color={color}
                    backgroundColor={backgroundColor}
                    icon="&#9734;"
                    iconPlacement="left"
                    border={border}
                    mimicText={mimicText}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <Link href="/">Back Home</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
