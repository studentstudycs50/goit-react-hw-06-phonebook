import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addNewContact = createAction('@contacts/addNewContact',
   (data) => ({
      payload: {
     ...data, id: uuidv4()
 }})
);
export const deleteContact = createAction('@contacts/deleteContact',
  //(payload) => payload
);
export const setFilter = createAction('@contacts/setFilter');
export const getContacts = createAction('@contacts/getContacts');

// import { v4 as uuidv4 } from "uuid";
// import { ADDNEWCONTACT, DELETENEWCONTACT, GETCONTACTS, SETFILTER } from "../constans/contactConstans";

// export const addNewContact = (data) => {
//     return {
//         type: ADDNEWCONTACT,
//         payload:{ ...data, id: uuidv4()}
//     }
// }

// export const deleteContact = (id) => {
//     return {
//         type: DELETENEWCONTACT,
//         payload: id
//     }
// }

// export const setFilter = (value) => {
//     return {
//         type: SETFILTER,
//         payload: value,
//     }
// }

// export const getContacts = (data) => {
//     return {
//         type: GETCONTACTS,
//         payload: data,
//     }
// }