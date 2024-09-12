import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle]=useState()
  const [contact, setContact]=useState()
  const [date, setDate]=useState()
  const [time, setTime]=useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    props.onAdd({title, contact, date, time})
    setTitle('')
    setContact('')
    setDate('')
    setTime('')
   
  };
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm title={title} contacts={props.contacts} contact={contact} date={date} time={time} setDate={setDate} setContact={setContact} setTime={setTime} setTitle={setTitle} handleSubmit={handleSubmit}></AppointmentForm>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList object={props.appointment}></TileList>
      </section>
    </div>
  );
};