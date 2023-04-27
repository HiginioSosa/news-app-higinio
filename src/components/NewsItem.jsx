import PropTypes from 'prop-types';
import './NewsItem.css';

const NewsItem = ({ newsItem }) => {
	return (
		<div className='card mb-3 shadow-sm'>
			<div className='row g-0'>
				{newsItem.image?.thumbnail?.contentUrl ? (
					<div className='col-md-4'>
						<div className='news-image p-3'>
							<img
								src={newsItem.image.thumbnail.contentUrl}
								className='rounded'
								alt={newsItem.name}
							/>
						</div>
					</div>
				) : null}
				<div
					className={
						newsItem.image?.thumbnail?.contentUrl
							? 'col-md-8 d-flex flex-column'
							: 'col-12 d-flex flex-column'
					}
				>
					<div className='card-body d-flex flex-column mt-3'>
						<h5 className='card-title text-center'>{newsItem.name}</h5>
						<p className='card-text text-justify mt-3'>{newsItem.description.slice(0, 100)}...</p>
						<div className='mt-auto'>
							<div className='d-flex justify-content-between align-items-end date-read-more-container'>
								<p className='card-text text-muted'>
									<i>{new Date(newsItem.datePublished).toLocaleDateString()}</i>
								</p>
								<a
									href={newsItem.url}
									target='_blank'
									rel='noreferrer'
									className='btn btn-primary read-more-button'
								>
									Leer más...
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

NewsItem.propTypes = {
	newsItem: PropTypes.shape({
		image: PropTypes.shape({
			thumbnail: PropTypes.shape({
				contentUrl: PropTypes.string,
			}),
		}),
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		datePublished: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	}).isRequired,
};

export default NewsItem;
