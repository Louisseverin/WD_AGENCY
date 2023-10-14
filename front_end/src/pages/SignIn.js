import React from "react";

const SignIn = () => {
  return (
    <>
      <div className="all-info signin-size">
        <div className="login-box ">
          <h1 className="title-login">Login</h1>
          <form className="form-login">
            <label>Email</label>
            <input type="email" placeholder="E-mail" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <input type="button" value="Login" />
          </form>
        </div>
      </div>
      <p class="para-2">
        Not have an account? <a href="/Signup">Sign Up Here</a>{" "}
        <a href="/" className="home-link">
          {" "}
          Back Home>>
        </a>
      </p>
    </>
  );
};
export default SignIn;
