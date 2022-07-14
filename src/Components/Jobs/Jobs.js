
import JobsListItem from '../JobsListItem/JobsListItem';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';


function Jobs({ userDetails, setUserDetails, loading, error }) {
	if (error || (!userDetails && !loading)) {

		return (
			<>
				<Alert variant='danger'>
					{error || 'Something went wrong. Please try again later'}
				</Alert>
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
						username={userDetails.username}
						setUserDetails={setUserDetails}
					/>
				))}
			</Row>
		);
	}
}

export default Jobs;
