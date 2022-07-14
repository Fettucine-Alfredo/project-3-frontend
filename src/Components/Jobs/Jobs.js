import JobsListItem from '../JobsListItem/JobsListItem';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

function Jobs({ userDetails, setUserDetails, setJobToEdit, setModal }) {
	if (!userDetails) {
		return;
	}

	if (userDetails) {
		return (
			<Row xs={1} md={2} lg={3} xl={4} className='g-4'>
				{userDetails.jobs.map((job) => (
					<JobsListItem
						key={job._id}
						job={job}
						username={userDetails.username}
						setUserDetails={setUserDetails}
						setJobToEdit={setJobToEdit}
						setModal={setModal}
					/>
				))}
			</Row>
		);
	}
}

export default Jobs;
