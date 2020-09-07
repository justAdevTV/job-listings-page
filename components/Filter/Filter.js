import PropTypes from "prop-types";
import { _Clear, _FilterContainer, _Tags } from "./filter.styles";
import { Card, FilterTag } from "../";

function Filter({ filters, onChange }) {
  const handleOnRemoveFilterClick = ({ tagName }) => {
    // Array with selected tag removed
    const filteredArray = filters.filter((name) => name !== tagName);
    onChange({ filters: filteredArray });
  };

  const handleClearAllClick = () => onChange({ filters: [] });

  const generateTags = (filters) =>
    filters.map((filter) => (
      <FilterTag key={filter} onClick={handleOnRemoveFilterClick}>
        {filter}
      </FilterTag>
    ));

  // Don't render if no tags are selected
  if (filters.length <= 0) return null;

  return (
    <Card>
      <_FilterContainer>
        <_Tags>{generateTags(filters)}</_Tags>
        <_Clear
          ariaLabel="Clear All Filters"
          onClick={() => handleClearAllClick()}
        >
          Clear
        </_Clear>
      </_FilterContainer>
    </Card>
  );
}

Filter.defaultProps = {
  filters: [],
  onChange: () => {},
};

Filter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  /**
   * Uplifts: {filters: ['']}
   */
  onChange: PropTypes.func,
};

export default Filter;
