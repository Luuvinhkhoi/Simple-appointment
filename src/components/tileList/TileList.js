import React from "react";
import { Tile } from "../tile/Tile";
export const TileList = (props) => {
  return (
    <div>
      {props.object.map((item, index)=>{
        const {name, ...rest}=item;
        console.log(name);
        console.log(rest);
        return <Tile name={name} description={rest} key={index}></Tile>
      })}
    </div>
  );
};
