import styled from "styled-components";

const findBackgroundColor = (round, colors, dark) => {
  if (round) {
    if (dark) {
      return colors.darkGray2;
    } else {
      return colors.darkGray1;
    }
  } else {
    return colors.lightGrayTablet;
  }
};

const _Tag = styled.div`
  display: inline-block;
  border-radius: ${({ round }) => (round ? "1.2rem" : "4px")};
  color: ${({ round, theme }) =>
    round ? theme.colors.white : theme.colors.primary};
  font-size: 0.7em;
  font-weight: 700;
  padding: 0 1rem;
  padding-top: 2px;
  letter-spacing: 0.45px;
  background-color: ${({ round, theme, dark }) =>
    findBackgroundColor(round, theme.colors, dark)};
`;

export { _Tag };
