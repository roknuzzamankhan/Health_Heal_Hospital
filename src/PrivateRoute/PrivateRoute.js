import React from 'react';
import useAuth from "../Hooks/useAuth";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
	const {user} = useAuth();
	return (
		<Route {...rest}
			   render = {({location}) => user.email ? children :
				   <Redirect to = {{pathname: "/login", state: {from: location}}} />}
		/>
	);
};

export default PrivateRoute;
