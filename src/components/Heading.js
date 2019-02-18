import React from 'react';

const heading = ( props ) => {
  return (
    <>
      <h1>{props.chosen}</h1>
      {console.log(props.chosen)}
    </>
  )  
}

export default heading;