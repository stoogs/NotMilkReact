import React from 'react';

const servings = (props) => {
  
    return (
      <div className="Servings">
        {props.children}
          <input type="range" min={1} max={8} steps={2}  onChange={props.servingSize} value={props.servings} />
      </div>
    )
}

export default servings;