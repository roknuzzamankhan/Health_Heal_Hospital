import React, {useState} from 'react';
import "./Login.css"
import {Link, useHistory, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import useAuth from "../../Hooks/useAuth";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
	const google = <FontAwesomeIcon icon = {faGoogle} />
	const {signInUsingGoogle} = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_url = location.state?.from || "/home";
	const handleGoogleLogin = () => {
		signInUsingGoogle()
		.then(result => {
			history.push(redirect_url);
		})
	}
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const auth = getAuth();
	const handleLogin = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
		.then(result => {
			const user = result.user;
		})
		.catch(error => {
			setError(error.message)
		})
	}
	const handleLoginEmailChange = (e) => {
		setEmail(e.target.value)
	}
	const handleLoginPasswordChange = (e) => {
		setPassword(e.target.value);
	}
	
	return (
		<div>
			<section className = "login">
				<p className = "login_title">Login</p>
				<form onSubmit = {handleLogin}>
					<input onBlur = {handleLoginEmailChange} type = "text" placeholder = "Your Email"
						   className = "loginEmail" required />
					<br />
					<input onBlur = {handleLoginPasswordChange} type = "password" placeholder = "Your Password"
						   className = "loginPass" required /> <br />
					<p>{error}</p>
					<button type = "submit" className = "serviceButton">Login</button>
				</form>
				<p className = "is_regi">Not Logged In! <Link to = "/register">Register</Link></p>
				<div className = "logged_via_container">
					<button className = "googleSignInButton" onClick = {handleGoogleLogin}>
						<p className = "login_via">{google}<span>oogle</span></p>
					</button>
				</div>
			</section>
		</div>
	);
};

export default Login;
