import React, { useState } from "react";
import ContFormStyled from "../ContactForm/ContactFormStyled";
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group'
import Notification from '../Notification/Notification'
import { addNewContact } from "../../redux/actions/contactActions";


const initialState = {
  name: "",
  number: "",
};

const ContactForm = ({contacts, addContact}) => {
  const [state, setState] = useState({...initialState})
  const [notification, setNotification] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const  onHandleChange = (event) => {
    const { name, value } = event.target;
    setState((prev) =>({ ...prev, [name]: value }));
  };

const showNotificationAlert = (notification) => {
   setNotification(notification);
   setShowNotification(true);
   setTimeout(() => {
     setShowNotification(false);
   }, 2000)
    setTimeout(() => {
     setNotification("");
   }, 2500)
  }

  
  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (contacts.contacts.some((item) => item.name === state.name)) {
      showNotificationAlert(`${state.name} is already in contacts`);
      setState({ ...initialState });
      return;
    }
    if (contacts.contacts.some((item) => item.number === state.number)) {
      showNotificationAlert(`Contact with number ${state.number} is already in contacts`);
      setState({ ...initialState });
      return;
    }
    if (!state.name.length) {
      showNotificationAlert("Please, enter a name");
      setState({ ...initialState });
      return;
    }
    if (!state.number.length) {
      showNotificationAlert("Please, enter a number");
      setState({ ...initialState });
      return;
    }

    addContact(state);

    setState({ ...initialState });
  };
  
  
      return (
        <ContFormStyled>
                 
        <CSSTransition in={showNotification} timeout={250} classNames="notification" unmountOnExit>
          <Notification notification={notification}/>
          </CSSTransition>
          
          <form className="contForm" onSubmit={onHandleSubmit}>
            <label className="title-form">
              Name
              <input type="text" value={state.name} name="name" onChange={onHandleChange} className="input-form" />
            </label>
            <label className="title-form">
              Number
              <input type="text" value={state.number} name="number" onChange={onHandleChange} className="input-form" />
            </label>
            <button type="submit" className="button">
              Add contact
            </button>
          </form>
        </ContFormStyled>
      );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (data) => {
      dispatch(addNewContact(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);