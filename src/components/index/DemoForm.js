import React from "react"
import { Formik, Form, Field } from "formik"
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import axios from "axios"
import Button from "@material-ui/core/Button";
import subscribeStyles from "./subscribe.module.css";
  
export default () => (
  

  <Formik
    initialValues={{
      email: '',
    }}
    validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email is invalidd")
            .required("Email is required")
        })}
    onSubmit={(values, actions) => {
        //alert(JSON.stringify(values, null, 2));
        //console.log(JSON.stringify(values, null, 2));
        //actions.setSubmitting(false);
        let bodyFormData = new FormData()
        bodyFormData.append( 'email', values.email )
        bodyFormData.append( 'your-subject', 'Request a Demo form' )
        bodyFormData.append( 'your-name', 'Subscriber' )
        bodyFormData.append( 'your-email', values.email )
        //console.log(values.email)
        axios.post("https://qarunpanther.wpengine.com/wp-json/contact-form-7/v1/contact-forms/25717/feedback", bodyFormData)
            .then(response => {
                console.log('Form has been posted', response);
                console.log(response.data.message);
            })        
                .catch(err => {
                console.log('Ann error occurred', err);
            })        
                //.finally(() => actions.setSubmitting(false))        
            actions.resetForm()
            actions.setStatus({success: 'Thank you. It has been sent.'})
    }}

  >
  {({status}) => (
    <Form name="Request a Demo">
      <div className="d-flex ">
      <Field 
      placeholder="Enter work email" 
      name="email"
      type="text" 
      component={TextField} 
      margin="normal"
      variant="outlined"
      size="small"
      fullWidth
      style={{maxWidth:'60%', margin:'0 15px 0 0'}}
      className={subscribeStyles.wrapWhiteBg} 
      />
      
      <Button type="submit" variant="contained" color="primary" size="medium" style={{height:'40px', margin:'0 0 20px 0', textTransform:'none'}}>
      Request a Demo
      </Button>
      </div>
      <div style={{ color:'green' }}><p>{status ? status.success : ''}</p></div>
    </Form>
  )}
  </Formik>
)