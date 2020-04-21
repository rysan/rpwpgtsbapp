import React from "react";
import gql from "graphql-tag";
//import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";

const CONTACT_MUTATION = gql`
  mutation CreateSubmissionMutation($clientMutationId: String!, $email: String!){
    createSubmission(input: {clientMutationId: $clientMutationId, email: $email}) {
      success
      data
    }
  }
`;

const Subscribe = () => {

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
              placeholder="Enter work email"
              name="email"
              type="text"
              component={TextField}
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
              style={{maxWidth:'60%', margin:'0 15px 0 0'}}
              className="form-control"
            />
            <Button type="submit" variant="contained" color="primary" size="medium" style={{height:'40px', margin:'0 0 20px 0', textTransform:'none'}}>
              Request a Demo
            </Button>{" "}
            
          </Form>
          
        )}
      ></Formik>
      <div style={{ color:'green' }}>
            {error && (
              <p>An unknown error has occured, please try again later...</p>
            )}
            {data && <p>Thank you. It has been sent.</p>}
          </div>
    </div>

  );
}

export default Subscribe;