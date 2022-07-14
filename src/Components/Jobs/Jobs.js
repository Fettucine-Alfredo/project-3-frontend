
import JobsListItem from '../JobsListItem/JobsListItem';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';

function Jobs({ userDetails, setUserDetails, loading, error }) {
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
			<Row xs={1} md={2} lg={3} xl={4} className='g-4'>
				{userDetails.jobs.map((job) => (
					<JobsListItem key={job._id} job={job} />
				))}
			</Row>
		);
	}
}

export default Jobs;
