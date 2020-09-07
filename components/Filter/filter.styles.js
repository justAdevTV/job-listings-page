import styled from "styled-components";

const _FilterContainer = styled.div`
  display: flex;
  padding: 2rem 4rem;
`;

const _Clear = styled.a`
  cursor: pointer;
  margin: auto 0;
  margin-left: auto;
  font-weight: 500;
  text-decoration: underline;
  font-size: 0.85em;
  transition: color 0.2s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const _Tags = styled.div`
  & > div:not(:last-child) {
    margin-right: 1.7rem;
  }
`;

export { _Clear, _FilterContainer, _Tags };
