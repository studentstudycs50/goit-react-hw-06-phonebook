import { createReducer } from "@reduxjs/toolkit";
import { addNewContact, deleteContact, setFilter, getContacts } from "../actions/contactActions";

const initialState = {
    contacts: [],
    filter: "", 
}

const onAddNewContact = (state, action) => ({
    ...state,
    contacts: [...state.contacts, action.payload]
})

const onDeleteContact = (state, action) => ({
    ...state,
    contacts: [...state.contacts.filter(item => item.id !== action.payload)]
})

const onSetFilter = (state, action) => ({
    ...state,
    filter: action.payload,
})

const onGetContacts = (state, action) => ({
    ...state,
    contacts: [...action.payload]
})

const contactReducer = createReducer ({ ...initialState }, {
  
    [addNewContact]: onAddNewContact,
    [deleteContact]: onDeleteContact,
    [setFilter]: onSetFilter,
    [getContacts]: onGetContacts,

})

export default contactReducer;

//======================
//import {ADDNEWCONTACT, DELETENEWCONTACT, GETCONTACTS, SETFILTER } from "../constans/contactConstans";
// const initialState = {
//     contacts: [],
//     filter: "", 
// }

// const contactReducer = (state = { ...initialState }, action) => {
//     switch (action.type) {
//         case ADDNEWCONTACT: 
//             return{...state, contacts: [...state.contacts, action.payload]};
       
//         case DELETENEWCONTACT:    
//             return {
//                 ...state,
//                 contacts: [
//                 ...state.contacts.filter((contact) => contact.id !== action.payload),]
//             }
//              case SETFILTER:    
//             return {
//                 ...state, filter: action.payload,          
//             }
//             case GETCONTACTS:    
//             return {
//                 ...state,
//                 contacts: [...action.payload],   
//             }
//         default:
//             return state;
//     }
// };

// export default contactReducer;


