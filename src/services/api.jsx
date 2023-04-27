import axios from 'axios';

const apiKey = '7aadb3b257msh0d928aeb6df641fp1594f1jsne4b7a20e82a5';
const apiHost = 'https://bing-news-search1.p.rapidapi.com';
const apiInstance = axios.create({
	baseURL: apiHost,
	headers: {
		'content-type': 'application/octet-stream',
		'x-bingapis-sdk': 'true',
		'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
		'x-rapidapi-key': apiKey,
	},
});

export default apiInstance;
