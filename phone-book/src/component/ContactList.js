import React from "react";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";

const ContactList = () => {
  return (
    <div>
      <SearchBox />
      <ContactItem />
    </div>
  );
};

export default ContactList;
