import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const OurBlogs = () => {
	const [Blogs, setBlogs] = useState([]);
	useEffect(() => {
		fetch("./blogs.json")
		.then(res => res.json())
		.then(data => setBlogs(data))
	}, []);
	
	return (
		<div>
			<div className="container">
				<h1 className="blogs_title">Latest News & Our Blog</h1>
				<p className="blogs_moto">
					Sed doming virtute honestatis at, graece tamquam docendi eum an,
					alterum reformidans est ei nec aliquando voluptatum an, eu quidam
					civibus qui
				</p>
				<div className="blogs_container">
					{
						Blogs.map(blog => <HomeBlog key={blog.id} blog={blog} />)
					}
				</div>
			</div>
		</div>
	);
};

const HomeBlog = (props) => {
	const {title, blog} = props.blog;
	return (
		<div className="blog">
			<div>
				<h2 className="blog_title">{title}</h2>
				<p className="blog_blog">{blog}</p>
				<Link to="./ourBlogs" className="more">More</Link>
			</div>
		</div>
	);
};

export default OurBlogs;
