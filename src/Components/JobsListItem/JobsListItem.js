import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../Constants';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './JobsListItem.css';

function JobsListItem({ job, username, setUserDetails }) {
	const [error, setError] = useState(false);

	const lastUpdated = new Date(job.updatedAt);

	const techIcons = {
		react: 'fa-brands fa-react',
		javascript: 'fa-brands fa-js',
		html: 'fa-brands fa-html5',
		css: 'fa-brands fa-css3',
		node: 'fa-brands fa-node',
		python: 'fa-brands fa-python',
	};

	let navigate = useNavigate();

	// Navigate the user to the job details page
	// OR, do we just want to stay on same page but hide the job list items and show the details?
	function handleDetails(id) {
		navigate(`./jobs/${id}`);
	}

	// Delete job from database and update state
	function handleDelete(id) {
		const url = `${config.API_URL}/user/${username}/jobs/${id}`;
		axios
			.delete(url)
			.then((response) => {
				if (response.status === 200) {
					setUserDetails(response.data);
				} else {
					setError(true);
				}
			})
			.catch((error) => {
				setError(error.response.data);
			});
	}

	function handleEdit(id) {
		console.log('You clicked the edit button');
	}

	return (
		<Col>
			<Card>
				<Card.Header className='job-header'>
					{job.company.name}
					<div>
						<i
							aria-hidden='true'
							title={`Edit Job: ${job.title}`}
							className='fa-solid fa-pencil fa-xl'
							onClick={() => {
								handleEdit(job._id);
							}}></i>
						<i
							aria-hidden='true'
							title={`Delete Job: ${job.title}`}
							className='fa-solid fa-trash-can fa-xl'
							onClick={() => {
								handleDelete(job._id);
							}}></i>
					</div>
				</Card.Header>
				<Card.Body>
					<Card.Title className='mb-4'>
						<a href={job.url}>
							<i className='fa-solid fa-link'></i> {job.title}
						</a>
					</Card.Title>
					<Card.Text>
						{job.skills.map((skill, idx) => {
							skill = skill.toLowerCase();
							if (techIcons.hasOwnProperty(skill)) {
								return (
									<i
										key={`skill-${idx}`}
										className={`${techIcons[skill]} fa-xl`}
										title={skill}></i>
								);
							} else {
								return <span key={`skill-${idx}`}>{skill}</span>;
							}
						})}
					</Card.Text>
					<p>Current Step: {job.currentStep}</p>
					<p>Updated: {lastUpdated.toLocaleDateString()}</p>
					<Button
						variant='outline-primary'
						onClick={() => handleDetails(job._id)}>
						See Details
					</Button>
					{error && (
						<Alert variant='danger' className='mt-3'>
							Something went wrong. Try again later.
						</Alert>
					)}
				</Card.Body>
			</Card>
		</Col>
	);
}

export default JobsListItem;
