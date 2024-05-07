import React, { useState } from "react";

const SignupPage = () => {
   const [formData, setFormData]=useState({
      email: "",
      password: "",
   })

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
   };

   return (
      <div>
         <h1>Signup Page</h1>
         <form onSubmit={handleSubmit}>
            <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               placeholder="Email"
            />
            <input
               type="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               placeholder="Password"
            />
            <button type="submit">Signup</button>
         </form>
      </div>
   );
};

export default SignupPage;
