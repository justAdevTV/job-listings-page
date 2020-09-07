import { _Tag } from "./tag.styles";

function Tag({ children, round, dark, onClick }) {
  return (
    <_Tag
      ariaLabel={!round ? "Filter based on this tag" : null}
      round={round}
      dark={dark}
      onClick={() => !round && onClick({ tagName: children })}
    >
      {children}
    </_Tag>
  );
}

Tag.defaultProps = {
  onClick: () => {},
};

export default Tag;
