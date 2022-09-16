import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = () => {
  return (
    <div>
      <Row>
        <Col lg={2}>
          <img
            width={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
          />
        </Col>
        <Col lg={10}>
          <div>이름</div>
          <div>01000000000</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
