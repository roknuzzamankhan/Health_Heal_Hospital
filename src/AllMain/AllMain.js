import React from 'react';
import Home from "../Pages/Home/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import Doctors from "../Pages/Doctors/Doctors";
import ContactUs from "../Pages/ContactUs/ContactUs";
import OurBlogs from "../Pages/OurBlogs/OurBlogs";
import Header from "../Components/Global/Header/Header";
import Footer from "../Components/Global/Footer/Footer";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import AuthProvider from "../Context/AuthProvider";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const ALlMain = () => {
	return (
		<div>
			<AuthProvider>
				<Router>
					<Header />
					<Switch>
						<Route path = "/login">
							<Login />
						</Route>
						<Route path = "/register">
							<Register />
						</Route>
						<Route path = "/home">
							<Home />
						</Route>
						<Route path = "/aboutUs">
							<AboutUs />
						</Route>
						<Route path = "/services">
							<Services />
						</Route>
						<PrivateRoute path = "/service/:serviceId">
							<ServiceDetails />
						</PrivateRoute>
						<Route path = "/doctors">
							<Doctors />
						</Route>
						<Route path = "/contactUs">
							<ContactUs />
						</Route>
						<Route path = "/ourBlogs">
							<OurBlogs />
						</Route>
						<Route exact path = "/">
							<Home />
						</Route>
						<Route path = "*">
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</AuthProvider>
		</div>
	)
};

export default ALlMain;
