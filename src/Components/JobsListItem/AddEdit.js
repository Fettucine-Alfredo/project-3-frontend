import React, { useState, useEffect } from 'react';
import { config } from '../../Constants';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AddEdit({ modal, setModal, setUserDetails, jobToEdit, setJobToEdit }) {
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
		contacts: { name: '', email: '', phone: '' },
	};
	const [job, setJob] = useState(initialJob);
	const [skills, setSkills] = useState('');
	const { username, id } = useParams();

	const handleClose = () => {
		setShow(false);
		setModal(false);
		setJob(initialJob);
		setSkills('');
	};
	const handleShow = () => setShow(true);

	useEffect(() => {
		if (jobToEdit) {
			const skills = jobToEdit.skills.join(', ');
			setSkills(skills);
			setJob(jobToEdit);
		}
	}, [jobToEdit]);

	useEffect(() => {
		if (modal) {
			setShow(true);
		}
	}, [modal]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const newJob = { ...job };
		const newSkills = skills.split(',').map((value) => value.trim());
		newJob.skills = newSkills;
		if (jobToEdit) {
			const url = `${config.API_URL}/user/${username}/jobs/${jobToEdit._id}`;
			axios.patch(url, newJob).then((res) => {
				setUserDetails(res.data);
				setJob(initialJob);
				setJobToEdit(null);
				setSkills('');
				handleClose();
			});
		} else {
			const url = `${config.API_URL}/user/${username}/jobs`;
			axios
				.post(url, newJob)
				.then((res) => {
					setUserDetails(res.data);
					setJob(initialJob);
					handleClose();
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	const handleSkills = (event) => {
		setSkills(event.target.value);
	};

	const handleChange = (event) => {
		setJob({ ...job, [event.target.id]: event.target.value });
	};

	const handleContact = (event) => {
		setJob({
			...job,
			contacts: { ...job.contacts, [event.target.id]: event.target.value },
		});
	};
	const handleCompany = (event) => {
		setJob({ ...job, [event.target.id]: { name: event.target.value } });
	};

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add/Edit Job</Modal.Title>
				</Modal.Header>
				<Form onSubmit={handleSubmit}>
					<Modal.Body>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='company'>Company Name:</Form.Label>
							<Form.Control
								id='company'
								type='text'
								onChange={handleCompany}
								value={job.company.name}
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='title'>Job Title:</Form.Label>
							<Form.Control
								id='title'
								type='text'
								onChange={handleChange}
								value={job.title}
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='url'>Job Listing URL:</Form.Label>
							<Form.Control
								id='url'
								type='text'
								onChange={handleChange}
								value={job.url}
								placeholder='https://'
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='description'>Job Description:</Form.Label>
							<Form.Control
								id='description'
								as='textarea'
								rows={3}
								onChange={handleChange}
								value={job.description}
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='currentStep'>Current Step:</Form.Label>
							<Form.Control
								id='currentStep'
								type='text'
								onChange={handleChange}
								value={job.currentStep}
							/>
						</Form.Group>
						<Form.Group className='mb-5'>
							<Form.Label htmlFor='skills'>Skills:</Form.Label>
							<Form.Control
								placeholder='html, css, javascript'
								id='skills'
								type='text'
								onChange={handleSkills}
								value={skills}
							/>
						</Form.Group>
						<fieldset>
							<legend>Contact at Company</legend>
							<Form.Group className='mb-3'>
								<Form.Label htmlFor='name'>Name:</Form.Label>
								<Form.Control
									id='name'
									type='text'
									onChange={handleContact}
									value={job.contacts.name}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label htmlFor='email'>Email:</Form.Label>
								<Form.Control
									id='email'
									type='email'
									onChange={handleContact}
									value={job.contacts.email}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label htmlFor='phone'>Phone:</Form.Label>
								<Form.Control
									id='phone'
									type='tel'
									onChange={handleContact}
									value={job.contacts.phone}
								/>
							</Form.Group>
						</fieldset>
					</Modal.Body>
					<Modal.Footer>
						<Button type='button' variant='secondary' onClick={handleClose}>
							Close
						</Button>
						<Button type='submit' variant='primary'>
							Save Changes
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
}

export default AddEdit;
