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
				document.title = `${response.data.company.name} - ${response.data.title}`;
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

		return (
			<div className='jobDetails'>
				<h1>
					{job.company.name} - '{job.title}'
				</h1>
				<h3>
					<a href={job.url}>{job.url}</a>
				</h3>
				<p>
					<span className='currentStepSpan'>Current Step: </span>
					{job.currentStep}
				</p>
				<p>{job.description}</p>

				<ul>Skills:{skillsList}</ul>
				<ul>
					Job Contacts: {job.contacts.name}{' '}
					{job.contacts.email && `<${job.contacts.email}>`}{' '}
					{job.contacts.phone && `- ${job.contacts.phone}`}
				</ul>
				<button className='go-home-button button' onClick={() => navigate(-1)}>
					Go Back Home
				</button>
			</div>
		);
	}
}

export default JobDetails;
