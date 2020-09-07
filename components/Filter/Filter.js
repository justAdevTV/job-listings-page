import PropTypes from "prop-types";
import { _FilterContainer } from "./filter.styles";
import { Card } from "../";

// TODO: Fill this in
function Filter({ filters, onChange }) {
  const generateTags = (filters) => "hi";

  //   Don't render if no tags are selected
  //   if (filters.length <= 0) return null;

  return (
    <Card>
      <_FilterContainer>hi</_FilterContainer>
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
