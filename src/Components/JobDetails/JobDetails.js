import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Import the config object from Constants
import { config } from '../../Constants';
import axios from 'axios';
import './jobDetails.css';

function JobDetails(props) {
	const [job, setJob] = useState('');
	let [error, setError] = useState(null);
	const { username, id } = useParams();

	// use config.API_URL to get the base URL and then add whatever endpoint to the base URL.
	const url = `${config.API_URL}/user/${username}/jobs/${id}`;

	const navigate = useNavigate();

	// Make a request for a user with a given ID
	useEffect(() => {
		axios
			.get(url)
			.then(function (response) {
				// handle success
				setJob(response.data);
				document.title = `${job.title} at ${job.company.name}`;
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, []);

	if (job) {
		const skillsList = job.skills.map((skill, index) => {
			return <li key={`skill-${index}`}>{skill}</li>;
		});
		const contactsList = job.contacts.map((contact, index) => {
			return (
				<li key={`contact-${index}`}>
					{contact.name}, {contact.email}
				</li>
			);
		});

		return (
			<div className='jobDetails'>
				<h1>
					{job.company.name}- '{job.title}'
				</h1>
				<h3>{job.url}</h3>
				<p>{job.description}</p>
				<ul>Skills:{skillsList}</ul>
				<ul>Job Contacts: {contactsList}</ul>
				<button className='go-home-button' onClick={() => navigate(-1)}>Go Back Home</button>
			</div>
		);
	}
}

export default JobDetails;
