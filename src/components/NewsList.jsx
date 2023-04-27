import { useState, useEffect } from 'react';
import api from '../services/api';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

const NewsList = ({ category, resultCount, freshness }) => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		const fetchNews = async () => {
			const response = await api.get('/news/search', {
				params: {
					q: category,
					mkt: 'es-MX',
					freshness: freshness,
					count: resultCount,
				},
			});
			setNews(response.data.value);
		};
		fetchNews();
	}, [category, resultCount, freshness]);

	return (
		<div className='row mt-5'>
			{news.map((item) => (
				<div
					className='col-12 col-md-6 col-lg-4 mb-3'
					key={item.url}
				>
					<NewsItem newsItem={item} />
				</div>
			))}
		</div>
	);
};

NewsList.propTypes = {
	category: PropTypes.string.isRequired,
	resultCount: PropTypes.number.isRequired,
	freshness: PropTypes.string.isRequired,
};

export default NewsList;
