import React from 'react';
import "./Banner.css"
import banner from "../../../images/banner.png"

const Banner = () => {
	const bannerImg = {
		backgroundImage: `url('${banner}')`
	};
	return (
		<div>
			<div style={bannerImg} className="banner">
			</div>
			<p className="bannerMoto">Welcome to our <br /> hospital</p>
		</div>
	);
};

export default Banner;
