import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form.style.css";

const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmError, frmDt }) => {
  return (
    <div className="add-new-ticket bg-light">
      <h1 className="text-info text-center">Add new Ticket</h1>
      <br />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmDt.subject}
              onChange={handleOnChange}
            />
            <Form.Text className="text-danger">
              {frmError.subject && "Subject is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmDt.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Col>
            <Form.Control
              as="textarea"
              name="details"
              value={frmDt.details}
              rows="5"
              onChange={handleOnChange}
              required
            />
            <Button type="submit" variant="primary" className="mt-3 w-100 ">
              Login
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

AddTicketForm.PropsTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmError: PropTypes.object.isRequired,
};

export default AddTicketForm;
