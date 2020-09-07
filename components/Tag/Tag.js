import { _Tag } from "./tag.styles";

function Tag({ children, round, dark, onClick }) {
  return (
    <_Tag
      ariaLabel="Pick this Tag"
      round={round}
      dark={dark}
      onClick={() => onClick({ tagName: children })}
    >
      {children}
    </_Tag>
  );
}

Tag.defaultProps = {
  onClick: () => {},
};

export default Tag;
