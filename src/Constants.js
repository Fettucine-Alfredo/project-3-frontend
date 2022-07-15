// Constants.js
//https://a-carreras-c.medium.com/development-and-production-variables-for-react-apps-c04af8b430a5

const prod = {
	API_URL: 'https://sei-trakr.herokuapp.com/api',
};

const dev = {
	API_URL: 'http://localhost:8000/api',
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
