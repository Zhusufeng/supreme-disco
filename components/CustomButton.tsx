interface CustomButtonProps {
  size: "xs" | "sm" | "md" | "lg";
  text?: string;
  color?: string;
  backgroundColor?: string;
  icon?: string;
  iconPlacement?: "left" | "right";
  border?: string;
  mimicText?: boolean;
  onClick?: () => void;
}

const SIZING = {
  xs: {
    padding: "10px",
    gap: "2px",
    fontSize: "12px",
    height: "16px",
  },
  sm: {
    padding: "12px",
    gap: "4px",
    fontSize: "14px",
    height: "20px",
  },
  md: {
    padding: "14px",
    gap: "6px",
    fontSize: "16px",
    height: "24px",
  },
  lg: {
    padding: "18px",
    gap: "8px",
    fontSize: "18px",
    height: "28px",
  },
};

export default function CustomButton({
  size = "md",
  text,
  color = "#000000",
  backgroundColor = "#ffffff",
  icon,
  iconPlacement = "left",
  border = "none",
  mimicText = false,
  onClick = () => console.log("You clicked a button"),
}: CustomButtonProps) {
  return (
    <button
      style={{
        backgroundColor,
        border,
        borderRadius: "3px",
        padding: mimicText ? 0 : SIZING[size].padding,
      }}
      onClick={onClick}
    >
      <div
        style={{
          display: "flex",
          flexDirection: iconPlacement === "left" ? "row" : "row-reverse",
          gap: SIZING[size].gap,
          color,
          fontSize: SIZING[size].fontSize,
          height: SIZING[size].height,
        }}
      >
        {text ? <div>{text}</div> : null}
        {icon ? <div>{icon}</div> : null}
      </div>
    </button>
  );
}
