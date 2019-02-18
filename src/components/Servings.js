import React from 'react';

const servings = (props) => {
    return (
      <React.Fragment>
        {props.children}
        <input type="range" min={1} max={8} steps={2}  onChange={props.servingSize} value={props.servings} />

        {console.log("Servings", props.servings)}
      </React.Fragment>
    )
}

export default servings;