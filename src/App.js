import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import User from './Components/User/User';
import About from './Components/About/About';

function App() {
	return (
		<div className='app'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/user/:username' element={<User />} />
			</Routes>
		</div>
	);
}

export default App;
