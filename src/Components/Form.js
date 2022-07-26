import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().positive().integer().required() ,
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required() ,
  //this step compares the new password input with the exact input we used before.
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
  
});


function Form() {

  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema)
  });

  const submitForm = (data)=>{

  }

  return (
    <div className='form'>
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input type="text" name='firstName' placeholder='First Name...' ref={register}/>
          <input type="text" name='lastName' placeholder='Last Name...'ref={register}/>
          <input type="text" name='email' placeholder='Email...'ref={register}/>
          <input type="text" name='age' placeholder='Age...'ref={register}/>
          <input type="text" name='password' placeholder='Password...'ref={register}/>
          <input type="text" name='confirmPassword' placeholder='Confirm Password...'ref={register}/>
          <input type="submit" id='submit' />
        </form>
      </div>
    </div>
  )
}

export default Form