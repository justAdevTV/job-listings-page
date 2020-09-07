import PropTypes from "prop-types";
import { _Remove, _FilterTag } from "./filterTag.styles";

function FilterTag({ children, onClick }) {
  return (
    <_FilterTag onClick={() => onClick({ tagName: children })}>
      <span>{children}</span>
      <_Remove ariaLabel="Remove Filter Button" src="/icon-remove.svg" />
    </_FilterTag>
  );
}

FilterTag.defaultProps = {
  onClick: () => {},
};

FilterTag.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

export default FilterTag;
