import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { PropTypes } from "prop-types";

const SearchForm = ({ handleOnChange, str }) => {
  console.log(str);
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column ms="2">
            Search:
          </Form.Label>
          <Col ms="10">
            <Form.Control
              name="searchStr"
              placeholder="Search..."
              onChange={handleOnChange}
              value={str}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};

export default SearchForm;
