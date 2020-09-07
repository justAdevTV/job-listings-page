import { _Tag } from "./tag.styles";

function Tag({ children, round, dark, onClick }) {
  return (
    <_Tag
      round={round}
      dark={dark}
      onClick={() => onClick({ tagName: children })}
    >
      {/* TODO: Make <a> tag */}
      {children}
    </_Tag>
  );
}

Tag.defaultProps = {
  onClick: () => {},
};

export default Tag;
