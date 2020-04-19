import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { navigate } from "gatsby"

export default () => (
  <Formik
    initialValues={{
    "your-subject":"Request a Demo form",
    "your-name":"Subscriber",
    email: "",
    }}
    onSubmit={(values, actions) => {
        //console.log("submit: ", values)
        //setSubmitting(false);
        //console.log(JSON.stringify(values, null, 2));
        
        fetch("/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values)
                })
                .then(() => {          
                    //alert("Success");          
                    //actions.resetForm()
                    navigate('/thank-you')        
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
    <Form name="contact" method="post" action="http://localhost/wp532/wp-json/contact-form-7/v1/contact-forms/206/feedback">
      
      
      <Field type="email" name="email" placeholder="Email" />
      <ErrorMessage name="email" />

      <button type="submit">Send</button>
    </Form>
  )}
  </Formik>
)