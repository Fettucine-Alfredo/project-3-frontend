import React, { useState, useEffect } from 'react';
import { config } from '../../Constants';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AddEdit({ modal, setModal }) {
	const [show, setShow] = useState(false);
	const initialJob = {
		title: '',
		url: '',
		description: '',
		company: {
			name: '',
		},
		currentStep: '',
		skills: [],
		contacts: [],
	};
	const [job, setJob] = useState(initialJob);
	const [skills, setSkills] = useState('');
	const [contacts, setContacts] = useState({ name: '', email: '', phone: '' });
	const { username, id } = useParams();

	const handleClose = () => {
		setShow(false);
		setModal(false);
	};
	const handleShow = () => setShow(true);

	useEffect(() => {
		if (modal) {
			console.log(modal);
			setShow(true);
		}
	}, [modal]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const newJob = { ...job };
		const newSkills = skills.split(',').map((value) => value.trim());
		newJob.contacts.push(contacts);
		newJob.skills = newSkills;
		console.log(newJob);
		// var result = sentences.split(",").map(function (value) {
		// return value.trim();
		// });

		// try {
		// 	const response = await axios.post(
		// 		`${config.API_URL}/user/${username}/jobs`,
		// 		job
		// 	);

		// } catch (error) {
		// 	console.log(error);
		// }
	};
	const handleContacts = (event) => {
		if (event.target.id === 'contacts-name') {
			setContacts({ ...contacts, name: event.target.value });
		} else if (event.target.id === 'contacts-email') {
			setContacts({ ...contacts, email: event.target.value });
		} else if (event.target.id === 'contacts-phone') {
			setContacts({ ...contacts, phone: event.target.value });
		}
	};

	const handleSkills = (event) => {
		setSkills(event.target.value);
	};

	const handleChange = (event) => {
		setJob({ ...job, [event.target.id]: event.target.value });
	};

	const handleCompany = (event) => {
		setJob({ ...job, [event.target.id]: { name: event.target.value } });
	};

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add Job</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group className='title'>
							<Form.Label>Job Title</Form.Label>
							<Form.Control
								id='title'
								type='text'
								placeholder='Job Title'
								onChange={handleChange}
								value={job.title}
							/>
						</Form.Group>
						<Form.Group className='url'>
							<Form.Label>url</Form.Label>
							<Form.Control
								id='url'
								type='text'
								onChange={handleChange}
								value={job.url}
							/>
						</Form.Group>
						<Form.Group className='description'>
							<Form.Label htmlFor='description'>Description</Form.Label>
							<Form.Control
								id='description'
								as='textarea'
								rows={3}
								onChange={handleChange}
								value={job.description}
							/>
						</Form.Group>
						<Form.Group className='company-name'>
							<Form.Label htmlFor='company'>Company Name</Form.Label>
							<Form.Control
								id='company'
								type='text'
								onChange={handleCompany}
								value={job.company.name}
							/>
						</Form.Group>
						<Form.Group className='current-step'>
							<Form.Label htmlFor='currentStep'>Current Step</Form.Label>
							<Form.Control
								id='currentStep'
								type='text'
								onChange={handleChange}
								value={job.currentStep}
							/>
						</Form.Group>
						<Form.Group className='skills'>
							<Form.Label htmlFor='skills'>Skills</Form.Label>
							<Form.Control
								placeholder='HTML, CSS, JavaScript'
								id='skills'
								type='text'
								onChange={handleSkills}
								value={skills}
							/>
						</Form.Group>
						<Form.Group className='contacts'>
							<Form.Label htmlFor='contacts-name'>Contacts Name</Form.Label>
							<Form.Control
								id='contacts-name'
								type='text'
								onChange={handleContacts}
								value={contacts.name}
							/>
							<Form.Label htmlFor='contacts-email'>Email</Form.Label>
							<Form.Control
								id='contacts-email'
								type='text'
								onChange={handleContacts}
								value={contacts.email}
							/>
							<Form.Label htmlFor='contacts-phone'>Phone</Form.Label>
							<Form.Control
								id='contacts-phone'
								type='text'
								onChange={handleContacts}
								value={contacts.phone}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button type='submit' variant='primary' onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

// render(<AddEdit />);

export default AddEdit;
