import SearchBar from "../components/SearchBar";

import "../assets/css/css-pages/Stocks.css";

function Stocks() {
  const handleSearch = (query: string) => {
    console.log("Search Query:", query);
  };

  return (
    <main>
      <div id="search-bar">
      <SearchBar onSearch={handleSearch} />
      </div>
    </main>
  );
}

export default Stocks;
