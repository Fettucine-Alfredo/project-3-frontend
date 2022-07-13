import { useState, useEffect } from 'react';
import { config } from '../../Constants';
import axios from 'axios';
import JobsListItem from '../JobsListItem/JobsListItem';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

function Jobs({ username }) {
	useEffect(() => {
		document.title = 'Trakr - Jobs';
	}, []);
	const [userDetails, setUserDetails] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	function getUser() {
		// Get API URL from config
		const url = `${config.API_URL}/user/${username}`;
		axios
			.get(url)
			.then((res) => {
				if (res.status === 200) {
					setUserDetails(res.data);
					setLoading(false);
				}
			})
			.catch((error) => {
				setLoading(false);
				setError(error.response.data);
			});
	}

	useEffect(() => {
		getUser();
	}, []);

	if (error || (!loading && !userDetails)) {
		return (
			<>
				<Alert variant='danger'>{error}</Alert>
			</>
		);
	}

	if (loading && !userDetails) {
		return (
			<Spinner animation='border' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>
		);
	}

	if (!loading && !userDetails.jobs.length) {
		return <Alert variant='primary'>You have't added any jobs yet...</Alert>;
	}

	if (!loading && userDetails.jobs.length > 0) {
		return (
			<Row xs={1} md={2} lg={3} xl={4} className='g-4'>
				{userDetails.jobs.map((job) => (
					<JobsListItem
						key={job._id}
						job={job}
						username={username}
						setUserDetails={setUserDetails}
					/>
				))}
			</Row>
		);
	}
}

export default Jobs;
