import PropTypes from "prop-types";
import { _FilterContainer } from "./filter.styles";
import { Card, FilterTag } from "../";

// TODO: Fill this in
function Filter({ filters, onChange }) {
  const handleOnRemoveFilterClick = ({ tagName }) => {
    console.log("Remove Filter", tagName);
  };

  const generateTags = (filters) =>
    filters.map((filter) => (
      <FilterTag key={filter} onClick={handleOnRemoveFilterClick}>
        {filter}
      </FilterTag>
    ));

  //   Don't render if no tags are selected
  //   if (filters.length <= 0) return null;

  return (
    <Card>
      <_FilterContainer>{generateTags(filters)}</_FilterContainer>
    </Card>
  );
}

Filter.defaultProps = {
  filters: [],
  onChange: () => {},
};

Filter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default Filter;
