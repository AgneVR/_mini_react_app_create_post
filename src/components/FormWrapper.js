import React from 'react';
import './FormWrapper.scss';

const FormWrapper = ({ children, name }) => {
  return (
    <div className='post-form-container'>
      <h2>{name}</h2>
      {children}
    </div>
  );
};

export default FormWrapper;
