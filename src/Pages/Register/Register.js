import {useState} from 'react';
import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const Register = () => {
	const google = <FontAwesomeIcon icon = {faGoogle} />
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const auth = getAuth();
	const handleRegister = (e) => {
		e.preventDefault();
		if (password.length < 6) {
			setError("Password must be at least 6 characters long")
		}
		createUserWithEmailAndPassword(auth, email, password)
		.then(result => {
			const user = result.user;
			setError('')
		})
		.catch(error => {
			setError(error.message);
		})
	};
	const handleNameRegisterChanged = (e) => {
		setName(e.target.value);
	};
	const handleEmailRegisterChanged = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordRegisterChanged = (e) => {
		setPassword(e.target.value);
	};
	
	return (
		<div>
			<section className = "login">
				<p className = "login_title">Register</p>
				<form onSubmit = {handleRegister}>
					<input onBlur = {handleNameRegisterChanged} type = "text" placeholder = "Your Name"
						   className = "loginEmail" required />
					<br />
					<input onBlur = {handleEmailRegisterChanged} type = "text" placeholder = "Your Email"
						   className = "loginEmail" required /> <br />
					<input onBlur = {handlePasswordRegisterChanged} type = "password" placeholder = "Your Password"
						   className = "loginPass" required /> <br />
					<p>{error}</p>
					<button type = "submit" className = "serviceButton">Register</button>
				</form>
				<p className = "isRegi">Already Logged In! <Link to = "/login">Login</Link></p>
				<div className = "logged_via_container">
					<p className = "login_via">{google}<span>oogle</span></p>
				</div>
			</section>
		</div>
	);
};

export default Register;
