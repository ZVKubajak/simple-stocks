import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import { SearchBarProps } from "../utils/types/clientTypes";
import "../assets/css/css-layout/SearchBar.css";

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [input, setInput] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(input.trim());
    // console.log(input.trim());
  };

  return (
    <Row className="justify-content-center mt-4">
      <Col xs="3">
        <Form onSubmit={handleSubmit} className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            value={input}
            onChange={handleInput}
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
};

export default SearchBar;
