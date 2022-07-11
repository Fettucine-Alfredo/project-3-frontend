import { useState, useEffect } from 'react';

function JobDetails(props) {
	const [formState, setFormState] = useState('');
	let [error, setError] = useState(null);

	useEffect(() => {
		fetch(
			`mongodb+srv://dbuser:ZLBDBYXtJNAVlSbr@sei-59.liigl.mongodb.net/JobsList?retryWrites=true&w=majority`
		)
			.then((res) => res.json())
			.then((jobDeets) => setFormState(jobDeets))
			.catch(setError);
	}, []);

	console.log(formState);

	return <div></div>;
}

export default JobDetails;
