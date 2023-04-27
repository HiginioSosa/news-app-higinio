import React, { useState } from 'react';
import './Paginacion.css';

const Paginacion = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage);
	const [visiblePages, setVisiblePages] = useState(5);

	const handlePageClick = (pageNumber) => {
		if (pageNumber >= 1 && pageNumber <= totalPages) {
			onPageChange(pageNumber);
		}
	};

	const renderPageNumbers = () => {
		const pageNumbers = [];
		const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
		const endPage = Math.min(totalPages, startPage + visiblePages - 1);

		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(
				<button
					key={i}
					className={`page-number ${i === currentPage ? 'active-page' : ''}`}
					onClick={() => handlePageClick(i)}
				>
					{i}
				</button>
			);
		}
		return pageNumbers;
	};

	return (
		<div className='pagination'>
			<button
				className='previous'
				onClick={() => handlePageClick(currentPage - 1)}
			>
				Anterior
			</button>
			{renderPageNumbers()}
			<button
				className='next'
				onClick={() => handlePageClick(currentPage + 1)}
			>
				Siguiente
			</button>
		</div>
	);
};

export default Paginacion;
