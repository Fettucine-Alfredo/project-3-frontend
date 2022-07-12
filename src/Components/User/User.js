import { useParams } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './User.css';

function User(props) {
	const { username } = useParams();

	return (
		<Container className='user-container'>
			<Row>
				<h1>Welcome, {username}</h1>
			</Row>
			<Row>
				<Jobs username={username} />
			</Row>
		</Container>
	);
}

export default User;
