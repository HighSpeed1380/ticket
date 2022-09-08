import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddTicketForm from "../../components/add-ticket-form/AddTicketForm.comp";
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb.comp";
import shortText from "../../utils/validation";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  details: "",
};
const initialFrmError = {
  subject: false,
  issueDate: false,
  details: false,
};

const AddTicket = () => {
  const [frmDat, setFrmData] = useState(initialFrmDt);
  const [frmError, setFrmError] = useState(initialFrmError);

  useEffect(() => {}, [frmDat, frmError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmDat,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmError(initialFrmError);
    const isSubjectValid = await shortText(frmDat.subject);

    setFrmError({
      ...initialFrmError,
      subject: !isSubjectValid,
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmError={frmError}
            frmDt={frmDat}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;
