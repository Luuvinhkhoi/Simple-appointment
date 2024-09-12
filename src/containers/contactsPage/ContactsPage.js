import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName]=useState('');
  const [phone, setPhone]=useState('');
  const [email, setEmail]=useState('');
  const [duplicate, setDuplicate]=useState(false)
  useEffect(()=>{
    props.contacts.map((item)=>{
      console.log(name)
      console.log(item.name)
      if(item.name===name){
          alert('Your name has already been exist in contact')
          setDuplicate(true)
      } else{
          setDuplicate(false)
      }
    })
  },[props.contact, name, duplicate])
  const handleSubmit = (e) => {
    e.preventDefault()
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    console.log("Form submitted with values: ", { name, phone, email });
    if (!duplicate){
      props.onAdd({name, phone, email})
      setName('')
      setEmail('')
      setPhone('')
    }
  };
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  
  
  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit={handleSubmit} email={email} name={name} phone={phone} setName={setName} setPhone={setPhone} setEmail={setEmail}></ContactForm>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList object={props.contacts}></TileList>
      </section>
    </div>
  );
};
