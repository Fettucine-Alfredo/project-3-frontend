import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function JobDetails(props) {
	const [formState, setFormState] = useState('');
	let [error, setError] = useState(null);
	const { id } = useParams();

	const job = {
		company: {
			name: 'FaceBook',
		},
		title: 'Junior FrontEnd Developer',
		url: 'https://facebook.com',
		description:
			"We're looking for a junior developer that has 500 years of experience in JavaScript, React, React Redux, Gatsby, Express, MongoDB, Mongoose, Python, C++, C#, HTML, CSS, and every other framework/library ever written",
		skills: ['Node', 'React', 'Express', 'MondoDB'],
		contacts: [
			{
				name: 'Mark Zuckerburger',
				email: 'mark@facebook.com',
				_id: '62cca2933388e8e80e262df5',
			},
			{
				name: 'Steve',
				email: 'steve@facebook.com',
				_id: '62cca2933388e8e80e262df6',
			},
		],
		_id: '62cca2933388e8e80e262df4',
		createdAt: '2022-07-11T22:22:11.445Z',
		updatedAt: '2022-07-11T22:22:11.445Z',
	};

	useEffect(() => {
		fetch(`http://localhost:8000/api/user/jobs/${id}`)
			.then((res) => res.json())
			.then((jobDeets) => setFormState(jobDeets))
			.catch(setError);
	}, []);

	console.log(formState);

	return (
		<div>
			<h1>{job.title}</h1>
		</div>
	);
}

export default JobDetails;
