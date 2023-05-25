import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";
function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues:{
      email: '',
      password: ''
    },
    onSubmit = values =>{
      console.log('form:',values)
    },
    validate: values =>{
      let errors = {};
      if(!values.emailField)errors.emailField='Field Required';
      if(!values.emailField)errors.emailField='Username should be an email'
      if(!values.password)errors.password='Field Required';
      return errors;
      alert("Login Successful")
    })
  };  
  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name='emailField' type='text' onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField?<div style={{color:'red'}}>{formik.errors.emailField}</div>:null}
        <div>Password</div>
        <input name='pswField' type='text' onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.pswField?<div style={{color:'red'}}>{formik.errors.pswField}</div>:null}
        <button type='submitBtn'>Submit</button>
      </form>
    </div>
  );

export default App;
