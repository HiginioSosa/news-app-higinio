import Dropdown from 'react-bootstrap/Dropdown';
import { FaFilter } from 'react-icons/fa';
import PropTypes from 'prop-types';

const CustomDropdown = ({ onCategoryChange }) => {
	const handleSelect = (key) => {
		onCategoryChange(key);
	};

	return (
		<Dropdown onSelect={handleSelect}>
			<Dropdown.Toggle
				variant='primary'
				id='dropdown-basic'
			>
				<FaFilter /> Filtros
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item eventKey='negocios'>Negocios</Dropdown.Item>
				<Dropdown.Item eventKey='entretenimiento'>Entretenimiento</Dropdown.Item>
				<Dropdown.Item eventKey='mundo de la economia digital'>Mundo de la Economía Digital</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

CustomDropdown.propTypes = {
	onCategoryChange: PropTypes.func.isRequired,
};

export default CustomDropdown;
