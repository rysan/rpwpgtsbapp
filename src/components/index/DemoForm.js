import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"


  
export default () => (
  

  <Formik
    initialValues={{
      email: '',
    }}
    onSubmit={(values, actions) => {
        //alert(JSON.stringify(values, null, 2));
        //console.log(JSON.stringify(values, null, 2));
        //actions.setSubmitting(false);
        
        fetch("http://localhost/wp532/wp-json/contact-form-7/v1/contact-forms/206/feedback", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify( values )
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
    <Form name="Request a Demo" method="post">
      
      
      <Field type="email" name="email" component="input" placeholder="Email" />
      <ErrorMessage name="email" />
      
      
      <button type="submit">Send</button>
    </Form>
  )}
  </Formik>
)