import JobsListItem from '../JobsListItem/JobsListItem';
import Row from 'react-bootstrap/Row';

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
