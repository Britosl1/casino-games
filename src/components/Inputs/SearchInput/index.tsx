import "./styles.css";

interface ISearchInputProps {
  value: string | number | readonly string[] | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ value, onChange }: ISearchInputProps) {
  return (
    <div className="search-input-container">
      <label htmlFor="search-input">Search By:</label>
      <div className="input-container">
        <input
          id="search-input"
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
