import React from 'react';
import { useState } from 'react/cjs/react.development';
import '../pages/CreatePost.scss';
import './FormInput.scss';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { onChange, errorMessage, showError, id, ...inputProps } = props;

  const focusHandler = (e) => {
    setFocused(true);
  };

  return (
    <div className='input-style'>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={focusHandler}
        focused={focused.toString()}
      />
      <span>*{errorMessage}</span>
    </div>
  );
};

export default FormInput;
