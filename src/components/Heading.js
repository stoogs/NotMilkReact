import React from 'react';

const heading = ( props ) => {
  return (
    <div>
      <h1>{props.chosen} </h1>
      {console.log(props.chosen)}
    </div>
  )  
}

export default heading;