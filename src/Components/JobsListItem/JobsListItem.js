import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './JobsListItem.css';

function JobsListItem({ job }) {
	let navigate = useNavigate();

	// Navigate the user to the job details page
	// OR, do we just want to stay on same page but hide the job list items and show the details?
	function handleDetails(id) {
		navigate(`./jobs/${id}`);
	}

	// Delete job from database and update state
	function handleDelete(id) {
		console.log('You clicked Delete button');
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
							className='fa-solid fa-pencil'
							onClick={() => {
								handleEdit(job._id);
							}}></i>
						<i
							aria-hidden='true'
							title={`Delete Job: ${job.title}`}
							className='fa-solid fa-trash-can fa-lg'
							onClick={() => {
								handleDelete(job._id);
							}}></i>
					</div>
				</Card.Header>
				<Card.Body>
					<Card.Title>{job.title}</Card.Title>
					<Button
						variant='outline-primary'
						onClick={() => handleDetails(job._id)}>
						See Details
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default JobsListItem;
