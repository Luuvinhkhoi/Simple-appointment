import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
     <input placeholder="Enter name" type="text" value={name} onChange={(e)=> setName(e.target.value)} required ></input>
     <input placeholder="Enter phone" type="tel" value={phone} onChange={(e)=> setPhone(e.target.value)} required></input>
     <input placeholder="Enter email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required></input>
     <input type="Submit"></input>
    </form>
  );
};

