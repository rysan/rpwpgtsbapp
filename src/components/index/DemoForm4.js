import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  //const { register, handleSubmit } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState: { isSubmitting }
  } = useForm();
  //const onSubmit = data => console.log(data);
  //console.log(errors);
  const onSubmit = async data => {
    try {
      await fetch("http://localhost/wp532/wp-json/contact-form-7/v1/contact-forms/206/feedback", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      console.log(data);
      setSubmitted(true);
      reset();
    } catch (error) {
      setError(
        "submit",
        "submitError",
        `Oops! There seems to be an issue! ${error.message}`
      );
    }
  };
  const showSubmitError = msg => <p className="msg-error">{msg}</p>;

  const showThankYou = (
    <div className="msg-confirm">
      <p>Awesome! Your message was sent.</p>
      <button type="button" onClick={() => setSubmitted(false)}>
        Send another message?
      </button>
    </div>
  );
  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <input type="text" placeholder="Email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />

      <input type="submit" />
    </form>
  );
}