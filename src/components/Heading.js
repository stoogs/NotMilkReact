import React from 'react';

const heading = ( props ) => {
  return (
    <React.Fragment>
      <div className="Heading">
        {props.chosen}
      </div>
    </React.Fragment>
  )  
}

export default heading;