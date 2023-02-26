import React from 'react';
import "./ContactUs.css";
import "../../AllMain/AllMain.css"

const ContactUs = () => {
	return (
		<section className = "contact_section container">
			<div className = "contact_form">
				<p className = "contact_title">Contact Form</p>
				<form>
					<input type = "text" placeholder = "Full Name" />
					<input type = "text" placeholder = "Subject" /><br />
					<input type = "text" placeholder = "Phone Number" />
					<input type = "text" placeholder = "Your Email Address" /><br />
					<textarea name = "" id = "" cols = "30" rows = "10" placeholder = "Message" /><br />
					<button className = "contact_button serviceButton">Send Message</button>
				</form>
			</div>
			<div className = "contact_info">
				<p className = "contact_title">Contacts</p>
				<div>
					<address>
						<p>Diabari, Uttara 12</p>
						<p>2/10 Uttara, Dhaka</p>
						<p>Bangladesh</p>
					</address>
					<br />
					<p>Phone: 1 (800) 895 4575</p>
					<p>Gmail: rumman976@gmail.com</p>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
