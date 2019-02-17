import React from 'react';

const servings = (props) => {
    return (
    <div style={{margin: '40px', borderColor: 'gray'}} >
    <input type="range" min={1} max={8} steps={2}  onChange={props.servingSize} value={props.servings} />
      {props.children}
      {console.log("Servings", props.servings)}

    </div>
    )
}

export default servings;