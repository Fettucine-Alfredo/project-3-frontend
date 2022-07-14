import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import User from './Components/User/User';
import About from './Components/About/About';
import JobDetails from './Components/JobDetails/JobDetails';
import { useState } from 'react';
import AddEdit from './Components/JobsListItem/AddEdit'

function App() {
	const [modal, setModal] = useState(false)
	function showModal() {
		setModal(true)
	}
	return (
		<div className='app'>
			<Header />
			<Routes>

				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/user/:username' element={<> <User showModal={showModal}/> <AddEdit modal={modal} setModal={setModal}/> </>} />
				<Route path='/user/:username/jobs/:id' element={<JobDetails />} />
			</Routes>
		</div>
	);
}

export default App;
