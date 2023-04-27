import { useState } from 'react';
import NewsList from './components/NewsList';
import { Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';
import CustomDropdown from './components/Dropdown';
import { FaSortNumericDownAlt, FaSearch, FaRegClock } from 'react-icons/fa';
import './App.css';

function App() {
	const [searchValue, setSearchValue] = useState('');
	const [category, setCategory] = useState('negocios');
	const [resultCount, setResultCount] = useState(12);
	const [freshness, setFreshness] = useState('Day');

	const handleSearch = (e) => {
		e.preventDefault();
		setCategory(searchValue);
		setSearchValue('');
	};

	const handleCategoryChange = (newCategory) => {
		setCategory(newCategory);
	};

	const handleResultCountChange = (newCount) => {
		setResultCount(parseInt(newCount, 10));
	};

	const handleFreshnessChange = (newFreshness) => {
		setFreshness(newFreshness);
	};

	return (
		<>
			<div className='container mt-5'>
				<h1 className='text-primary text-center'>News App</h1>
				<hr />
				<form onSubmit={handleSearch}>
					<div className='mb-3'>
						<label
							htmlFor='searchInput'
							className='form-label'
						>
							Ingresa un criterio de búsqueda:
						</label>
						<div className='d-flex justify-content-center align-items-start'>
							<div style={{ width: '50%', marginRight: '10px' }}>
								<input
									type='text'
									className='form-control'
									id='searchInput'
									placeholder='Buscar.....'
									value={searchValue}
									onChange={(e) => setSearchValue(e.target.value)}
								/>
								<p className='text-start mt-3'>
									Resultados de: <b>{category.toUpperCase()}</b>
								</p>
							</div>
							<button
								type='submit'
								className='btn btn-primary'
							>
								<FaSearch /> Buscar
							</button>
						</div>
					</div>
				</form>
				<div className='mt-2'>
					<Row>
						<Col className='text-start'>
							<DropdownButton
								title={<FaSortNumericDownAlt />}
								onSelect={handleResultCountChange}
							>
								<Dropdown.Item eventKey='12'>12</Dropdown.Item>
								<Dropdown.Item eventKey='24'>24</Dropdown.Item>
								<Dropdown.Item eventKey='36'>36</Dropdown.Item>
								<Dropdown.Item eventKey='48'>48</Dropdown.Item>
							</DropdownButton>
						</Col>
						<Col className='text-end'>
							<CustomDropdown onCategoryChange={handleCategoryChange} />
							<Col className='text-end mt-1'>
								<DropdownButton
									title={<FaRegClock />}
									onSelect={handleFreshnessChange}
								>
									<Dropdown.Item eventKey='Day'>Día</Dropdown.Item>
									<Dropdown.Item eventKey='Week'>Semana</Dropdown.Item>
									<Dropdown.Item eventKey='Month'>Mes</Dropdown.Item>
								</DropdownButton>
							</Col>
						</Col>
					</Row>
				</div>
				<NewsList
					category={category}
					resultCount={resultCount}
					freshness={freshness}
				/>
			</div>
		</>
	);
}

export default App;
