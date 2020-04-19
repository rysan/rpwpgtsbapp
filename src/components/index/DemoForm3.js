/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
  fetch('http://localhost/wp532/wp-json/contact-form-7/v1/contact-forms/206/feedback', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        headers: {
                        "Content-Type": "application/json",
                    },
        body: JSON.stringify(values, 0, 2)
      })
      .then(() => {
        alert("Success"); 
      })

}

export default () => (
  <Styles>
    <Form
      onSubmit={onSubmit}
      initialValues={{ email: '' }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            
            <Field
              name="email"
              component="input"
              type="email"
              placeholder=""
            />
          </div>
          
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            
          </div>
          
        </form>
      )}
    />
  </Styles>
)


