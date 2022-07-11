import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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

	return (
		<Col>
			<Card>
				<Card.Header>{job.company.name}</Card.Header>
				<Card.Body>
					<Card.Title>{job.title}</Card.Title>
					<Button variant='primary' onClick={() => handleDetails(job._id)}>
						See Details
					</Button>
					<Button variant='danger' onClick={() => handleDelete(job._id)}>
						Delete Job
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default JobsListItem;
