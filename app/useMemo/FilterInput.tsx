interface FilterInputProps {
  filterText: string;
  setFilterText: (val: string) => void;
}

const FilterInput = (props: FilterInputProps) => {
  const { filterText, setFilterText } = props;

  return (
    <label>
      Enter number to filter:{" "}
      <input
        type="text"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        style={{ border: "1px solid gray" }}
      />
    </label>
  );
};

export default FilterInput;
