import React from "react";
import { useForm } from "../hooks/useForm";
import "../styles/Form.scss";

const Form = () => {
  const { formValues, getInputProps, handleChange } = useForm();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <section className="container">
      <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form__group">
          <label htmlFor="firstName">First name</label>
          <input
            autoComplete="off"
            className="form__input"
            id="firstName"
            type="text"
            {...getInputProps("firstName")}
          />
        </div>
        <div className="form__group">
          <label htmlFor="lastName">Last name</label>
          <input
            autoComplete="off"
            className="form__input"
            id="lastName"
            type="text"
            {...getInputProps("lastName")}
          />
        </div>
        <div className="form__group">
          <label htmlFor="lastName">Email</label>
          <input
            autoComplete="off"
            className="form__input"
            id="email"
            type="text"
            {...getInputProps("email")}
          />
        </div>
        <div className="form__group">
          <label htmlFor="lastName">Password</label>
          <input
            autoComplete="off"
            className="form__input"
            id="password"
            type="password"
            {...getInputProps("password")}
          />
        </div>
        <button className="btn is-success">Submit</button>
      </form>
    </section>
  );
};

export default Form;
