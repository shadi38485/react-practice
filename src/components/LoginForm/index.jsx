import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // skills: [],
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // skills: [],
  });

  const FormHandle = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, skills } = formData;

    const errorsValue = {};
    if (!firstName.trim) {
      errorsValue.firstName = "firstName is required";
    }
    if (!lastName) {
      errorsValue.lastName = "lastName is required";
    }
    if (!email) {
      errorsValue.email = "email is required";
    }
    if (!password) {
      errorsValue.password = "password is required";
    }
    if (Object.keys(errorsValue).length > 0) {
      setErrors(errorsValue);
    } else {
      fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))

        .catch((error) => console.log(error));
      alert("ok");
      navigate("/LoginPage");
    }
  };

  const inputHandle = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const checkboxHandle = (e) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, e.target.value],
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== e.target.value),
      });
    }
  };
  return (
    <form action="" className="form" onSubmit={FormHandle}>
      <h3>user info</h3>

      <div className="form-group">
        <label className="label-block" htmlFor="">
          firstName
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="firstName"
          className="input-text"
          onChange={inputHandle}
        />
        <div className="firstName-error error">{errors.firstName}</div>
      </div>

      <div className="form-group">
        <label htmlFor="" className="label-block">
          LastName
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="lastName"
          className="input-text"
          onChange={inputHandle}
        />
        <div className="lastName-error error">{errors.lastName}</div>
      </div>

      <div className="form-group">
        <label className="label-block" htmlFor="">
          email
        </label>
        <input
          type="email"
          id="email"
          placeholder="email"
          className="input-text"
          onChange={inputHandle}
        />
        <div className="email-error error">{errors.email}</div>
      </div>

      <div className="form-group">
        <label className="label-block" htmlFor="">
          password
        </label>

        <div className="pass">
          <input
            type="password"
            id="password"
            placeholder="password"
            className="input-text"
            onChange={inputHandle}
          />
          <i className="fa-solid fa-eye" id="icon-password">
            {errors.password}
          </i>
        </div>
      </div>

      <div className="form-group">
        <label className="label-block" htmlFor="">
          skills
        </label>

        <div>
          <div className="radio-box">
            <input type="radio" value="html" onChange={checkboxHandle} />
            <label htmlFor="">html</label>
          </div>
          <div className="radio-box">
            <input type="radio" value="css" onChange={checkboxHandle} />
            <label htmlFor="">css</label>
          </div>
          <div className="radio-box">
            <input type="radio" value="js" onChange={checkboxHandle} />
            <label htmlFor="">js</label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <button className="submit">sing up</button>
      </div>
    </form>
  );
};

export default LoginForm;
