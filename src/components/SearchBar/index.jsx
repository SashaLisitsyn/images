import './styles.css';

const SearchBar = ({ query, setQuery, onSearch }) => {
  const handleInputClick = (event) => {
    setQuery(event.target.value);
  };

  const handleButtonClick = () => {
    onSearch();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick(event);
    }
  };

  return (
    <div className="search-bar input-group input-group-lg">
      <input
        value={query}
        onChange={handleInputClick}
        onKeyDown={handleKeyPress}
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
      />
      <button
        onClick={handleButtonClick}
        className="input-group-text"
        id="inputGroup-sizing-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
