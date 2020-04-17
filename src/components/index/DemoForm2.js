import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

export default () => (
  <Formik
    initialValues={{
      email: "",
    }}
    onSubmit={(values, actions) => {
        //console.log("submit: ", values)
        //setSubmitting(false);
        //console.log(JSON.stringify(values, null, 2));
        
        fetch("https://qarunpanther.wpengine.com/wp-json/contact-form-7/v1/contact-forms/25717/feedback", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values)
                })
                .then(() => {          
                    alert("Success");          
                    actions.resetForm()        
                    })        
                .catch(() => {          
                        alert("Error");        
                        })        
                .finally(() => actions.setSubmitting(false))       
        
    }}
    validate={values => {      
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;      
        const errors = {}; if(!values.email || !emailRegex.test(values.email)) {        
            errors.email = "Valid Email Required"      
            }      
            return errors;    
            }}
  >
  {() => (
    <Form>
      
      
      <Field type="email" name="email" placeholder="Email" />
      <ErrorMessage name="email" />

      <button type="submit">Send</button>
    </Form>
  )}
  </Formik>
)