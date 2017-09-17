import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  return (<div className="text-center">
	<div className="logo">forgot password</div>
	<div className="login-form-1">
		<form id="forgot-password-form" className="text-left">
			<div className="etc-login-form">
				<p>When you fill in your registered email address, we will be sent link to reset your password.</p>
			</div>
			<div className="login-form-main-message"></div>
			<div className="main-login-form">
				<div className="login-group">
					<div className="form-group">
						<label for="fp_email" className="sr-only">Email address</label>
						<input type="text" className="form-control" id="fp_email" name="fp_email" placeholder="email address"/>
					</div>
				</div>
				<button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
			</div>
			<div className="etc-login-form">
				<p>already have an account? <Link to='/login'>login here</Link></p>
				<p>new user? <Link to='/registration'>create new account</Link></p>
			</div>
		</form>
	</div>
</div>);
};

export default ForgotPasswordPage;
