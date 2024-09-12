import React from "react";

export const ContactPicker = (props) => {
  return (
    <>
      <select onChange={props.setContact} >
        <option value={''}>No Contact Selected</option>
        {props.contacts.map((item, index)=>{
          console.log(item)
          return <option key={index} value={item.name}>{item.name}</option>
        })}
      </select>
    </>
  );
};
