import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailInp(e) {
    setEmail(e.target.value);
  }

  function passwordInp(e) {
    setPassword(e.target.value);
  }

  function handelForm(e) {
    e.preventDefault();
    console.log(email,password);
  }

  return (
    <div className="content">
    <div className="main">
        <p className="welcome">Welcom Back!👋</p>
        <h2>Sign in to your account</h2>
        <form onSubmit={handelForm}>
        <p>Your email</p>
          <input type="email" onChange={emailInp} />
          <p>password</p>
          <input type="password" onChange={passwordInp} />
          <br />
          <button type="submit">CONTINUE</button>
        </form>
        <a href="/">Forgot your password?</a>
      </div>
     
      <p className="foot">
        Don’t have an account?<a href="/">Sign up</a>
      </p>
    </div>
  );
};

export default Form;
