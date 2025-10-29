interface NumberInputProps {
  count: number;
  setCount: (val: number) => void;
}

const NumberInput = (props: NumberInputProps) => {
  const { count, setCount } = props;

  return (
    <label>
      Enter count (1-10):{" "}
      <input
        type="number"
        value={count}
        onChange={e => setCount(Number(e.target.value))}
        style={{ border: "1px solid gray" }}
      />
    </label>
  );
};

export default NumberInput;
