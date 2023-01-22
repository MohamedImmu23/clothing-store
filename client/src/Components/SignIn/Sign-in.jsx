import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../form-Input/Form-Input";
import { emailSignInStart, googleSignInStart } from "../../react/user/user.action";
import { connect } from "react-redux";
import { useState } from "react";

const SignIn = ({emailSignInStart, googleSignInStart}) => {

  const [userCredentails, setCredentials] = useState({email: '', password: ''});
  const {email, password} = userCredentails;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
      const {name, value} = event.target;
      setCredentials({...userCredentails, [name]: value});
  }

  return (
    <div className="w-1/2" >
      <h2 className="text-2xl pb-5 pt-5 text-left">I already have an account</h2>
      <p className="text-left">Sign in with your email and password</p>

      <form onSubmit={handleSubmit}>
        <FormInput 
          name="email" 
          type="email"
          handleChange={handleChange}
          label="email"
          value={email} required />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="flex justify-between">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>{' '}Sign In With Google {''}</CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(
  null, 
  mapDispatchToProps)
  (SignIn);