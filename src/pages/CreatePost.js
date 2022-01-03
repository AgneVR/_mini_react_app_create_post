import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import FormWrapper from '../components/FormWrapper';
import './CreatePost.scss';

const CreatePost = ({ onSubmitForm }) => {
  const [inputValues, setInputValues] = useState({
    title: '',
    imageLink: '',
    description: '',
    cardHeight: '',
    cardWidth: '',
    cardBorder: '',
    borderRadius: '',
    textColor: '',
    id: new Date().getTime(),
  });

  const inputs = [
    {
      id: 1,
      name: 'title',
      placeholder: 'Enter title',
      errorMessage: 'Title should be min length 10 - max 100 characters',
      type: 'text',
      pattern: '^[A-Za-z0-9_ ]{10,100}$',
      required: true,
    },
    {
      id: 2,
      name: 'imageLink',
      placeholder: 'Enter image link',
      errorMessage: 'Should include http',
      pattern: '^(http|https)://(.*)',
      type: 'text',
      required: true,
    },
    {
      id: 3,
      name: 'description',
      placeholder: 'Enter description',
      errorMessage: 'min length 20, max length 200',
      pattern: '^[A-Za-z0-9_ ]{20,200}$',
      type: 'text',
      required: true,
    },
    {
      id: 4,
      name: 'cardHeight',
      placeholder: 'Enter post card height',
      errorMessage: 'max length 3 numbers',
      pattern: '^[0-9]{1,3}$',
      type: 'text',
      required: true,
    },
    {
      id: 5,
      name: 'cardWidth',
      placeholder: 'Enter post card width',
      errorMessage: 'max length 3 numbers',
      pattern: '^[0-9]{1,3}$',
      type: 'text',
      required: true,
    },
    {
      id: 6,
      name: 'cardBorder',
      placeholder: 'Enter post card border',
      errorMessage: 'Ex: 1px solid black',
      type: 'text',
      required: true,
    },
    {
      id: 7,
      name: 'borderRadius',
      placeholder: 'Enter post card border radius',
      errorMessage: 'max length 2 numbers',
      pattern: '^[0-9]{1,2}$',
      type: 'text',
      required: true,
    },
    {
      id: 8,
      name: 'textColor',
      placeholder: 'Enter post text color',
      errorMessage: 'should be text not longer than 20symbols',
      pattern: '^[A-Za-z0-9]{1,20}',
      type: 'text',
      required: true,
    },
  ];

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitForm(inputValues);
    alert('post succesfully created');
    setInputValues({
      title: '',
      imageLink: '',
      description: '',
      cardHeight: '',
      cardWidth: '',
      cardBorder: '',
      borderRadius: '',
      textColor: '',
      id: new Date().getTime(),
    });
  };

  const inputChangeHandler = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <FormWrapper name='Create Your Post'>
      <form onSubmit={formSubmitHandler}>
        {inputs.map((input) => (
          <FormInput
            onChange={inputChangeHandler}
            key={input.id}
            {...input}
            value={inputValues[input.name]}
          />
        ))}
        <button type='submit'>Create Post</button>
      </form>
    </FormWrapper>
  );
};

export default CreatePost;
