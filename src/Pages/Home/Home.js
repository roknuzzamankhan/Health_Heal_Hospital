import React from 'react';
import Banner from "../../Components/Home/HomeBanner/Banner";
import HomeServices from "../../Components/Home/HomeServices/HomeServices";
import HomeDoctors from "../../Components/Home/HomeDoctors/HomeDoctors";
import HomeBlogs from "../../Components/Home/HomeBlogs/HomeBlogs";

const Home = () => {
	return (
		<div>
			<Banner />
			<HomeServices />
			<HomeDoctors />
			<HomeBlogs />
		</div>
	);
};

export default Home;
