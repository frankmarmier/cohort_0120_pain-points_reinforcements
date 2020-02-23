import React, { useState } from "react";
import "../styles/Form.scss";

const Form = props => {
  const [formValues, setFormValues] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValues);
  };

  const handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
      <div className="form__group">
        <label htmlFor="firstName">First name</label>
        <input
          autoComplete="off"
          className="form__input"
          id="firstName"
          type="text"
          name="firstName"
        />
      </div>
      <div className="form__group">
        <label htmlFor="lastName">Last name</label>
        <input
          autoComplete="off"
          className="form__input"
          id="lastName"
          type="text"
          name="lastName"
        />
      </div>
      <div className="form__group">
        <label htmlFor="email">Email</label>
        <input
          autoComplete="off"
          className="form__input"
          id="email"
          type="text"
          name="email"
        />
      </div>
      <div className="form__group">
        <label htmlFor="password">Password</label>
        <input
          autoComplete="off"
          className="form__input"
          id="password"
          type="password"
          name="password"
        />
      </div>
      <div className="form__group">
        <label htmlFor="isAdmin">Admin</label>
        <input
          autoComplete="off"
          className="form__input"
          id="isAdmin"
          type="checkbox"
          name="isAdmin"
        />
      </div>
      <button className="btn is-success">Submit</button>
    </form>
  );
};

export default Form;
