import { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

import "../assets/css/css-components/SearchBar.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <Row className="justify-content-center mt-4">
      <Col xs="auto">
        <Form onSubmit={handleSearch} className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div id="submit-button">
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
}

export default SearchBar;
