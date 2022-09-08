import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb.comp";
import SearchForm from "../../components/search-form/SearchForm.comp";

const TicketLists = () => {
  const [str, setStr] = useState("");
  // useEffect(() => {}, [str]);
  const handleOnChange = (e) => {
    setStr(e.target.value);
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="TicketLists" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-end">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketLists;
