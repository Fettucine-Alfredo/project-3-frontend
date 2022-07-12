import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { config } from '../../Constants';
import './jobDetails.css';

function JobDetails(props) {
	const [formState, setFormState] = useState('');
	let [error, setError] = useState(null);
	const { id } = useParams();

	const job = {
		company: {
			name: 'Facebook',
		},
		title: 'Junior FrontEnd Developer',
		url: 'https://facebook.com',
		description:
			"We're looking for a junior developer that has 500 years of experience in JavaScript, React, React Redux, Gatsby, Express, MongoDB, Mongoose, Python, C++, C#, HTML, CSS, and every other framework/library ever written",
		skills: ['Node', 'React', 'Express', 'MondoDB'],
		contacts: [
			{
				name: 'Mark Zuckerburger',
				email: 'mark@facebook.com',
				_id: '62cca2933388e8e80e262df5',
			},
			{
				name: 'Steve',
				email: 'steve@facebook.com',
				_id: '62cca2933388e8e80e262df6',
			},
		],
		_id: '62cca2933388e8e80e262df4',
		createdAt: '2022-07-11T22:22:11.445Z',
		updatedAt: '2022-07-11T22:22:11.445Z',
	};

	useEffect(() => {
		fetch(`http://localhost:8000/api/user/jobs/${id}`)
			.then((res) => res.json())
			.then((jobDeets) => setFormState(jobDeets))
			.catch(setError);
	}, []);

	const skillsList = job.skills.map((skill) => {
		return <li>{skill}</li>;
	});
	const contactsList = job.contacts.map((contact) => {
		return (
			<li>
				{contact.name}, {contact.email}
			</li>
		);
	});

	console.log(formState);

	return (
		<div className='jobDetails'>
			<h1>{job.company.name}</h1>
			<h3>{job.title}</h3>
			<h3>{job.url}</h3>
			<p>{job.description}</p>
			<ul>Skills:{skillsList}</ul>
			<ul>Job Contacts: {contactsList}</ul>
		</div>
	);
}

export default JobDetails;
