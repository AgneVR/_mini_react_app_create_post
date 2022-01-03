import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import FormWrapper from '../components/FormWrapper';

const EditPost = ({ allPosts, onUpdateForm }) => {
  console.log(allPosts);
  let { postID } = useParams();
  let navigate = useNavigate();

  const [inputs, setInputs] = useState([
    {
      id: 1,
      name: 'title',
      placeholder: 'Enter title',
      value: '',
      errorMessage: 'Title should be min length 10 - max 100 characters',
      type: 'text',
      pattern: '^[A-Za-z0-9_ ]{10,100}$',
      required: true,
    },
    {
      id: 2,
      name: 'imageLink',
      placeholder: 'Enter image link',
      value: '',
      errorMessage: 'Should include http',
      pattern: '^(http|https)://(.*)',
      type: 'text',
      required: true,
    },
    {
      id: 3,
      name: 'description',
      placeholder: 'Enter description',
      value: '',
      errorMessage: 'min length 20, max length 200',
      pattern: '^[A-Za-z0-9_ ]{20,200}$',
      type: 'text',
      required: true,
    },
    {
      id: 4,
      name: 'cardHeight',
      placeholder: 'Enter post card height',
      value: '',
      errorMessage: 'max length 3 numbers',
      pattern: '^[0-9]{1,3}$',
      type: 'text',
      required: true,
    },
    {
      id: 5,
      name: 'cardWidth',
      placeholder: 'Enter post card width',
      value: '',
      errorMessage: 'max length 3 numbers',
      pattern: '^[0-9]{1,3}$',
      type: 'text',
      required: true,
    },
    {
      id: 6,
      name: 'cardBorder',
      placeholder: 'Enter post card border',
      value: '',
      errorMessage: 'Ex: 1px solid black',
      type: 'text',
      required: true,
    },
    {
      id: 7,
      name: 'borderRadius',
      placeholder: 'Enter post card border radius',
      value: '',
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
      value: '',
      pattern: '^[A-Za-z0-9]{1,20}',
      type: 'text',
      required: true,
    },
  ]);
  const [inputValues, setInputValues] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const currentPost = allPosts.find((el) => Number(el.id) === Number(postID));

    if (currentPost !== undefined) {
      setInputValues(currentPost);
      setDataLoaded(true);
    }
  }, [postID]);

  const inputChangeHandler = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const formUpdateHandler = (e) => {
    e.preventDefault();
    onUpdateForm(inputValues);
    navigate('/all-posts');
    console.log(inputValues, 'inputValues');
  };

  return (
    <FormWrapper name='Edit Your Post'>
      <form onSubmit={formUpdateHandler}>
        {dataLoaded &&
          inputs.map((input) => (
            <FormInput
              onChange={inputChangeHandler}
              key={input.id}
              {...input}
              value={inputValues[input.name]}
            />
          ))}
        <button type='submit'>Update Post</button>
      </form>
    </FormWrapper>
  );
};

export default EditPost;
