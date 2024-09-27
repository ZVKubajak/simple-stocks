import { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

import "../assets/css/css-components/SearchBar.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <Form onSubmit={handleSearch}>
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-sm-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="dark" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
