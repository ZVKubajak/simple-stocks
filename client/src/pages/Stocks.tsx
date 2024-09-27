import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";

import "../assets/css/css-pages/Stocks.css";

const Stocks = () => {
  const handleSearch = (query: string) => {
    console.log("Search Query:", query);
  };

  return (
    <main>
      <Navigation />
      <div id="search-bar">
      <SearchBar onSearch={handleSearch} />
      </div>
    </main>
  );
}

export default Stocks;
