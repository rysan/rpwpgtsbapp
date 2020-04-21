import React from "react";
import gql from "graphql-tag";
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
              label="Email"
              name="email"
              type="text"
              component={TextField}
              margin="normal"
              variant="outlined"
              fullWidth
              style={{maxWidth:'60%', margin:'0 15px 0 0'}}
            />
            <Button type="submit" variant="outlined" color="primary" style={{height:'56px', margin:'0 0 20px 0'}}>
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