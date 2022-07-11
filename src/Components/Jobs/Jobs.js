import { useState, useEffect } from 'react';
import axios from 'axios';
import JobsListItem from '../JobsListItem/JobsListItem';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Spinner';

function Jobs({ username }) {
	const [userDetails, setUserDetails] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	function getUser() {
		// Production URL
		//const url = `https://sei-trakr.herokuapp.com/api/user/${username}`;

		//Local testing URL
		const url = `http://localhost:8000/api/user/${username}`;
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

	if (error || (!userDetails && !loading)) {
		return (
			<>
				<h2>Oops, something went wrong. Please try again later</h2>
				{error && <p>{error.message}</p>}
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

	if (!userDetails.jobs.length) {
		return <h2>You don't currently have any jobs</h2>;
	}

	if (userDetails.jobs.length > 0) {
		return (
			<Row xs={1} md={3} className='g-4'>
				{userDetails.jobs.map((job) => (
					<JobsListItem key={job._id} job={job} />
				))}
			</Row>
		);
	}
}

export default Jobs;
