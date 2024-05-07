import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <form action="" class="form">
      <h3>user info</h3>

      <div class="form-group">
        <label class="label-block" for="">
          firstname
        </label>
        <input
          type="text"
          id="firstname"
          placeholder="firstname"
          class="input-text"
        />
        <div class="firstname-error error"></div>
      </div>

      <div class="form-group">
        <label for="" class="label-block">
          lastname
        </label>
        <input
          type="text"
          id="lastname"
          placeholder="lastname"
          class="input-text"
        />
        <div class="lastname-error error"></div>
      </div>

      <div class="form-group">
        <label class="label-block" for="">
          email
        </label>
        <input type="email" id="email" placeholder="email" class="input-text" />
        <div class="email-error error"></div>
      </div>

      <div class="form-group">
        <label class="label-block" for="">
          password
        </label>

        <div class="pass">
          <input
            type="password"
            id="password"
            placeholder="password"
            class="input-text"
          />
          <i class="fa-solid fa-eye" id="icon-password"></i>
        </div>
      </div>

      <div class="form-group">
        <label class="label-block" for="">
          skills
        </label>

        <div>
          <div class="radio-box">
            <input type="radio" />
            <label for="">html</label>
          </div>
          <div class="radio-box">
            <input type="radio" />
            <label for="">css</label>
          </div>
          <div class="radio-box">
            <input type="radio" />
            <label for="">js</label>
          </div>
        </div>
      </div>

      <div class="form-group">
        <button class="submit">sing up</button>
      </div>
    </form>
  );
};

export default LoginForm;
