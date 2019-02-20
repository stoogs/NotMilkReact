import React from 'react';

const consistency = (props) => {
    return (
    <div className="Consistency">
      {props.children}
      <p>Thin --- Thick</p>
      <h5><input type="range" min={0.25} max={2.00} step={0.25} onChange={props.consistencyValue} value={props.consistency}/></h5>
    </div>
    )
}

export default consistency;