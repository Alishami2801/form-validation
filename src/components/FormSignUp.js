import React from 'react'
import useForm from '../hooks/useForm'
import validate from '../utils/validate'
const FormSignUp = () => {

const {handleChange,values,handleSubmit,errors} = useForm(validate)

  return (
    <div className='form-container-right'>
        <form onSubmit={handleSubmit}
        className="form">
            <h1> Get Started with us today! Create your account</h1>
            <div className="form-inputs">
                <label className='form-label' htmlFor="name">UserName</label>
                <input id='name'
                type="text"              
                name='username'               
                className='form-input'
                placeholder='Enter Your User Name'
                value={values.username}
                onChange={handleChange} />
{errors.username && <p>{errors.username}</p>}
            </div>
            <div className="form-inputs">
                <label className='form-label'htmlFor="email">Email</label>
                <input id='email'
                type="email" 
                name='email' 
                className='form-input'
                placeholder='Enter Your Email'
                value={values.email}
                onChange={handleChange} />
{errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
                <label className='form-label'htmlFor="password">PassWord</label>
                <input id='password'
                type="password" 
                className='form-input'
                name='password'
                placeholder='Enter Your PassWord'
                value={values.password}
                onChange={handleChange}
              />
{errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-inputs">
                <label className='form-label'htmlFor="password2">Confirm PassWord</label>
                <input id='password2'
                type="password"             
                name='password2'
                className='form-input'
                placeholder='Enter Your Confirm PassWord' 
                value={values.password2}
                onChange={handleChange}
                />
{errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className='form-input-btn ' type='submit'> Sign Up</button>
            <span className='form-input-login'>Already have an account? Login <a href="#">here</a></span>
          
        </form>
    </div>
 
  )
}

export default FormSignUp