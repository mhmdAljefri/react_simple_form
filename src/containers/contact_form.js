import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className='col-md-6 col-md-offset-3'>
      <div>
        <Field 
          placeholder="First name"
          name="firstName" 
          component="input" 
          type="text" 
          className="form-control mt-1"/>
      </div>
      <div>
        <Field
          placeholder="Last name"
          name="lastName"
          component="input" 
          type="text" 
          className="form-control mt-1"/>
      </div>
      <div>
        <Field 
          placeholder='Email'                  
          name="email" 
          component="input" 
          type="email" 
          className="form-control mt-1"/>
      </div>
      <button type="submit" className="btn btn-secondry mt-2">Submit</button>
    </form>
  )
}


ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm