import React from 'react'
import FormSignUp from './FormSignUp';
import './Form.css'
 const Form = () => {
  return (
    <>
    <div className='form-container'> 
    <span className='close-btn'>x</span>
    <div className="form-content-left">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_9wORoSHgY2w7ZxgCUlAk2wiZVQbkIUNXg&usqp=CAU" alt="left" className='form-img' />
    </div>
    <FormSignUp/>
    </div>
     
   
    </>
  )
}
export default Form;
