import { _Tag } from "./tag.styles";

function Tag({ children, round, dark }) {
  return (
    <_Tag round={round} dark={dark}>
      {children}
    </_Tag>
  );
}

export default Tag;
