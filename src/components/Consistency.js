import React from 'react';

const consistency = (props) => {
    return (
    <React.Fragment>
      {props.children}
      <input type="range" min={1} max={20} step={0.5} onChange={props.consistencyValue} value={props.consistency}/>
      {console.log("Nuts ", props.consistency,"%")}
    </React.Fragment>
    )
}

export default consistency;