import React, {useEffect, useState} from 'react';
import "./Services.css";
import "../../Components/Home/HomeServices/HomeServices.css";
import {Link} from "react-router-dom";

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("./services.json")
		.then(res => res.json())
		.then(data => setServices(data))
		
	}, []);
	
	return (
		<div>
			<div className = "container">
				<h1 className = "services_title">Our Services</h1>
				<div className = "services_container">
					{
						services.map(service => <Service key = {service.id} service = {service} />)
					}
				</div>
			</div>
		</div>
	);
};

const Service = (props) => {
	const {id, title, img, description} = props.service;
	return (
		<div className = "service">
			<div>
				<img src = {img} alt = "" className = "service_image" />
				<h2 className = "service_title">{title}</h2>
				<p className = "service_description">{description}</p>
				<Link to = {`/service/${id}`}>
					<button className = "serviceButton">Details</button>
				</Link>
			</div>
		</div>
	);
};

export default Services;
