import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter appointment" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
        <input placeholder="Enter date" value={date} min={getTodayString()} onChange={(e)=>setDate(e.target.value)} type="date"></input>
        <input placeholder="Enter time" value={time} onChange={(e)=>setTime(e.target.value)}></input>
        <ContactPicker contact={contact} contacts={contacts} setContact={(e)=>setContact(e.target.value)} type='time'></ContactPicker>
        <input type="submit"></input>
      </form>
    </>
  );
};
