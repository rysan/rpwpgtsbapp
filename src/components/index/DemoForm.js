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
        
        fetch("https://api.hsforms.com/submissions/v3/integration/submit/6015771/ae3bc173-e234-462e-84a4-56b3a8ddb8f9", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json, application/xml, text/plain, text/html, *.*",
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