import React from 'react';
import './About.css';
import Mern from '../../Assets/Mern.png';

function About(props) {
	return (
		<div className='about-container'>
			<div className='about'>
				<h2 className='about-header'>About</h2>
				<h6>With Trakr.&reg; you can simplify your job search! </h6>
				<p>
					Trakr.&reg; is a quick and easy to use web application which allows
					you to track, organize, and record your job search process all on one
					platform. The application was built using MongoDB, Express, React, and
					Node.
				</p>
				<div className='mern-container'>
					<img className='mern' src={Mern} alt={'Mern Stack logo'} />
				</div>
			</div>
		</div>
	);
}

export default About;
