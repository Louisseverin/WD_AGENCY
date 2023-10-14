import React from "react";

const Signup = () => {
  return (
    <>
      <div className="all-info signin-size">
        <div class="signup-box">
          <h1 className="title-login">Sign Up</h1>
          <h4 className="header-desc">Only 400$ /Month</h4>
          <form className="form-login">
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" />
            <label>Email</label>
            <input type="email" placeholder="E-mail" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" />
            <input type="button" value="Submit" />
          </form>
          <p>
            By clicking the Sign Up button,you agree to our <br />
            <a href="#">Terms and Condition</a> and{" "}
            <a href="#">Policy Privacy</a>
          </p>
        </div>
      </div>
      <p class=" para-22">
        Already have an account? <a href="/SignIn">Login here</a>
      </p>
    </>
  );
};
export default Signup;
