import "./styles.css";

interface ISortInputProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number | readonly string[];
}

export default function SortInput({ onChange, value }: ISortInputProps) {
  return (
    <div className="sort-input-container">
      <label htmlFor="sort-input">Sort By:</label>
      <select
        name="sort input"
        id="sort-input"
        onChange={onChange}
        value={value}
      >
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
        <option value="release">release</option>
      </select>
    </div>
  );
}
