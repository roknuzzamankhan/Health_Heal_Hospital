import React from 'react';
import "./AboutUs.css"
import banner from "../../images/aboutUsBG.jpg";

const AboutUs = () => {
	const bannerImg = {
		backgroundImage: `url('${banner}')`
	};
	return (
		<div>
			<div style={bannerImg} className="aboutUs" />
			<div className="aboutUsInfo">
				<h1>What Makes Us Different</h1>
				<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
				   demoralized by the charms of the moment.</p>
			</div>
		</div>
	);
};

export default AboutUs;
