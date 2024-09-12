import React from "react";

export const Tile = (props) => {
  console.log(props.index)
  console.log(props.description)
  return (
    <div className="tile-container">
      <p>{props.name}</p>
      {Object.values(props.description).map((content)=>
        <p className="Tile">{content}</p>
      )}
    </div>
  );
};
