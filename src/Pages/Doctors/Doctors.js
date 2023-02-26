import React, {useEffect, useState} from 'react';
import "./Doctors.css";
import "../../Components/Home/HomeDoctors/HomeDoctors.css"

const Doctors = () => {
	const [Doctors, setDoctors] = useState([]);
	useEffect(() => {
		fetch("./doctors.json")
		.then(res => res.json())
		.then(data => setDoctors(data))
	}, []);
	
	return (
		<div>
			<div className="container">
				<h1 className="doctors_title">Our Doctors</h1>
				<p className="doctors_moto">
					The wise man therefore always holds in these matters to this principle
					of selection he rejects pleasures to secure other greater pleasures, or
					else he endures pains
					to avoid worse pains
				</p>
				<div className="doctors_container">
					{
						Doctors.map(doctor => <HomeDoctor key={doctor.id} doctor={doctor} />)
					}
				</div>
			</div>
		</div>
	);
};

const HomeDoctor = (props) => {
	const {img, name, category, phone} = props.doctor;
	const doctorImg = {
		backgroundImage: `url('${img}')`
	};
	return (
		<div className="doctor">
			<div>
				<div style={doctorImg} className="doctor_image" />
				<h2 className="doctor_title">{name}</h2>
				<h5 className="doctor_category">{category}</h5>
				<p className=" doctor_phone">{phone}</p>
			</div>
		</div>
	);
};

export default Doctors;
