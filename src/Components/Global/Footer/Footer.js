import React from 'react';
import "../../../AllMain/AllMain.css";
import "./Footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faGooglePlusSquare, faTwitch, faTwitter} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
	const twitter = <FontAwesomeIcon icon={faTwitter} />
	const twitch = <FontAwesomeIcon icon={faTwitch} />
	const googlePlus = <FontAwesomeIcon icon={faGooglePlusSquare} />
	
	return (
		<div>
			<footer>
				<div className="container">
					<section className="footerInfos">
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
						<div>
							<div className="socialLinks">
								<p>{facebook}</p>
								<p>{twitter}</p>
								<p>{twitch}</p>
								<p>{googlePlus}</p>
							</div>
						</div>
					</section>
					<div className="copyright">
						<p>&copy; 2021-Present</p>
						<p>Rumman</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
