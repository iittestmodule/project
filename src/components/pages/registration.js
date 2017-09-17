import React from 'react';
import { Link } from 'react-router-dom';

const RegistraionPage = (props) => {
  return (
    <div className="text-center">
    <div className="logo">register</div>
    <div className="login-form-1">
      <form id="register-form" className="text-left">
        <div className="login-form-main-message"></div>
        <div className="main-login-form">
          <div className="login-group">
            <div className="form-group">
              <label htmlFor="first_name" className="sr-only">First Name</label>
              <input type="text" className="form-control" id="first_name" name="first_name" placeholder="first name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="last_name" className="sr-only">Last Name</label>
              <input type="text" className="form-control" id="last_name" name="last_name" placeholder="last name" required/>
            </div>
            <div className="form-group login-group-checkbox">
              <input type="radio" className="" name="reg_gender" id="male" placeholder="username" required/>
              <label htmlFor="male">male</label>
              
              <input type="radio" className="" name="reg_gender" id="female" placeholder="username"/>
              <label htmlFor="female">female</label>
            </div>
            
            <div className="form-group">
              <label htmlFor="school_name" className="sr-only">School Name</label>
              <input type="text" className="form-control" id="school_name" name="school_name" placeholder="school name" required/>
            </div>
            <div className="form-group login-group-checkbox">
              <input type="radio" className="" name="class" id="9" placeholder="username" required/>
              <label htmlFor="9">9<sup>th</sup></label>
              
              <input type="radio" className="" name="class" id="10" placeholder="username" required/>
              <label htmlFor="10">10<sup>th</sup></label>

              <input type="radio" className="" name="class" id="11" placeholder="username" required/>
              <label htmlFor="11">11<sup>th</sup></label>
              
              <input type="radio" className="" name="class" id="12" placeholder="username" required/>
              <label htmlFor="12">12<sup>th</sup></label>

              <input type="radio" className="" name="class" id="13" placeholder="username" required/>
              <label htmlFor="13">dropper</label>
            </div>
            <div className="form-group">
              <label htmlFor="mobile" className="sr-only">Mobile</label>
              <input type="number" min="7000000000" max="9999999999" className="form-control" id="mobile" name="mobile" placeholder="phone no." required/>
            </div>
            <div className="form-group">
              <label htmlFor="reg_email" className="sr-only">Email</label>
              <input type="email" className="form-control" id="reg_email" name="reg_email" placeholder="email" required/>
            </div>
            <div className="form-group">
              <label htmlFor="reg_password" className="sr-only">Password</label>
              <input type="password" className="form-control" id="reg_password" name="reg_password" placeholder="password" required/>
            </div>
            <div className="form-group">
              <label htmlFor="reg_password_confirm" className="sr-only">Password Confirm</label>
              <input type="password" className="form-control" id="reg_password_confirm" name="reg_password_confirm" placeholder="confirm password" required/>
            </div>
            
            
            
            <div className="form-group login-group-checkbox">
              <input type="checkbox" className="" id="reg_agree" name="reg_agree" required/>
              <label htmlFor="reg_agree">i agree with <a href="#">terms</a></label>
            </div>
          </div>
          <button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
        </div>
        <div className="etc-login-form">
          <p>already have an account? <Link to='/login'>login here</Link></p>
        </div>
      </form>
    </div>
  </div>
  );
};

export default RegistraionPage;
