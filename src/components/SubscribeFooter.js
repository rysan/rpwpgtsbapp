import React from "react";
import gql from "graphql-tag";
//import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import subscribeStyles from "./subscribefooter.module.css";

const CONTACT_MUTATION = gql`
  mutation CreateSubscribeMutation($clientMutationId: String!, $email: String!){
    createSubscribe(input: {clientMutationId: $clientMutationId, email: $email}) {
      success
      data
    }
  }
`;

const SubscribeFooter = () => {

  const [createSubmission, { error, data }] = useMutation(CONTACT_MUTATION);
  
  return (

    <div id="customerForm">
      
      <Formik
        initialValues={{
          email: ""
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email is invalidd")
            .required("Email is required")
        })}
        onSubmit={(fields, { resetForm }) => {
          createSubmission({
                variables: {
                  clientMutationId: 'example',
                  email: `${fields.email}`
                }
              })
          resetForm();
        }}
        render={({ errors, status, touched }) => (
          <Form className="d-flex ">
            <Field
              placeholder="Email address"
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
            <Button type="submit" variant="contained" size="medium" style={{height:'40px', margin:'0 0 20px 0', textTransform:'none'}}>
              Subscribe
            </Button>{" "}
            
          </Form>
          
        )}
      ></Formik>
      <div style={{ color:'#BFBFBF' }}>
            {error && (
              <p>An unknown error has occured, please try again later...</p>
            )}
            {data && <p>Thank you. It has been sent.</p>}
          </div>
    </div>

  );
}

export default SubscribeFooter;