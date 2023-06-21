import PropTypes from "prop-types";



const FilterDropdown = ({filter,setFilter}) => {
  

  return (
    <select value={filter} onChange={(e) => setFilter((e.target.value))}>
      <option value="popular">Popular</option>
      <option value="top_rated">Top Rated</option>
      <option value="upcoming">Upcoming</option>
    </select>
  );
};

FilterDropdown.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default FilterDropdown;

