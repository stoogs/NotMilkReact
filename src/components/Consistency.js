import React from 'react';

const consistency = (props) => {
    return (
    <React.Fragment>
      {props.children}
      <h5>Supermarket<input type="range" min={0.25} max={2.00} step={0.25} onChange={props.consistencyValue} value={props.consistency}/>SuperThickit</h5>
      {console.log("Consistency", props.consistency,"x")}
    </React.Fragment>
    )
}

export default consistency;