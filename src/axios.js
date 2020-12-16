import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: `https://api.covidtracking.com`
});

export default axiosInstance;