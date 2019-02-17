import React from 'react';

const consistency = (props) => {
    return (
    <div>
      <input type="range" min={1} max={8}  onChange={props.consistencyValue} value={props.consistency}/>
      {props.children}
      {console.log("Consistency", props.consistency)}
      </div>
    )
}

export default consistency;