import React from "react";
import FormInput from "../../form-Input/Form-Input"
import CustomButton from "../../CustomButton/CustomButton";
import "./sign-up.styles.scss"
import { signUpStart } from "../../../react/user/user.action";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectError, selectUserLogedIn } from "../../../react/user/user.selectors";
import { useState } from "react";

const SignUp = ({ signUpStart, message, error }) => {
    const [userCredentials, setUserCredentials] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  
    const { displayName, email, password, confirmPassword } = userCredentials;
  
    const handleSubmit = async event => {
      event.preventDefault();
  
      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }
      signUpStart({ displayName, email, password });
    };
  
    const handleChange = event => {
      const { name, value } = event.target;
  
      setUserCredentials({ ...userCredentials, [name]: value });
    };
    return(
        <div className="sign-up">
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                  type='text'
                  name='displayName'
                  value={displayName}
                  onChange={handleChange}
                  label='Display Name'
                  required
                />
                <FormInput
                  type='email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  label='Email'
                  required
                />
                <FormInput
                  type='password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                  label='Password'
                  required
                />
                <FormInput
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={handleChange}
                  label='Confirm Password'
                  required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
            {
                message ? 
                (<p key={message} className="pt-3">{message}</p>) : 
                ([<p key={error} className="pt-3">{error}</p>])
            }
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
 });

const mapStateToProps = createStructuredSelector({
    error: selectError,
    message: selectUserLogedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);