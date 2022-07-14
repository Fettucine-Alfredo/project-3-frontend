import { useParams } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './User.css';
import AddEdit from '../JobsListItem/AddEdit';
import { useState, useEffect } from 'react';
import { config } from '../../Constants';
import axios from 'axios';

function User(props) {
	const [userDetails, setUserDetails] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

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
				<Row>
					<h1>Welcome, {username}</h1>
				</Row>
				<button onClick={showModal}>add</button>
				<Row>
					<Jobs
						userDetails={userDetails}
						setUserDetails={setUserDetails}
						loading={loading}
						error={error}
					/>
				</Row>
			</Container>
			<AddEdit
				modal={modal}
				setModal={setModal}
				setUserDetails={setUserDetails}
			/>
		</>
	);
}

export default User;
