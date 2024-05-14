import React, { useState } from "react";
import "./LoginForm.css";


  const LoginForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    skills: [],
  });

  const FormHandle = (e) => {
    e.preventDefault();
  };
  const inputHandle =(e)=>{
    setFormData({ ...formData ,[e.target.id]:e.target.value})
  }
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
        <div className="firstName-error error"></div>
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
        <div className="lastName-error error"></div>
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
        <div className="email-error error"></div>
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
          <i className="fa-solid fa-eye" id="icon-password"></i>
        </div>
      </div>

      <div className="form-group">
        <label className="label-block" htmlFor="">
          skills
        </label>

        <div>
          <div className="radio-box">
            <input type="radio" />
            <label htmlFor="">html</label>
          </div>
          <div className="radio-box">
            <input type="radio" />
            <label htmlFor="">css</label>
          </div>
          <div className="radio-box">
            <input type="radio" />
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
