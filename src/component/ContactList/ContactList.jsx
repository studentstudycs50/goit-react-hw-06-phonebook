import React, {useEffect} from "react";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactListStyled from "../ContactList/ContactListStyled";
import { connect } from "react-redux";
import { getContacts } from "../../redux/actions/contactActions";


const ContactList = ({ contacts, filter, getContacts }) => {
  useEffect(() => {
    if (localStorage.getItem("contacts")) {
      getContacts(JSON.parse(localStorage.getItem("contacts")));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  
  return (
    <ContactListStyled>
      <TransitionGroup component="ul" className="contact-list">
        {contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((contact) => (
            <CSSTransition
              key={contact.id}
              timeout={250}
              classNames="my-contact-list-item"
            >
              <ContactListItem contact={contact} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </ContactListStyled>
  );
};

const mapStateToProps = (state) => {
  
  return {
    
    contacts: state.contacts.contacts.filter((item) =>
      item.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
    ),
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getContacts: (data) => {
      dispatch(getContacts(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContactById: PropTypes.func,
}