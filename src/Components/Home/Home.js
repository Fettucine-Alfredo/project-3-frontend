import React from 'react';
import LoginForm from './LoginForm';
import './Home.css';
import background from '../../Assets/background.png';

function Home(props) {
	useEffect(() => {
		document.title = 'Trakr - Home';
	}, []);
	
	return (
		<div className='home-page'>
			<LoginForm />
			<img className='background' src={background} alt={'background image'} />
		</div>
	);
}

export default Home;
