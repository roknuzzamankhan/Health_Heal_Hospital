import {useParams} from "react-router";
import {useEffect, useState} from "react";
import "../../AllMain/AllMain.css";
import "./ServiceDetails.css";

const ServiceDetails = () => {
	const {serviceId} = useParams();
	const [serviceDetails, setServiceDetails] = useState([]);
	const [serviceDetail, setServiceDetail] = useState([]);
	useEffect(() => {
		fetch("/services.json")
		.then(res => res.json())
		.then(data => setServiceDetails(data))
	}, []);
	useEffect(() => {
		const serviceDetail = serviceDetails.find(service => service.id === parseInt(serviceId));
		setServiceDetail(serviceDetail);
	}, [serviceId, serviceDetails])
	return (
		<div className = "serviceDetail">
			<img src = {serviceDetail?.img} alt = "" />
			<h1>{serviceDetail?.title}</h1>
			<p>{serviceDetail?.description}</p>
		</div>
	)
};

export default ServiceDetails;
