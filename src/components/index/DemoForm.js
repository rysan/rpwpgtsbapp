import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
  
export default () => (
  

  <Formik
    initialValues={{
      'name': '',
      'bot-field': '',
      email: '',
    }}
    onSubmit={(values, actions) => {
        //alert(JSON.stringify(values, null, 2));
        //console.log(JSON.stringify(values, null, 2));
        //actions.setSubmitting(false);
        
        fetch("/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: encode({ "form-name": "Request a Demo", ...values })
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
    <Form name="Request a Demo" method="post" data-netlify={true}>
      
      
      <Field type="email" name="email" placeholder="Email" />
      <ErrorMessage name="email" />
      <Field type="hidden" name="bot-field" />
      
      <button type="submit">Send</button>
    </Form>
  )}
  </Formik>
)