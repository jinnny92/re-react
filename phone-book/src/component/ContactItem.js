import React from "react";
import { Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";

const ContactItem = ({ item }) => {
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
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
