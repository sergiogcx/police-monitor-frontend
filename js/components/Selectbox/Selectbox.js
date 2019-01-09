import React from 'react';
import './Selectbox.css'

const Selectbox = (props) => {
  return (
    <div className="selectbox" onClick={props.click}>
      <div className="selectbox__checkbox-inactive"></div>
      <span className="selectbox__description">{props.description}</span>
    </div>
  );
}

export default Selectbox;
