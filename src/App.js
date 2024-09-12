import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts]=useState([
    {
      name: 'Khoi',
      phone: '0708109245',
      email: 'luukhoi182@gmail.com'
    }
   ])
  const [appointments, setAppoinments]=useState([
    {
      name:'Hop',
      contact:'abc',
      date: '02/08/2024',
      time: '11h30'
    }
  ])
  /*
  Implement functions to add data to
  contacts and appointments
  */
  console.log(contacts)
  function addContact(contact){
    console.log(contact)
    setContacts((prev)=>(
      [
        ...prev,
        {name: contact.name,
         phone: contact.phone,
         email: contact.email
        }
      ]
    ))
  }
  function addAppointment({title, contact, date, time}){
    setAppoinments((prev)=>(
      [
        ...prev,
        {
          name: title,
          contact: contact,
          date: date,
          time: time
        }
      ]
    ))
  }
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} onAdd={addContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointment={appointments} onAdd={addAppointment} contacts={contacts}/>  /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
