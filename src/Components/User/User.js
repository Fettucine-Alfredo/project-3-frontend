import { useParams } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './User.css';
import AddEdit from '../JobsListItem/AddEdit';
import { useState, useEffect } from 'react';
import { config } from '../../Constants';
import axios from 'axios';

function User(props) {
	const [userDetails, setUserDetails] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [jobToEdit, setJobToEdit] = useState(null);

	function getUser() {
		// Get API URL from config
		const url = `${config.API_URL}/user/${username}`;
		axios
			.get(url)
			.then((res) => {
				setUserDetails(res.data);
			})
			.catch((error) => {
				setLoading(false);
				setError(error);
			});
	}

	useEffect(() => {
		const handleLoadingTimeout = setTimeout(() => {
			if (!userDetails) {
				setLoading(false);
			}
		});
		getUser();

		return () => clearTimeout(handleLoadingTimeout);
	}, []);

	const [modal, setModal] = useState(false);
	function showModal() {
		setModal(true);
	}
	const { username } = useParams();

	return (
		<>
			<Container className='user-container'>
				<div className='welcome'>
					<h1>Welcome, {username}</h1>
					<Button
						className='btn-sm add-btn'
						variant='primary'
						onClick={showModal}>
						<i className='fa-solid fa-circle-plus fa-xl'></i> add job
					</Button>
				</div>
				<Row>
					<Jobs
						userDetails={userDetails}
						setUserDetails={setUserDetails}
						setJobToEdit={setJobToEdit}
						setModal={setModal}
					/>
				</Row>
			</Container>
			<AddEdit
				modal={modal}
				setModal={setModal}
				setUserDetails={setUserDetails}
				jobToEdit={jobToEdit}
				setJobToEdit={setJobToEdit}
			/>
		</>
	);
}

export default User;
